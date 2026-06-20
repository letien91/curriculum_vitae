"use client";

import { useEffect, useState } from "react";

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showScrollTop) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-5 bottom-8 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-gray-600 shadow-lg ring-1 ring-black/5 transition hover:scale-105 hover:text-gray-900"
    >
      ↑
    </button>
  );
}
