import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, XIcon, PhoneIcon, MailIcon } from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";
import LanguageToggle from "@/polymet/components/language-toggle";
import { Link, useLocation } from "react-router-dom";
import qswraLogo from "@/assets/qswra-logo-no-background.png";

interface Navigation {
  name: string;
  nameEn: string;
  href: string;
}

interface QswraHeaderProps {
  navigation: Navigation[];
}

export default function QswraHeader({ navigation }: QswraHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { getText, isRTL } = useLanguage();
  const { pathname } = useLocation();
  const isCyberphish = pathname === "/products/cyberphish";

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* ── Brand ── */}
          {isCyberphish ? (
            /* Unified: Qswra (parent, subtle) / Cyberphish (product, prominent) */
            <div className={`flex items-center gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
              {/* Parent brand */}
              <Link
                to="/"
                className={`flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <div className="p-1.5 bg-white rounded-lg shadow-sm border shrink-0">
                  <img src={qswraLogo} alt="Qswra" className="h-5 w-5 object-contain" />
                </div>
                <span className="text-xs font-semibold text-gray-500 hidden sm:block">Qswra</span>
              </Link>

              {/* Breadcrumb separator */}
              <span className="text-gray-300 text-base select-none hidden sm:block">/</span>

              {/* Product brand */}
              <Link
                to="/products/cyberphish"
                className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}screenshots/cyberphish-icon.png`}
                  alt="Cyberphish"
                  className="w-8 h-8 rounded-xl object-cover shrink-0 shadow-md shadow-green-200"
                />
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p className="text-[15px] font-black text-gray-900 leading-none tracking-tight">
                    Cyberphish
                  </p>
                  <p className="text-[10px] text-green-600 font-semibold leading-none mt-0.5 hidden sm:block">
                    {getText("التوعية الأمنية · بواسطة قسورة", "Security Awareness · by Qswra")}
                  </p>
                </div>
              </Link>

              <Badge className="hidden lg:inline-flex bg-green-100 text-green-700 border border-green-200 text-[10px] px-2 py-0.5 font-semibold rounded-full ms-1">
                🇸🇦 {getText("سعودي", "Saudi")}
              </Badge>
            </div>
          ) : (
            /* Default Qswra brand */
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-xl shadow-sm border">
                <img src={qswraLogo} alt="QSWRA Logo" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <Link to="/" className="block">
                  <h1 className="text-xl font-bold">
                    {getText("قسورة", "Qswra")}
                  </h1>
                  <p className="text-xs text-gray-500">
                    {getText("Qswra", "قسورة")}
                  </p>
                </Link>
              </div>
              <Badge variant="secondary" className="hidden sm:inline-flex text-xs">
                🇸🇦 {getText("سعودية", "Saudi")}
              </Badge>
            </div>
          )}

          {/* ── Desktop Navigation ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors ${
                  isCyberphish
                    ? "text-gray-700 hover:text-green-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {getText(item.name, item.nameEn)}
              </button>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          {isCyberphish ? (
            <div className={`hidden md:flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <LanguageToggle />
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700"
                onClick={() => window.open("tel:+966575741337", "_self")}
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                {getText("اتصل بنا", "Call Us")}
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white gap-1.5 shadow-sm shadow-green-200 font-semibold px-5"
                asChild
              >
                <Link to="/#contact">
                  {getText("ابدأ مجاناً", "Get Started Free")}
                </Link>
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <LanguageToggle />
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open("tel:+966575741337", "_self")}
              >
                <PhoneIcon className="h-4 w-4" />
                {getText("اتصل بنا", "Call Us")}
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
                onClick={() => scrollToSection("#contact")}
              >
                <MailIcon className="h-4 w-4" />
                {getText("تواصل معنا", "Contact Us")}
              </Button>
            </div>
          )}

          {/* ── Mobile Menu ── */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {isCyberphish ? (
                    <>
                      <img
                        src={`${import.meta.env.BASE_URL}screenshots/cyberphish-icon.png`}
                        alt="Cyberphish"
                        className="w-10 h-10 rounded-xl object-cover shrink-0 shadow-md shadow-green-200"
                      />
                      <div className={isRTL ? "text-right" : "text-left"}>
                        <h2 className="text-lg font-black text-gray-900 leading-none">Cyberphish</h2>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">
                          {getText("بواسطة قسورة", "by Qswra")}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-2 bg-white rounded-xl shadow-sm border">
                        <img src={qswraLogo} alt="QSWRA Logo" className="h-8 w-8 object-contain" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold">
                          {getText("قسورة", "Qswra")}
                        </h2>
                        <p className="text-xs text-gray-500">
                          {getText("Qswra", "قسورة")}
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <XIcon className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4 mb-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full ${isRTL ? "text-right" : "text-left"} py-3 px-4 text-lg font-medium rounded-lg transition-all ${
                      isCyberphish
                        ? "text-gray-700 hover:text-green-600 hover:bg-green-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {getText(item.name, item.nameEn)}
                  </button>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="space-y-3">
                <div className="flex justify-center mb-4">
                  <LanguageToggle />
                </div>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() => window.open("tel:+966575741337", "_self")}
                >
                  <PhoneIcon className="h-4 w-4" />
                  {getText("اتصل بنا", "Call Us")}
                </Button>
                {isCyberphish ? (
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white font-semibold"
                    asChild
                  >
                    <Link to="/#contact">
                      {getText("ابدأ مجاناً", "Get Started Free")}
                    </Link>
                  </Button>
                ) : (
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
                    onClick={() => scrollToSection("#contact")}
                  >
                    <MailIcon className="h-4 w-4" />
                    {getText("تواصل معنا", "Contact Us")}
                  </Button>
                )}
              </div>

              {/* Mobile Footer */}
              <div className="mt-8 pt-8 border-t">
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="mb-2">
                    🇸🇦 {getText("شركة سعودية ناشئة", "Saudi Startup")}
                  </Badge>
                  <p className="text-sm text-gray-600">
                    {getText(
                      "الابتكار في الأمن السيبراني بقوة الأسد",
                      "Innovation in Cybersecurity with the Power of a Lion"
                    )}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
