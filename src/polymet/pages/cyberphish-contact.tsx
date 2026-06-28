import { useState } from "react";
import { useLanguage } from "@/polymet/components/language-context";
import { Sun, Moon, Zap, Shield, Users, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { PageHero, GradText, useTheme, card } from "@/polymet/components/cyberphish-shared";
import { Link } from "react-router-dom";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function CyberPhishContact() {
  const { getText, isRTL } = useLanguage();
  const { dark, toggle } = useTheme();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const CHANNELS = [
    {
      Icon: Zap,
      title: getText("المبيعات", "Sales"),
      desc: getText("لديك سؤال حول الخطط أو التسعير؟ فريق المبيعات هنا للمساعدة.", "Have a question about plans or pricing? Our sales team is here to help."),
      email: "sales@cyberphish.io",
      cta: getText("تواصل مع المبيعات", "Contact sales"),
      href: "#form",
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

  const SUBJECTS = getText(
    ["استفسار عام", "المبيعات", "الدعم الفني", "الشراكات", "الصحافة"],
    ["General inquiry", "Sales", "Support", "Partnerships", "Press"]
  ) as string[];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = getText("الاسم الأول مطلوب", "First name is required");
    if (!form.lastName.trim())  e.lastName  = getText("اسم العائلة مطلوب", "Last name is required");
    if (!form.email.trim()) {
      e.email = getText("البريد المهني مطلوب", "Work email is required");
    } else if (!validateEmail(form.email)) {
      e.email = getText("صيغة البريد غير صحيحة", "Invalid email format");
    }
    if (!form.message.trim()) e.message = getText("الرسالة مطلوبة", "Message is required");
    return e;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setLoading(true);
    setSubmitError("");
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setSubmitted(true);
    } catch {
      setSubmitError(getText("حدث خطأ. يرجى المحاولة مرة أخرى.", "Something went wrong. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  const inputCls = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl border text-gray-900 dark:text-[#E8EEF3] text-sm focus:outline-none transition-colors bg-white dark:bg-[#0B1117] ${
      errors[field]
        ? "border-red-400 focus:border-red-400"
        : "border-gray-200 dark:border-white/[0.07] focus:border-[#10B981]"
    }`;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1117] transition-colors duration-200" dir={isRTL ? "rtl" : "ltr"}>
      <button onClick={toggle} aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-colors bg-white dark:bg-[#131B26] border-gray-200 dark:border-white/[0.12] text-gray-500 dark:text-[#A7B4C0] hover:border-[#10B981] hover:text-[#10B981]">
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <PageHero
        eyebrow={getText("تواصل معنا", "Get in touch")}
        title={<>{getText("نرد على كل رسالة ", "We respond to every message ")}<GradText>{getText("خلال يوم عمل.", "within one business day.")}</GradText></>}
        sub={getText("سواء كنت تبحث عن معلومات، تحتاج دعمًا، أو مهتمًا بالشراكة — الفريق المناسب يستمع.", "Whether you need information, support, or are interested in partnering — the right team is listening.")}
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

            {/* Contact form */}
            <div className={`${card} p-8`}>
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-[#E8EEF3] mb-2">{getText("شكرًا لتواصلك", "Thanks for reaching out")}</h3>
                  <p className="text-gray-500 dark:text-[#7B8794] text-sm">{getText("سنرد عليك خلال يوم عمل واحد.", "We will get back to you within one business day.")}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-[#E8EEF3] mb-1">{getText("أرسل لنا رسالة", "Send us a message")}</h3>
                  <p className="text-sm text-gray-500 dark:text-[#7B8794] mb-6">{getText("نرد على كل رسالة خلال يوم عمل واحد.", "We respond to every message within one business day.")}</p>

                  {submitError && (
                    <div className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle size={15} className="shrink-0" />
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {/* First + Last name */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">
                          {getText("الاسم الأول", "First Name")} <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          className={inputCls("firstName")}
                          autoComplete="given-name"
                        />
                        {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">
                          {getText("اسم العائلة", "Last Name")} <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          className={inputCls("lastName")}
                          autoComplete="family-name"
                        />
                        {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                      </div>
                    </div>

                    {/* Work email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">
                        {getText("البريد المهني", "Work Email")} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={inputCls("email")}
                        autoComplete="email"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">
                        {getText("الموضوع", "Subject")}
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className={inputCls("subject")}
                      >
                        <option value="">{getText("اختر موضوعًا", "Select a subject")}</option>
                        {SUBJECTS.map((s, i) => <option key={i} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-[#A7B4C0] mb-1.5">
                        {getText("الرسالة", "Message")} <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={5}
                        className={`${inputCls("message")} resize-none`}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-opacity disabled:opacity-70"
                      style={{ background: "#10B981" }}
                    >
                      {loading ? (
                        <><Loader2 size={16} className="animate-spin" />{getText("جارٍ الإرسال...", "Sending...")}</>
                      ) : (
                        getText("إرسال الرسالة", "Send Message")
                      )}
                    </button>

                    <p className="text-xs text-gray-400 dark:text-[#5E6B79] leading-relaxed text-center">
                      {getText(
                        "بإرسال هذه الرسالة، توافق على معالجة بياناتك وفق ",
                        "By sending this message, you agree to our handling of your data under our "
                      )}
                      <Link to="/privacy-policy" className="underline hover:text-green-600 transition-colors">
                        {getText("سياسة الخصوصية", "Privacy Policy")}
                      </Link>
                      {"."}
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Offices + support */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-[#E8EEF3]">{getText("مكاتبنا", "Our offices")}</h3>
              <div className="space-y-4">
                <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                    <MapPin size={15} />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <div className="font-semibold text-sm text-gray-900 dark:text-[#E8EEF3]">{getText("الرياض", "Riyadh")}</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 dark:border-white/[0.07] pt-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-[#5E6B79] font-mono mb-3">
                  {getText("الدعم العاجل", "Urgent support")}
                </div>
                <p className="text-sm text-gray-500 dark:text-[#7B8794]">
                  {getText("عملاء Enterprise: ", "Enterprise customers: ")}
                  <a href="tel:+966575043074" className="font-semibold text-gray-900 dark:text-[#E8EEF3]">+966 57 504 3074</a>
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
