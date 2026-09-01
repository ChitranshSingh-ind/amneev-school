"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { schoolMedia } from "@/data/media";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

export const GalleryLightbox: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ["ALL", "Academics", "Campus", "Sports", "Arts", "Student Life", "Events"];

  const filteredImages =
    activeCategory === "ALL"
      ? schoolMedia.gallery
      : schoolMedia.gallery.filter((img) => img.category === activeCategory);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? filteredImages.length - 1 : (prev as number) - 1));
  }, [selectedIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === filteredImages.length - 1 ? 0 : (prev as number) + 1));
  }, [selectedIndex, filteredImages.length]);

  // Keyboard navigation for accessible lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section className="py-20 sm:py-28 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brass-600" />
              <span>Campus Visual Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950">
              Moments at AMNEEV.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-stonebg p-1 rounded-sm border border-sand-200">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                  activeCategory === cat
                    ? "bg-forest-900 text-sand-50 shadow-xs"
                    : "text-charcoal-700 hover:text-forest-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedIndex(idx)}
              className="group relative h-64 sm:h-72 lg:h-80 rounded-sm overflow-hidden bg-sand-200 cursor-pointer shadow-subtle hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="self-start text-[10px] font-mono uppercase tracking-wider text-sand-50 bg-forest-950/70 px-2 py-0.5 rounded-sm backdrop-blur-xs">
                  {img.category}
                </span>

                <div className="flex items-center justify-between text-sand-50">
                  <p className="font-serif text-base sm:text-lg font-bold leading-snug">
                    {img.title}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-sand-50/10 group-hover:bg-sand-50 text-sand-100 group-hover:text-forest-950 flex items-center justify-center transition-all duration-200 flex-shrink-0 ml-2">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Full-Screen Modal Lightbox */}
      {selectedIndex !== null && filteredImages[selectedIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Image Viewer"
          className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8 animate-fade-in"
        >
          {/* Top Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between text-sand-100 z-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brass-400 font-bold">
                {filteredImages[selectedIndex].category}
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-sand-50 font-bold">
                {filteredImages[selectedIndex].title}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="p-2 rounded-full bg-sand-50/10 hover:bg-sand-50 text-sand-100 hover:text-forest-950 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image View with Prev/Next Controls */}
          <div className="relative w-full max-w-5xl h-[65vh] sm:h-[72vh] my-auto flex items-center justify-center">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:-left-6 z-10 p-3 rounded-full bg-forest-900/80 hover:bg-sand-50 text-sand-100 hover:text-forest-950 border border-sand-200/20 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full rounded-sm overflow-hidden">
              <Image
                src={filteredImages[selectedIndex].url}
                alt={filteredImages[selectedIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:-right-6 z-10 p-3 rounded-full bg-forest-900/80 hover:bg-sand-50 text-sand-100 hover:text-forest-950 border border-sand-200/20 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Counter */}
          <div className="w-full max-w-6xl flex items-center justify-between text-xs text-sand-400 pt-2 z-10">
            <span>Use Left/Right Arrow Keys or Swipe to Navigate</span>
            <span className="font-mono text-sand-300">
              {selectedIndex + 1} / {filteredImages.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
