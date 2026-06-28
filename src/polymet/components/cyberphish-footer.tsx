import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";
import { Link } from "react-router-dom";

export default function CyberphishFooter() {
  const { getText, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // ─── columns data ─────────────────────────────────────────────────────

  const companyLinks = [
    { ar: "عن سايبرفيش",  en: "About Cyberphish",  href: "#" },
    { ar: "تواصل معنا",   en: "Contact Us",         href: "/#contact" },
    { ar: "قسورة",        en: "Qswra (Parent Co.)", href: "/" },
    { ar: "الوظائف",      en: "Careers",            href: "#" },
    { ar: "شراكات",       en: "Partnerships",       href: "#" },
  ];

  const resourceLinks = [
    { ar: "المدونة",                  en: "Blog",               href: "#" },
    { ar: "مركز المساعدة",            en: "Help Center",        href: "#" },
    { ar: "التوثيق",                  en: "Documentation",      href: "#" },
    { ar: "سياسة الخصوصية",          en: "Privacy Policy",     href: "/privacy-policy" },
    { ar: "شروط الاستخدام",           en: "Terms of Use",       href: "/terms-of-use" },
  ];

  const trustPoints = [
    { ar: "بدون بطاقة ائتمان",    en: "No credit card required" },
    { ar: "استضافة سعودية 100%",  en: "100% Saudi hosting" },
    { ar: "دعم فني 24/7",         en: "24/7 support" },
  ];

  // ─── render ───────────────────────────────────────────────────────────
  return (
    <footer className="relative bg-white border-t border-green-100 overflow-hidden">

      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 end-0 w-[500px] h-[400px] bg-gradient-to-bl from-green-50 to-transparent" />
        <div className="absolute bottom-0 start-0 w-[400px] h-[300px] bg-gradient-to-tr from-teal-50/60 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "radial-gradient(circle, #16a34a 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════
          MINI CTA STRIP
      ══════════════════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-r from-green-600 via-green-550 to-teal-500">
        {/* subtle shine */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        <div className="relative container mx-auto px-4 py-8 max-w-6xl">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-5 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            {/* Left: message */}
            <div className={`space-y-1 ${isRTL ? "text-right" : ""}`}>
              <p className="text-white font-extrabold text-lg md:text-xl leading-snug">
                {getText(
                  "حماية فريقك تبدأ من هنا",
                  "Your team's protection starts here"
                )}
              </p>
              <p className="text-green-100 text-sm">
                {getText(
                  "ابدأ مجاناً، بدون تعقيد، بدون بطاقة ائتمان",
                  "Free to start, no complexity, no credit card"
                )}
              </p>
            </div>
            {/* Right: CTA button */}
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 font-bold px-7 h-12 rounded-xl shadow-lg shadow-green-900/20 shrink-0 gap-2 transition-colors"
              onClick={() => window.open("https://cyberphish-staging.laravel.cloud/register", "_blank")}
            >
              {isRTL
                ? <><ArrowIcon className="h-4 w-4" />{getText("ابدأ مجاناً", "Start Free")}</>
                : <>{getText("ابدأ مجاناً", "Start Free")}<ArrowIcon className="h-4 w-4" /></>
              }
            </Button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MAIN FOUR-COLUMN GRID
      ══════════════════════════════════════════════════════════ */}
      <div className="relative container mx-auto px-4 pt-14 pb-10 max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">

          {/* ── Column 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            {/* Logo */}
            <div className={`flex items-center gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
              <img
                src={`${import.meta.env.BASE_URL}screenshots/cyberphish-icon.png`}
                alt="Cyberphish"
                className="w-10 h-10 rounded-xl object-cover shrink-0 shadow-md shadow-green-200"
              />
              <div className={isRTL ? "text-right" : ""}>
                <p className="text-[17px] font-black text-gray-900 leading-none tracking-tight">
                  Cyberphish
                </p>
                <p className="text-[10px] text-green-600 font-semibold leading-none mt-0.5">
                  {getText("بواسطة قسورة", "by Qswra")}
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p className={`text-[13px] text-green-700 font-semibold leading-snug ${isRTL ? "text-right" : ""}`}>
              {getText(
                "توعية أمنية بالذكاء الاصطناعي",
                "AI-Powered Security Awareness"
              )}
            </p>

            {/* Description */}
            <p className={`text-sm text-gray-500 leading-relaxed ${isRTL ? "text-right" : ""}`}>
              {getText(
                "منصة سعودية تجمع التدريب والتصيد والتحليلات في مكان واحد لحماية فريقك",
                "A Saudi platform combining training, phishing simulations and analytics to protect your team"
              )}
            </p>

            {/* Badges */}
            <div className={`flex flex-wrap gap-1.5 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Badge className="bg-green-100 text-green-700 border border-green-200 text-[10px] font-bold px-2 py-0.5">
                🇸🇦 {getText("سعودي", "Saudi")}
              </Badge>
              <Badge className="bg-teal-50 text-teal-700 border border-teal-200 text-[10px] font-bold px-2 py-0.5">
                🤖 AI
              </Badge>
              <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5">
                🛡️ {getText("آمن", "Secure")}
              </Badge>
            </div>

          </div>

          {/* ── Column 2: Company ── */}
          <div className={isRTL ? "text-right" : ""}>
            <h5 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-5">
              {getText("الشركة", "Company")}
            </h5>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.en}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                    >
                      {getText(link.ar, link.en)}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                    >
                      {getText(link.ar, link.en)}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Contact quick-links */}
            <div className="mt-6 space-y-2">
              <a
                href="tel:+966575043074"
                className={`flex items-center gap-2 text-xs text-gray-400 hover:text-green-600 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <Phone className="h-3 w-3 shrink-0" />
                +966 57 504 3074
              </a>
              <a
                href="mailto:info@qswra.com"
                className={`flex items-center gap-2 text-xs text-gray-400 hover:text-green-600 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <Mail className="h-3 w-3 shrink-0" />
                info@qswra.com
              </a>
              <span className={`flex items-center gap-2 text-xs text-gray-400 ${isRTL ? "flex-row-reverse" : ""}`}>
                <MapPin className="h-3 w-3 shrink-0" />
                {getText("الرياض، السعودية", "Riyadh, Saudi Arabia")}
              </span>
            </div>
          </div>

          {/* ── Column 4: Resources ── */}
          <div className={isRTL ? "text-right" : ""}>
            <h5 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-5">
              {getText("الموارد", "Resources")}
            </h5>
            <ul className="space-y-3 mb-7">
              {resourceLinks.map((link) => (
                <li key={link.en}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                    >
                      {getText(link.ar, link.en)}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                    >
                      {getText(link.ar, link.en)}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Trust checklist */}
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 space-y-2">
              {trustPoints.map((pt) => (
                <div key={pt.en} className={`flex items-center gap-2 text-xs text-gray-600 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                  {getText(pt.ar, pt.en)}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════════════════════════ */}
      <div className="relative border-t border-green-100 bg-green-50/50">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 ${isRTL ? "sm:flex-row-reverse" : ""}`}>

            {/* Left: copyright + links */}
            <div className={`flex flex-col sm:flex-row items-center gap-3 text-xs text-gray-400 ${isRTL ? "sm:flex-row-reverse text-right" : ""}`}>
              <span>
                © 2024 Cyberphish · {getText("بواسطة قسورة", "by Qswra")}. {getText("جميع الحقوق محفوظة", "All rights reserved")}.
              </span>
              <span className="hidden sm:block text-green-200">|</span>
              <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Link to="/privacy-policy" className="hover:text-green-600 transition-colors">
                  {getText("الخصوصية", "Privacy")}
                </Link>
                <Link to="/terms-of-use" className="hover:text-green-600 transition-colors">
                  {getText("الشروط", "Terms")}
                </Link>
              </div>
            </div>

            {/* Right: Saudi trust badge */}
            <div className={`flex items-center gap-1.5 text-xs text-green-600 font-semibold ${isRTL ? "flex-row-reverse" : ""}`}>
              <span>🇸🇦</span>
              <span>{getText("مصنوع في السعودية", "Made in Saudi Arabia")}</span>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
