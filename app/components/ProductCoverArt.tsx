import { useId } from "react";
import type { Product } from "@/app/data/products";

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
