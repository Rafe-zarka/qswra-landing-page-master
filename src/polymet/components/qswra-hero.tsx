import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldIcon,
  BotIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  SparklesIcon,
  CheckIcon,
  PlayIcon,
} from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";
import qswraLogoSvg from "@/assets/Qswra logo/Qswra.svg";

interface QswraHeroProps {
  companyInfo: {
    name: string;
    nameEn?: string;
    tagline: string;
    taglineEn?: string;
    description: string;
    descriptionEn?: string;
    location: string;
    locationEn?: string;
    hosting?: string;
    hostingEn?: string;
  };
}

export default function QswraHero({ companyInfo }: QswraHeroProps) {
  const { getText, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeftIcon : ArrowRightIcon;

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />

        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />

        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-8">
              <SparklesIcon className="h-4 w-4 text-blue-600" />

              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                🇸🇦 {getText("شركة سعودية ناشئة", "Saudi Startup")}
              </span>
            </div>

            {/* Main Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={`${qswraLogoSvg}?v=${Date.now()}`} 
                alt={getText(
                  companyInfo.name,
                  companyInfo.nameEn || companyInfo.name
                )}
                className="h-32 lg:h-48 w-auto object-contain"
              />
            </div>

            {/* Company Name */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-center" itemProp="name">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                {getText(
                  companyInfo.name,
                  companyInfo.nameEn || companyInfo.name
                )}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto">
              {getText(
                companyInfo.tagline,
                companyInfo.taglineEn || companyInfo.tagline
              )}
            </p>

            {/* Description */}
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" itemProp="description">
              {getText(
                companyInfo.description,
                companyInfo.descriptionEn || companyInfo.description
              )}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <CheckIcon className="h-4 w-4 text-green-500" />

                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {getText("استضافة محلية متاحة", "Local Hosting Available")}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <ShieldIcon className="h-4 w-4 text-blue-500" />

                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {getText("مسجل لدى هيئة الاتصالات", "Registered by NCA")}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <BotIcon className="h-4 w-4 text-purple-500" />

                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {getText("مدعوم بالذكاء الاصطناعي", "AI-Powered")}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("#products")}
              >
                {getText("استكشف منتجاتنا", "Explore Our Products")}
                <ArrowIcon className={`${isRTL ? "mr-2" : "ml-2"} h-5 w-5`} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("#contact")}
              >
                <PlayIcon className={`${isRTL ? "ml-2" : "mr-2"} h-5 w-5`} />

                {getText("شاهد العرض التوضيحي", "Watch Demo")}
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {getText("استضافة محلية متاحة", "Local Hosting Available")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {getText("دعم فني", "Technical Support")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                99.9%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {getText("وقت التشغيل", "Uptime")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                2024
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {getText("سنة التأسيس", "Founded")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 opacity-20 dark:opacity-10 animate-float">
        <ShieldIcon className="h-12 w-12 text-blue-500" />
      </div>
      <div className="absolute top-1/3 right-8 opacity-20 dark:opacity-10 animate-float animation-delay-2000">
        <BotIcon className="h-16 w-16 text-purple-500" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-20 dark:opacity-10 animate-float animation-delay-4000">
        <SparklesIcon className="h-10 w-10 text-pink-500" />
      </div>
    </section>
  );
}
