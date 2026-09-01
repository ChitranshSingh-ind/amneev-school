import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight } from "lucide-react";

export const PhilosophyIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Large Editorial Statement */}
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-3">
              Our Educational Philosophy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-bold tracking-tight leading-editorial text-forest-950">
              Education that sees the <span className="italic font-normal text-forest-800">whole child</span>.
            </h2>
            <p className="mt-6 text-xl sm:text-2xl font-serif text-charcoal-800 leading-snug">
              At AMNEEV Vision School, academic brilliance is not an isolated pursuit—it is the natural outcome of curiosity nurtured in an environment of safety, ethical grounding, and intellectual ambition.
            </p>
          </div>

          {/* Right: Narrative Context & Direct Link */}
          <div className="lg:col-span-5 pt-2 lg:pt-8 space-y-6">
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              Established in 2011 on an expansive 18,141 sq. m. campus in Etawah, AMNEEV was founded on the belief that modern Indian learners deserve world-class learning infrastructure paired with timeless cultural values.
            </p>
            <p className="text-base text-charcoal-600 leading-relaxed">
              We integrate rigorous CBSE pedagogy with our state-of-the-art Atal Tinkering Lab, active NCC leadership, expressive arts, and competitive sports—ensuring every student graduates as an empathetic, resilient, and future-ready citizen.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-forest-700 group transition-colors"
              >
                <span>Read our institutional vision & heritage</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Large Editorial Photography Feature */}
        <div className="mt-14 sm:mt-16 relative w-full h-[380px] sm:h-[480px] md:h-[560px] rounded-sm overflow-hidden shadow-elevated">
          <Image
            src={schoolMedia.philosophy.url}
            alt={schoolMedia.philosophy.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between text-sand-50 gap-4">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-widest text-brass-300 font-medium mb-1">
                Classroom Culture
              </p>
              <p className="text-sm sm:text-base text-sand-100 font-serif italic">
                {schoolMedia.philosophy.caption}
              </p>
            </div>
            <div className="text-xs text-sand-300 font-sans tracking-wide">
              72 Classrooms · Smart Pedagogy · Experienced Mentors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
