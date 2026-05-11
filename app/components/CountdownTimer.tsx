"use client";

import { useEffect, useState } from "react";

const DURATION_MS = 3 * 60 * 60 * 1000; // 3h

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

interface Parts {
  h: number;
  m: number;
  s: number;
}

function partsFromMs(ms: number): Parts {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    h: Math.floor(total / 3600),
    m: Math.floor((total % 3600) / 60),
    s: total % 60,
  };
}

export default function CountdownTimer({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const storageKey = `promo_deadline_${slug}`;
  // renderização inicial estável no SSR — preenche após o mount
  const [ms, setMs] = useState<number>(DURATION_MS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let deadline: number;
    try {
      const raw = localStorage.getItem(storageKey);
      const stored = raw ? Number.parseInt(raw, 10) : NaN;
      if (Number.isFinite(stored) && stored - Date.now() > 0) {
        deadline = stored;
      } else {
        deadline = Date.now() + DURATION_MS;
        localStorage.setItem(storageKey, String(deadline));
      }
    } catch {
      deadline = Date.now() + DURATION_MS;
    }

    setMs(Math.max(0, deadline - Date.now()));
    setReady(true);

    const id = setInterval(() => {
      const remaining = Math.max(0, deadline - Date.now());
      setMs(remaining);
      if (remaining <= 0) clearInterval(id);
    }, 1000);

    return () => clearInterval(id);
  }, [storageKey]);

  const { h, m, s } = partsFromMs(ms);
  const expired = ready && ms <= 0;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 font-mono text-sm font-bold text-white shadow-lg ring-2 ring-red-500/40 ${className}`}
      aria-live="polite"
    >
      <span className="mr-1 inline-flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-[10px] uppercase tracking-widest">
        <span className="h-2 w-2 animate-ping rounded-full bg-white" />
        Promo
      </span>
      {expired ? (
        <span className="text-red-400">Promoção encerrada</span>
      ) : (
        <>
          <span className="tabular-nums">{pad(h)}</span>
          <span className="opacity-60">:</span>
          <span className="tabular-nums">{pad(m)}</span>
          <span className="opacity-60">:</span>
          <span className="tabular-nums animate-pulse text-red-500 [text-shadow:0_0_10px_rgba(239,68,68,0.8)]">
            {pad(s)}
          </span>
        </>
      )}
    </div>
  );
}
