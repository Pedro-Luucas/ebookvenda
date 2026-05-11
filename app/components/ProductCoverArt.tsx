import { useId } from "react";
import type { Product } from "@/app/types/product";

type CoverSize = "sm" | "md" | "lg";

interface ProductCoverArtProps {
  product: Pick<Product, "slug">;
  size?: CoverSize;
  className?: string;
}

const sizeStyles = {
  sm: {
    badge: "px-2 pt-2 text-[6px] tracking-[0.28em]",
    title: "text-[9px]",
    footer: "text-[5px] tracking-[0.2em]",
    line: "w-7",
    graphic: "h-10 w-10",
    graphicWrap: "top-[18%]",
    bottom: "px-2 pb-2",
  },
  md: {
    badge: "px-2.5 pt-2.5 text-[7px] tracking-[0.3em]",
    title: "text-[11px]",
    footer: "text-[6px] tracking-[0.24em]",
    line: "w-8",
    graphic: "h-14 w-14",
    graphicWrap: "top-[18%]",
    bottom: "px-2.5 pb-2.5",
  },
  lg: {
    badge: "px-4 pt-4 text-[9px] tracking-[0.32em]",
    title: "text-[18px]",
    footer: "text-[8px] tracking-[0.28em]",
    line: "w-12",
    graphic: "h-24 w-24",
    graphicWrap: "top-[19%]",
    bottom: "px-4 pb-4",
  },
} satisfies Record<CoverSize, Record<string, string>>;

function getTheme(slug: Product["slug"]) {
  switch (slug) {
    case "dominando-vendas":
      return {
        background:
          "bg-[linear-gradient(145deg,#0d0d0d_0%,#1e0a2e_52%,#130a1e_100%)]",
        badgeColor: "text-[#f0d080]/90",
        titleColor: "text-white",
        footerColor: "text-[#d8c18a]/80",
        lineColor: "bg-[linear-gradient(90deg,#6b21a8,#c9a84c)]",
      };
    case "persuasao-influencia":
    case "persuasao-vendas":
      return {
        background:
          "bg-[linear-gradient(160deg,#0f0c10_0%,#24141f_50%,#140d11_100%)]",
        badgeColor: "text-[#d8c18a]/90",
        titleColor: "text-white",
        footerColor: "text-[#d8c18a]/80",
        lineColor: "bg-[#c9a84c]",
      };
    case "vendas-b2b":
      return {
        background:
          "bg-[linear-gradient(160deg,#081425_0%,#0b1f38_54%,#102949_100%)]",
        badgeColor: "text-[#f0d080]/90",
        titleColor: "text-white",
        footerColor: "text-[#8aa4d4]",
        lineColor: "bg-[#c9a84c]",
      };
    case "cold-calling":
      return {
        background:
          "bg-[linear-gradient(145deg,#08140c_0%,#0f2a18_55%,#08140c_100%)]",
        badgeColor: "text-[#85f0b7]/85",
        titleColor: "text-white",
        footerColor: "text-[#85f0b7]/75",
        lineColor: "bg-[#2ecc71]",
      };
    case "funil-vendas-digital":
      return {
        background:
          "bg-[linear-gradient(145deg,#0d0d0d_0%,#1a1a2e_55%,#101c3d_100%)]",
        badgeColor: "text-[#9bc0ff]/90",
        titleColor: "text-white",
        footerColor: "text-[#9bc0ff]/75",
        lineColor: "bg-[#1a6bff]",
      };
    case "negociacao-alto-impacto":
      return {
        background:
          "bg-[linear-gradient(145deg,#120d08_0%,#2b1605_55%,#120d08_100%)]",
        badgeColor: "text-[#f5a73b]/90",
        titleColor: "text-white",
        footerColor: "text-[#d3a06e]/80",
        lineColor: "bg-[#e8820c]",
      };
    case "claude-code-guia-completo":
      return {
        background: "bg-[linear-gradient(145deg,#0d0f14_0%,#1a1f2e_50%,#0f1420_100%)]",
        badgeColor: "text-[#d4956a]/90",
        titleColor: "text-white",
        footerColor: "text-[#d4956a]/75",
        lineColor: "bg-[linear-gradient(90deg,#c96442,#e8a87c)]",
      };
    case "claude-code-prompts-avancados":
      return {
        background: "bg-[linear-gradient(145deg,#0a0d18_0%,#141c30_50%,#0a0d18_100%)]",
        badgeColor: "text-[#7eb8f7]/90",
        titleColor: "text-white",
        footerColor: "text-[#7eb8f7]/75",
        lineColor: "bg-[linear-gradient(90deg,#3b82f6,#7eb8f7)]",
      };
    case "claude-code-automacao-workflows":
      return {
        background: "bg-[linear-gradient(145deg,#0a1410_0%,#0f2018_50%,#0a1410_100%)]",
        badgeColor: "text-[#4ade80]/90",
        titleColor: "text-white",
        footerColor: "text-[#4ade80]/75",
        lineColor: "bg-[linear-gradient(90deg,#16a34a,#4ade80)]",
      };
    case "claude-code-agentes-ia":
      return {
        background: "bg-[linear-gradient(145deg,#130a1e_0%,#1e1030_50%,#130a1e_100%)]",
        badgeColor: "text-[#c084fc]/90",
        titleColor: "text-white",
        footerColor: "text-[#c084fc]/75",
        lineColor: "bg-[linear-gradient(90deg,#9333ea,#c084fc)]",
      };
    case "facebook-ads-do-zero":
    case "criativos-facebook-ads":
      return {
        background:
          "bg-[linear-gradient(145deg,#080d1a_0%,#0f1a35_55%,#080d1a_100%)]",
        badgeColor: "text-[#6b9fff]/90",
        titleColor: "text-white",
        footerColor: "text-[#6b9fff]/75",
        lineColor: "bg-[#1877f2]",
      };
    case "copywriting-digital":
    case "email-marketing-avancado":
      return {
        background:
          "bg-[linear-gradient(145deg,#0d0a14_0%,#1e1530_55%,#0d0a14_100%)]",
        badgeColor: "text-[#c084fc]/90",
        titleColor: "text-white",
        footerColor: "text-[#c084fc]/75",
        lineColor: "bg-[#a855f7]",
      };
    default:
      return {
        background:
          "bg-[linear-gradient(145deg,#0f172a_0%,#1f2937_55%,#111827_100%)]",
        badgeColor: "text-white/80",
        titleColor: "text-white",
        footerColor: "text-white/70",
        lineColor: "bg-emerald-400",
      };
  }
}

