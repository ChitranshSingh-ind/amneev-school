"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[90vh] min-h-[640px] max-h-[960px] flex items-center justify-center overflow-hidden bg-forest-950">
      {/* Background Cinematic Video with Natural Film Grade */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={schoolMedia.hero.poster}
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-95 contrast-105"
        >
          <source src={schoolMedia.hero.video} type="video/mp4" />
        </video>
        {/* Natural Atmospheric Scrim */}
        <div className="absolute inset-0 bg-forest-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-forest-950/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50 pt-16 sm:pt-20">
        {/* Institutional Monogram & Location */}
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-sm bg-forest-900/80 border border-sand-200/20 backdrop-blur-md">
          <span className="font-mono text-[11px] uppercase tracking-widest text-brass-300 font-medium">
            Etawah, Uttar Pradesh · Est. 2011
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5.5xl md:text-6.5xl lg:text-7.5xl font-bold tracking-tight leading-none mb-6 text-balance text-sand-50">
          Shaping Minds. <br className="hidden sm:inline" />
          <span className="italic font-normal text-brass-200">Building Futures.</span>
        </h1>

        {/* Supporting Line */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-sand-100 font-serif leading-relaxed mb-10 text-pretty font-normal">
          Where curiosity becomes confidence, and every learner is encouraged to discover what they can become.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-sand-50 text-forest-950 font-semibold text-xs uppercase tracking-wider hover:bg-brass-100 transition-all duration-200 shadow-elevated"
          >
            Explore AMNEEV
          </Link>
          <Link
            href="/admissions"
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-forest-900/90 hover:bg-forest-850 text-sand-50 font-semibold text-xs uppercase tracking-wider border border-sand-200/30 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Admissions 2026–27</span>
            <ArrowUpRight className="w-4 h-4 text-brass-400" />
          </Link>
        </div>

        {/* Verified Affiliation Line */}
        <div className="mt-10 text-xs text-sand-300 font-mono tracking-wider">
          CBSE Affiliation No. 2131535 · School Code 70350 · Nursery to Class XII
        </div>
      </div>

      {/* Subtle Scroll Down Cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-sand-300 font-mono">Scroll</span>
        <div className="w-4 h-7 rounded-sm border border-sand-200/40 flex items-start justify-center p-0.5">
          <div className="w-1 h-2 rounded-sm bg-brass-400 opacity-90" />
        </div>
      </div>
    </section>
  );
};
