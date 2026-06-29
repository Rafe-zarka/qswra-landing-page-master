import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/polymet/components/language-context";
import { useDemoModal } from "@/polymet/components/demo-modal-context";

// ── Theme ──────────────────────────────────────────────────────────────────────

export function useTheme() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("cp_theme") === "dark"; } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("cp_theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);
  return { dark, toggle: () => setDark(d => !d) };
}

// ── Visual primitives ──────────────────────────────────────────────────────────

export function Browser({ url, img, alt = "" }: { url: string; img: string; alt?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.07] shadow-2xl bg-white dark:bg-[#131B26]">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-[#1A2330] border-b border-gray-200 dark:border-white/[0.07]">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-gray-100 dark:bg-[#0B1117] rounded px-3 py-0.5 text-[11px] text-gray-400 dark:text-[#5E6B79] font-mono text-center truncate">{url}</div>
        <div className="w-14 shrink-0" />
      </div>
      <div className="bg-white dark:bg-[#131B26]">
        <img src={img} alt={alt} className="w-full block" />
      </div>
    </div>
  );
}

export function GradText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#10B981,#14B8A6)" }}>
      {children}
    </span>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase border mb-3 ${
        light
          ? "border-white/20 bg-white/10 text-green-200"
          : "border-[#10B981]/20 dark:border-[#34D399]/20 text-[#047857] dark:text-[#6EE7B7]"
      }`}
      style={light ? {} : { background: "rgba(16,185,129,0.07)" }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: light ? "#6EE7B7" : "#10B981" }} />
      {children}
    </span>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-[#E8EEF3] leading-tight mb-4">{title}</h2>
      {sub && <p className="text-gray-500 dark:text-[#7B8794] text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, sub, children }: {
  eyebrow: string; title: React.ReactNode; sub?: string; children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20 bg-white dark:bg-[#0B1117]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(16,185,129,0.09) 0%, transparent 65%)" }} />
      <div className="relative container mx-auto px-6 max-w-4xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-[#E8EEF3] leading-tight mb-5">{title}</h1>
        {sub && <p className="text-gray-500 dark:text-[#7B8794] text-xl max-w-2xl mx-auto leading-relaxed mb-8">{sub}</p>}
        {children}
      </div>
    </section>
  );
}

export function FinalCTA() {
  const { getText, isRTL } = useLanguage();
  const { openModal } = useDemoModal();
  return (
    <section id="contact" className="py-24 md:py-32 dark:border-t dark:border-white/[0.07]" style={{ background: "linear-gradient(135deg,#064e3b 0%,#065f46 50%,#0f766e 100%)" }}>
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <Eyebrow light>{getText("جاهزون حين تكون جاهزًا", "Ready when you are")}</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          {getText("حوّل أضعف طبقاتك إلى ", "Turn your weakest layer into your ")}
          <span className="text-green-200">{getText("أقوى خط دفاع.", "strongest defense.")}</span>
        </h2>
        <p className="text-green-100/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          {getText("شاهد عرضًا لمدة 30 دقيقة على بياناتك. دون التزام ودون شرائح تقديمية.", "See a 30 minute walkthrough of CyberPhish on your own data. No commitment, no slide deck demo.")}
        </p>
        <div className={`flex flex-col sm:flex-row gap-3 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white shadow-lg transition-colors"
            style={{ background: "#10B981" }}
            onMouseOver={e => (e.currentTarget.style.background = "#059669")}
            onMouseOut={e => (e.currentTarget.style.background = "#10B981")}
          >
            {getText("اطلب عرضًا توضيحيًا", "Book a demo")} →
          </button>
          <Link to="/products/cyberphish/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 bg-white/10 text-white hover:bg-white/20 font-semibold text-sm transition-colors"
          >
            {getText("تحدث مع المبيعات", "Talk to sales")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export const card = "bg-white dark:bg-[#131B26] border border-gray-100 dark:border-white/[0.07] rounded-2xl shadow-sm";
