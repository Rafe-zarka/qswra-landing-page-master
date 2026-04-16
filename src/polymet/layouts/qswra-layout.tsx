import { ReactNode } from "react";
import QswraHeader from "@/polymet/components/qswra-header";
import QswraFooter from "@/polymet/components/qswra-footer";
import { LanguageProvider } from "@/polymet/components/language-context";
import { navigation } from "@/polymet/data/qswra-data";

interface QswraLayoutProps {
  children: ReactNode;
}

export default function QswraLayout({ children }: QswraLayoutProps) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col w-full">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes blob {
              0% {
                transform: translate(0px, 0px) scale(1);
              }
              33% {
                transform: translate(30px, -50px) scale(1.1);
              }
              66% {
                transform: translate(-20px, 20px) scale(0.9);
              }
              100% {
                transform: translate(0px, 0px) scale(1);
              }
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-20px);
              }
            }
            
            .animate-blob {
              animation: blob 7s infinite;
            }
            
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
            
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            
            .animation-delay-4000 {
              animation-delay: 4s;
            }
          `,
          }}
        />

        <QswraHeader navigation={navigation} />

        <main className="flex-1 flex flex-col">{children}</main>
        <QswraFooter />
      </div>
    </LanguageProvider>
  );
}
