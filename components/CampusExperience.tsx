import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight } from "lucide-react";

export const CampusExperience: React.FC = () => {
  const stages = [
    {
      level: "Early Years",
      grades: "Nursery · LKG · UKG",
      headline: "Curiosity & Sensory Play",
      desc: "Activity-based, play-driven foundation using the proven Kreedo pedagogy.",
      href: "/early-years",
    },
    {
      level: "Middle School",
      grades: "Class I to Class VIII",
      headline: "Critical Inquiry & STEM",
      desc: "Concept clarity, foundational mathematics, science labs, and bilingual articulation.",
      href: "/middle-school",
    },
    {
      level: "Senior Secondary",
      grades: "Class IX to Class XII",
      headline: "CBSE Mastery & Board Rigour",
      desc: "Specialized streams in Science, Commerce, and Humanities with competitive exam guidance.",
      href: "/senior-school",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950 leading-tight">
            An 18,141 sq. m. campus <br />
            <span className="italic font-normal text-forest-800">designed for discovery</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
            Located in Sai City on NH-92 in Etawah, our campus unites tranquil green outdoor learning spaces with modern academic facilities.
          </p>
        </div>

        {/* Cinematic Campus Feature Visual */}
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[560px] rounded-sm overflow-hidden border border-sand-300 shadow-elevated mb-16 sm:mb-20">
          <Image
            src={schoolMedia.campus.aerial.url}
            alt={schoolMedia.campus.aerial.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between text-sand-50 gap-4">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-brass-300 block mb-1">
                Campus Environment
              </span>
              <p className="text-sm sm:text-base font-serif italic text-sand-100">
                72 Smart Classrooms · 6 Science & Tech Labs · Multidisciplinary Athletic Grounds · Atal Tinkering Lab
              </p>
            </div>
            <Link
              href="/campus"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-sand-50 hover:text-brass-300 transition-colors"
            >
              <span>Explore Campus Infrastructure</span>
              <ArrowRight className="w-4 h-4 text-brass-400" />
            </Link>
          </div>
        </div>

        {/* 3 Developmental Stages Horizontal Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-6 border-t border-sand-300">
          {stages.map((stage, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-forest-800 uppercase tracking-wider">
                  {stage.grades}
                </span>
                <span className="text-xs font-mono text-charcoal-400">0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                {stage.level}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                {stage.desc}
              </p>
              <div className="pt-2">
                <Link
                  href={stage.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 hover:text-forest-700 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brass-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
