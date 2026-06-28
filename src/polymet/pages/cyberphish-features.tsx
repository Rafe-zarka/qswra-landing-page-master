import { useLanguage } from "@/polymet/components/language-context";
import { Mail, Sparkles, Zap, Gauge, BarChart2, BookOpen, Check, Sun, Moon } from "lucide-react";
import { Browser, Eyebrow, SectionHead, PageHero, FinalCTA, GradText, useTheme, card } from "@/polymet/components/cyberphish-shared";
import { useDemoModal } from "@/polymet/components/demo-modal-context";

const BASE = import.meta.env.BASE_URL + "screenshots/";

export default function CyberPhishFeatures() {
  const { getText, isRTL } = useLanguage();
  const { dark, toggle } = useTheme();
  const { openModal } = useDemoModal();

  const CAPS = [
    { Icon: Mail,     title: getText("محاكاة التصيد", "Phishing simulations"),           desc: getText("حملات موجهة ومحلية. جاهزة أو مخصصة بالكامل، مع صفحات هبوط واقعية.", "Targeted, localized campaigns. Templated or fully custom, with realistic landing pages.") },
    { Icon: Sparkles, title: getText("توليد الدورات بالذكاء الاصطناعي", "AI course generation"), desc: getText("أنشئ شرائح وسرد صوتي وفيديو من نص واحد، بالعربية أو الإنجليزية.", "Generate slides, narration and video from a single prompt, in Arabic or English.") },
    { Icon: Zap,      title: getText("المختبرات التفاعلية", "Interactive labs"),          desc: getText("تدريب عملي على التصيد والبرمجيات الخبيثة وأمن الويب والجوال والأجهزة.", "Hands on phishing, malware, web, mobile and desktop security scenarios.") },
    { Icon: Gauge,    title: getText("نقاط المخاطر لكل موظف", "Employee risk scoring"),  desc: getText("درجة مخاطر مستمرة لكل موظف مبنية على السلوك لا على نسبة الإكمال.", "Continuous per employee risk score based on behavior, not completion.") },
    { Icon: BarChart2,title: getText("لوحات تحليلية", "Analytics dashboards"),           desc: getText("رؤية على مستوى الأقسام لقادة الأمن وتقنية المعلومات والامتثال.", "Department level human risk visibility for security, IT and compliance leaders.") },
    { Icon: BookOpen, title: getText("دعم SCORM 1.2 و 2004", "SCORM 1.2 and 2004"),      desc: getText("استورد محتوى تدريبيًا قائمًا أو صدّر محتوى سايبرفش إلى نظامك المؤسسي.", "Import existing courseware or export CyberPhish content to your enterprise LMS.") },
  ];

  const SHOWCASES = [
    {
      bg: "bg-gray-50/60 dark:bg-[#0F1620]",
      reverse: false,
      eyebrow:  getText("توليد الدورات بالذكاء الاصطناعي", "AI course generation"),
      title:    getText("من نص واحد إلى دورة كاملة ومحلية.", "From a single prompt to a full localized course."),
      copy:     getText("صف الموضوع والجمهور والنبرة. تكتب سايبرفش وتسرد وتولد وحدة تدريبية كاملة خلال دقائق.", "Describe the topic, audience, and tone. CyberPhish writes, narrates and renders a complete training module in minutes."),
      bullets:  [
        { t: getText("ثنائية اللغة بشكل أصيل.", "Native bilingual."), d: getText("أنشئ محتوى عربيًا أولًا أو إنجليزيًا بنبرة ثقافية دقيقة.", "Generate Arabic first or English content with culturally accurate tone.") },
        { t: getText("صوت وفيديو مضمّنان.", "Audio and video included."), d: getText("شرائح وسرد وفيديو من خط إنتاج واحد.", "Slides, narration and video produced from one pipeline.") },
        { t: getText("قابلة للتعديل.", "Editable."), d: getText("عدّل أي شريحة قبل النشر.", "Tweak any slide before publishing.") },
      ],
      url: "cyberphish.com / courses / ai-generate",
      img: BASE + "step1-create-course.png",
    },
    {
      bg: "",
      reverse: true,
      eyebrow:  getText("مكتبة دورات منسّقة", "Curated course library"),
      title:    getText("مكتبة توعية معيارية مرتبطة بضوابطك.", "A modular awareness library mapped to your controls."),
      copy:     getText("دورات إلزامية واختيارية مرتبة بحسب النتيجة السلوكية. تتبّع التقدم في المؤسسة كاملة من شاشة واحدة.", "Required and optional courses organized by behavior outcome. Track progress across the whole organization at a glance."),
      bullets:  [
        { t: getText("مسارات تعلم سلوكية.", "Behavior based learning paths."), d: getText("التأهيل والتصيد والبرمجيات الخبيثة والتصفح.", "Onboarding, phishing, malware, browsing.") },
        { t: getText("إلزامي أو اختياري.", "Required vs optional."), d: getText("فصل واضح بين محتوى الامتثال الإلزامي ومحتوى التطوير.", "Clear separation between mandatory compliance and growth content.") },
        { t: getText("تقدّم لحظي.", "Live progress."), d: getText("كل قسم، كل درجة، في عرض واحد.", "Every section, every score, in one view.") },
      ],
      url: "cyberphish.com / courses",
      img: BASE + "step4-analytics.png",
    },
    {
      bg: "bg-gray-50/60 dark:bg-[#0F1620]",
      reverse: false,
      eyebrow:  getText("المختبرات التفاعلية", "Interactive labs"),
      title:    getText("تدريب عملي على التهديدات الحقيقية.", "Hands on practice for real threats."),
      copy:     getText("سيناريوهات أمن البريد والأجهزة والويب والجوال يمكن تشغيلها داخل المتصفح.", "Email, desktop, web, and mobile security scenarios playable in the browser."),
      bullets:  [
        { t: getText("خمسة أسطح هجوم.", "Five attack surfaces."), d: getText("بريد، أجهزة، ويب، جوال، هندسة اجتماعية.", "Email, desktop, web, mobile, social engineering.") },
        { t: getText("صعوبة تتدرج.", "Progressive difficulty."), d: getText("كل سيناريو يتكيف مع ملف مخاطر الموظف.", "Each scenario adapts to the employee's risk profile.") },
        { t: getText("علاج يُسند تلقائيًا.", "Auto remediation."), d: getText("نقر على محاكاة؟ المختبر المناسب يُجدول تلقائيًا.", "Clicked a phish? The matching lab queues up automatically.") },
      ],
      url: "cyberphish.com / labs",
      img: BASE + "step3-interactive-labs.png",
    },
    {
      bg: "",
      reverse: true,
      eyebrow:  getText("تعزيز مستمر", "Continuous reinforcement"),
      title:    getText("الوعي لا يتوقف عند انتهاء التدريب.", "Awareness should not stop when training ends."),
      copy:     getText("أرسل نشرات داخلية بعلامتك تتضمن ملخصات للتهديدات واختبارات قصيرة وأبرز المخاطر.", "Send branded newsletters with threat briefings, recap quizzes, and team risk highlights."),
      bullets:  [
        { t: getText("قوالب بعلامتك.", "Branded templates."), d: getText("تتناسق مع أسلوب اتصالاتك الداخلية.", "Match your internal communications style.") },
        { t: getText("تهديد الشهر.", "Threat of the month."), d: getText("يُملأ تلقائيًا بأبرز اتجاهات الهجوم.", "Auto populated with relevant attack trends.") },
        { t: getText("تفاعل قابل للقياس.", "Engagement tracked."), d: getText("الفتح والنقر والإجابات تغذي درجة المخاطر.", "Opens, clicks, and quiz responses feed your risk score.") },
      ],
      url: "cyberphish.com / newsletters",
      img: BASE + "step2-phishing-sim.png",
    },
  ];

  const MATRIX = getText([
    { g: "محاكاة التصيد", items: ["قوالب حملات محلية بالعربية والإنجليزية", "محرر صفحات هبوط مرئي", "جدولة وأذونات الفريق", "تكامل مع Google Workspace وMicrosoft 365"] },
    { g: "التدريب والمحتوى", items: ["مولّد دورات بالذكاء الاصطناعي", "محرر دورات يدوي", "دعم SCORM 1.2 و2004", "شهادات وعلامات الإكمال"] },
    { g: "المختبرات", items: ["مختبرات أمن البريد", "أمن سطح المكتب والملفات الخبيثة", "تصفح آمن للويب", "أمن الجوال والهندسة الاجتماعية"] },
    { g: "التحليلات والامتثال", items: ["درجة مخاطر لكل موظف وقسم", "تقارير جاهزة للمدققين", "ربط بـ ISO 27001 وNIST وPCI DSS", "سجلات تدقيق محصّنة من العبث"] },
    { g: "الأمن والإدارة", items: ["SSO عبر SAML و OIDC", "SCIM لإدارة الهوية", "متعدد المستأجرين وإقامة بيانات إقليمية", "تكامل مع Slack وMicrosoft Teams"] },
  ], [
    { g: "Phishing simulation", items: ["Localized campaign templates in Arabic and English", "Visual landing page editor", "Scheduling and team permissions", "Google Workspace and Microsoft 365 integration"] },
    { g: "Training and content", items: ["AI course generator", "Manual course builder", "SCORM 1.2 and 2004 support", "Certificates and completion badges"] },
    { g: "Labs", items: ["Email security labs", "Desktop and malware hygiene", "Safe web browsing", "Mobile security and social engineering"] },
    { g: "Analytics and compliance", items: ["Per employee and per department risk scoring", "Auditor ready reports", "ISO 27001, NIST and PCI DSS mappings", "Tamper proof audit trails"] },
    { g: "Security and admin", items: ["SSO via SAML and OIDC", "SCIM identity provisioning", "Multi tenant with regional data residency", "Slack and Microsoft Teams integrations"] },
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1117] transition-colors duration-200" dir={isRTL ? "rtl" : "ltr"}>
      <button onClick={toggle} aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors bg-white dark:bg-[#131B26] border-gray-200 dark:border-white/[0.12] text-gray-500 dark:text-[#A7B4C0] hover:border-[#10B981] hover:text-[#10B981]">
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      {/* Hero */}
      <PageHero
        eyebrow={getText("كل قدرات المنصة", "Every platform capability")}
        title={<>{getText("مبنية للنتائج الأمنية ", "Built for the security outcomes ")}<GradText>{getText("التي تهم فعلًا.", "that matter.")}</GradText></>}
        sub={getText("من محاكاة التصيد إلى مولّد الدورات الذكي إلى المختبرات التفاعلية. كل مزية تنتهي بنتيجة قابلة للقياس.", "From phishing simulation to AI course generation to interactive labs. Every capability ends with a measurable outcome.")}
      >
        <div className={`flex flex-col sm:flex-row gap-3 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white shadow-lg transition-opacity hover:opacity-90"
            style={{ background: "#10B981" }}>
            {getText("اطلب عرضًا توضيحيًا", "Book a demo")} →
          </button>
        </div>
      </PageHero>

      {/* Capabilities grid */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHead
            eyebrow={getText("القدرات الأساسية", "Core capabilities")}
            title={getText("ست وحدات، نتيجة واحدة.", "Six modules, one outcome.")}
            sub={getText("كل وحدة تنتهي بخفض قابل للقياس في درجة المخاطر البشرية.", "Each module ends with a measurable reduction in your human risk score.")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPS.map((c, i) => (
              <div key={i} className={`${card} p-7 hover:shadow-md transition-all`}>
                <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                  <c.Icon size={20} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-[#E8EEF3] text-sm mb-2">{c.title}</h4>
                <p className="text-gray-500 dark:text-[#7B8794] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase blocks */}
      {SHOWCASES.map((block, i) => (
        <section key={i} className={`py-24 md:py-32 ${block.bg || "bg-white dark:bg-[#0B1117]"}`}>
          <div className="container mx-auto px-6 max-w-6xl">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${block.reverse ? "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1" : ""}`}>
              <div className={`space-y-6 ${isRTL ? "text-right" : ""}`}>
                <Eyebrow>{block.eyebrow}</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-[#E8EEF3] leading-tight">{block.title}</h2>
                <p className="text-gray-500 dark:text-[#7B8794] leading-relaxed">{block.copy}</p>
                <ul className="space-y-4">
                  {block.bullets.map((b, j) => (
                    <li key={j} className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-[#A7B4C0] leading-relaxed"><strong className="text-gray-900 dark:text-[#E8EEF3] font-semibold">{b.t}</strong> {b.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.09) 0%, transparent 70%)" }} />
                <div className="relative"><Browser url={block.url} img={block.img} /></div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Feature matrix */}
      <section className="py-24 md:py-32 bg-gray-50/60 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHead
            eyebrow={getText("كل ما هو مدمج", "Everything included")}
            title={getText("قائمة كاملة بمزايا المنصة.", "The complete platform feature list.")}
            sub={getText("لا وحدات مخفية. لا مفاجآت. كل ما تراه مدرج يشمله Business و Enterprise.", "No hidden modules. No surprises. Everything listed is included in Business and Enterprise plans.")}
          />
          <div className="space-y-7">
            {MATRIX.map((g, gi) => (
              <div key={gi}>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-[#5E6B79] mb-3 font-mono">{g.g}</h4>
                <div className={`${card} overflow-hidden`}>
                  {g.items.map((name, ii) => (
                    <div key={ii} className={`flex items-center justify-between px-5 py-3.5 text-sm ${ii > 0 ? "border-t border-gray-100 dark:border-white/[0.05]" : ""}`}>
                      <span className="text-gray-700 dark:text-[#A7B4C0]">{name}</span>
                      <Check size={14} className="shrink-0" style={{ color: "#10B981" }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