function CoverPattern({
  slug,
  idPrefix,
}: {
  slug: Product["slug"];
  idPrefix: string;
}) {
  switch (slug) {
    case "dominando-vendas":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 300 400"
          className="absolute inset-0 h-full w-full opacity-25"
        >
          <circle cx="150" cy="150" r="126" fill="none" stroke="#A855F7" />
          <circle cx="150" cy="150" r="98" fill="none" stroke="#C9A84C" />
        </svg>
      );
    case "persuasao-influencia":
    case "persuasao-vendas":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 300 400"
          className="absolute inset-0 h-full w-full opacity-20"
        >
          <defs>
            <pattern id={`${idPrefix}-persuasion-hex`} x="0" y="0" width="34" height="34" patternUnits="userSpaceOnUse">
              <polygon points="17,0 34,9 34,25 17,34 0,25 0,9" fill="none" stroke="#C9A84C" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="300" height="400" fill={`url(#${idPrefix}-persuasion-hex)`} />
          <circle cx="150" cy="145" r="70" fill="none" stroke="#C9A84C" strokeWidth="0.8" />
          <circle cx="150" cy="145" r="92" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
        </svg>
      );
    case "vendas-b2b":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 300 400"
          className="absolute inset-0 h-full w-full opacity-25"
        >
          <defs>
            <pattern id={`${idPrefix}-b2b-grid`} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0L0 0 0 28" fill="none" stroke="#2563EB" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="300" height="400" fill={`url(#${idPrefix}-b2b-grid)`} />
          <circle cx="52" cy="80" r="30" fill="none" stroke="#2563EB" />
          <circle cx="248" cy="328" r="42" fill="none" stroke="#C9A84C" />
        </svg>
      );
    case "cold-calling":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 300 400"
          className="absolute inset-0 h-full w-full opacity-20"
        >
          <circle cx="150" cy="132" r="108" fill="none" stroke="#1A7A4A" />
          <circle cx="150" cy="132" r="84" fill="none" stroke="#2ECC71" />
        </svg>
      );
    case "funil-vendas-digital":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 300 400"
          className="absolute inset-0 h-full w-full opacity-25"
        >
          <defs>
            <pattern id={`${idPrefix}-funnel-dots`} x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="#1A6BFF" />
            </pattern>
          </defs>
          <rect width="300" height="400" fill={`url(#${idPrefix}-funnel-dots)`} />
          <g stroke="#1A6BFF" strokeWidth="0.9" fill="none">
            <line x1="22" y1="54" x2="118" y2="118" />
            <line x1="118" y1="118" x2="198" y2="74" />
            <line x1="198" y1="74" x2="276" y2="152" />
            <line x1="40" y1="286" x2="136" y2="338" />
            <line x1="136" y1="338" x2="228" y2="310" />
          </g>
        </svg>
      );
    case "negociacao-alto-impacto":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 300 400"
          className="absolute inset-0 h-full w-full opacity-20"
        >
          <g stroke="#E8820C" strokeWidth="0.8" fill="none">
            <path d="M0 72 Q75 60 150 72 T300 72" />
            <path d="M0 102 Q75 90 150 102 T300 102" />
            <path d="M0 300 Q75 288 150 300 T300 300" />
            <path d="M0 330 Q75 318 150 330 T300 330" />
          </g>
          <circle cx="44" cy="62" r="30" stroke="#E8820C" />
          <circle cx="264" cy="336" r="42" stroke="#E8820C" />
        </svg>
      );
    case "claude-code-guia-completo":
      return (
        <svg aria-hidden="true" viewBox="0 0 300 400" className="absolute inset-0 h-full w-full opacity-15">
          <defs>
            <pattern id={`${idPrefix}-cc1-grid`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M30 0L0 0 0 30" fill="none" stroke="#c96442" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="300" height="400" fill={`url(#${idPrefix}-cc1-grid)`} />
          <circle cx="150" cy="160" r="110" fill="none" stroke="#c96442" strokeWidth="0.8" />
          <circle cx="150" cy="160" r="75" fill="none" stroke="#e8a87c" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="20" fill="none" stroke="#c96442" strokeWidth="0.6" />
          <circle cx="260" cy="360" r="28" fill="none" stroke="#c96442" strokeWidth="0.6" />
        </svg>
      );
    case "claude-code-prompts-avancados":
      return (
        <svg aria-hidden="true" viewBox="0 0 300 400" className="absolute inset-0 h-full w-full opacity-18">
          <defs>
            <pattern id={`${idPrefix}-cc2-dots`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="300" height="400" fill={`url(#${idPrefix}-cc2-dots)`} />
          {/* Neural network lines */}
          <line x1="60" y1="80" x2="150" y2="160" stroke="#3b82f6" strokeWidth="0.6" />
          <line x1="240" y1="80" x2="150" y2="160" stroke="#3b82f6" strokeWidth="0.6" />
          <line x1="60" y1="240" x2="150" y2="160" stroke="#7eb8f7" strokeWidth="0.6" />
          <line x1="240" y1="240" x2="150" y2="160" stroke="#7eb8f7" strokeWidth="0.6" />
          <line x1="150" y1="60" x2="150" y2="160" stroke="#3b82f6" strokeWidth="0.6" />
          <line x1="150" y1="260" x2="150" y2="160" stroke="#3b82f6" strokeWidth="0.6" />
          <circle cx="150" cy="160" r="18" fill="none" stroke="#7eb8f7" strokeWidth="1" />
          <circle cx="60" cy="80" r="8" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
          <circle cx="240" cy="80" r="8" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
          <circle cx="60" cy="240" r="8" fill="none" stroke="#7eb8f7" strokeWidth="0.8" />
          <circle cx="240" cy="240" r="8" fill="none" stroke="#7eb8f7" strokeWidth="0.8" />
          <circle cx="150" cy="60" r="8" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
          <circle cx="150" cy="260" r="8" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
        </svg>
      );
    case "claude-code-automacao-workflows":
      return (
        <svg aria-hidden="true" viewBox="0 0 300 400" className="absolute inset-0 h-full w-full opacity-20">
          {/* Pipeline flow lines */}
          <g stroke="#16a34a" strokeWidth="0.7" fill="none">
            <line x1="30" y1="120" x2="270" y2="120" strokeDasharray="6 3" />
            <line x1="30" y1="200" x2="270" y2="200" strokeDasharray="6 3" />
            <line x1="30" y1="280" x2="270" y2="280" strokeDasharray="6 3" />
          </g>
          <g stroke="#4ade80" strokeWidth="0.5" fill="none">
            <line x1="80" y1="60" x2="80" y2="340" />
            <line x1="150" y1="60" x2="150" y2="340" />
            <line x1="220" y1="60" x2="220" y2="340" />
          </g>
          {/* Nodes */}
          <rect x="62" y="108" width="36" height="24" rx="4" fill="none" stroke="#16a34a" strokeWidth="1" />
          <rect x="132" y="108" width="36" height="24" rx="4" fill="none" stroke="#4ade80" strokeWidth="1" />
          <rect x="202" y="108" width="36" height="24" rx="4" fill="none" stroke="#16a34a" strokeWidth="1" />
          <rect x="62" y="188" width="36" height="24" rx="4" fill="none" stroke="#4ade80" strokeWidth="1" />
          <rect x="132" y="188" width="36" height="24" rx="4" fill="none" stroke="#16a34a" strokeWidth="1" />
          <rect x="202" y="188" width="36" height="24" rx="4" fill="none" stroke="#4ade80" strokeWidth="1" />
          {/* Arrows */}
          <path d="M98 120 L132 120" stroke="#4ade80" strokeWidth="1" markerEnd="url(#arr)" />
          <path d="M168 120 L202 120" stroke="#4ade80" strokeWidth="1" />
        </svg>
      );
    case "claude-code-agentes-ia":
      return (
        <svg aria-hidden="true" viewBox="0 0 300 400" className="absolute inset-0 h-full w-full opacity-18">
          <defs>
            <pattern id={`${idPrefix}-cc4-hex`} x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
              <polygon points="18,0 36,9 36,27 18,36 0,27 0,9" fill="none" stroke="#9333ea" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="300" height="400" fill={`url(#${idPrefix}-cc4-hex)`} />
          {/* Agent orbit rings */}
          <circle cx="150" cy="170" r="90" fill="none" stroke="#9333ea" strokeWidth="0.8" strokeDasharray="8 4" />
          <circle cx="150" cy="170" r="55" fill="none" stroke="#c084fc" strokeWidth="0.6" />
          {/* Satellite nodes */}
          <circle cx="150" cy="80" r="6" fill="none" stroke="#c084fc" strokeWidth="1" />
          <circle cx="230" cy="140" r="6" fill="none" stroke="#9333ea" strokeWidth="1" />
          <circle cx="210" cy="240" r="6" fill="none" stroke="#c084fc" strokeWidth="1" />
          <circle cx="90" cy="240" r="6" fill="none" stroke="#9333ea" strokeWidth="1" />
          <circle cx="70" cy="140" r="6" fill="none" stroke="#c084fc" strokeWidth="1" />
        </svg>
      );
    case "facebook-ads-do-zero":
    case "criativos-facebook-ads":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 300 400"
          className="absolute inset-0 h-full w-full opacity-20"
        >
          <defs>
            <pattern id={`${idPrefix}-fb-dots`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#1877f2" />
            </pattern>
          </defs>
          <rect width="300" height="400" fill={`url(#${idPrefix}-fb-dots)`} />
          <circle cx="150" cy="160" r="100" fill="none" stroke="#1877f2" strokeWidth="1" />
          <circle cx="150" cy="160" r="68" fill="none" stroke="#6b9fff" strokeWidth="0.6" />
        </svg>
      );
    case "copywriting-digital":
    case "email-marketing-avancado":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 300 400"
          className="absolute inset-0 h-full w-full opacity-15"
        >
          <defs>
            <pattern id={`${idPrefix}-mk-hex`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <polygon points="16,0 32,8 32,24 16,32 0,24 0,8" fill="none" stroke="#a855f7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="300" height="400" fill={`url(#${idPrefix}-mk-hex)`} />
          <circle cx="150" cy="160" r="90" fill="none" stroke="#a855f7" strokeWidth="0.8" />
        </svg>
      );
    default:
      return null;
  }
}

