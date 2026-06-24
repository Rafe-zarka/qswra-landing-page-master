import { useState } from "react";
import { useLanguage } from "@/polymet/components/language-context";
import { Sun, Moon, Zap, Shield, Users, MapPin } from "lucide-react";
import { PageHero, GradText, useTheme, card } from "@/polymet/components/cyberphish-shared";

export default function CyberPhishContact() {
  const { getText, isRTL } = useLanguage();
  const { dark, toggle } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const CHANNELS = [
    {
      Icon: Zap,
      title: getText("المبيعات", "Sales"),
      desc: getText("احجز عرضًا لمدة 30 دقيقة. سنريك المنصة على بيانات مؤسستك الفعلية.", "Book a 30 minute demo. We'll walk you through the platform on your actual company data."),
      email: "sales@cyberphish.io",
      cta: getText("احجز عرضًا", "Book a demo"),
      href: "https://cyberphish-staging.laravel.cloud/register",
    },
    {
      Icon: Shield,
      title: getText("الدعم الفني", "Support"),
      desc: getText("عملاء Business وEnterprise يحصلون على دعم ذي أولوية برد خلال 4 ساعات.", "Business and Enterprise customers get priority support with a 4 hour response time."),
      email: "support@cyberphish.io",
      cta: getText("افتح طلبًا", "Open a ticket"),
      href: "#form",
    },
    {
      Icon: Users,
      title: getText("الشراكات", "Partnerships"),
      desc: getText("موزعون، مزودو خدمات مدارة، واستشاريون مهتمون بتوفير سايبرفش لعملائهم.", "Resellers, MSPs, and consultants interested in offering CyberPhish to their customers."),
      email: "partners@cyberphish.io",
      cta: getText("تواصل مع الشراكات", "Reach partnerships"),
      href: "#form",
    },
  ];

  const OFFICES = getText([
    { city: "الرياض", addr: "العليا، طريق الملك فهد، الرياض، المملكة العربية السعودية" },
    { city: "دبي", addr: "مدينة دبي للإنترنت، الإمارات العربية المتحدة" },
    { city: "عمّان", addr: "العبدلي، عمّان، الأردن" },
  ], [
    { city: "Riyadh", addr: "Olaya, King Fahd Road, Riyadh, Saudi Arabia" },
    { city: "Dubai", addr: "Dubai Internet City, UAE" },
    { city: "Amman", addr: "Abdali, Amman, Jordan" },
  ]);

  const SUBJECTS = getText(
    ["استفسار عام", "المبيعات", "الدعم الفني", "الشراكات", "الصحافة"],
    ["General inquiry", "Sales", "Support", "Partnerships", "Press"]
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1117] transition-colors duration-200" dir={isRTL ? "rtl" : "ltr"}>
      <button onClick={toggle} aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors bg-white dark:bg-[#131B26] border-gray-200 dark:border-white/[0.12] text-gray-500 dark:text-[#A7B4C0] hover:border-[#10B981] hover:text-[#10B981]">
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <PageHero
        eyebrow={getText("تواصل معنا", "Get in touch")}
        title={<>{getText("نرد على كل رسالة ", "We respond to every message ")}<GradText>{getText("خلال يوم عمل.", "within one business day.")}</GradText></>}
        sub={getText("سواء كنت تريد عرضًا توضيحيًا، أو تحتاج دعمًا، أو مهتمًا بالشراكة — الفريق المناسب يستمع.", "Whether you want a demo, need support, or are interested in partnering — the right team is listening.")}
      />

      {/* Channels */}
      <section className="py-16 bg-white dark:bg-[#0B1117]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-5">
            {CHANNELS.map((c, i) => (
              <div key={i} className={`${card} p-7 flex flex-col gap-4`}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                  <c.Icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-[#E8EEF3] mb-2">{c.title}</h4>
                  <p className="text-gray-500 dark:text-[#7B8794] text-sm leading-relaxed">{c.desc}</p>
                </div>
                <a href={`mailto:${c.email}`} className="text-sm font-semibold" style={{ color: "#10B981" }}>{c.email}</a>
                <a href={c.href} className="self-start inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 border-gray-200 dark:border-white/[0.12] text-gray-700 dark:text-[#A7B4C0] hover:border-[#10B981] hover:text-[#10B981] text-sm font-semibold transition-colors">
                  {c.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + offices */}
      <section id="form" className="py-24 md:py-32 bg-gray-50/60 dark:bg-[#0F1620]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">

            {/* Form */}
            <div className={`${card} p-8`}>
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-[#E8EEF3] mb-2">{getText("شكرًا لتواصلك", "Thanks for reaching out")}</h3>
                  <p className="text-gray-500 dark:text-[#7B8794] text-sm">{getText("سنرد عليك خلال يوم عمل واحد.", "We will get back to you within one business day.")}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-[#E8EEF3] mb-1">{getText("أرسل لنا رسالة", "Send us a message")}</h3>
                  <p className="text-sm text-gray-500 dark:text-[#7B8794] mb-6">{getText("نرد على كل رسالة خلال يوم عمل واحد.", "We respond to every message within one business day.")}</p>
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className={`grid grid-cols-2 gap-4 ${isRTL ? "direction-rtl" : ""}`}>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">{getText("الاسم الأول", "First name")}</label>
                        <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#0B1117] text-gray-900 dark:text-[#E8EEF3] text-sm focus:outline-none focus:border-[#10B981]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">{getText("اسم العائلة", "Last name")}</label>
                        <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#0B1117] text-gray-900 dark:text-[#E8EEF3] text-sm focus:outline-none focus:border-[#10B981]" />
                      </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4 ${isRTL ? "direction-rtl" : ""}`}>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">{getText("البريد المهني", "Work email")}</label>
                        <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#0B1117] text-gray-900 dark:text-[#E8EEF3] text-sm focus:outline-none focus:border-[#10B981]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">{getText("الموضوع", "Subject")}</label>
                        <select required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#0B1117] text-gray-900 dark:text-[#E8EEF3] text-sm focus:outline-none focus:border-[#10B981]">
                          {(SUBJECTS as string[]).map((s, i) => <option key={i}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">{getText("الرسالة", "Message")}</label>
                      <textarea required rows={5} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#0B1117] text-gray-900 dark:text-[#E8EEF3] text-sm focus:outline-none focus:border-[#10B981] resize-none" />
                    </div>
                    <button type="submit" className="w-full py-3 rounded-xl font-semibold text-sm text-white" style={{ background: "#10B981" }}>
                      {getText("إرسال الرسالة", "Send message")} →
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Offices */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-[#E8EEF3]">{getText("مكاتبنا", "Our offices")}</h3>
              <div className="space-y-4">
                {(OFFICES as any[]).map((o, i) => (
                  <div key={i} className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                      <MapPin size={15} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 dark:text-[#E8EEF3]">{o.city}</div>
                      <div className="text-xs text-gray-500 dark:text-[#7B8794] mt-0.5">{o.addr}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 dark:border-white/[0.07] pt-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-[#5E6B79] font-mono mb-3">
                  {getText("الدعم العاجل", "Urgent support")}
                </div>
                <p className="text-sm text-gray-500 dark:text-[#7B8794]">
                  {getText("عملاء Enterprise: ", "Enterprise customers: ")}
                  <a href="tel:+9661000" className="font-semibold text-gray-900 dark:text-[#E8EEF3]">+966 1000 0000</a>
                </p>
                <p className="text-xs text-gray-400 dark:text-[#5E6B79] mt-1">
                  {getText("24×7 مع SLA مضمون.", "24 by 7 with guaranteed SLA.")}
                </p>
              </div>
              <div className="border-t border-gray-100 dark:border-white/[0.07] pt-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-[#5E6B79] font-mono mb-3">
                  {getText("الصحافة والإعلام", "Press and media")}
                </div>
                <a href="mailto:press@cyberphish.io" className="text-sm font-semibold" style={{ color: "#10B981" }}>press@cyberphish.io</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
