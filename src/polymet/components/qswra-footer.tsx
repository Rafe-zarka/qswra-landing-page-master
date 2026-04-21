import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  Linkedin,
  Twitter,
  ArrowUpIcon,
} from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";
import { Link } from "react-router-dom";
import qswraLogo from "@/assets/qswra-logo-no-background.png";

export default function QswraFooter() {
  const { getText, isRTL } = useLanguage();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">

      {/* Top accent line — Qswra blue/purple brand */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500" />

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 end-1/4 w-[400px] h-[300px] bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 start-1/4 w-[300px] h-[200px] bg-purple-100/20 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">
            <div className={`flex items-center gap-3 mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-200 shrink-0">
                <img
                  src={qswraLogo}
                  alt="Qswra"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div className={isRTL ? "text-right" : ""}>
                <h3 className="text-xl font-black text-gray-900">
                  {getText("قسورة", "Qswra")}
                </h3>
                <p className="text-blue-600 text-xs font-semibold leading-none mt-0.5">
                  {getText("حلول الأمن السيبراني", "Cybersecurity Solutions")}
                </p>
              </div>
            </div>

            <p className={`text-gray-500 text-sm leading-relaxed mb-6 max-w-sm ${isRTL ? "text-right" : ""}`}>
              {getText(
                "شركة تقنية سعودية رائدة في مجال الأمن السيبراني، نستخدم الذكاء الاصطناعي لتطوير حلول مبتكرة تحمي المؤسسات من التهديدات الرقمية.",
                "A leading Saudi technology company specializing in cybersecurity, using AI to develop innovative solutions that protect organizations from digital threats."
              )}
            </p>

            <div className={`flex flex-wrap gap-2 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-3 py-1">
                🇸🇦 {getText("شركة سعودية", "Saudi Company")}
              </Badge>
              <Badge className="bg-purple-50 text-purple-700 border border-purple-200 text-xs font-semibold px-3 py-1">
                🤖 {getText("مدعوم بالذكاء الاصطناعي", "AI-Powered")}
              </Badge>
              <Badge className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold px-3 py-1">
                🛡️ {getText("أمان متقدم", "Advanced Security")}
              </Badge>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="w-9 h-9 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400 rounded-xl"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-9 h-9 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400 rounded-xl"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* ── Products Column ── */}
          <div className={isRTL ? "text-right" : ""}>
            <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-5">
              {getText("منتجاتنا", "Products")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products/cyberphish"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform shrink-0" />
                  Cyberphish
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:scale-125 transition-transform shrink-0" />
                  Phish Agent
                  <Badge className="text-[10px] bg-amber-50 text-amber-600 border border-amber-200 px-1.5 font-semibold h-4 leading-none">
                    {getText("قريباً", "Soon")}
                  </Badge>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  {getText("الحلول المخصصة", "Custom Solutions")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  {getText("الاستشارات الأمنية", "Security Consulting")}
                </a>
              </li>
            </ul>
          </div>

          {/* ── Contact Column ── */}
          <div className={isRTL ? "text-right" : ""}>
            <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-5">
              {getText("تواصل معنا", "Contact")}
            </h4>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <MailIcon className="h-4 w-4 text-blue-600" />
                </div>
                <div className={isRTL ? "text-right" : ""}>
                  <p className="text-gray-700 text-sm font-medium">info@qswra.com</p>
                  <p className="text-gray-400 text-xs">{getText("للاستفسارات", "General Inquiries")}</p>
                </div>
              </li>
              <li className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <PhoneIcon className="h-4 w-4 text-blue-600" />
                </div>
                <div className={isRTL ? "text-right" : ""}>
                  <a href="tel:+966575741337" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
                    +966 57 574 1337
                  </a>
                  <p className="text-gray-400 text-xs">{getText("الأحد – الخميس", "Sun – Thu")}</p>
                </div>
              </li>
              <li className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <MapPinIcon className="h-4 w-4 text-blue-600" />
                </div>
                <div className={isRTL ? "text-right" : ""}>
                  <p className="text-gray-700 text-sm font-medium">{getText("الرياض", "Riyadh")}</p>
                  <p className="text-gray-400 text-xs">{getText("المملكة العربية السعودية", "Saudi Arabia")}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-slate-200 bg-slate-50/60">
        <div className="container mx-auto px-4 py-5">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            <div className={`flex flex-col md:flex-row items-center gap-4 text-xs text-gray-400 ${isRTL ? "md:flex-row-reverse" : ""}`}>
              <p>© 2024 Qswra. {getText("جميع الحقوق محفوظة", "All rights reserved")}.</p>
              <div className={`flex gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">
                  {getText("سياسة الخصوصية", "Privacy Policy")}
                </Link>
                <Link to="/terms-of-use" className="hover:text-blue-600 transition-colors">
                  {getText("شروط الاستخدام", "Terms of Use")}
                </Link>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400 text-xs h-8 px-3 rounded-lg gap-1.5"
            >
              {getText("للأعلى", "Top")}
              <ArrowUpIcon className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

    </footer>
  );
}