function CoverGraphic({
  slug,
  idPrefix,
  className,
}: {
  slug: Product["slug"];
  idPrefix: string;
  className: string;
}) {
  switch (slug) {
    case "dominando-vendas":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <defs>
            <linearGradient id={`${idPrefix}-crown-gold`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#C9A84C" />
              <stop offset="1" stopColor="#F0D080" />
            </linearGradient>
            <linearGradient id={`${idPrefix}-crown-purple`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#A855F7" />
              <stop offset="1" stopColor="#6B21A8" />
            </linearGradient>
          </defs>
          <path d="M40 128 L54 74 L78 108 L100 56 L122 108 L146 74 L160 128 Z" fill={`url(#${idPrefix}-crown-gold)`} stroke="#8B6914" strokeWidth="1.6" />
          <rect x="40" y="128" width="120" height="16" fill={`url(#${idPrefix}-crown-purple)`} stroke="#3B0764" strokeWidth="1.2" />
          <circle cx="54" cy="74" r="5" fill="#A855F7" />
          <circle cx="100" cy="56" r="7" fill="#F0D080" stroke="#8B6914" strokeWidth="1.2" />
          <circle cx="146" cy="74" r="5" fill="#A855F7" />
        </svg>
      );
    case "persuasao-influencia":
    case "persuasao-vendas":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <circle cx="100" cy="100" r="72" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.8" />
          <circle cx="100" cy="100" r="52" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
          <polygon points="100,52 132,100 100,148 68,100" fill="none" stroke="#C9A84C" strokeWidth="3" />
          <line x1="38" y1="100" x2="62" y2="100" stroke="#C9A84C" strokeWidth="1.2" />
          <line x1="138" y1="100" x2="162" y2="100" stroke="#C9A84C" strokeWidth="1.2" />
        </svg>
      );
    case "vendas-b2b":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <rect x="20" y="72" width="52" height="74" fill="#112240" stroke="#1B3A6B" strokeWidth="2" />
          <polygon points="20,72 46,58 72,72" fill="#1B3A6B" />
          <rect x="128" y="58" width="52" height="88" fill="#112240" stroke="#1B3A6B" strokeWidth="2" />
          <polygon points="128,58 154,44 180,58" fill="#1B3A6B" />
          <rect x="28" y="84" width="10" height="10" fill="#C9A84C" />
          <rect x="44" y="84" width="10" height="10" fill="#F0D080" />
          <rect x="28" y="102" width="10" height="10" fill="#F0D080" />
          <rect x="44" y="102" width="10" height="10" fill="#C9A84C" />
          <rect x="136" y="74" width="10" height="10" fill="#F0D080" />
          <rect x="152" y="74" width="10" height="10" fill="#C9A84C" />
          <rect x="136" y="92" width="10" height="10" fill="#C9A84C" />
          <rect x="152" y="92" width="10" height="10" fill="#F0D080" />
          <line x1="72" y1="104" x2="124" y2="104" stroke="#C9A84C" strokeWidth="3" strokeDasharray="5 5" />
          <polygon points="124,104 114,98 114,110" fill="#C9A84C" />
        </svg>
      );
    case "cold-calling":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <rect x="72" y="52" width="56" height="96" rx="10" fill="#1A7A4A" stroke="#2ECC71" strokeWidth="2" />
          <rect x="78" y="64" width="44" height="66" rx="4" fill="#0D0D0D" />
          <circle cx="100" cy="138" r="4" fill="#2ECC71" />
          <path d="M138 66 Q153 82 138 98" stroke="#2ECC71" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M148 58 Q171 82 148 106" stroke="#2ECC71" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
          <path d="M62 66 Q47 82 62 98" stroke="#2ECC71" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M52 58 Q29 82 52 106" stroke="#2ECC71" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
        </svg>
      );
    case "funil-vendas-digital":
      return (
        <svg aria-hidden="true" viewBox="0 0 220 220" className={className}>
          <defs>
            <linearGradient id={`${idPrefix}-funnel-blue`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B96FF" />
              <stop offset="100%" stopColor="#1A6BFF" />
            </linearGradient>
          </defs>
          <polygon points="26,34 194,34 146,108 74,108" fill={`url(#${idPrefix}-funnel-blue)`} opacity="0.92" />
          <polygon points="74,108 146,108 122,164 98,164" fill="#1A6BFF" />
          <rect x="98" y="164" width="24" height="22" fill="#0A3D99" />
          <circle cx="110" cy="198" r="6" fill="#1A6BFF" />
          <path d="M36 54 L110 54" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
          <path d="M48 72 L110 72" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
          <path d="M62 90 L110 90" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
        </svg>
      );
    case "negociacao-alto-impacto":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <g transform="translate(14,58)">
            <polygon points="0,48 44,20 88,26 112,48 112,78 88,100 44,100 0,78" fill="#E8820C" />
            <polygon points="44,20 64,8 88,16 88,26" fill="#F5A73B" />
          </g>
          <g transform="translate(98,56)">
            <polygon points="22,20 46,8 102,16 102,50 102,78 64,98 22,78" fill="#0D0D0D" stroke="#E8820C" strokeWidth="2" />
            <polygon points="46,8 64,0 82,16 46,20" fill="#1A1208" stroke="#E8820C" strokeWidth="1.5" />
          </g>
          <line x1="90" y1="100" x2="112" y2="100" stroke="#F5A73B" strokeWidth="3" />
          <circle cx="90" cy="100" r="5" fill="#E8820C" />
          <circle cx="112" cy="100" r="5" fill="#E8820C" />
        </svg>
      );
    case "claude-code-guia-completo":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <defs>
            <linearGradient id={`${idPrefix}-cc1-grad`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c96442" />
              <stop offset="100%" stopColor="#e8a87c" />
            </linearGradient>
          </defs>
          {/* Terminal window */}
          <rect x="28" y="40" width="144" height="116" rx="8" fill="#0d0f14" stroke="#c96442" strokeWidth="1.5" />
          <rect x="28" y="40" width="144" height="22" rx="8" fill="#1a1f2e" />
          <rect x="28" y="51" width="144" height="11" fill="#1a1f2e" />
          <circle cx="44" cy="51" r="4" fill="#ff5f57" />
          <circle cx="58" cy="51" r="4" fill="#febc2e" />
          <circle cx="72" cy="51" r="4" fill="#28c840" />
          <text x="40" y="80" fontFamily="monospace" fontSize="9" fill="#c96442">$ claude</text>
          <text x="40" y="94" fontFamily="monospace" fontSize="8" fill="#e8a87c" opacity="0.9">{">"} Analisando...</text>
          <rect x="40" y="102" width="64" height="5" rx="2" fill="#c96442" opacity="0.3" />
          <rect x="40" y="112" width="96" height="5" rx="2" fill="#e8a87c" opacity="0.2" />
          <rect x="40" y="122" width="80" height="5" rx="2" fill="#e8a87c" opacity="0.2" />
          <rect x="40" y="132" width="52" height="5" rx="2" fill="#c96442" opacity="0.25" />
          <rect x="40" y="142" width="8" height="9" rx="1" fill={`url(#${idPrefix}-cc1-grad)`} opacity="0.9" />
        </svg>
      );
    case "claude-code-prompts-avancados":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <defs>
            <linearGradient id={`${idPrefix}-cc2-grad`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#7eb8f7" />
            </linearGradient>
          </defs>
          {/* Brain/neural network */}
          <circle cx="100" cy="100" r="28" fill="#0a0d18" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="10" fill={`url(#${idPrefix}-cc2-grad)`} opacity="0.8" />
          {/* Nodes */}
          <circle cx="100" cy="44" r="7" fill="#0a0d18" stroke="#7eb8f7" strokeWidth="1.2" />
          <circle cx="152" cy="72" r="7" fill="#0a0d18" stroke="#3b82f6" strokeWidth="1.2" />
          <circle cx="152" cy="128" r="7" fill="#0a0d18" stroke="#7eb8f7" strokeWidth="1.2" />
          <circle cx="100" cy="156" r="7" fill="#0a0d18" stroke="#3b82f6" strokeWidth="1.2" />
          <circle cx="48" cy="128" r="7" fill="#0a0d18" stroke="#7eb8f7" strokeWidth="1.2" />
          <circle cx="48" cy="72" r="7" fill="#0a0d18" stroke="#3b82f6" strokeWidth="1.2" />
          {/* Connections */}
          <line x1="100" y1="51" x2="100" y2="72" stroke="#3b82f6" strokeWidth="0.8" opacity="0.7" />
          <line x1="145" y1="76" x2="126" y2="88" stroke="#7eb8f7" strokeWidth="0.8" opacity="0.7" />
          <line x1="145" y1="124" x2="126" y2="112" stroke="#3b82f6" strokeWidth="0.8" opacity="0.7" />
          <line x1="100" y1="149" x2="100" y2="128" stroke="#7eb8f7" strokeWidth="0.8" opacity="0.7" />
          <line x1="55" y1="124" x2="74" y2="112" stroke="#3b82f6" strokeWidth="0.8" opacity="0.7" />
          <line x1="55" y1="76" x2="74" y2="88" stroke="#7eb8f7" strokeWidth="0.8" opacity="0.7" />
          {/* Prompt symbol */}
          <text x="88" y="105" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#7eb8f7" opacity="0.9">{">"}_</text>
        </svg>
      );
    case "claude-code-automacao-workflows":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <defs>
            <linearGradient id={`${idPrefix}-cc3-grad`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
            <marker id={`${idPrefix}-arr`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
            </marker>
          </defs>
          {/* Pipeline boxes */}
          <rect x="20" y="56" width="44" height="28" rx="5" fill="#0a1410" stroke="#16a34a" strokeWidth="1.5" />
          <text x="42" y="74" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#4ade80">BUILD</text>
          <rect x="78" y="56" width="44" height="28" rx="5" fill="#0a1410" stroke="#4ade80" strokeWidth="1.5" />
          <text x="100" y="74" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#4ade80">TEST</text>
          <rect x="136" y="56" width="44" height="28" rx="5" fill="#0a1410" stroke="#16a34a" strokeWidth="1.5" />
          <text x="158" y="74" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#4ade80">SHIP</text>
          {/* Arrows */}
          <line x1="64" y1="70" x2="78" y2="70" stroke="#4ade80" strokeWidth="1.2" markerEnd={`url(#${idPrefix}-arr)`} />
          <line x1="122" y1="70" x2="136" y2="70" stroke="#4ade80" strokeWidth="1.2" markerEnd={`url(#${idPrefix}-arr)`} />
          {/* Second row */}
          <rect x="49" y="112" width="44" height="28" rx="5" fill="#0a1410" stroke="#4ade80" strokeWidth="1.5" />
          <text x="71" y="130" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#4ade80">LINT</text>
          <rect x="107" y="112" width="44" height="28" rx="5" fill="#0a1410" stroke="#16a34a" strokeWidth="1.5" />
          <text x="129" y="130" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#4ade80">DEPLOY</text>
          {/* Vertical connectors */}
          <line x1="100" y1="84" x2="71" y2="112" stroke="#4ade80" strokeWidth="0.8" opacity="0.6" strokeDasharray="3 2" />
          <line x1="158" y1="84" x2="129" y2="112" stroke="#4ade80" strokeWidth="0.8" opacity="0.6" strokeDasharray="3 2" />
          {/* Gear icon */}
          <circle cx="100" cy="162" r="12" fill="none" stroke={`url(#${idPrefix}-cc3-grad)`} strokeWidth="1.5" />
          <circle cx="100" cy="162" r="5" fill="none" stroke="#4ade80" strokeWidth="1.2" />
        </svg>
      );
    case "claude-code-agentes-ia":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <defs>
            <linearGradient id={`${idPrefix}-cc4-grad`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          {/* Agent head */}
          <rect x="62" y="44" width="76" height="72" rx="12" fill="#130a1e" stroke="#9333ea" strokeWidth="1.5" />
          {/* Eyes */}
          <rect x="76" y="64" width="18" height="14" rx="4" fill="#1e1030" stroke="#c084fc" strokeWidth="1.2" />
          <rect x="106" y="64" width="18" height="14" rx="4" fill="#1e1030" stroke="#c084fc" strokeWidth="1.2" />
          <circle cx="85" cy="71" r="4" fill={`url(#${idPrefix}-cc4-grad)`} />
          <circle cx="115" cy="71" r="4" fill={`url(#${idPrefix}-cc4-grad)`} />
          {/* Mouth */}
          <rect x="78" y="90" width="44" height="8" rx="4" fill="#1e1030" stroke="#9333ea" strokeWidth="1" />
          <rect x="82" y="92" width="8" height="4" rx="2" fill="#c084fc" opacity="0.7" />
          <rect x="94" y="92" width="8" height="4" rx="2" fill="#c084fc" opacity="0.7" />
          <rect x="106" y="92" width="8" height="4" rx="2" fill="#c084fc" opacity="0.7" />
          {/* Antenna */}
          <line x1="100" y1="44" x2="100" y2="28" stroke="#9333ea" strokeWidth="1.5" />
          <circle cx="100" cy="24" r="5" fill={`url(#${idPrefix}-cc4-grad)`} />
          {/* Body */}
          <rect x="72" y="116" width="56" height="36" rx="8" fill="#130a1e" stroke="#9333ea" strokeWidth="1.2" />
          <rect x="80" y="124" width="16" height="20" rx="4" fill="#1e1030" stroke="#c084fc" strokeWidth="0.8" />
          <rect x="104" y="124" width="16" height="20" rx="4" fill="#1e1030" stroke="#c084fc" strokeWidth="0.8" />
          {/* Arms */}
          <rect x="40" y="118" width="32" height="12" rx="6" fill="#130a1e" stroke="#9333ea" strokeWidth="1.2" />
          <rect x="128" y="118" width="32" height="12" rx="6" fill="#130a1e" stroke="#9333ea" strokeWidth="1.2" />
          {/* Circuit dots */}
          <circle cx="46" cy="152" r="3" fill="#9333ea" opacity="0.6" />
          <circle cx="154" cy="152" r="3" fill="#9333ea" opacity="0.6" />
          <line x1="46" y1="149" x2="72" y2="140" stroke="#9333ea" strokeWidth="0.7" opacity="0.5" />
          <line x1="154" y1="149" x2="128" y2="140" stroke="#9333ea" strokeWidth="0.7" opacity="0.5" />
        </svg>
      );
    case "facebook-ads-do-zero":
    case "criativos-facebook-ads":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <defs>
            <linearGradient id={`${idPrefix}-fb-grad`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1877f2" />
              <stop offset="100%" stopColor="#0a4fa8" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="72" fill={`url(#${idPrefix}-fb-grad)`} />
          <text x="100" y="122" textAnchor="middle" fontFamily="serif" fontSize="72" fontWeight="bold" fill="white">f</text>
        </svg>
      );
    case "copywriting-digital":
    case "email-marketing-avancado":
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <defs>
            <linearGradient id={`${idPrefix}-mk-grad`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          {/* Envelope */}
          <rect x="28" y="62" width="144" height="96" rx="8" fill="#1a0d2e" stroke="#a855f7" strokeWidth="1.5" />
          <polyline points="28,62 100,118 172,62" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <line x1="28" y1="158" x2="76" y2="118" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
          <line x1="172" y1="158" x2="124" y2="118" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
          {/* Sparkle */}
          <circle cx="148" cy="56" r="12" fill={`url(#${idPrefix}-mk-grad)`} opacity="0.9" />
          <line x1="148" y1="44" x2="148" y2="40" stroke="#c084fc" strokeWidth="1.5" />
          <line x1="148" y1="68" x2="148" y2="72" stroke="#c084fc" strokeWidth="1.5" />
          <line x1="136" y1="56" x2="132" y2="56" stroke="#c084fc" strokeWidth="1.5" />
          <line x1="160" y1="56" x2="164" y2="56" stroke="#c084fc" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
          <rect x="54" y="36" width="92" height="128" rx="10" fill="#111827" stroke="#34D399" strokeWidth="2" />
          <line x1="70" y1="72" x2="130" y2="72" stroke="#34D399" strokeWidth="3" />
          <line x1="70" y1="94" x2="130" y2="94" stroke="#34D399" strokeWidth="3" opacity="0.75" />
          <line x1="70" y1="116" x2="118" y2="116" stroke="#34D399" strokeWidth="3" opacity="0.5" />
        </svg>
      );
  }
}

