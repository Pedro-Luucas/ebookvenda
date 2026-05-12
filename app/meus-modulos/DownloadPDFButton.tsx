"use client";

export default function DownloadPDFButton({ slug, title }: { slug: string; title: string }) {

  function handleDownload(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.top = "-10000px";
    iframe.style.left = "-10000px";
    iframe.style.width = "1px";
    iframe.style.height = "1px";
    iframe.src = `/api/modulo/${slug}`;
    document.body.appendChild(iframe);

    iframe.onload = () => {
      if (iframe.contentWindow) {
        iframe.contentWindow.print();
      }
      setTimeout(() => document.body.removeChild(iframe), 1000);
    };
  }

  return (
    <button
      onClick={handleDownload}
      title={`Baixar "${title}" como PDF`}
      className="absolute top-3 right-3 z-10 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
      style={{
        background: "var(--accent)",
        color: "#000",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </button>
  );
}
