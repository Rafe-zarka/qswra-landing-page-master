import { useState } from "react";
import { useLanguage } from "@/polymet/components/language-context";
import { Sun, Moon, BarChart2, BookOpen, Shield, Sparkles } from "lucide-react";
import { SectionHead, PageHero, FinalCTA, GradText, useTheme, card } from "@/polymet/components/cyberphish-shared";

export default function CyberPhishResources() {
  const { getText, isRTL } = useLanguage();
  const { dark, toggle } = useTheme();
  const [cat, setCat] = useState("all");
  const [email, setEmail] = useState("");
  const [subDone, setSubDone] = useState(false);

  const CATS = [
    { id: "all",       label: getText("الكل", "All") },
    { id: "research",  label: getText("بحث", "Research") },
    { id: "playbooks", label: getText("أدلة عملية", "Playbooks") },
    { id: "threat",    label: getText("تهديدات", "Threat briefs") },
    { id: "product",   label: getText("تحديثات المنتج", "Product updates") },
  ];

  const POSTS = getText([
    { c: "research",  tag: "بحث",             t: "خمسة أنماط تصيد تتزايد في 2026",                         e: "حللنا 180,000 محاولة تصيد. هذه الأنماط التي يجب أن يراقبها فريق الأمن لديك.",          d: "12 مايو 2026",  m: "8 دقائق" },
    { c: "playbooks", tag: "دليل عملي",        t: "كيف تطلق برنامج توعية في 30 يومًا",                      e: "دليل عملي مبني على ما رأيناه ينجح في 120 مؤسسة. مع قائمة تحقق.",                       d: "5 مايو 2026",   m: "12 دقيقة" },
    { c: "threat",    tag: "تهديد",            t: "موجة تصيد جديدة تستهدف القطاع المصرفي",                   e: "ما رأيناه خلال آخر أسبوعين، وكيف تحمي موظفيك خلال 48 ساعة.",                           d: "1 مايو 2026",   m: "6 دقائق" },
    { c: "product",   tag: "تحديث منتج",       t: "تكامل Slack وMicrosoft Teams متاح الآن",                  e: "أرسل تنبيهات المخاطر والتعلم مباشرة في القنوات التي يستخدمها فريقك.",                    d: "28 أبريل 2026", m: "3 دقائق" },
    { c: "research",  tag: "بحث",             t: "لماذا تفشل برامج التوعية بالإنجليزية فقط",                e: "البيانات الكمية وراء جودة المحتوى العربي وأثره على معدلات التفاعل.",                      d: "20 أبريل 2026", m: "10 دقائق" },
    { c: "playbooks", tag: "دليل عملي",        t: "ربط برنامج التوعية بـ ISO 27001",                         e: "خريطة عملية تربط ضوابط ISO بمزايا CyberPhish وتقاريرها.",                              d: "12 أبريل 2026", m: "9 دقائق" },
    { c: "threat",    tag: "تهديد",            t: "هندسة اجتماعية عبر WhatsApp في القطاع الحكومي",           e: "اتجاه متزايد لاحظناه في الأشهر الثلاثة الأخيرة. كيف تتدرب فرقك ضده.",                  d: "8 أبريل 2026",  m: "5 دقائق" },
    { c: "product",   tag: "تحديث منتج",       t: "مولّد الدورات الذكي أسرع ثلاث مرات",                      e: "تحسينات الأداء التي تخفض زمن التوليد من 24 دقيقة إلى 8 دقائق.",                         d: "1 أبريل 2026",  m: "4 دقائق" },
    { c: "research",  tag: "بحث",             t: "مقارنة معدلات النقر حسب القطاع 2025",                      e: "أرقام مرجعية لمساعدتك في تقييم برنامجك مقارنة بأقرانك في المنطقة.",                      d: "22 مارس 2026",  m: "7 دقائق" },
  ], [
    { c: "research",  tag: "Research",         t: "Five phishing patterns rising in 2026",                   e: "We analyzed 180,000 phishing attempts. These are the patterns your security team should watch.", d: "May 12, 2026",    m: "8 min read" },
    { c: "playbooks", tag: "Playbook",         t: "How to launch an awareness program in 30 days",           e: "A field tested playbook based on what we have seen work at 120 organizations. With a checklist.",  d: "May 5, 2026",     m: "12 min read" },
    { c: "threat",    tag: "Threat brief",     t: "A new phishing wave targeting banking",                   e: "What we have observed over the past two weeks, and how to protect your employees in 48 hours.",   d: "May 1, 2026",     m: "6 min read" },
    { c: "product",   tag: "Product update",   t: "Slack and Microsoft Teams integrations are live",         e: "Send risk and learning notifications directly to the channels your team already uses.",           d: "April 28, 2026",  m: "3 min read" },
    { c: "research",  tag: "Research",         t: "Why English only awareness programs fail in MENA",        e: "The quantitative data behind Arabic content quality and its impact on engagement rates.",          d: "April 20, 2026",  m: "10 min read" },
    { c: "playbooks", tag: "Playbook",         t: "Mapping your awareness program to ISO 27001",             e: "A practical map linking ISO controls to CyberPhish capabilities and reports.",                    d: "April 12, 2026",  m: "9 min read" },
    { c: "threat",    tag: "Threat brief",     t: "Social engineering via WhatsApp in public sector",        e: "A growing trend we have spotted in the last quarter. How to train your teams against it.",        d: "April 8, 2026",   m: "5 min read" },
    { c: "product",   tag: "Product update",   t: "AI course generator is three times faster",               e: "Performance improvements that cut generation time from 24 minutes down to 8 minutes.",           d: "April 1, 2026",   m: "4 min read" },
    { c: "research",  tag: "Research",         t: "Click rate benchmarks by industry, 2025",                 e: "Reference numbers to help you evaluate your program against peers across the region.",           d: "March 22, 2026",  m: "7 min read" },
  ]);

  const CAT_ICON: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    research: BarChart2, playbooks: BookOpen, threat: Shield, product: Sparkles,
  };

  const CAT_COLOR: Record<string, string> = {
    research: "bg-blue-50 dark:bg-blue-900/20",
    playbooks: "bg-green-50 dark:bg-green-900/20",
    threat: "bg-red-50 dark:bg-red-900/20",
    product: "bg-purple-50 dark:bg-purple-900/20",
  };

  const filtered = cat === "all" ? POSTS : POSTS.filter((p: { c: string }) => p.c === cat);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1117] transition-colors duration-200" dir={isRTL ? "rtl" : "ltr"}>
      <button onClick={toggle} aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors bg-white dark:bg-[#131B26] border-gray-200 dark:border-white/[0.12] text-gray-500 dark:text-[#A7B4C0] hover:border-[#10B981] hover:text-[#10B981]">
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <PageHero
        eyebrow={getText("أبحاث وأدلة من الميدان", "Research and playbooks from the field")}
        title={<>{getText("اعرف أكثر عن ", "Know more about ")}<GradText>{getText("المخاطر البشرية.", "human cyber risk.")}</GradText></>}
        sub={getText("تقارير بحثية وأدلة عملية وملخصات تهديدات وتحديثات المنتج من فريق سايبرفش.", "Research reports, field playbooks, threat briefings, and product updates from the CyberPhish team.")}
      />

      {/* Featured research */}
      <section className="py-16 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className={`grid md:grid-cols-2 gap-0 ${card} overflow-hidden`}>
            <div className="p-10 flex flex-col gap-5">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#10B981" }}>
                {getText("بحث مميز", "Featured research")}
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-[#E8EEF3] leading-tight">
                {getText("حالة المخاطر البشرية في الشرق الأوسط 2026.", "The state of human cyber risk in the Middle East, 2026.")}
              </h2>
              <p className="text-gray-500 dark:text-[#7B8794] leading-relaxed text-sm">
                {getText("تقرير شامل مبني على بيانات 300,000 موظف عبر تسع دول. كيف يقارن أداء قطاعك ببقية المنطقة.", "A comprehensive report built on data from 300,000 employees across nine countries. See how your industry stacks up against the region.")}
              </p>
              <a href="#" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white" style={{ background: "#10B981" }}>
                {getText("تحميل التقرير", "Download the report")} →
              </a>
              <div className="text-xs text-gray-400 dark:text-[#5E6B79] font-mono flex gap-3">
                <span>{getText("42 صفحة", "42 pages")}</span><span>·</span><span>PDF</span><span>·</span><span>EN / AR</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-[#0F1620] dark:to-[#131B26] flex items-center justify-center p-10">
              <div className={`w-48 aspect-[3/4] ${card} p-6 flex flex-col gap-4 shadow-xl`}>
                <div className="text-[10px] font-bold uppercase tracking-widest font-mono" style={{ color: "#10B981" }}>CYBERPHISH 2026</div>
                <div className="text-base font-bold text-gray-900 dark:text-[#E8EEF3] leading-tight">
                  {getText("حالة المخاطر البشرية", "State of Human Risk")}
                </div>
                <div className="space-y-2 mt-auto">
                  {[72, 54, 88].map((w, i) => (
                    <div key={i} className="h-1.5 bg-gray-100 dark:bg-[#1A2330] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${w}%`, background: "linear-gradient(135deg,#10B981,#14B8A6)" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 bg-gray-50/60 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHead
            eyebrow={getText("آخر ما نشرنا", "Latest")}
            title={getText("أبحاث وأدلة من الميدان.", "Research and playbooks from the field.")}
          />
          {/* Category filter */}
          <div className={`flex flex-wrap gap-2 justify-center mb-10 ${isRTL ? "flex-row-reverse" : ""}`}>
            {CATS.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  cat === c.id
                    ? "text-white shadow-sm"
                    : "bg-white dark:bg-[#131B26] text-gray-600 dark:text-[#7B8794] border border-gray-200 dark:border-white/[0.07] hover:border-[#10B981] hover:text-[#10B981]"
                }`}
                style={cat === c.id ? { background: "#10B981" } : {}}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(filtered as any[]).map((p, i) => {
              const Icon = CAT_ICON[p.c] || BarChart2;
              return (
                <a key={i} href="#" className={`${card} flex flex-col hover:shadow-md hover:border-green-200 dark:hover:border-[#34D399]/20 transition-all overflow-hidden`}>
                  <div className={`h-28 flex items-center justify-center ${CAT_COLOR[p.c]}`}>
                    <Icon size={28} style={{ color: "#10B981" }} />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#10B981" }}>{p.tag}</span>
                    <h4 className="font-bold text-gray-900 dark:text-[#E8EEF3] text-sm leading-snug">{p.t}</h4>
                    <p className="text-gray-500 dark:text-[#7B8794] text-xs leading-relaxed flex-1">{p.e}</p>
                    <div className="text-[11px] text-gray-400 dark:text-[#5E6B79] font-mono flex gap-2">
                      <span>{p.d}</span><span>·</span><span>{p.m}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-xl">
          <div className="rounded-2xl border border-[#10B981]/20 p-10 text-center" style={{ background: "rgba(16,185,129,0.05)" }}>
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#10B981" }}>
              {getText("نشرة شهرية", "Monthly newsletter")}
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-[#E8EEF3] mt-3 mb-3 leading-tight">
              {getText("أحدث الأبحاث والتهديدات في صندوق بريدك.", "The latest research and threats in your inbox.")}
            </h2>
            <p className="text-gray-500 dark:text-[#7B8794] text-sm mb-6">
              {getText("ملخص شهري قصير. لا بريد عشوائي. يمكنك إلغاء الاشتراك في أي وقت.", "One short monthly briefing. No spam. Unsubscribe at any time.")}
            </p>
            {subDone ? (
              <div className="py-3 font-semibold text-green-600 dark:text-[#6EE7B7]">
                {getText("شكرًا! سنتواصل معك قريبًا.", "Thanks! We'll be in touch.")}
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubDone(true); }}
                className={`flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder={getText("بريدك للعمل", "Your work email")}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#131B26] text-gray-900 dark:text-[#E8EEF3] text-sm focus:outline-none focus:border-[#10B981]"
                />
                <button type="submit" className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white shrink-0" style={{ background: "#10B981" }}>
                  {getText("اشترك", "Subscribe")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