function CoverTitle({ slug }: { slug: Product["slug"] }) {
  switch (slug) {
    case "dominando-vendas":
      return (
        <>
          <span className="block">Dominando</span>
          <span className="block text-[#c9a84c]">Vendas</span>
        </>
      );
    case "persuasao-influencia":
    case "persuasao-vendas":
      return (
        <>
          <span className="block">Persuasao</span>
          <span className="block text-[#c9a84c]">&amp; Vendas</span>
        </>
      );
    case "vendas-b2b":
      return (
        <>
          <span className="block">Vendas B2B</span>
          <span className="block text-[#c9a84c]">Grandes Negocios</span>
        </>
      );
    case "cold-calling":
      return (
        <>
          <span className="block">Cold Calling</span>
          <span className="block text-[#2ecc71]">Que Funciona</span>
        </>
      );
    case "funil-vendas-digital":
      return (
        <>
          <span className="block">Funil de Vendas</span>
          <span className="block text-[#5b96ff]">Digital</span>
        </>
      );
    case "negociacao-alto-impacto":
      return (
        <>
          <span className="block">Negociacao</span>
          <span className="block">de Alto</span>
          <span className="block text-[#f5a73b]">Impacto</span>
        </>
      );
    case "claude-code-guia-completo":
      return (
        <>
          <span className="block">Claude Code</span>
          <span className="block text-[#e8a87c]">Guia Completo</span>
        </>
      );
    case "claude-code-prompts-avancados":
      return (
        <>
          <span className="block">Prompts</span>
          <span className="block text-[#e8a87c]">Avancados</span>
        </>
      );
    case "claude-code-automacao-workflows":
      return (
        <>
          <span className="block">Automacao</span>
          <span className="block text-[#e8a87c]">Workflows</span>
        </>
      );
    case "claude-code-agentes-ia":
      return (
        <>
          <span className="block">Agentes</span>
          <span className="block text-[#e8a87c]">de IA</span>
        </>
      );
    case "facebook-ads-do-zero":
      return (
        <>
          <span className="block">Facebook Ads</span>
          <span className="block text-[#6b9fff]">do Zero</span>
        </>
      );
    case "criativos-facebook-ads":
      return (
        <>
          <span className="block">Criativos</span>
          <span className="block text-[#6b9fff]">que Vendem</span>
        </>
      );
    case "copywriting-digital":
      return (
        <>
          <span className="block">Copywriting</span>
          <span className="block text-[#c084fc]">Digital</span>
        </>
      );
    case "email-marketing-avancado":
      return (
        <>
          <span className="block">Email</span>
          <span className="block text-[#c084fc]">Marketing</span>
        </>
      );
    default:
      return <span className="block">Ebook</span>;
  }
}

