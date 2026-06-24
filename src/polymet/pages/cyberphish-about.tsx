import { useLanguage } from "@/polymet/components/language-context";
import { Sun, Moon, Shield, Globe, Gauge, Users } from "lucide-react";
import { SectionHead, PageHero, FinalCTA, GradText, useTheme, card } from "@/polymet/components/cyberphish-shared";

export default function CyberPhishAbout() {
  const { getText, isRTL } = useLanguage();
  const { dark, toggle } = useTheme();

  const STATS = getText([
    { v: "120+", l: "مؤسسة عميلة" },
    { v: "300K+", l: "موظف يتدرب شهريًا" },
    { v: "9", l: "دول مغطاة" },
    { v: "64٪", l: "متوسط خفض النقر" },
  ], [
    { v: "120+", l: "Enterprise customers" },
    { v: "300K+", l: "Employees trained monthly" },
    { v: "9", l: "Countries covered" },
    { v: "64%", l: "Average click rate reduction" },
  ]);

  const VALUES = [
    { Icon: Shield, title: getText("احترام الموظف", "Respect the employee"), desc: getText("نبني تجارب توعية يفخر الموظفون بقضاء وقتهم فيها، لا يتذمرون منها.", "We build awareness experiences employees are proud to spend time on, not annoyed by.") },
    { Icon: Globe,  title: getText("عربية أولًا", "Arabic first"),           desc: getText("نصمم باللغة العربية أولًا، ثم نوسّع للإنجليزية ولغات أخرى. ليس العكس.", "We design in Arabic first, then expand to English and other languages. Not the other way around.") },
    { Icon: Gauge,  title: getText("قابلية القياس", "Measurable by default"), desc: getText("كل ميزة نبنيها يجب أن ترتبط برقم يمكن لمسؤول أمن الدفاع عنه أمام الإدارة.", "Every feature we ship must tie back to a number a security leader can defend to the board.") },
    { Icon: Users,  title: getText("شراكة طويلة الأجل", "Long term partnership"), desc: getText("نعامل عملاءنا كشركاء استراتيجيين، لا كبنود في خط أنابيب مبيعات.", "We treat customers as strategic partners, not line items in a sales pipeline.") },
  ];

  const TEAM = getText([
    { i: "RZ", n: "رافع زرقا", r: "الرئيس التنفيذي والمؤسس" },
    { i: "LA", n: "ليلى العمري", r: "رئيسة المنتج" },
    { i: "OM", n: "عمر منصور", r: "رئيس الهندسة" },
    { i: "NK", n: "ندى خوري", r: "رئيسة العمليات" },
    { i: "YS", n: "ياسر صبري", r: "قائد الأمن" },
    { i: "FT", n: "فاطمة الطوال", r: "قائدة التصميم" },
    { i: "AR", n: "أحمد ريان", r: "قائد الذكاء الاصطناعي" },
    { i: "HM", n: "هلا مرعي", r: "قائدة نجاح العملاء" },
  ], [
    { i: "RZ", n: "Rafe Zarka", r: "CEO and founder" },
    { i: "LO", n: "Laila Al Amri", r: "Head of product" },
    { i: "OM", n: "Omar Mansour", r: "Head of engineering" },
    { i: "NK", n: "Nada Khoury", r: "Head of operations" },
    { i: "YS", n: "Yasser Sabri", r: "Security lead" },
    { i: "FT", n: "Fatima Al Tawil", r: "Design lead" },
    { i: "AR", n: "Ahmed Rayan", r: "AI lead" },
    { i: "HM", n: "Hala Maree", r: "Customer success lead" },
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1117] transition-colors duration-200" dir={isRTL ? "rtl" : "ltr"}>
      <button onClick={toggle} aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors bg-white dark:bg-[#131B26] border-gray-200 dark:border-white/[0.12] text-gray-500 dark:text-[#A7B4C0] hover:border-[#10B981] hover:text-[#10B981]">
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <PageHero
        eyebrow={getText("عن سايبرفش", "About CyberPhish")}
        title={<>{getText("بُنيت في المنطقة ", "Built in the region ")}<GradText>{getText("للمنطقة أولًا.", "for the region first.")}</GradText></>}
        sub={getText("فريق من 40 شخصًا موزعين بين الرياض ودبي وعمّان والقاهرة. خبراء أمن، مهندسون، مصممون، وكتّاب محتوى عربي.", "A team of 40 people across Riyadh, Dubai, Amman and Cairo. Security experts, engineers, designers, and Arabic content writers.")}
      />

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {(STATS as any[]).map((s, i) => (
              <div key={i} className={`${card} p-7`}>
                <div className="text-4xl font-black mb-2 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#10B981,#14B8A6)" }}>{s.v}</div>
                <div className="text-sm text-gray-500 dark:text-[#7B8794]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-gray-50/60 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className={isRTL ? "text-right" : ""}>
            <span className="text-[10px] font-bold uppercase tracking-widest block mb-4" style={{ color: "#10B981" }}>
              {getText("قصتنا", "Our story")}
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-[#E8EEF3] mb-8 leading-tight">
              {getText("بدأت سايبرفش من ملاحظة بسيطة.", "CyberPhish started from a simple observation.")}
            </h2>
            <div className="space-y-5 text-gray-600 dark:text-[#A7B4C0] text-base leading-relaxed">
              <p>{getText(
                "كنا نبني أدوات أمنية لعملاء مؤسسيين في المنطقة، ولاحظنا أن جميعهم يواجهون المشكلة نفسها. ينفقون ملايين على جدران نارية وحماية نقاط النهاية، ثم تبدأ كل اختراق تقريبًا برسالة بريد إلكتروني واحدة.",
                "We were building security tools for enterprise customers across the region, and noticed they all faced the same problem. Millions spent on firewalls and endpoint protection, then almost every breach started with a single email."
              )}</p>
              <p>{getText(
                "كانت برامج التوعية القائمة عبارة عن فيديوهات سنوية بالإنجليزية. لا أحد يتذكرها بعد شهرين. لم يكن هناك بيانات تربط النقر بنتيجة تعلم. ولم يكن هناك محتوى عربي يحترم الموظفين الذين يستخدمونه.",
                "Existing awareness programs were annual English videos. Nobody remembered them two months later. There was no data tying a click to a learning outcome. And there was no Arabic content that respected the employees actually using it."
              )}</p>
              <p>{getText(
                "بنينا سايبرفش لتكون أول منصة مخاطر بشرية مصممة لمنطقتنا أولًا، ثم للعالم. أصيلة بالعربية، مرتبطة بضوابطك، ومبنية على فكرة بسيطة. الموظفون قابلون للتدريب إن منحتهم أدوات لائقة.",
                "We built CyberPhish to be the first human risk platform designed for our region first, then for the world. Natively Arabic, mapped to your controls, and built on a simple belief. Employees are trainable when you give them respectful tools."
              )}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHead
            eyebrow={getText("ما نؤمن به", "What we believe")}
            title={getText("القيم التي تُشكّل كل قرار نتخذه.", "The values that shape every decision we make.")}
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className={`${card} p-7`}>
                <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                  <v.Icon size={20} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-[#E8EEF3] mb-2">{v.title}</h4>
                <p className="text-gray-500 dark:text-[#7B8794] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-gray-50/60 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHead
            eyebrow={getText("الفريق", "The team")}
            title={getText("الأشخاص الذين يبنون سايبرفش.", "The people who build CyberPhish.")}
            sub={getText("فريق موزع بين الرياض ودبي وعمّان والقاهرة. نؤمن بالأمن، ونعشق اللغة العربية.", "Distributed across Riyadh, Dubai, Amman and Cairo. We believe in security and love Arabic.")}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {(TEAM as any[]).map((m, i) => (
              <div key={i} className={`${card} p-6 text-center`}>
                <div className="w-14 h-14 rounded-full text-white text-base font-black flex items-center justify-center mx-auto mb-3"
                  style={{ background: "linear-gradient(135deg,#10B981,#14B8A6)" }}>
                  {m.i}
                </div>
                <div className="font-bold text-gray-900 dark:text-[#E8EEF3] text-sm">{m.n}</div>
                <div className="text-xs text-gray-400 dark:text-[#5E6B79] mt-0.5">{m.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
