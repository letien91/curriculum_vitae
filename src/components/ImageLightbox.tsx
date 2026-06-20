"use client";

import { useCallback, useEffect, useState } from "react";
import { assetPath } from "@/lib/asset-path";

type ImageLightboxProps = {
  images: string[];
  initialIndex: number;
  title: string;
  onClose: () => void;
};

export function ImageLightbox({
  images,
  initialIndex,
  title,
  onClose,
}: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const hasMultiple = images.length > 1;

  const goPrev = useCallback(() => {
    setIndex((current) => (current <= 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((current) => (current >= images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [goNext, goPrev, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
      >
        ×
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            className="absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:right-6"
          >
            ›
          </button>
        </>
      )}

      <img
        src={assetPath(images[index])}
        alt={`${title} screenshot ${index + 1}`}
        className="max-h-[85vh] max-w-full object-contain"
        onClick={(event) => event.stopPropagation()}
      />

      {hasMultiple && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/80">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
