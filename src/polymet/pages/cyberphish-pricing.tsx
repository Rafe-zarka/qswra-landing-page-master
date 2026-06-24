import { useState } from "react";
import { useLanguage } from "@/polymet/components/language-context";
import { Check, Sun, Moon } from "lucide-react";
import { Eyebrow, SectionHead, PageHero, FinalCTA, GradText, useTheme, card } from "@/polymet/components/cyberphish-shared";
import { Link } from "react-router-dom";

export default function CyberPhishPricing() {
  const { getText, isRTL } = useLanguage();
  const { dark, toggle } = useTheme();
  const [openFaq, setOpenFaq] = useState(0);

  const PLANS = [
    {
      name: getText("Starter", "Starter"),
      desc: getText("للفرق الصغيرة التي تبدأ ببناء برنامج توعية.", "For small teams starting to build an awareness program."),
      price: "$4",
      suffix: getText("لكل موظف / شهريًا", "per employee / month"),
      featured: false,
      cta: getText("ابدأ تجربة مجانية", "Start free trial"),
      href: "https://cyberphish-staging.laravel.cloud/register",
      features: getText(
        ["حتى 250 موظف", "محاكاة تصيد جاهزة", "مكتبة دورات أساسية", "تقارير قابلة للتصدير", "دعم بريد إلكتروني"],
        ["Up to 250 employees", "Templated phishing campaigns", "Core course library", "Exportable reports", "Email support"]
      ),
    },
    {
      name: getText("Business", "Business"),
      desc: getText("للمؤسسات التي تريد قياس المخاطر البشرية وتحسينها.", "For organizations that want to measure and improve human risk."),
      price: "$8",
      suffix: getText("لكل موظف / شهريًا", "per employee / month"),
      featured: true,
      cta: getText("اطلب عرضًا توضيحيًا", "Book a demo"),
      href: "https://cyberphish-staging.laravel.cloud/register",
      features: getText(
        ["كل ما في Starter", "موظفون بلا سقف", "مولّد الدورات بالذكاء الاصطناعي", "مختبرات تفاعلية كاملة", "نقاط مخاطر لكل موظف", "SSO وSCIM", "تكامل Slack وTeams"],
        ["Everything in Starter", "Unlimited employees", "AI course generator", "Full interactive labs", "Per employee risk scoring", "SSO and SCIM", "Slack and Teams integrations"]
      ),
    },
    {
      name: getText("Enterprise", "Enterprise"),
      desc: getText("للمؤسسات الكبرى وذات المتطلبات التنظيمية الصارمة.", "For large enterprises and organizations with strict regulatory requirements."),
      price: getText("تسعير مخصص", "Custom"),
      suffix: getText("تواصل مع فريق المبيعات", "contact sales"),
      featured: false,
      cta: getText("تحدث مع المبيعات", "Talk to sales"),
      href: "/products/cyberphish/contact",
      features: getText(
        ["كل ما في Business", "إقامة بيانات إقليمية", "بيئات منفصلة لكل كيان", "ربط ضوابط امتثال مفصّل", "مدير نجاح عملاء مخصص", "دعم 24×7 ذو أولوية", "اتفاقيات SLA مخصصة"],
        ["Everything in Business", "Regional data residency", "Separate environments per entity", "Custom compliance control mapping", "Dedicated customer success manager", "24 by 7 priority support", "Custom SLAs"]
      ),
    },
  ];

  const COMPARE = getText([
    { g: "المحاكاة والتدريب", rows: [
      ["محاكاة التصيد", "✓", "✓", "✓"],
      ["مكتبة الدورات الأساسية", "✓", "✓", "✓"],
      ["مولّد الدورات الذكي", "—", "✓", "✓"],
      ["محرر دورات مخصص", "—", "✓", "✓"],
      ["مختبرات تفاعلية", "محدود", "كامل", "كامل"],
    ]},
    { g: "التحليلات والتقارير", rows: [
      ["نقاط مخاطر لكل موظف", "—", "✓", "✓"],
      ["تقارير قابلة للتصدير", "PDF", "PDF / CSV", "PDF / CSV / API"],
      ["ربط ضوابط الامتثال", "أساسي", "ISO / NIST", "مخصص"],
      ["سجلات تدقيق", "30 يومًا", "سنة", "غير محدودة"],
    ]},
    { g: "الأمن والإدارة", rows: [
      ["SSO عبر SAML", "—", "✓", "✓"],
      ["SCIM للهوية", "—", "—", "✓"],
      ["إقامة بيانات إقليمية", "—", "—", "✓"],
      ["بيئات منفصلة", "—", "—", "✓"],
    ]},
    { g: "الدعم", rows: [
      ["دعم بالبريد الإلكتروني", "وقت العمل", "أولوية", "24×7"],
      ["مدير نجاح عملاء", "—", "مشترك", "مخصص"],
      ["اتفاقية SLA", "—", "99.9٪", "مخصصة"],
    ]},
  ], [
    { g: "Simulation and training", rows: [
      ["Phishing simulation", "✓", "✓", "✓"],
      ["Core course library", "✓", "✓", "✓"],
      ["AI course generator", "—", "✓", "✓"],
      ["Custom course builder", "—", "✓", "✓"],
      ["Interactive labs", "Limited", "Full", "Full"],
    ]},
    { g: "Analytics and reporting", rows: [
      ["Per employee risk scoring", "—", "✓", "✓"],
      ["Exportable reports", "PDF", "PDF / CSV", "PDF / CSV / API"],
      ["Compliance control mapping", "Basic", "ISO / NIST", "Custom"],
      ["Audit log retention", "30 days", "1 year", "Unlimited"],
    ]},
    { g: "Security and admin", rows: [
      ["SSO via SAML", "—", "✓", "✓"],
      ["SCIM provisioning", "—", "—", "✓"],
      ["Regional data residency", "—", "—", "✓"],
      ["Separate environments", "—", "—", "✓"],
    ]},
    { g: "Support", rows: [
      ["Email support", "Business hours", "Priority", "24 by 7"],
      ["Customer success manager", "—", "Shared", "Dedicated"],
      ["SLA", "—", "99.9%", "Custom"],
    ]},
  ]);

  const FAQS = getText([
    { q: "كيف يتم احتساب المقاعد؟", a: "المقعد هو موظف نشط في النظام خلال الشهر. الحسابات الإدارية وحسابات الاختبار مجانية." },
    { q: "هل يوجد عقد سنوي؟", a: "نعم، السعر المعلن يفترض الدفع السنوي. تتوفر الفوترة الشهرية بزيادة 20٪." },
    { q: "هل تقدمون باقة تجريبية؟", a: "نعم، نقدم باقة تجريبية لمدة 14 يومًا على الباقة Business دون بطاقة ائتمان." },
    { q: "هل أنتم متوفرون على سحابات إقليمية؟", a: "نعم، باقة Enterprise تدعم النشر على سحابات إقليمية تشمل الرياض ودبي والقاهرة." },
  ], [
    { q: "How are seats counted?", a: "A seat is an active employee in the system during the month. Admin and test accounts are free." },
    { q: "Is there an annual contract?", a: "Yes. Listed pricing assumes annual billing. Monthly billing is available at a 20% premium." },
    { q: "Do you offer a free trial?", a: "Yes. We offer a 14 day pilot on the Business plan with no credit card required." },
    { q: "Are you available on regional clouds?", a: "Yes. Enterprise plans support deployment on regional clouds including Riyadh, Dubai, and Cairo." },
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1117] transition-colors duration-200" dir={isRTL ? "rtl" : "ltr"}>
      <button onClick={toggle} aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors bg-white dark:bg-[#131B26] border-gray-200 dark:border-white/[0.12] text-gray-500 dark:text-[#A7B4C0] hover:border-[#10B981] hover:text-[#10B981]">
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <PageHero
        eyebrow={getText("أسعار شفافة بلا مفاجآت", "Transparent pricing, no surprises")}
        title={<><GradText>{getText("بسيط. شفاف.", "Simple. Transparent.")}</GradText>{getText(" ومبني على النتائج.", " Built on outcomes.")}</>}
        sub={getText("لا وحدات مخفية. لا رسوم إعداد. ادفع لكل موظف نشط شهريًا.", "No hidden modules. No setup fees. Pay per active employee, monthly.")}
      />

      {/* Plan cards */}
      <section className="py-16 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 flex flex-col gap-5 ${
                p.featured
                  ? "text-white shadow-2xl"
                  : `${card}`
              }`}
                style={p.featured ? { background: "linear-gradient(145deg,#065f46,#0f766e)" } : {}}
              >
                {p.featured && (
                  <span className="self-start text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-green-100">
                    {getText("الأكثر شيوعًا", "Most popular")}
                  </span>
                )}
                <div>
                  <div className={`text-lg font-black mb-1 ${p.featured ? "text-white" : "text-gray-900 dark:text-[#E8EEF3]"}`}>{p.name}</div>
                  <div className={`text-sm leading-relaxed ${p.featured ? "text-green-100/80" : "text-gray-500 dark:text-[#7B8794]"}`}>{p.desc}</div>
                </div>
                <div>
                  <span className={`text-4xl font-black ${p.featured ? "text-white" : "text-gray-900 dark:text-[#E8EEF3]"}`}>{p.price}</span>
                  {p.price.startsWith("$") && <span className={`text-sm ml-1 ${p.featured ? "text-green-100/70" : "text-gray-400 dark:text-[#5E6B79]"}`}>USD</span>}
                  <div className={`text-xs mt-1 ${p.featured ? "text-green-100/70" : "text-gray-400 dark:text-[#5E6B79]"}`}>{p.suffix}</div>
                </div>
                <ul className="space-y-2 flex-1">
                  {(p.features as string[]).map((f, j) => (
                    <li key={j} className={`text-sm flex items-start gap-2 ${p.featured ? "text-green-50" : "text-gray-600 dark:text-[#A7B4C0]"} ${isRTL ? "flex-row-reverse" : ""}`}>
                      <Check size={13} className="shrink-0 mt-0.5" style={{ color: p.featured ? "#6EE7B7" : "#10B981" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                {p.href.startsWith("/") ? (
                  <Link to={p.href}
                    className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-colors ${
                      p.featured
                        ? "bg-white text-green-700 hover:bg-green-50"
                        : "border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-white/[0.04]"
                    }`}>
                    {p.cta} →
                  </Link>
                ) : (
                  <a href={p.href} target="_blank" rel="noreferrer"
                    className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-colors block ${
                      p.featured
                        ? "bg-white text-green-700 hover:bg-green-50"
                        : "border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-white/[0.04]"
                    }`}>
                    {p.cta} →
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 dark:text-[#5E6B79] mt-6">
            {getText("* الأسعار بالدولار الأمريكي. يُشترط الفوترة السنوية. متاحة فوترة شهرية بزيادة 20٪.", "* Prices in USD. Annual billing required. Monthly billing available at a 20% premium.")}
          </p>
        </div>
      </section>

      {/* Compare table */}
      <section className="py-24 md:py-32 bg-gray-50/60 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHead
            eyebrow={getText("مقارنة الباقات", "Plan comparison")}
            title={getText("تفصيل كل ما تحصل عليه.", "Every detail of what you get.")}
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/[0.07]">
                  <th className="text-start py-3 px-4 font-semibold text-gray-500 dark:text-[#7B8794] w-1/2"></th>
                  {["Starter", "Business", "Enterprise"].map(h => (
                    <th key={h} className="text-center py-3 px-4 font-bold text-gray-900 dark:text-[#E8EEF3]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((g, gi) => (
                  <>
                    <tr key={`g${gi}`} className="bg-gray-100/60 dark:bg-white/[0.03]">
                      <td colSpan={4} className="py-2.5 px-4 text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-[#5E6B79] font-mono">{g.g}</td>
                    </tr>
                    {g.rows.map((r, ri) => (
                      <tr key={`r${gi}-${ri}`} className="border-b border-gray-100 dark:border-white/[0.05]">
                        {r.map((cell, ci) => (
                          <td key={ci} className={`py-3 px-4 ${ci === 0 ? "text-gray-600 dark:text-[#A7B4C0]" : `text-center font-semibold ${cell === "✓" ? "text-green-500" : cell === "—" ? "text-gray-300 dark:text-[#5E6B79]" : "text-gray-700 dark:text-[#A7B4C0]"}`}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHead
            eyebrow={getText("أسئلة شائعة", "Common questions")}
            title={getText("أسئلة حول الأسعار.", "Pricing questions.")}
          />
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className={`${card} overflow-hidden`}>
                <button
                  className={`w-full text-start flex items-center justify-between gap-4 px-6 py-4 font-semibold text-sm text-gray-900 dark:text-[#E8EEF3] hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <span className="text-lg text-gray-400 dark:text-[#5E6B79] shrink-0 transition-transform" style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-500 dark:text-[#7B8794] leading-relaxed border-t border-gray-100 dark:border-white/[0.05] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
