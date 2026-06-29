import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, XIcon, PhoneIcon, MailIcon } from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";
import LanguageToggle from "@/polymet/components/language-toggle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDemoModal } from "@/polymet/components/demo-modal-context";
import { scrollToSection } from "@/polymet/utils/scroll";
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
  const [activeSection, setActiveSection] = useState("");
  const { getText, isRTL } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { openModal } = useDemoModal();
  const isCyberphish = pathname.startsWith("/products/cyberphish");

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href);
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const sectionHrefs = navigation
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.href);

    if (sectionHrefs.length === 0) return;

    const handleScroll = () => {
      const offset = 100;
      let current = "";
      for (const href of sectionHrefs) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = href;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation, pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-white/[0.07] bg-white/95 dark:bg-[#0B1117]/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0B1117]/60 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* ── Brand ── */}
          {isCyberphish ? (
            <div className={`flex items-center gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Link
                to="/products/cyberphish"
                className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}screenshots/cyberphish-icon.png`}
                  alt="Cyberphish"
                  className="w-8 h-8 rounded-xl object-cover shrink-0 shadow-md shadow-green-200"
                />
                <p className="text-[15px] font-black text-gray-900 dark:text-[#E8EEF3] leading-none tracking-tight">
                  Cyberphish
                </p>
              </Link>
            </div>
          ) : (
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
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors ${
                  isCyberphish
                    ? (item.href.startsWith("/") ? pathname === item.href : activeSection === item.href)
                      ? "text-green-600 dark:text-[#34D399] font-semibold border-b-2 border-green-500 dark:border-[#34D399] pb-0.5"
                      : "text-gray-600 dark:text-[#A7B4C0] hover:text-green-600 dark:hover:text-[#34D399]"
                    : activeSection === item.href
                      ? "text-blue-600 font-semibold border-b-2 border-blue-500 pb-0.5"
                      : "text-gray-600 hover:text-blue-600"
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
                className="gap-1.5 text-gray-600 dark:text-[#A7B4C0] border-gray-200 dark:border-white/[0.12] hover:border-green-300 dark:hover:border-[#34D399]/40 hover:text-green-700 dark:hover:text-[#34D399] dark:bg-transparent"
                onClick={() => window.open("https://cyberphish-staging.laravel.cloud/login", "_blank")}
              >
                {getText("تسجيل الدخول", "Sign In")}
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white gap-1.5 shadow-sm shadow-green-200 dark:shadow-green-900/30 font-semibold px-5"
                onClick={openModal}
              >
                {getText("احجز عرضًا", "Book a Demo")}
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <LanguageToggle />
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open("tel:+966575043074", "_self")}
              >
                <PhoneIcon className="h-4 w-4" />
                {getText("اتصل بنا", "Call Us")}
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
                onClick={() => handleNavClick("#contact")}
              >
                <MailIcon className="h-4 w-4" />
                {getText("تواصل معنا", "Contact Us")}
              </Button>
            </div>
          )}

          {/* ── Mobile Menu ── */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="dark:border-white/[0.12] dark:bg-transparent dark:text-[#A7B4C0]">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white dark:bg-[#0B1117] border-l border-gray-200 dark:border-white/[0.07]">
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
                        <h2 className="text-lg font-black text-gray-900 dark:text-[#E8EEF3] leading-none">Cyberphish</h2>
                        <p className="text-[11px] text-green-600 dark:text-green-400 font-semibold mt-0.5">
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
                  className="dark:text-[#A7B4C0] dark:hover:bg-white/[0.05]"
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
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full ${isRTL ? "text-right" : "text-left"} py-3 px-4 text-lg font-medium rounded-lg transition-all ${
                      isCyberphish
                        ? "text-gray-700 dark:text-[#A7B4C0] hover:text-green-600 dark:hover:text-[#34D399] hover:bg-green-50 dark:hover:bg-green-900/20"
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
                {isCyberphish ? (
                  <>
                    <Button
                      variant="outline"
                      className="w-full gap-2 dark:border-white/[0.12] dark:text-[#A7B4C0] dark:hover:border-[#34D399]/40 dark:hover:text-[#34D399] dark:bg-transparent"
                      onClick={() => { window.open("https://cyberphish-staging.laravel.cloud/login", "_blank"); setIsOpen(false); }}
                    >
                      {getText("تسجيل الدخول", "Sign In")}
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white font-semibold"
                      onClick={() => { openModal(); setIsOpen(false); }}
                    >
                      {getText("احجز عرضًا", "Book a Demo")}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => window.open("tel:+966575043074", "_self")}
                    >
                      <PhoneIcon className="h-4 w-4" />
                      {getText("اتصل بنا", "Call Us")}
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
                      onClick={() => handleNavClick("#contact")}
                    >
                      <MailIcon className="h-4 w-4" />
                      {getText("تواصل معنا", "Contact Us")}
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
