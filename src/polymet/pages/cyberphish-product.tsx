import { useState, useEffect } from "react";
import { useLanguage } from "@/polymet/components/language-context";
import {
  Shield,
  Sparkles,
  Mail,
  Zap,
  Gauge,
  BarChart2,
  BookOpen,
  X,
  Star,
  Sun,
  Moon,
  Users,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL + "screenshots/";

// ── Theme helpers ──────────────────────────────────────────────────────────────

function useTheme() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("cp_theme") === "dark"; } catch { return false; }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("cp_theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  return { dark, toggle: () => setDark(d => !d) };
}

// ── Design-system primitives ───────────────────────────────────────────────────

function Browser({ url, img, alt = "" }: { url: string; img: string; alt?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.07] shadow-2xl bg-white dark:bg-[#131B26]">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-[#1A2330] border-b border-gray-200 dark:border-white/[0.07]">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-gray-100 dark:bg-[#0B1117] rounded px-3 py-0.5 text-[11px] text-gray-400 dark:text-[#5E6B79] font-mono text-center truncate">
          {url}
        </div>
        <div className="w-14 shrink-0" />
      </div>
      <div className="bg-white dark:bg-[#131B26]">
        <img src={img} alt={alt} className="w-full block" />
      </div>
    </div>
  );
}

