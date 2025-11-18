// components/ImageGalleryWithLightbox.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImageItem = {
  src: string;
  alt?: string;
};

type Props = {
  images?: ImageItem[];
  startIndex?: number;
  className?: string;
  showThumbnails?: boolean;
};

export default function ImageGalleryWithLightbox({
  images = [],
  startIndex = 0,
  className = "",
  showThumbnails = true,
}: Props) {
  const safeImages = images ?? [];
  const [index, setIndex] = useState(
    Math.max(0, Math.min(startIndex, safeImages.length - 1))
  );
  const [isOpen, setIsOpen] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      } else if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, index, safeImages.length]);

  const openAt = (i: number) => {
    if (safeImages.length === 0) return;
    setIndex(i);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const goPrev = () => {
    if (safeImages.length === 0) return;
    setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  };

  const goNext = () => {
    if (safeImages.length === 0) return;
    setIndex((i) => (i + 1) % safeImages.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const dx = touchStartX.current - touchEndX.current;
    if (Math.abs(dx) > 40) {
      dx > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // if user clicked outside image (overlay area)
    if (target === overlayRef.current) {
      close();
    }
  };

  if (!safeImages || safeImages.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        No images to display.
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Thumbnails grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 bg-gray-50">
        {safeImages.map((img, i) => (
          <button
            key={img.src + "-" + i}
            className="overflow-hidden rounded-lg focus:outline-none"
            onClick={() => openAt(i)}
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={img.src}
              loading="lazy"
              alt={img.alt ?? `Image ${i + 1}`}
              className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {/* MODAL LIGHTBOX */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="lightbox-overlay"
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            onClick={handleOverlayClick}
          >
            {/* Top text: Press ESC to exit */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-3 py-1 rounded-full">
              Press ESC to exit
            </div>

            {/* Close Button (X) */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/70 h-10 w-10 flex items-center justify-center rounded-full"
            >
              ✕
            </button>

            {/* MAIN CONTENT */}
            <motion.div
              key={`lightbox-img-${index}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-[95%] max-h-[95%] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Left arrow */}
              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
              >
                ‹
              </button>

              {/* Right arrow */}
              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
              >
                ›
              </button>

              {/* Main Image */}
              <img
                src={safeImages[index].src}
                alt={safeImages[index].alt ?? `Image ${index + 1}`}
                className="max-w-[95vw] max-h-[85vh] object-contain rounded-md shadow-lg"
              />

              {/* Thumbnails inside modal */}
              {showThumbnails && (
                <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto px-2">
                  {safeImages.map((img, i) => (
                    <button
                      key={"modal-thumb-" + i}
                      onClick={() => setIndex(i)}
                      className={`shrink-0 rounded-md ring-2 ${
                        i === index ? "ring-blue-500" : "ring-transparent"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt ?? `thumb-${i + 1}`}
                        className="h-16 w-24 object-cover rounded-md"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
