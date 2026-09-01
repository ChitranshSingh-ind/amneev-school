import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight, Music, Palette, Theater } from "lucide-react";

export const ArtsCultureSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-stonebg text-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Visual Arts, Music & Performance
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950">
              Make space for creativity.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
            Artistic expression gives shape to empathy, culture, and individual voice. Our dedicated studios nurture music, theatre, and the visual arts alongside academic rigour.
          </p>
        </div>

        {/* 3-Column Expressive Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Music & Instruments */}
          <div className="bg-ivory rounded-sm overflow-hidden border border-sand-200 shadow-subtle group">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={schoolMedia.arts.music.url}
                alt={schoolMedia.arts.music.alt}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-brass-700 mb-2">
                <Music className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Acoustic & Vocal</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                Indian Classical & Contemporary Music
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Dedicated instrumentation suites for tabla, keyboard, guitar, and vocal harmony taught by experienced instructors.
              </p>
            </div>
          </div>

          {/* Card 2: Fine Arts & Painting */}
          <div className="bg-ivory rounded-sm overflow-hidden border border-sand-200 shadow-subtle group">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={schoolMedia.arts.painting.url}
                alt={schoolMedia.arts.painting.alt}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-brass-700 mb-2">
                <Palette className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Visual Arts</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                Fine Art, Sketching & Sculpture
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Sunlit art studios encouraging oil canvas painting, traditional Indian folk motifs, and experimental mixed media.
              </p>
            </div>
          </div>

          {/* Card 3: Theatre & Dance */}
          <div className="bg-ivory rounded-sm overflow-hidden border border-sand-200 shadow-subtle group">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={schoolMedia.arts.dance.url}
                alt={schoolMedia.arts.dance.alt}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-brass-700 mb-2">
                <Theater className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Performance</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                Theatre, Drama & Cultural Panorama
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Annual productions, dramatic plays, and classical dance choreography performed before the wider Etawah school community.
              </p>
            </div>
          </div>
        </div>

        {/* Link */}
        <div className="mt-10 text-center">
          <Link
            href="/arts"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-forest-900 hover:text-forest-700 group transition-colors"
          >
            <span>Learn More About Cultural & Creative Arts at AMNEEV</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
