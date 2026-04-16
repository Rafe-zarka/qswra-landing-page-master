import React, { createContext, useContext, useState } from "react";

interface LanguageContextType {
  language: "ar" | "en";
  setLanguage: (lang: "ar" | "en") => void;
  toggleLanguage: () => void;
  getText: (textAr: string, textEn: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"ar" | "en">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const getText = (textAr: string, textEn: string) => {
    return language === "ar" ? textAr : textEn;
  };

  const isRTL = language === "ar";

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    getText,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={isRTL ? "font-arabic" : "font-english"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
