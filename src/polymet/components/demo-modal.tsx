import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useDemoModal } from "@/polymet/components/demo-modal-context";
import { useLanguage } from "@/polymet/components/language-context";

const COUNTRY_CODES = [
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+965", label: "🇰🇼 +965" },
  { code: "+974", label: "🇶🇦 +974" },
  { code: "+973", label: "🇧🇭 +973" },
  { code: "+968", label: "🇴🇲 +968" },
  { code: "+962", label: "🇯🇴 +962" },
  { code: "+20",  label: "🇪🇬 +20" },
  { code: "+1",   label: "🇺🇸 +1" },
  { code: "+44",  label: "🇬🇧 +44" },
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  return /^[\d\s\-()]{6,20}$/.test(phone.trim());
}

export default function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const { getText, isRTL } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+966",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) {
      setForm({ firstName: "", lastName: "", email: "", countryCode: "+966", phone: "" });
      setErrors({});
      setSubmitted(false);
      setSubmitError("");
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = getText("الاسم الأول مطلوب", "First name is required");
    if (!form.lastName.trim())  e.lastName  = getText("اسم العائلة مطلوب", "Last name is required");
    if (!form.email.trim()) {
      e.email = getText("البريد المهني مطلوب", "Work email is required");
    } else if (!validateEmail(form.email)) {
      e.email = getText("صيغة البريد غير صحيحة", "Invalid email format");
    }
    if (!form.phone.trim()) {
      e.phone = getText("رقم الهاتف مطلوب", "Phone number is required");
    } else if (!validatePhone(form.phone)) {
      e.phone = getText("رقم الهاتف غير صحيح", "Invalid phone number");
    }
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const inputCls = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl border text-gray-900 text-sm focus:outline-none transition-colors bg-white ${
      errors[field] ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-[#10B981]"
    }`;

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      dir={isRTL ? "rtl" : "ltr"}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onClick={handleBackdropClick}
    >
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header row */}
        <div className={`flex items-start justify-between p-6 pb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className={isRTL ? "text-right" : ""}>
            <div className={`flex items-center gap-2 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <img
                src={`${import.meta.env.BASE_URL}screenshots/cyberphish-icon.png`}
                alt="CyberPhish"
                className="w-7 h-7 rounded-lg object-cover shadow-sm shadow-green-200"
              />
              <span className="text-[13px] font-black text-gray-900 tracking-tight">Cyberphish</span>
            </div>
            <h2 id="demo-modal-title" className="text-lg font-bold text-gray-900 leading-tight">
              {getText("احجز عرضك التوضيحي", "Book your demo")}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5 leading-snug">
              {getText(
                "جلسة مخصصة 30 دقيقة على بيانات مؤسستك الفعلية.",
                "A personalised 30-min session on your company's actual data."
              )}
            </p>
          </div>
          <button
            onClick={closeModal}
            aria-label={getText("إغلاق", "Close")}
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            style={{ marginInlineStart: "12px" }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mx-6" />

        {/* Body */}
        <div className="px-6 pt-5 pb-6">
          {submitted ? (
            <div className="text-center py-8">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}
              >
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {getText("طلبك في الطريق!", "Your demo is booked!")}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {getText(
                  "سيتواصل معك أحد أعضاء فريقنا خلال يوم عمل واحد لتأكيد موعدك.",
                  "A member of our team will reach out within one business day to confirm your slot."
                )}
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: "#10B981" }}
              >
                {getText("إغلاق", "Close")}
              </button>
            </div>
          ) : (
            <>
              {submitError && (
                <div className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                  <AlertCircle size={15} className="shrink-0" />
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* First + Last name */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      {getText("الاسم الأول", "First Name")} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      className={inputCls("firstName")}
                      autoComplete="given-name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      {getText("اسم العائلة", "Last Name")} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className={inputCls("lastName")}
                      autoComplete="family-name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Work email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
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
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone + country code */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    {getText("رقم الهاتف", "Phone Number")} <span className="text-red-400">*</span>
                  </label>
                  <div className={`flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <select
                      value={form.countryCode}
                      onChange={(e) => handleChange("countryCode", e.target.value)}
                      className="px-2.5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:border-[#10B981] shrink-0"
                      aria-label={getText("رمز الدولة", "Country code")}
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`flex-1 ${inputCls("phone")}`}
                      autoComplete="tel"
                      placeholder="500000000"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-opacity disabled:opacity-70 mt-2"
                  style={{ background: "linear-gradient(135deg,#10B981,#14B8A6)" }}
                >
                  {loading ? (
                    <><Loader2 size={16} className="animate-spin" />{getText("جارٍ الإرسال...", "Submitting...")}</>
                  ) : (
                    getText("احجز عرضي التوضيحي", "Book my demo")
                  )}
                </button>

                {/* Consent */}
                <p className="text-xs text-gray-400 leading-relaxed text-center">
                  {getText(
                    "بالمتابعة، أوافق على أن يتواصل معي فريق سايبرفش. بياناتك محمية وفق ",
                    "By continuing, I agree to be contacted by the CyberPhish team. Data protected under our "
                  )}
                  <Link
                    to="/privacy-policy"
                    onClick={closeModal}
                    className="underline hover:text-green-600 transition-colors"
                  >
                    {getText("سياسة الخصوصية", "Privacy Policy")}
                  </Link>
                  {"."}
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
