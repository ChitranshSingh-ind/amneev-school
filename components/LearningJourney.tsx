import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { schoolMedia } from "@/data/media";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const LearningJourney: React.FC = () => {
  const stageImages: Record<string, string> = {
    "early-years": schoolMedia.learning.earlyYears.url,
    "middle-school": schoolMedia.learning.middleSchool.url,
    "senior-school": schoolMedia.learning.seniorSchool.url,
  };

  return (
    <section className="py-20 sm:py-28 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
            Academic Pathways
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950">
            Learning with purpose.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
            From the joyful sensory exploration of early childhood to the rigorous analytical preparation of senior secondary CBSE board examinations, our curriculum is engineered for deep comprehension and future readiness.
          </p>
        </div>

        {/* 3 Major Pathways Layout */}
        <div className="space-y-14 sm:space-y-20">
          {siteContent.learningStages.map((stage, idx) => {
            const isReversed = idx % 2 === 1;
            const imageUrl = stageImages[stage.id] || schoolMedia.learning.middleSchool.url;

            return (
              <div
                key={stage.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
              >
                {/* Visual Imagery */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-sm overflow-hidden shadow-elevated group">
                    <Image
                      src={imageUrl}
                      alt={stage.stage}
                      fill
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-forest-950/20 group-hover:bg-forest-950/10 transition-colors" />
                    <div className="absolute top-4 left-4 bg-ivory/95 backdrop-blur-sm text-forest-950 px-3 py-1.5 rounded-sm border border-sand-300 text-xs font-semibold uppercase tracking-wider">
                      {stage.grades}
                    </div>
                  </div>
                </div>

                {/* Content & Pedagogy Details */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-block">
                    <span className="text-xs font-mono uppercase tracking-widest text-brass-700 font-bold bg-sand-100 px-2.5 py-1 rounded-sm border border-sand-300">
                      {stage.stage}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-3.5xl font-bold tracking-tight text-forest-950 leading-snug">
                    {stage.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                    {stage.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {stage.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-800">
                        <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Program CTA */}
                  <div className="pt-3">
                    <Link
                      href={stage.href}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold px-5 py-3 rounded-sm bg-forest-900 text-sand-50 hover:bg-forest-800 transition-colors shadow-subtle group"
                    >
                      <span>Explore {stage.stage}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-brass-400" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