function GradText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-clip-text text-transparent"
      style={{ backgroundImage: "linear-gradient(135deg,#10B981,#14B8A6)" }}>
      {children}
    </span>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase border mb-3 ${
      light
        ? "border-white/20 bg-white/10 text-green-200"
        : "border-[#10B981]/20 dark:border-[#34D399]/20 text-[#047857] dark:text-[#6EE7B7]"
    }`}
      style={light ? {} : { background: "rgba(16,185,129,0.07)" }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: light ? "#6EE7B7" : "#10B981" }} />
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-[#E8EEF3] leading-tight mb-4">{title}</h2>
      {sub && <p className="text-gray-500 dark:text-[#7B8794] text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function CyberPhishProduct() {
  const { getText, isRTL } = useLanguage();
  const { dark, toggle } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);

  const FEATURES = [
    {
      Icon: Sparkles,
      title: getText("توليد الدورات بالذكاء الاصطناعي", "AI-Powered Course Generation"),
      desc: getText("أنشئ دورات تدريبية كاملة — شرائح وسرد صوتي وفيديو — من نص واحد. متاح بالعربية والإنجليزية خلال دقائق.", "Generate complete training courses — slides, narration, and video — from a single prompt. Available in Arabic and English in minutes."),
      url: "app.cyberphish.io / courses / ai-generate",
      img: BASE + "step1-create-course.png",
    },
    {
      Icon: Mail,
      title: getText("محاكاة التصيد الاحتيالي", "Phishing Simulations"),
      desc: getText("شغّل حملات تصيد واقعية ومحلية بقوالب مخصصة وصفحات هبوط واقعية لكشف مواطن المخاطر الحقيقية.", "Run targeted, realistic phishing campaigns with localized templates and custom landing pages to expose where risk actually lives."),
      url: "app.cyberphish.io / simulations",
      img: BASE + "step2-phishing-sim.png",
    },
    {
      Icon: Zap,
      title: getText("المختبرات التفاعلية", "Interactive Labs"),
      desc: getText("تدريب عملي عبر البريد والويب والجوال وأسطح هجوم الأجهزة — قابل للتشغيل داخل المتصفح بدون إعداد مسبق.", "Hands-on practice across email, web, mobile, and desktop attack surfaces — playable in the browser without any setup."),
      url: "app.cyberphish.io / labs",
      img: BASE + "step3-interactive-labs.png",
    },
    {
      Icon: Gauge,
      title: getText("نقاط مخاطر الموظفين", "Employee Risk Scoring"),
      desc: getText("درجات مخاطر مستمرة لكل موظف مبنية على سلوك المحاكاة ومشاركة التدريب — لا على نسب الإكمال فقط.", "Continuous per-employee risk scores based on simulation behavior and training engagement — not just completion rates."),
      url: "app.cyberphish.io / dashboard",
      img: BASE + "hero-dashboard.png",
    },
    {
      Icon: BarChart2,
      title: getText("التحليلات والتقارير", "Analytics & Reporting"),
      desc: getText("رؤية المخاطر البشرية على مستوى الأقسام مع تقارير جاهزة للمدققين مرتبطة بضوابط ISO 27001 وNIST وPCI DSS.", "Department-level human risk visibility with audit-ready reports mapped to ISO 27001, NIST, and PCI DSS controls."),
      url: "app.cyberphish.io / analytics",
      img: BASE + "step4-analytics.png",
    },
    {
      Icon: BookOpen,
      title: getText("تكامل SCORM ونظام إدارة التعلم", "SCORM & LMS Integration"),
      desc: getText("استورد محتوى تدريبيًا قائمًا أو صدّر محتوى سايبرفش إلى نظام إدارة التعلم المؤسسي. دعم كامل لـ SCORM 1.2 و2004.", "Import existing courseware or export CyberPhish content to your enterprise LMS. Full SCORM 1.2 and 2004 support."),
      url: "app.cyberphish.io / courses",
      img: BASE + "step1-create-course.png",
    },
    {
      Icon: Mail,
      title: getText("النشرات الإخبارية والتعزيز المستمر", "Newsletters & Reinforcement"),
      desc: getText("أرسل نشرات داخلية بعلامتك تتضمن ملخصات التهديدات الشهرية واختبارات مراجعة لتعزيز الوعي بين الحملات.", "Send branded internal newsletters with monthly threat briefings and recap quizzes to reinforce awareness between campaigns."),
      url: "app.cyberphish.io / newsletters",
      img: BASE + "step2-phishing-sim.png",
    },
    {
      Icon: Users,
      title: getText("مجموعات الموظفين والتعلم المستهدف", "Employee Groups & Targeted Learning"),
      desc: getText("نظّم الموظفين في مجموعات وأسند مسارات تدريب مستهدفة بناءً على الدور أو القسم أو درجة المخاطر.", "Organize employees into groups and assign targeted training paths based on role, department, or risk score."),
      url: "app.cyberphish.io / groups",
      img: BASE + "hero-dashboard.png",
    },
  ];


  const USE_CASES = [
    { tag: getText("الشركات الكبرى", "Enterprises"),           title: getText("خفض المخاطر البشرية على نطاق واسع", "Reduce human risk at scale"),      desc: getText("إدارة آلاف الموظفين عبر وحدات أعمال متعددة بنقاط مخاطر حسب الدور.", "Manage thousands of employees across business units with role based scoring."),               items: ["Multi tenant", "SSO and SCIM", "Audit ready reporting"] },
    { tag: getText("فرق الموارد البشرية", "HR teams"),         title: getText("تأهيل يثبت في الذاكرة", "Onboarding that actually sticks"),           desc: getText("اجعل التوعية جزءًا من اليوم الأول للتأهيل بمسارات تعلم تُسند تلقائيًا.", "Bake awareness training into day one onboarding with auto assigned learning paths."),         items: ["Learning paths", "Certificates", "Progress tracking"] },
    { tag: getText("أقسام تقنية المعلومات", "IT departments"), title: getText("تخفيف العبء على فرق الأمن", "Lighten the security ops load"),         desc: getText("أعطِ تقنية المعلومات صلاحية إطلاق الحملات والاستجابة دون طوابير تذاكر الأمن.", "Empower IT to launch campaigns and respond to risk without security ticket queues."),       items: ["Self serve campaigns", "Pre built templates", "Slack and Teams alerts"] },
    { tag: getText("فرق الامتثال", "Compliance teams"),        title: getText("أدلة جاهزة لكل تدقيق", "Evidence for every audit"),                   desc: getText("صدّر تقارير جاهزة للمدققين مرتبطة بضوابط ISO 27001 وNIST وPCI DSS.", "Export auditor ready reports tied to ISO 27001, NIST and PCI DSS controls."),               items: ["Mapped controls", "Tamper proof logs", "PDPL and GDPR aligned"] },
    { tag: getText("القطاع الحكومي", "Government"),             title: getText("سيادي وعربي أولًا", "Sovereign and Arabic first"),                    desc: getText("انشر على سحابات إقليمية بمحتوى عربي أصيل ودعم كامل لاتجاه RTL.", "Deploy on regional clouds with Arabic native content and full RTL support."),                items: ["Data residency", "Arabic UI and content", "Custom branding"] },
    { tag: getText("الشركات الصغيرة", "SMBs"),                 title: getText("بمعايير الشركات الكبرى بحجم مناسب", "Enterprise grade, right sized"), desc: getText("ابدأ خلال أسبوع بقوالب مضبوطة مسبقًا حسب قطاعك.", "Get started in under a week with templates pre tuned for your industry."),                   items: ["Seven day onboarding", "Industry templates", "Flat per seat pricing"] },
  ];

  const TESTIMONIALS = [
    { tag: getText("خدمات مالية. 4,200 موظف.", "Financial services. 4,200 employees."), quote: getText("استبدلنا مزودَي توعية منفصلين بسايبرفش. خلال 90 يومًا انخفض معدل النقر على التصيد بنسبة 64٪. ولأول مرة لدينا رقم واحد يمكن الدفاع عنه أمام مجلس الإدارة.", "We replaced two separate awareness vendors with CyberPhish. Within 90 days our phishing click rate dropped by 64%, and for the first time we have a single defensible number to report to the board."), name: getText("فيصل المنصور", "Faisal Al Mansour"), role: getText("رئيس أمن المعلومات، مجموعة بنوك إقليمية", "CISO, regional banking group"), initials: "FM", featured: true },
    { tag: "", quote: getText("ما حسم القرار لصالحنا هو جودة المحتوى العربي. الموظفون يتفاعلون مع التدريب فعلًا بدل المرور عليه فقط.", "The Arabic content quality is what closed it for us. Our employees actually engage with the training instead of just clicking through it."), name: getText("رنا حبيب", "Rana Habib"), role: getText("مديرة تقنية المعلومات، قطاع الخدمات اللوجستية", "Head of IT, logistics and supply chain"), initials: "RH", featured: false },
    { tag: "", quote: getText("أثر التدقيق وربط الضوابط اختصرا جمع أدلة ISO 27001 من ثلاثة أسابيع إلى يوم واحد تقريبًا.", "The audit trail and control mapping cut our ISO 27001 evidence collection from three weeks down to about a day."), name: getText("جنى كريم", "Jana Karim"), role: getText("رئيسة الحوكمة، جهة حكومية", "GRC lead, public sector entity"), initials: "JK", featured: false },
  ];

  // shared card class
  const card = "bg-white dark:bg-[#131B26] border border-gray-100 dark:border-white/[0.07] rounded-2xl shadow-sm";

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1117] transition-colors duration-200" dir={isRTL ? "rtl" : "ltr"}>

      {/* ── Theme toggle (floating) ── */}
      <button
        onClick={toggle}
        aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors bg-white dark:bg-[#131B26] border-gray-200 dark:border-white/[0.12] text-gray-500 dark:text-[#A7B4C0] hover:border-[#10B981] hover:text-[#10B981]"
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 bg-white dark:bg-[#0B1117]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(16,185,129,0.11) 0%, transparent 65%)" }} />
        <div className="relative container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-14 items-center">

            <div className={`space-y-6 ${isRTL ? "text-right" : ""}`}>
              <Eyebrow>{getText("منصة المخاطر البشرية. عربية أولًا.", "Human risk platform. Arabic first.")}</Eyebrow>
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] text-gray-900 dark:text-[#E8EEF3] tracking-tight">
                {getText("درّب فريقك ليصبح ", "Train your people to be the ")}
                <GradText>{getText("خط الدفاع الأول ضد الهجمات السيبرانية.", "first line of cyber defense.")}</GradText>
              </h1>
              <p className="text-gray-500 dark:text-[#7B8794] text-lg leading-relaxed">
                {getText("تساعد سايبرفش فرق الأمن السيبراني في الشركات على محاكاة هجمات التصيد، وتنفيذ تدريبات توعية مدعومة بالذكاء الاصطناعي، وخفض المخاطر البشرية بشكل قابل للقياس. متاحة بالعربية والإنجليزية أو كليهما.", "CyberPhish helps enterprise security teams simulate phishing attacks, run AI generated awareness training, and measurably reduce human cyber risk. Available in Arabic, English, or both.")}
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <a href="/products/cyberphish/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-colors shadow-lg"
                  style={{ background: "#10B981" }}
                  onMouseOver={e => (e.currentTarget.style.background = "#059669")}
                  onMouseOut={e => (e.currentTarget.style.background = "#10B981")}
                >
                  {getText("أريد عرضًا توضيحيًا", "I Want a Demo")} →
                </a>
                <a href="https://cyberphish-staging.laravel.cloud/dashboard" target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 dark:border-white/[0.12] text-gray-700 dark:text-[#A7B4C0] hover:bg-gray-50 dark:hover:bg-white/[0.04] font-semibold text-sm transition-colors"
                >
                  {getText("شاهد كيف يعمل", "See How It Works")}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.12) 0%, transparent 70%)" }} />
              <div className="relative">
                <Browser url="app.cyberphish.io / dashboard" img={BASE + "hero-dashboard.png"} alt="CyberPhish dashboard" />
                <div className={`absolute -top-5 ${isRTL ? "-left-4" : "-right-4"} ${card} px-4 py-3 flex items-center gap-3 animate-float`}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                    <Shield size={15} />
                  </div>
                  <div>
                    <div className="text-sm font-black bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#10B981,#14B8A6)" }}>
                      {getText("انخفاض 68٪", "68% lower")}
                    </div>
                    <div className="text-[10px] text-gray-400 dark:text-[#5E6B79] mt-0.5 leading-tight">{getText("في معدل النقر خلال 90 يومًا", "Click through risk in 90 days")}</div>
                  </div>
                </div>
                <div className={`absolute -bottom-5 ${isRTL ? "-right-4" : "-left-4"} ${card} px-4 py-3 flex items-center gap-3`} style={{ animation: "float 6s ease-in-out -2.5s infinite" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.1)", color: "#059669" }}>
                    <Sparkles size={15} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-gray-900 dark:text-[#E8EEF3]">12,840</div>
                    <div className="text-[10px] text-gray-400 dark:text-[#5E6B79] mt-0.5 leading-tight">{getText("موظف تم تدريبهم", "Employees trained")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. LOGO ROW ── */}
      <div className="border-y border-gray-100 dark:border-white/[0.07] py-10 bg-gray-50/60 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-center text-[11px] font-semibold text-gray-400 dark:text-[#5E6B79] uppercase tracking-widest mb-7">
            {getText("تثق بها فرق الأمن والامتثال في منطقة الشرق الأوسط وخارجها", "Trusted by security and compliance teams across MENA and beyond")}
          </p>
          <div className={`flex flex-wrap justify-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            {["AURION", "MIRAJ", "Halcyon", "NORTHWAY", "Vanta·co", "QSWRA"].map(l => (
              <span key={l} className="text-xs font-black text-gray-300 dark:text-[#5E6B79] tracking-widest">{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. RATINGS ── */}
      <div className="border-b border-gray-100 dark:border-white/[0.07] py-8 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className={`flex flex-col sm:flex-row justify-center gap-8 items-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            {[{ score: "4.8", src: "G2", label: getText("على G2", "on G2") }, { score: "4.7", src: "Capterra", label: getText("على Capterra", "on Capterra") }, { score: "4.9", src: "Gartner", label: "Peer Insights" }].map(c => (
              <div key={c.src} className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <span className="text-2xl font-black text-gray-900 dark:text-[#E8EEF3]">{c.score}</span>
                <div className="w-px h-9 bg-gray-200 dark:bg-white/[0.07]" />
                <div>
                  <div className="flex gap-0.5 mb-1">{Array(5).fill(0).map((_, i) => <Star key={i} size={11} className="fill-[#10B981] text-[#10B981]" />)}</div>
                  <div className="text-xs text-gray-400 dark:text-[#5E6B79]">{c.src} · {c.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. PROBLEM ── */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHead
            eyebrow={getText("تحدي المخاطر البشرية", "The human risk problem")}
            title={<>{getText("جدرانك النارية تعمل. لكن ", "Your firewalls are working. ")}<GradText>{getText("موظفيك أصبحوا المحيط الجديد.", "Your people are the new perimeter.")}</GradText></>}
            sub={getText("تطوّرت أدوات الأمن أسرع من وعي الموظفين. المهاجمون يعرفون ذلك ويستهدفون موظفيك أولًا. لا تزال معظم الاختراقات تبدأ بنقرة واحدة.", "Security tooling has matured faster than human awareness. Attackers know it, and they target your employees first. Most breaches still start with a single click.")}
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { big: getText("82٪", "82%"), title: getText("من الاختراقات يتضمن عنصرًا بشريًا", "of breaches involve a human element"), text: getText("التصيد والهندسة الاجتماعية وسرقة بيانات الاعتماد والخطأ البشري لا تزال نقاط الدخول الأبرز للمهاجمين.", "Phishing, social engineering, stolen credentials and human error remain the dominant entry point for attackers.") },
              { big: getText("4.9M$", "$4.9M"), title: getText("متوسط تكلفة الاختراق الواحد", "average cost of a single breach"), text: getText("في منطقة الشرق الأوسط، تستمر تكلفة الحوادث بالارتفاع سنويًا مقابل ميزانيات أمنية محدودة.", "Across MENA the cost per incident continues to rise year over year against constrained security budgets.") },
              { big: getText("11 دقيقة", "11 min"), title: getText("متوسط زمن النقر على رابط تصيد", "median click time on phishing"), text: getText("ينقر الموظفون على الروابط الخبيثة خلال دقائق من وصولها. الكشف وحده لا يكفي. السلوك هو ما يجب أن يتغير.", "Employees click malicious links within minutes of receipt. Detection alone is not enough. Behavior has to change.") },
            ].map((s, i) => (
              <div key={i} className={`${card} p-8 hover:shadow-md hover:border-green-100 dark:hover:border-[#34D399]/20 transition-all`}>
                <div className="text-5xl font-black mb-3 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#10B981,#14B8A6)" }}>{s.big}</div>
                <div className="font-bold text-gray-800 dark:text-[#E8EEF3] text-sm mb-2">{s.title}</div>
                <p className="text-gray-500 dark:text-[#7B8794] text-sm leading-relaxed">{s.text}</p>
                <div className="mt-4 text-[10px] text-gray-300 dark:text-[#5E6B79] uppercase tracking-wide">{getText("مرجع قطاعي. أرقام توضيحية.", "Industry benchmark. Illustrative.")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY FAILS ── */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHead
            eyebrow={getText("لماذا تفشل برامج التوعية التقليدية", "Why traditional awareness training fails")}
            title={getText("صناديق الامتثال لا تغيّر السلوك.", "Compliance checkboxes do not change behavior.")}
            sub={getText("صُممت معظم برامج التوعية للمدققين لا للموظفين. سايبرفش مبنية لتغيير سلوكي قابل للقياس مدعوم بأدلة من المحاكاة.", "Most awareness programs were built for auditors, not employees. CyberPhish is built for measurable behavior change, backed by simulation evidence.")}
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { t: getText("إرهاق الامتثال السنوي", "Annual compliance fatigue"),                 d: getText("وحدات SCORM السنوية ترضي المدققين، لكنها تترك الموظفين غير مكترثين وغير مستعدين بعد ثلاثة أشهر.", "Once a year SCORM modules satisfy auditors but leave employees disengaged and unprepared by month three.") },
              { t: getText("محتوى عام بالإنجليزية فقط", "Generic, English only content"),         d: getText("نادرًا ما يعكس المحتوى الجاهز السياق المحلي أو دقائق اللغة أو التهديدات الخاصة بقطاعك.", "Off the shelf training rarely reflects local context, language nuance, or the specific threats your industry faces.") },
              { t: getText("غياب التغيير السلوكي القابل للقياس", "No measurable behavior change"), d: getText("نسب الإكمال ليست تخفيضًا للمخاطر. بدون بيانات محاكاة لن تستطيع إثبات أن التوعية تعمل.", "Completion rates are not risk reduction. Without simulation data, you cannot prove security awareness is working.") },
              { t: getText("منفصل عن الهجمات الحقيقية", "Disconnected from real attacks"),         d: getText("التدريب ومحاكاة التصيد يعيشان في أدوات منفصلة، فلا يمكن ربط حدث نقر بنتيجة تعلّم.", "Training and phishing simulation live in separate tools, so teams cannot tie a click event to a learning outcome.") },
            ].map((f, i) => (
              <div key={i} className={`${card} p-7 flex gap-4`} style={{ borderColor: undefined }}>
                <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={13} className="text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-[#E8EEF3] text-sm mb-1.5">{f.t}</h4>
                  <p className="text-gray-500 dark:text-[#7B8794] text-sm leading-relaxed">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FLOW ── */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHead
            eyebrow={getText("دورة سايبرفش", "The CyberPhish loop")}
            title={<>{getText("منصة موحدة واحدة. ", "One unified platform. ")}<GradText>{getText("أربع خطوات متواصلة.", "Four continuous steps.")}</GradText></>}
            sub={getText("التوعية والمحاكاة والتحليلات مصممة لتعمل كحلقة مغلقة واحدة، لا كثلاث أدوات منفصلة.", "Awareness, simulation, and analytics designed to work as a single closed loop instead of three disconnected tools.")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", t: getText("المحاكاة", "Simulate"), d: getText("نفّذ حملات تصيد واقعية ومحلية لتكشف عن مواطن المخاطر الحقيقية في مؤسستك.", "Run realistic, localized phishing campaigns to expose risk where it actually lives in your organization.") },
              { n: "02", t: getText("التدريب", "Train"),     d: getText("أسند تلقائيًا دورات قصيرة وتمارين تفاعلية لكل من نقر على المحاكاة.", "Auto assign AI generated micro courses and interactive labs to anyone who clicked.") },
              { n: "03", t: getText("القياس", "Measure"),   d: getText("قِس المخاطر البشرية لكل قسم ودور وأقدمية، بتقارير جاهزة للمدققين.", "Quantify human cyber risk by department, role, and seniority, with auditor ready reporting.") },
              { n: "04", t: getText("التحسين", "Improve"),  d: getText("كرّر ربع سنوي. شاهد درجة المخاطر تنخفض، ثم أثبت ذلك للإدارة.", "Iterate quarterly. Watch your organization's risk score drop, then prove it to the board.") },
            ].map(s => (
              <div key={s.n} className={`${card} p-7 hover:shadow-md hover:border-green-100 dark:hover:border-[#34D399]/20 transition-all group`}>
                <div className="text-4xl font-black text-gray-100 dark:text-[#1A2330] group-hover:text-green-100 dark:group-hover:text-[#1A2330] transition-colors mb-5 tabular-nums">{s.n}</div>
                <h4 className="font-bold text-gray-900 dark:text-[#E8EEF3] mb-2">{s.t}</h4>
                <p className="text-gray-500 dark:text-[#7B8794] text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FEATURES ACCORDION ── */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHead
            eyebrow={getText("قدرات المنصة الأساسية", "Core platform capabilities")}
            title={<>{getText("مبنية للنتائج الأمنية ", "Built for the security outcomes ")}<GradText>{getText("التي تهم فعلًا.", "that matter.")}</GradText></>}
            sub={getText("كل وحدة مصممة حول نتيجة عمل قابلة للقياس. استخدمها معًا أو ابدأ بما تحتاجه.", "Each module is designed around a measurable business outcome. Use them together or start with just what you need.")}
          />
          <div className={`grid lg:grid-cols-[380px_1fr] gap-8 items-start ${isRTL ? "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1" : ""}`}>
            {/* Left: accordion navigation */}
            <div className="space-y-1.5">
              {FEATURES.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full ${isRTL ? "text-right" : "text-left"} px-4 py-3.5 rounded-xl transition-all flex items-start gap-3.5 group ${
                    i === activeFeature
                      ? "border shadow-sm"
                      : "border border-transparent hover:bg-gray-50 dark:hover:bg-[#131B26]"
                  }`}
                  style={i === activeFeature ? { background: "rgba(16,185,129,0.06)", borderColor: "rgba(16,185,129,0.25)" } : {}}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                    style={i === activeFeature
                      ? { background: "#10B981", color: "#fff" }
                      : { background: "rgba(0,0,0,0.05)", color: "#9CA3AF" }}
                  >
                    <f.Icon size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm transition-colors ${
                      i === activeFeature
                        ? "text-gray-900 dark:text-[#E8EEF3]"
                        : "text-gray-500 dark:text-[#7B8794] group-hover:text-gray-700 dark:group-hover:text-[#A7B4C0]"
                    }`}>
                      {f.title}
                    </div>
                    {i === activeFeature && (
                      <p className="text-xs text-gray-500 dark:text-[#7B8794] leading-relaxed mt-1.5">{f.desc}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Right: live screenshot preview */}
            <div className="relative lg:sticky lg:top-24">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.09) 0%, transparent 70%)" }} />
              <div className="relative">
                <Browser url={FEATURES[activeFeature].url} img={FEATURES[activeFeature].img} />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── 13. USE CASES ── */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHead
            eyebrow={getText("مصممة لكل فريق", "Built for every team")}
            title={getText("من قسم تقنية بشخصين إلى مؤسسات تضم 50 ألف موظف.", "From two person IT to fifty thousand employee enterprises.")}
            sub={getText("تتوسع سايبرفش مع نضج برنامج الأمن لديك وتتكيف مع من يدير البرنامج فعليًا.", "CyberPhish scales with your security maturity and adapts to who is running the program.")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, i) => (
              <div key={i} className={`${card} p-7 hover:shadow-md hover:border-green-200 dark:hover:border-[#34D399]/20 transition-all`}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#10B981" }}>{uc.tag}</div>
                <h4 className="font-bold text-gray-900 dark:text-[#E8EEF3] mb-2">{uc.title}</h4>
                <p className="text-gray-500 dark:text-[#7B8794] text-sm leading-relaxed mb-4">{uc.desc}</p>
                <ul className="space-y-1">
                  {uc.items.map((item, j) => (
                    <li key={j} className={`text-xs text-gray-400 dark:text-[#5E6B79] flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="w-1 h-1 rounded-full bg-green-400 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. TESTIMONIALS ── */}
      <section className="py-24 md:py-32 bg-green-50 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHead
            eyebrow={getText("قصص من الميدان", "Stories from the field")}
            title={getText("فرق أمن استبدلت مزود التوعية القديم بسايبرفش.", "Security teams who replaced their old awareness vendor.")}
          />
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`rounded-2xl p-7 flex flex-col gap-5 shadow-sm ${
                t.featured
                  ? "bg-white dark:bg-[#131B26] border-2 border-green-200 dark:border-[#34D399]/30"
                  : `${card}`
              }`}>
                {t.tag && <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#10B981" }}>{t.tag}</div>}
                <p className={`text-gray-700 dark:text-[#A7B4C0] leading-relaxed flex-1 ${t.featured ? "text-base" : "text-sm"} ${isRTL ? "text-right" : ""}`}>"{t.quote}"</p>
                <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 rounded-full text-white text-xs font-black flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg,#10B981,#14B8A6)" }}>
                    {t.initials}
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <div className="text-sm font-bold text-gray-900 dark:text-[#E8EEF3]">{t.name}</div>
                    <div className="text-xs text-gray-400 dark:text-[#5E6B79]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. FINAL CTA ── */}
      <section className="py-24 md:py-32 dark:border-t dark:border-white/[0.07]" style={{ background: "linear-gradient(135deg,#064e3b 0%,#065f46 50%,#0f766e 100%)" }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <Eyebrow light>{getText("جاهزون حين تكون جاهزًا", "Ready when you are")}</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            {getText("حوّل أضعف طبقاتك إلى ", "Turn your weakest layer into your ")}
            <span className="text-green-200">{getText("أقوى خط دفاع.", "strongest defense.")}</span>
          </h2>
          <p className="text-green-100/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {getText("شاهد عرضًا لمدة 30 دقيقة على بياناتك. دون التزام ودون شرائح تقديمية.", "See a 30 minute walkthrough of CyberPhish on your own data. No commitment, no slide deck demo.")}
          </p>
          <div className={`flex flex-col sm:flex-row gap-3 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <a href="https://cyberphish-staging.laravel.cloud/register" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-colors shadow-lg"
              style={{ background: "#10B981" }}
              onMouseOver={e => (e.currentTarget.style.background = "#059669")}
              onMouseOut={e => (e.currentTarget.style.background = "#10B981")}
            >
              {getText("اطلب عرضًا توضيحيًا", "Book a demo")} →
            </a>
            <a href="https://cyberphish-staging.laravel.cloud/dashboard" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 bg-white/10 text-white hover:bg-white/20 font-semibold text-sm transition-colors"
            >
              {getText("تحدث مع المبيعات", "Talk to sales")}
            </a>
          </div>
          <div className={`flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-green-200/50 justify-center mt-7 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span>SOC 2 Type II</span><span className="opacity-40">·</span>
            <span>ISO 27001</span><span className="opacity-40">·</span>
            <span>EN / عربي</span>
          </div>
        </div>
      </section>

    </div>
  );
}
