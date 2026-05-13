import { useState, useMemo } from "react";
import { useLanguage } from "@/polymet/components/language-context";
import { jsPDF } from "jspdf";
import {
  Brain,
  FileDown,
  AlertTriangle,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import { LOGO_ICON } from "./meddicc-logos";

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = "not" | "progress" | "confirmed";

interface AiResults {
  summary: string;
  risks: string[];
  actions: string[];
}

interface MeddiccItem {
  key: string;
  weight: number;
  titleEn: string;
  titleAr: string;
  hintEn: string;
  hintAr: string;
  placeholderEn: string;
  placeholderAr: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const MEDDICC_ITEMS: MeddiccItem[] = [
  {
    key: "M",
    weight: 15,
    titleEn: "Metrics",
    titleAr: "الميتريكس",
    hintEn: "What measurable value does CyberPhish deliver?",
    hintAr: "ما القيمة القابلة للقياس التي تقدمها CyberPhish؟",
    placeholderEn:
      "e.g. Reduce phishing click rate by 70%, achieve ISO 27001 compliance, cut security incidents by 40%...",
    placeholderAr:
      "مثال: تقليل معدل النقر على التصيد 70%، تحقيق الامتثال لـ ISO 27001، تقليل الحوادث الأمنية...",
  },
  {
    key: "E",
    weight: 20,
    titleEn: "Economic Buyer",
    titleAr: "المشتري الاقتصادي",
    hintEn: "Who controls the security or training budget?",
    hintAr: "من يتحكم في ميزانية الأمن أو التدريب؟",
    placeholderEn:
      "e.g. CISO, IT Director, VP Security — name, title, budget authority, reporting line...",
    placeholderAr:
      "مثال: CISO، مدير تقنية المعلومات — الاسم والمسمى وصلاحية الميزانية...",
  },
  {
    key: "D",
    weight: 15,
    titleEn: "Decision Criteria",
    titleAr: "معايير القرار",
    hintEn: "What factors will they use to evaluate and choose?",
    hintAr: "ما العوامل التي سيستخدمها العميل للتقييم والاختيار؟",
    placeholderEn:
      "e.g. Arabic language support, SCORM, phishing templates, compliance reports, ease of deployment...",
    placeholderAr:
      "مثال: دعم اللغة العربية، SCORM، قوالب التصيد، تقارير الامتثال، سهولة النشر...",
  },
  {
    key: "D",
    weight: 15,
    titleEn: "Decision Process",
    titleAr: "عملية القرار",
    hintEn: "How will they make the final buying decision?",
    hintAr: "كيف سيتخذون قرار الشراء النهائي؟",
    placeholderEn:
      "e.g. Procurement committee, IT security review, pilot required, timeline, number of approvers...",
    placeholderAr:
      "مثال: لجنة المشتريات، مراجعة أمن تقنية المعلومات، تجربة مطلوبة، الجدول الزمني...",
  },
  {
    key: "I",
    weight: 20,
    titleEn: "Identify Pain",
    titleAr: "تحديد الألم",
    hintEn: "What cyber risk or problem is driving this conversation?",
    hintAr: "ما المشكلة أو المخاطر الإلكترونية التي تدفع هذه المحادثة؟",
    placeholderEn:
      "e.g. Recent phishing attack, failed audit, no awareness program, regulatory deadline...",
    placeholderAr:
      "مثال: هجوم تصيد أخير، فشل التدقيق، غياب برنامج توعية، موعد لوائح تنظيمية...",
  },
  {
    key: "C",
    weight: 10,
    titleEn: "Champion",
    titleAr: "البطل الداخلي",
    hintEn: "Who inside the company advocates for CyberPhish?",
    hintAr: "من يدعم CyberPhish داخل الشركة؟",
    placeholderEn:
      "e.g. Security manager who experienced an incident, IT lead pushing for compliance training...",
    placeholderAr:
      "مثال: مدير أمني تعرض لحادثة، قائد تقنية معلومات يدفع نحو التدريب التوعوي...",
  },
  {
    key: "C",
    weight: 5,
    titleEn: "Competition",
    titleAr: "المنافسة",
    hintEn: "What other options are they considering?",
    hintAr: "ما الخيارات الأخرى التي يدرسونها؟",
    placeholderEn:
      "e.g. KnowBe4, Proofpoint, Cofense, building in-house, doing nothing...",
    placeholderAr:
      "مثال: KnowBe4، Proofpoint، Cofense، بناء داخلي، عدم الفعل...",
  },
];

const STAGE_OPTIONS_EN = [
  "",
  "Discovery",
  "Qualification",
  "Demo / Evaluation",
  "Proposal",
  "Negotiation",
  "Closed Won",
  "Closed Lost",
];
const STAGE_OPTIONS_AR = [
  "",
  "الاكتشاف",
  "التأهيل",
  "عرض / تقييم",
  "مقترح",
  "تفاوض",
  "فوزنا",
  "خسرنا",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function scoreRgb(pct: number): [number, number, number] {
  return pct >= 70 ? [24, 177, 75] : pct >= 40 ? [217, 119, 6] : [134, 217, 166];
}

function statusBadgeClass(status: Status) {
  if (status === "confirmed")
    return "bg-green-100 text-green-800 border-green-300";
  if (status === "progress")
    return "bg-amber-100 text-amber-800 border-amber-300";
  return "bg-gray-100 text-gray-500 border-gray-200";
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MeddiccQualifier() {
  const { getText, isRTL, language } = useLanguage();

  // Form state
  const [company, setCompany] = useState("");
  const [dealValue, setDealValue] = useState("");
  const [dealStage, setDealStage] = useState("");
  const [closeDate, setCloseDate] = useState("");
  const [contact, setContact] = useState("");
  const [owner, setOwner] = useState("");

  // MEDDICC checklist state
  const [statuses, setStatuses] = useState<Status[]>(
    Array(7).fill("not") as Status[]
  );
  const [notes, setNotes] = useState<string[]>(Array(7).fill(""));

  // AI state
  const [aiResults, setAiResults] = useState<AiResults | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Toast
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // ── Computed values ─────────────────────────────────────────────────────────

  const healthScore = useMemo(() => {
    let ws = 0;
    MEDDICC_ITEMS.forEach((item, idx) => {
      const s = statuses[idx];
      const n = notes[idx].trim();
      const sc = s === "confirmed" ? 1 : s === "progress" ? 0.5 : n.length > 10 ? 0.25 : 0;
      ws += sc * item.weight;
    });
    return Math.round(ws);
  }, [statuses, notes]);

  const coverage = useMemo(
    () =>
      MEDDICC_ITEMS.filter(
        (_, i) => statuses[i] !== "not" || notes[i].trim().length > 10
      ).length,
    [statuses, notes]
  );

  const healthLabel =
    healthScore >= 70
      ? getText("صفقة قوية", "Strong deal")
      : healthScore >= 40
      ? getText("قيد التطوير", "Developing")
      : healthScore === 0
      ? getText("لم تبدأ بعد", "Not started")
      : getText("في خطر", "At risk");

  const healthColorClass =
    healthScore >= 70
      ? "text-green-600"
      : healthScore >= 40
      ? "text-amber-500"
      : "text-green-400";

  const healthBarClass =
    healthScore >= 70
      ? "bg-green-500"
      : healthScore >= 40
      ? "bg-amber-500"
      : "bg-green-300";

  // ── Handlers ────────────────────────────────────────────────────────────────

  const updateStatus = (idx: number, val: Status) => {
    setStatuses((prev) => {
      const next = [...prev] as Status[];
      next[idx] = val;
      return next;
    });
  };

  const updateNote = (idx: number, val: string) => {
    setNotes((prev) => {
      const next = [...prev];
      next[idx] = val;
      return next;
    });
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };


  // ── AI analysis ─────────────────────────────────────────────────────────────

  const buildPrompt = (): string => {
    let md = "";
    MEDDICC_ITEMS.forEach((item, idx) => {
      md += `\n${item.key} - ${item.titleEn} (Weight:${item.weight}%, Status:${statuses[idx]}):\n${notes[idx] || "Not filled in"}\n`;
    });
    const lang = language === "ar" ? "Respond in Arabic." : "Respond in English.";
    return `You are a B2B sales coach for CyberPhish, a cybersecurity awareness and phishing simulation platform. Analyze this deal. ${lang}

DEAL: Company:${company || "Unknown"}, Value:$${dealValue || "Not specified"}, Stage:${dealStage || "Not specified"}, Contact:${contact || "Not specified"}, Close:${closeDate || "Not specified"}
MEDDICC:${md}
CYBERPHISH: All-in-one cybersecurity awareness platform (employee training, phishing simulations, AI course creation, SCORM, risk scoring, labs, analytics, compliance reporting).

Respond ONLY with valid JSON — no markdown, no preamble:
{"summary":"2-3 sentence deal health summary","risks":["Risk 1 with detail","Risk 2 with detail","Risk 3 with detail"],"actions":["Action 1 with clear instruction","Action 2 with clear instruction","Action 3 with clear instruction"]}`;
  };

  const handleAnalyze = async () => {
    const key = import.meta.env.VITE_ANTHROPIC_API_KEY as string | undefined;
    if (!key) {
      showToast(getText("خدمة التحليل غير متوفرة حالياً", "AI analysis is currently unavailable"));
      return;
    }
    setIsAnalyzing(true);
    setAiResults(null);
    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-allow-browser": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: buildPrompt() }],
        }),
      });
      const data = await resp.json();
      if (data.error) throw new Error(data.error.message);
      const raw = data.content
        .map((b: { type: string; text?: string }) => b.text ?? "")
        .join("");
      setAiResults(JSON.parse(raw.replace(/```json|```/g, "").trim()));
    } catch {
      showToast(
        getText(
          "تعذّر التحليل. تحقق من مفتاح API وحاول مجدداً.",
          "Analysis failed. Check your API key and try again."
        )
      );
    }
    setIsAnalyzing(false);
  };

  // ── PDF export ──────────────────────────────────────────────────────────────

  const handleExportPDF = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pw = 595, ph = 842, ml = 40, mr = 40;
    const cw = pw - ml - mr;
    const GREEN: [number, number, number] = [24, 177, 75];
    const DARK: [number, number, number] = [47, 54, 67];
    const GRAY: [number, number, number] = [245, 246, 248];
    const MID: [number, number, number] = [127, 134, 147];
    const BORDER: [number, number, number] = [227, 230, 234];
    const WHITE: [number, number, number] = [255, 255, 255];
    const DEEP_GREEN: [number, number, number] = [15, 83, 46];
    const LIGHT_GREEN: [number, number, number] = [134, 217, 166];
    const BG_LIGHT: [number, number, number] = [240, 253, 244];
    const today = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const coy = company || "Unknown Company";
    const healthPct = healthScore;
    const healthLbl = healthLabel;
    const coverageStr = `${coverage} / 7`;

    const addFooter = (pageNum: number) => {
      doc.setFillColor(...GRAY);
      doc.rect(0, ph - 32, pw, 32, "F");
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.5);
      doc.line(0, ph - 32, pw, ph - 32);
      doc.addImage("data:image/jpeg;base64," + LOGO_ICON, "JPEG", ml, ph - 26, 18, 18);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...MID);
      doc.text("CyberPhish — Human Cyber Risk Platform", ml + 24, ph - 14);
      doc.text(
        `Confidential — Internal Sales Use Only  |  Generated on: ${today}  |  Page ${pageNum}`,
        pw - mr,
        ph - 14,
        { align: "right" }
      );
    };

    // ── Cover page ──
    // White base
    doc.setFillColor(...WHITE);
    doc.rect(0, 0, pw, ph, "F");

    // Deep green header band
    const headerH = 245;
    doc.setFillColor(...DEEP_GREEN);
    doc.rect(0, 0, pw, headerH, "F");

    // Decorative circles (top-right accent, slightly lighter shade)
    doc.setFillColor(30, 105, 62);
    doc.circle(pw - 60, -30, 110, "F");
    doc.circle(pw + 10, 80, 130, "F");

    // Brand mark: green "CP" square + CYBERPHISH wordmark
    doc.setFillColor(...GREEN);
    doc.roundedRect(ml, 22, 32, 32, 4, 4, "F");
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...WHITE);
    doc.text("CP", ml + 8, 43);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...WHITE);
    doc.text("CYBERPHISH", ml + 40, 38);
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...LIGHT_GREEN);
    doc.text("Human Cyber Risk Platform", ml + 40, 49);

    // MEDDICC QUALIFIER pill badge (top-right)
    const badgeText = "MEDDICC QUALIFIER";
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    const badgeW = doc.getTextWidth(badgeText) + 22;
    doc.setFillColor(...GREEN);
    doc.roundedRect(pw - mr - badgeW, 22, badgeW, 20, 10, 10, "F");
    doc.setTextColor(...WHITE);
    doc.text(badgeText, pw - mr - badgeW + 11, 34);

    // Main title
    doc.setFontSize(28);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...WHITE);
    doc.text("Deal Qualification", ml, 118);
    doc.text("Report", ml, 150);

    // Accent line
    doc.setDrawColor(...LIGHT_GREEN);
    doc.setLineWidth(2.5);
    doc.line(ml, 162, ml + 180, 162);

    // Prepared-for label + company name
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...LIGHT_GREEN);
    doc.text("PREPARED FOR", ml, 195);
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...WHITE);
    doc.text(coy, ml, 214);

    // Info card (left) + health score card (right)
    const cardTop = headerH + 28;
    const leftCardW = cw * 0.54;
    const rightCardW = cw * 0.40;
    const leftCardX = ml;
    const rightCardX = ml + leftCardW + cw * 0.06;

    // Left: deal information card
    doc.setFillColor(...BG_LIGHT);
    doc.roundedRect(leftCardX, cardTop, leftCardW, 144, 6, 6, "F");
    doc.setFillColor(...GREEN);
    doc.roundedRect(leftCardX, cardTop, leftCardW, 34, 6, 6, "F");
    doc.rect(leftCardX, cardTop + 17, leftCardW, 17, "F");
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...WHITE);
    doc.text("DEAL INFORMATION", leftCardX + 12, cardTop + 22);

    const infoFields: [string, string, string, string][] = [
      ["Deal Value", `$ ${dealValue || "—"}`, "Stage", dealStage || "—"],
      ["Contact", contact || "—", "Sales Owner", owner || "—"],
      ["Close Date", closeDate || "—", "", ""],
    ];
    let cardFy = cardTop + 52;
    infoFields.forEach(([k1, v1, k2, v2]) => {
      const fc1 = leftCardX + 14, fc2 = leftCardX + leftCardW / 2 + 8;
      doc.setFontSize(7.5);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...MID);
      doc.text(k1, fc1, cardFy);
      if (k2) doc.text(k2, fc2, cardFy);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...DARK);
      doc.text(v1, fc1, cardFy + 14);
      if (v2) doc.text(v2, fc2, cardFy + 14);
      cardFy += 30;
    });

    // Right: health score card
    const scColor = scoreRgb(healthPct);
    doc.setFillColor(...scColor);
    doc.roundedRect(rightCardX, cardTop, rightCardW, 144, 6, 6, "F");
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...WHITE);
    doc.text("DEAL HEALTH", rightCardX + 10, cardTop + 20);
    doc.setFontSize(52);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...WHITE);
    doc.text(`${healthPct}%`, rightCardX + 10, cardTop + 82);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...WHITE);
    doc.text(healthLbl, rightCardX + 10, cardTop + 102);
    doc.setFontSize(8);
    doc.setTextColor(200, 255, 220);
    doc.text(`Coverage: ${coverageStr}`, rightCardX + 10, cardTop + 120);

    // Metadata strip (4 columns)
    const stripTop = cardTop + 162;
    doc.setFillColor(...GRAY);
    doc.roundedRect(ml, stripTop, cw, 54, 4, 4, "F");
    const metaCols: [string, string][] = [
      ["COMPANY", coy],
      ["CLOSE DATE", closeDate || "—"],
      ["STAGE", dealStage || "—"],
      ["GENERATED ON", today],
    ];
    const metaColSpan = cw / 4;
    metaCols.forEach(([mlabel, mval], mi) => {
      const mx = ml + mi * metaColSpan + 12;
      doc.setFontSize(7);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...MID);
      doc.text(mlabel, mx, stripTop + 16);
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...DARK);
      const displayVal = mval.length > 22 ? mval.substring(0, 20) + "…" : mval;
      doc.text(displayVal, mx, stripTop + 32);
      if (mi > 0) {
        doc.setDrawColor(...BORDER);
        doc.setLineWidth(0.4);
        doc.line(ml + mi * metaColSpan, stripTop + 8, ml + mi * metaColSpan, stripTop + 46);
      }
    });

    // Confidential note
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 110, 125);
    doc.text("Confidential — Internal Sales Use Only", pw / 2, ph - 14, {
      align: "center",
    });

    // ── Page 2: Deal Info + Scoring table ──
    doc.addPage();
    let y = 50;

    doc.setFillColor(...GREEN);
    doc.rect(ml, y, cw, 26, "F");
    doc.setTextColor(...WHITE);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("DEAL INFORMATION", ml + 10, y + 17);
    y += 34;

    doc.setFillColor(...GRAY);
    doc.roundedRect(ml, y, cw, 100, 6, 6, "F");
    const col1 = ml + 14, col2 = ml + cw / 2 + 10;
    const fields: [string, string, string, string][] = [
      ["Company", coy, "Deal Value", `$ ${dealValue || "—"}`],
      ["Stage", dealStage || "—", "Sales Owner", owner || "—"],
      ["Contact", contact || "—", "Close Date", closeDate || "—"],
    ];
    let fy = y + 18;
    fields.forEach(([k1, v1, k2, v2]) => {
      doc.setFontSize(8);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...MID);
      doc.text(k1, col1, fy);
      doc.text(k2, col2, fy);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...DARK);
      doc.text(v1, col1, fy + 13);
      doc.text(v2, col2, fy + 13);
      fy += 28;
    });
    y += 108;

    const cw3 = (cw - 20) / 3;
    const cards: [string, string, string][] = [
      ["Deal Health Score", `${healthPct}%`, healthLbl],
      ["MEDDICC Coverage", coverageStr, "Items addressed"],
      ["Deal Value", `$ ${dealValue || "—"}`, "USD"],
    ];
    cards.forEach((card, i) => {
      const cx = ml + i * (cw3 + 10);
      const cc: [number, number, number] = i === 0 ? scoreRgb(healthPct) : GREEN;
      doc.setFillColor(...cc);
      doc.roundedRect(cx, y, cw3, 52, 6, 6, "F");
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...WHITE);
      doc.text(card[0], cx + 10, y + 14);
      doc.setFontSize(i === 0 ? 22 : 16);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...WHITE);
      doc.text(card[1], cx + 10, y + 34);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(200, 255, 220);
      doc.text(card[2], cx + 10, y + 46);
    });
    y += 62;

    doc.setFillColor(...GREEN);
    doc.rect(ml, y, cw, 26, "F");
    doc.setTextColor(...WHITE);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("MEDDICC SCORING SUMMARY", ml + 10, y + 17);
    y += 32;

    const colW = [24, 130, 80, 50, 50, cw - 334 - 10];
    const headers = ["", "Item", "Status", "Weight", "Score", "Notes preview"];
    doc.setFillColor(...DARK);
    doc.rect(ml, y, cw, 20, "F");
    doc.setTextColor(...WHITE);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    let hx = ml + 4;
    headers.forEach((h, i) => {
      doc.text(h, hx + 2, y + 13);
      hx += colW[i];
    });
    y += 20;

    let totalScore = 0;
    MEDDICC_ITEMS.forEach((item, idx) => {
      const st = statuses[idx];
      const nt = notes[idx].trim();
      const itemScore =
        st === "confirmed"
          ? item.weight
          : st === "progress"
          ? Math.round(item.weight * 0.5)
          : nt.length > 10
          ? Math.round(item.weight * 0.25)
          : 0;
      totalScore += itemScore;
      const sc2 = scoreRgb(Math.round((itemScore / item.weight) * 100));
      const rowBg: [number, number, number] = idx % 2 === 0 ? [255, 255, 255] : [245, 246, 248];
      doc.setFillColor(...rowBg);
      doc.rect(ml, y, cw, 22, "F");
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.3);
      doc.line(ml, y + 22, ml + cw, y + 22);
      doc.setFillColor(...sc2);
      doc.rect(ml, y, 4, 22, "F");

      let rx2 = ml + 4;
      doc.setFontSize(13);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...GREEN);
      doc.text(item.key, rx2 + 4, y + 15);
      rx2 += colW[0];
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...DARK);
      doc.text(item.titleEn, rx2 + 2, y + 9);
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...MID);
      doc.text(item.hintEn.substring(0, 38), rx2 + 2, y + 18);
      rx2 += colW[1];

      const stColor: [number, number, number] =
        st === "confirmed" ? [24, 177, 75] : st === "progress" ? [217, 119, 6] : [134, 217, 166];
      doc.setFillColor(...stColor);
      doc.roundedRect(rx2 + 2, y + 5, 68, 13, 3, 3, "F");
      doc.setFontSize(7.5);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...WHITE);
      const stLabel = st === "confirmed" ? "Confirmed" : st === "progress" ? "In progress" : "Not started";
      doc.text(stLabel, rx2 + 6, y + 14);
      rx2 += colW[2];

      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...DARK);
      doc.text(`${item.weight}%`, rx2 + 10, y + 14);
      rx2 += colW[3];
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...sc2);
      doc.text(`${itemScore}`, rx2 + 10, y + 14);
      rx2 += colW[4];
      const preview = (nt || "—").substring(0, 40) + (nt.length > 40 ? "..." : "");
      doc.setFontSize(7.5);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...MID);
      doc.text(preview, rx2 + 2, y + 14);
      y += 22;
    });

    doc.setFillColor(...DARK);
    doc.rect(ml, y, cw, 22, "F");
    doc.setTextColor(...WHITE);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("Total weighted score:", ml + 10, y + 14);
    doc.setTextColor(...GREEN);
    doc.text(`${totalScore} / 100`, ml + 150, y + 14);
    addFooter(2);

    // ── Page 3: Detailed MEDDICC notes ──
    doc.addPage();
    y = 50;
    doc.setFillColor(...GREEN);
    doc.rect(ml, y, cw, 26, "F");
    doc.setTextColor(...WHITE);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("MEDDICC QUALIFICATION DETAILS", ml + 10, y + 17);
    y += 32;

    const CARD_H = 84;
    const MAX_NOTE_CHARS = 240;
    MEDDICC_ITEMS.forEach((item, idx) => {
      const st = statuses[idx];
      const rawNote = notes[idx].trim() || "—";
      const nt = rawNote.length > MAX_NOTE_CHARS
        ? rawNote.substring(0, MAX_NOTE_CHARS - 2) + "…"
        : rawNote;
      const noteLines = (doc.splitTextToSize(nt, cw - 110) as string[]).slice(0, 3);
      if (y + CARD_H > ph - 50) {
        doc.addPage();
        y = 50;
      }
      doc.setFillColor(...GRAY);
      doc.roundedRect(ml, y, cw, CARD_H, 4, 4, "F");
      const stC: [number, number, number] =
        st === "confirmed" ? GREEN : st === "progress" ? [217, 119, 6] : [134, 217, 166];
      doc.setFillColor(...stC);
      doc.roundedRect(ml, y, 5, CARD_H, 2, 2, "F");

      // Key letter
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...GREEN);
      doc.text(item.key, ml + 14, y + 29);

      // Title + hint
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...DARK);
      doc.text(item.titleEn, ml + 36, y + 17);
      doc.setFontSize(7.5);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...MID);
      const hintTrunc = item.hintEn.length > 70 ? item.hintEn.substring(0, 68) + "…" : item.hintEn;
      doc.text(hintTrunc, ml + 36, y + 27);

      // Status badge
      const stLabel = st === "confirmed" ? "Confirmed" : st === "progress" ? "In progress" : "Not started";
      const stW = doc.getTextWidth(stLabel) + 14;
      doc.setFillColor(...stC);
      doc.roundedRect(pw - mr - stW - 2, y + 7, stW + 2, 15, 4, 4, "F");
      doc.setTextColor(...WHITE);
      doc.setFontSize(7.5);
      doc.setFont("helvetica", "bold");
      doc.text(stLabel, pw - mr - stW + 2, y + 16);

      // Separator
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.3);
      doc.line(ml + 8, y + 33, ml + cw - 8, y + 33);

      // Note lines (max 3)
      doc.setFontSize(8.5);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...DARK);
      noteLines.forEach((line: string, li: number) => {
        doc.text(line, ml + 36, y + 44 + li * 12);
      });

      // Weight label
      doc.setFontSize(7);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...MID);
      doc.text(`Weight: ${item.weight}%`, ml + 10, y + CARD_H - 7);

      y += CARD_H + 7;
    });
    addFooter(3);

    // ── Page 4: AI analysis (if available) ──
    if (aiResults) {
      doc.addPage();
      y = 50;
      doc.setFillColor(...GREEN);
      doc.rect(ml, y, cw, 26, "F");
      doc.setTextColor(...WHITE);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.text("AI DEAL ANALYSIS", ml + 10, y + 17);
      y += 34;

      // Summary
      doc.setFillColor(...DARK);
      doc.rect(ml, y, cw, 20, "F");
      doc.setTextColor(...WHITE);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.text("Deal Health Summary", ml + 10, y + 13);
      y += 26;
      doc.setFillColor(...GRAY);
      const sumLines = doc.splitTextToSize(aiResults.summary, cw - 20);
      const sumH = sumLines.length * 14 + 16;
      doc.roundedRect(ml, y, cw, sumH, 4, 4, "F");
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...DARK);
      sumLines.forEach((line: string, li: number) => {
        doc.text(line, ml + 10, y + 14 + li * 14);
      });
      y += sumH + 16;

      // Risks + Actions (two columns)
      const halfW = (cw - 12) / 2;
      const sections = [
        { title: "Deal Risks", items: aiResults.risks, color: LIGHT_GREEN, bg: BG_LIGHT },
        { title: "Next Best Actions", items: aiResults.actions, color: GREEN, bg: [220, 252, 231] as [number, number, number] },
      ];
      const colStarts = [ml, ml + halfW + 12];
      const secHeights = sections.map((sec) => {
        let sh = 28;
        sec.items.forEach((item) => {
          sh += doc.splitTextToSize(item, halfW - 28).length * 13 + 10;
        });
        return sh;
      });
      const maxH = Math.max(...secHeights);
      sections.forEach((sec, si) => {
        const sx = colStarts[si];
        doc.setFillColor(...sec.bg);
        doc.roundedRect(sx, y, halfW, maxH, 5, 5, "F");
        doc.setFillColor(...sec.color);
        doc.roundedRect(sx, y, halfW, 20, 5, 5, "F");
        doc.roundedRect(sx, y + 10, halfW, 10, "F");
        doc.setTextColor(...WHITE);
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text(sec.title, sx + 10, y + 13);
        let iy = y + 28;
        sec.items.forEach((item) => {
          doc.setFillColor(...sec.color);
          doc.circle(sx + 12, iy - 1, 3, "F");
          const iLines = doc.splitTextToSize(item, halfW - 28);
          doc.setFontSize(9);
          doc.setFont("helvetica", "normal");
          doc.setTextColor(...DARK);
          iLines.forEach((l2: string, li2: number) => {
            doc.text(l2, sx + 20, iy + li2 * 13);
          });
          iy += iLines.length * 13 + 10;
        });
      });
      addFooter(4);
    }

    const filename = `CyberPhish_MEDDICC_${(coy.replace(/\s+/g, "_"))}_${today.replace(/ /g, "_")}.pdf`;
    doc.save(filename);
    showToast(`PDF saved: ${filename}`);
  };

  // ── Render ───────────────────────────────────────────────────────────────────

  const stageOptions = language === "ar" ? STAGE_OPTIONS_AR : STAGE_OPTIONS_EN;
  const stageLabelsEn = STAGE_OPTIONS_EN;

  return (
    <div
      className="min-h-screen bg-gray-50 py-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 max-w-4xl space-y-5">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white font-black text-xs shrink-0">
              CP
            </div>
            <span className="text-xs font-bold text-green-600 uppercase tracking-widest">
              CyberPhish
            </span>
            <span className="text-gray-400 text-xs hidden sm:block">
              / {getText("مؤهّل الصفقة MEDDICC", "MEDDICC Deal Qualifier")}
            </span>
          </div>
          <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="text-xs border border-gray-200 rounded-full px-3 py-1 text-gray-500 bg-white">
              {dealStage || getText("لا مرحلة محددة", "No stage set")}
            </span>
          </div>
        </div>

        {/* ── Deal information ── */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            {getText("معلومات الصفقة", "Deal Information")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: getText("اسم الشركة", "Company name"), val: company, set: setCompany, placeholder: getText("مثال: مجموعة STC", "e.g. Saudi Telecom Group") },
              { label: getText("قيمة الصفقة (USD)", "Deal value (USD)"), val: dealValue, set: setDealValue, placeholder: getText("مثال: 45,000", "e.g. 45,000") },
              { label: getText("جهة الاتصال الرئيسية", "Primary contact"), val: contact, set: setContact, placeholder: getText("الاسم والمسمى", "Name & title") },
              { label: getText("مسؤول المبيعات", "Sales owner"), val: owner, set: setOwner, placeholder: getText("اسمك", "Your name") },
              { label: getText("تاريخ الإغلاق المتوقع", "Expected close date"), val: closeDate, set: setCloseDate, placeholder: getText("مثال: الربع الثالث 2025", "e.g. Q3 2025") },
            ].map(({ label, val, set, placeholder }) => (
              <div key={label}>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                  {label}
                </label>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => set(e.target.value)}
                  placeholder={placeholder}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                {getText("مرحلة الصفقة", "Deal stage")}
              </label>
              <select
                value={
                  language === "ar"
                    ? stageOptions[stageLabelsEn.indexOf(dealStage)] ?? ""
                    : dealStage
                }
                onChange={(e) => {
                  const idx = stageOptions.indexOf(e.target.value);
                  setDealStage(stageLabelsEn[idx] ?? "");
                }}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 transition-colors"
              >
                {stageOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt || getText("اختر المرحلة", "Select stage")}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ── Metrics row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Health score */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-400 mb-1">
              {getText("صحة الصفقة", "Deal health")}
            </p>
            <p className={`text-2xl font-black ${healthColorClass}`}>
              {healthScore}%
            </p>
            <div className="h-1 bg-gray-100 rounded-full mt-2">
              <div
                className={`h-1 rounded-full transition-all duration-500 ${healthBarClass}`}
                style={{ width: `${healthScore}%` }}
              />
            </div>
            <p className={`text-xs font-semibold mt-1.5 ${healthColorClass}`}>
              {healthLabel}
            </p>
          </div>

          {/* MEDDICC coverage */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-400 mb-1">
              {getText("تغطية MEDDICC", "MEDDICC coverage")}
            </p>
            <p className="text-2xl font-black text-gray-800">{coverage} / 7</p>
            <p className="text-xs text-gray-400 mt-2">
              {coverage >= 6
                ? getText("تغطية كاملة", "Fully covered")
                : coverage >= 4
                ? getText("تغطية جيدة", "Good coverage")
                : getText("يحتاج انتباهاً", "Needs attention")}
            </p>
          </div>

          {/* Deal value */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-400 mb-1">
              {getText("قيمة الصفقة", "Deal value")}
            </p>
            <p className="text-lg font-black text-gray-800 truncate">
              {dealValue ? `$${dealValue}` : "—"}
            </p>
            <p className="text-xs text-gray-400 mt-2">USD</p>
          </div>

          {/* Close date */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-400 mb-1">
              {getText("تاريخ الإغلاق", "Close date")}
            </p>
            <p className="text-base font-black text-gray-800 leading-tight mt-1">
              {closeDate || "—"}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              {getText("الهدف", "Target")}
            </p>
          </div>
        </div>

        {/* ── MEDDICC checklist ── */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            {getText("قائمة تدقيق MEDDICC", "MEDDICC Checklist")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {MEDDICC_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-green-200 transition-colors"
              >
                {/* Card header */}
                <div className={`flex items-start justify-between gap-3 mb-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <span className="text-2xl font-black text-green-600 leading-none shrink-0 mt-0.5">
                      {item.key}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {getText(item.titleAr, item.titleEn)}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                        {getText(item.hintAr, item.hintEn)}
                      </p>
                    </div>
                  </div>
                  <select
                    value={statuses[idx]}
                    onChange={(e) => updateStatus(idx, e.target.value as Status)}
                    className={`text-xs px-2 py-1 rounded-full border font-semibold shrink-0 focus:outline-none cursor-pointer transition-colors ${statusBadgeClass(statuses[idx])}`}
                  >
                    <option value="not">{getText("لم تبدأ", "Not started")}</option>
                    <option value="progress">{getText("قيد التنفيذ", "In progress")}</option>
                    <option value="confirmed">{getText("مؤكدة", "Confirmed")}</option>
                  </select>
                </div>

                {/* Notes textarea */}
                <textarea
                  value={notes[idx]}
                  onChange={(e) => updateNote(idx, e.target.value)}
                  rows={3}
                  placeholder={getText(item.placeholderAr, item.placeholderEn)}
                  dir={isRTL ? "rtl" : "ltr"}
                  className="w-full text-xs px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 resize-none focus:outline-none focus:border-green-500 focus:bg-white transition-colors leading-relaxed"
                />

                {/* Weight */}
                <p className={`text-xs text-gray-400 mt-1.5 ${isRTL ? "text-left" : "text-right"}`}>
                  {getText("الوزن", "Weight")}: {item.weight}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Action buttons ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className={`flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-colors ${
              isAnalyzing
                ? "bg-green-400 text-white cursor-not-allowed"
                : "bg-green-600 hover:bg-green-500 text-white"
            }`}
          >
            {isAnalyzing ? (
              <>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </span>
                {getText("جارٍ التحليل…", "Analyzing…")}
              </>
            ) : (
              <>
                <Brain className="w-4 h-4" />
                {getText("تحليل الصفقة بالذكاء الاصطناعي", "Analyze deal with AI")}
              </>
            )}
          </button>
          <button
            onClick={handleExportPDF}
            className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors"
          >
            <FileDown className="w-4 h-4" />
            {getText("تصدير تقرير PDF", "Export PDF report")}
          </button>
        </div>

        {/* ── AI Results ── */}
        {aiResults && (
          <div className="space-y-3">
            {/* Summary */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className={`flex items-center gap-2 px-5 py-3 border-b border-gray-100 ${isRTL ? "flex-row-reverse" : ""}`}>
                <BarChart3 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-800">
                  {getText("ملخص صحة الصفقة", "Deal health summary")}
                </span>
              </div>
              <div className="px-5 py-4">
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {aiResults.summary}
                </p>
              </div>
            </div>

            {/* Risks + Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Risks */}
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className={`flex items-center gap-2 px-5 py-3 border-b border-gray-100 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-semibold text-gray-800">
                    {getText("مخاطر الصفقة", "Deal risks")}
                  </span>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {aiResults.risks.map((risk, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                      <p
                        className="text-sm text-gray-600 leading-relaxed"
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        {risk}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className={`flex items-center gap-2 px-5 py-3 border-b border-gray-100 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <ArrowRight className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-gray-800">
                    {getText("أفضل الإجراءات التالية", "Next best actions")}
                  </span>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {aiResults.actions.map((action, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />
                      <p
                        className="text-sm text-gray-600 leading-relaxed"
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        {action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder when no analysis yet */}
        {!aiResults && !isAnalyzing && (
          <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-8 text-center">
            <Brain className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-400">
              {getText(
                "أكمل حقول MEDDICC ثم شغّل تحليل الذكاء الاصطناعي",
                "Complete the MEDDICC fields above and run AI analysis to see deal risks and next actions"
              )}
            </p>
          </div>
        )}

      </div>

      {/* ── Toast ── */}
      {toastMsg && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-5 py-2.5 rounded-full shadow-lg z-50 whitespace-nowrap">
          {toastMsg}
        </div>
      )}
    </div>
  );
}
