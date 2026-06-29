import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import QswraHeader from "@/polymet/components/qswra-header";
import QswraFooter from "@/polymet/components/qswra-footer";
import CyberphishFooter from "@/polymet/components/cyberphish-footer";
import { LanguageProvider } from "@/polymet/components/language-context";
import { DemoModalProvider } from "@/polymet/components/demo-modal-context";
import DemoModal from "@/polymet/components/demo-modal";
import { navigation, cyberphishNavigation } from "@/polymet/data/qswra-data";

interface QswraLayoutProps {
  children: ReactNode;
}

function LayoutInner({ children }: QswraLayoutProps) {
  const { pathname } = useLocation();
  const isCyberphish =
    pathname.startsWith("/products/cyberphish") ||
    pathname === "/tools/meddicc-qualifier";

  return (
    <div className="min-h-screen flex flex-col w-full">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes blob {
            0%   { transform: translate(0px, 0px) scale(1); }
            33%  { transform: translate(30px, -50px) scale(1.1); }
            66%  { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-20px); }
          }
          .animate-blob  { animation: blob 7s infinite; }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `,
        }}
      />

      <QswraHeader navigation={isCyberphish ? cyberphishNavigation : navigation} />

      <main className="flex-1 flex flex-col">{children}</main>

      {isCyberphish ? <CyberphishFooter /> : <QswraFooter />}

      <DemoModal />

      {/* ── Floating WhatsApp button (CyberPhish pages only) ── */}
      {isCyberphish && (
        <a
          href="https://wa.me/966575043074"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-20 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          style={{ background: "#25D366" }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.119 1.529 5.847L0 24l6.338-1.506A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.894 9.894 0 01-5.036-1.374l-.36-.214-3.766.895.947-3.658-.234-.376A9.857 9.857 0 012.118 12C2.118 6.517 6.517 2.118 12 2.118c5.483 0 9.882 4.399 9.882 9.882 0 5.483-4.399 9.882-9.882 9.882z" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function QswraLayout({ children }: QswraLayoutProps) {
  return (
    <LanguageProvider>
      <DemoModalProvider>
        <LayoutInner>{children}</LayoutInner>
      </DemoModalProvider>
    </LanguageProvider>
  );
}
