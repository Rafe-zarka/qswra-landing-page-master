import { useLanguage } from "@/polymet/components/language-context";
import { Sun, Moon } from "lucide-react";
import { Eyebrow, SectionHead, PageHero, FinalCTA, GradText, useTheme, card } from "@/polymet/components/cyberphish-shared";

export default function CyberPhishSolutions() {
  const { getText, isRTL } = useLanguage();
  const { dark, toggle } = useTheme();

  const BY_ROLE = [
    { tag: getText("الشركات الكبرى", "Enterprises"),           title: getText("خفض المخاطر البشرية على نطاق واسع", "Reduce human risk at scale"),        desc: getText("إدارة آلاف الموظفين عبر وحدات أعمال متعددة بنقاط مخاطر حسب الدور.", "Manage thousands of employees across business units with role based scoring."),    items: getText(["متعدد المستأجرين", "SSO وSCIM", "تقارير جاهزة للتدقيق"], ["Multi tenant", "SSO and SCIM", "Audit ready reporting"]) },
    { tag: getText("القطاع الحكومي", "Government"),             title: getText("سيادي وعربي أولًا", "Sovereign and Arabic first"),                        desc: getText("انشر على سحابات إقليمية بمحتوى عربي أصيل ودعم كامل لاتجاه RTL.", "Deploy on regional clouds with Arabic native content and full RTL support."),         items: getText(["إقامة بيانات إقليمية", "محتوى عربي أصيل", "علامة تجارية مخصصة"], ["Regional data residency", "Arabic native content", "Custom branding"]) },
    { tag: getText("فرق الموارد البشرية", "HR teams"),         title: getText("تأهيل يثبت في الذاكرة", "Onboarding that actually sticks"),              desc: getText("اجعل التوعية جزءًا من اليوم الأول بمسارات تعلم تُسند تلقائيًا.", "Bake awareness training into day one with auto assigned learning paths."),             items: getText(["مسارات تعلم", "شهادات", "تتبع التقدم"], ["Learning paths", "Certificates", "Progress tracking"]) },
    { tag: getText("أقسام تقنية المعلومات", "IT departments"), title: getText("تخفيف العبء على فرق الأمن", "Lighten the security ops load"),             desc: getText("أعطِ تقنية المعلومات صلاحية إطلاق الحملات دون طوابير تذاكر الأمن.", "Empower IT to launch campaigns without security ticket queues."),                     items: getText(["حملات ذاتية الخدمة", "قوالب جاهزة", "تنبيهات Slack وTeams"], ["Self serve campaigns", "Pre built templates", "Slack and Teams alerts"]) },
    { tag: getText("فرق الامتثال", "Compliance teams"),        title: getText("أدلة جاهزة لكل تدقيق", "Evidence for every audit"),                      desc: getText("صدّر تقارير جاهزة للمدققين مرتبطة بضوابط ISO 27001 وNIST وPCI DSS.", "Export auditor ready reports tied to ISO 27001, NIST and PCI DSS controls."),         items: getText(["ضوابط مرتبطة", "سجلات محصّنة", "PDPL وGDPR"], ["Mapped controls", "Tamper proof logs", "PDPL and GDPR aligned"]) },
    { tag: getText("الشركات الصغيرة", "SMBs"),                 title: getText("بمعايير الشركات الكبرى بحجم مناسب", "Enterprise grade, right sized"),     desc: getText("ابدأ خلال أسبوع بقوالب مضبوطة مسبقًا حسب قطاعك.", "Get started in under a week with templates pre tuned for your industry."),              items: getText(["تأهيل خلال أسبوع", "قوالب حسب القطاع", "تسعير ثابت لكل مقعد"], ["Onboarding in one week", "Industry templates", "Flat per seat pricing"]) },
  ];

  const BY_INDUSTRY = getText([
    { tag: "الأعلى تنظيمًا", t: "البنوك والخدمات المالية", d: "فرق امتثال تخضع لـ SAMA وقوانين البنوك المركزية، تحتاج إلى أدلة قابلة للتدقيق ومحتوى محلي." },
    { tag: "سيادي", t: "الحكومة والقطاع العام", d: "متطلبات سيادة بيانات صارمة، ودعم كامل للعربية، وعلامات تجارية متعددة لكيانات الجهة." },
    { tag: "محمي", t: "الرعاية الصحية", d: "بيانات مرضى حساسة وتدفقات بريد تخضع للهندسة الاجتماعية. توعية موجهة لكل دور." },
    { tag: "صناعي", t: "الطاقة والمرافق", d: "بيئة OT حساسة، فرق ميدانية، وحاجة إلى توعية قابلة للوصول حتى في الأماكن النائية." },
    { tag: "موزّع", t: "الخدمات اللوجستية والتوزيع", d: "قوى عاملة متنقلة، تواصل بالعربية يومي، وموظفون يستخدمون أجهزة شخصية." },
    { tag: "حجم كبير", t: "تجارة التجزئة والضيافة", d: "تدوير عمالة سريع، يتطلب تأهيل توعية يومه الأول وتعزيز شهري بسيط." },
  ], [
    { tag: "Most regulated", t: "Banking and financial services", d: "Compliance teams under SAMA and central bank regulations need auditable evidence and localized content." },
    { tag: "Sovereign", t: "Government and public sector", d: "Strict data sovereignty requirements, full Arabic support, and multi entity branding." },
    { tag: "Protected", t: "Healthcare", d: "Sensitive patient data and email flows exposed to social engineering. Role specific awareness needed." },
    { tag: "Industrial", t: "Energy and utilities", d: "Sensitive OT environment, field teams, and awareness reachable in remote locations." },
    { tag: "Distributed", t: "Logistics and distribution", d: "Mobile workforce, daily Arabic communications, and employees using personal devices." },
    { tag: "High volume", t: "Retail and hospitality", d: "Rapid workforce turnover requires day one onboarding and simple monthly reinforcement." },
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1117] transition-colors duration-200" dir={isRTL ? "rtl" : "ltr"}>
      <button onClick={toggle} aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors bg-white dark:bg-[#131B26] border-gray-200 dark:border-white/[0.12] text-gray-500 dark:text-[#A7B4C0] hover:border-[#10B981] hover:text-[#10B981]">
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <PageHero
        eyebrow={getText("مصممة لكل فريق وقطاع", "Built for every team and industry")}
        title={<>{getText("من فريق تقنية مؤلف من شخصين ", "From a two person IT team ")}<GradText>{getText("إلى مؤسسات تضم 50 ألف موظف.", "to a fifty thousand employee enterprise.")}</GradText></>}
        sub={getText("تتوسع سايبرفش مع نضج برنامج الأمن لديك وتتكيف مع من يدير البرنامج فعليًا وما يحتاجه قطاعك.", "CyberPhish scales with your security maturity and adapts to who is running the program and what your industry requires.")}
      >
        <a href="https://cyberphish-staging.laravel.cloud/register" target="_blank" rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white shadow-lg"
          style={{ background: "#10B981" }}>
          {getText("اطلب عرضًا توضيحيًا", "Book a demo")} →
        </a>
      </PageHero>

      {/* By role */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHead
            eyebrow={getText("حسب الفريق", "By team")}
            title={getText("حل مناسب لكل من يدير برنامج الأمن.", "A fit for whoever runs the security program.")}
            sub={getText("اختر الحالة التي تنطبق عليك لترى كيف تُكيّف سايبرفش نفسها للمتطلبات الدقيقة.", "Pick the profile that fits you to see how CyberPhish adapts to the specific requirements.")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BY_ROLE.map((uc, i) => (
              <div key={i} className={`${card} p-7 hover:shadow-md hover:border-green-200 dark:hover:border-[#34D399]/20 transition-all`}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#10B981" }}>{uc.tag}</div>
                <h4 className="font-bold text-gray-900 dark:text-[#E8EEF3] mb-2">{uc.title}</h4>
                <p className="text-gray-500 dark:text-[#7B8794] text-sm leading-relaxed mb-4">{uc.desc}</p>
                <ul className="space-y-1">
                  {uc.items.map((item: string, j: number) => (
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

      {/* By industry */}
      <section className="py-24 md:py-32 bg-amber-50 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHead
            eyebrow={getText("حسب القطاع", "By industry")}
            title={getText("نعرف القطاعات التي نخدمها.", "We know the industries we serve.")}
            sub={getText("كل قطاع لديه أنماط هجوم مختلفة ومتطلبات تنظيمية مختلفة. نُكيّف المحاكاة والمحتوى ليناسب.", "Every industry faces different attack patterns and regulatory requirements. We tune simulation and content to match.")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BY_INDUSTRY.map((ind, i) => (
              <div key={i} className={`${card} p-7 hover:shadow-md transition-all`}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#10B981" }}>{ind.tag}</div>
                <h4 className="font-bold text-gray-900 dark:text-[#E8EEF3] mb-2">{ind.t}</h4>
                <p className="text-gray-500 dark:text-[#7B8794] text-sm leading-relaxed">{ind.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
