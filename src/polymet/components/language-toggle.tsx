import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 text-sm"
    >
      <Globe className="h-4 w-4" />

      {language === "ar" ? "EN" : "ع"}
    </Button>
  );
}
