import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { schoolMedia } from "@/data/media";
import { ArrowUpRight } from "lucide-react";

export const PillarsSection: React.FC = () => {
  // Mapping media to each pillar
  const pillarImages: Record<string, string> = {
    "01": schoolMedia.pillars.learn.url,
    "02": schoolMedia.pillars.explore.url,
    "03": schoolMedia.pillars.move.url,
    "04": schoolMedia.pillars.create.url,
    "05": schoolMedia.pillars.lead.url,
    "06": schoolMedia.pillars.belong.url,
  };

  return (
    <section className="py-20 sm:py-28 bg-stonebg text-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Holistic Student Development
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950">
              More than a classroom.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
            Education at AMNEEV unfolds across academic halls, innovation laboratories, sports arenas, art studios, and community service.
          </p>
        </div>

        {/* 6 Asymmetrical Visual Editorial Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteContent.pillars.map((pillar) => {
            const imageUrl = pillarImages[pillar.number] || schoolMedia.pillars.learn.url;

            return (
              <Link
                key={pillar.number}
                href={pillar.href}
                className="group block relative rounded-sm overflow-hidden bg-forest-950 text-sand-50 h-[400px] sm:h-[440px] shadow-subtle hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Large Background Imagery */}
                <Image
                  src={imageUrl}
                  alt={pillar.title}
                  fill
                  className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.7] group-hover:brightness-[0.6]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Editorial Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between z-10">
                  {/* Top: Sequential Number and Category */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brass-300 font-bold tracking-widest px-2.5 py-1 rounded-sm bg-forest-950/70 border border-sand-200/20 backdrop-blur-xs">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-sand-200/90 font-medium">
                      {pillar.category}
                    </span>
                  </div>

                  {/* Bottom: Title, Description, and CTA */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-sand-50 group-hover:text-brass-200 transition-colors">
                        {pillar.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-sand-50/10 group-hover:bg-sand-50 text-sand-100 group-hover:text-forest-950 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-sand-200/90 leading-relaxed line-clamp-3">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