export default function ProductCoverArt({
  product,
  size = "md",
  className = "",
}: ProductCoverArtProps) {
  const idPrefix = useId().replace(/:/g, "");
  const theme = getTheme(product.slug);
  const style = sizeStyles[size];

  return (
    <div
      className={`relative isolate overflow-hidden rounded-xl border border-black/10 shadow-[0_14px_30px_rgba(0,0,0,0.18)] ${theme.background} ${className}`}
    >
      <CoverPattern slug={product.slug} idPrefix={idPrefix} />

      <div
        className={`absolute inset-x-0 top-0 text-center font-semibold uppercase ${style.badge} ${theme.badgeColor}`}
      >
        Guia Completo
      </div>

      <div className={`absolute inset-x-0 flex justify-center ${style.graphicWrap}`}>
        <CoverGraphic
          slug={product.slug}
          idPrefix={idPrefix}
          className={style.graphic}
        />
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 text-center ${style.bottom} ${theme.footerColor}`}
      >
        <div
          className={`font-serif font-black uppercase leading-[0.92] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] ${style.title} ${theme.titleColor}`}
        >
          <CoverTitle slug={product.slug} />
        </div>
        <div className={`mx-auto my-1 h-px ${style.line} ${theme.lineColor}`} />
        <div className={`font-semibold uppercase ${style.footer}`}>Edicao 2026</div>
      </div>
    </div>
  );
}
