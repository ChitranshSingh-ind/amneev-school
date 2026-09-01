import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { schoolMedia } from "@/data/media";
import { ArrowRight } from "lucide-react";

export const PhilosophyLeadership: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Headline Lockup */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest-950 leading-tight">
            Education that sees the <span className="italic font-normal text-forest-800">whole child</span>.
          </h2>
          <p className="mt-6 text-xl sm:text-2xl font-serif text-charcoal-800 leading-relaxed max-w-3xl">
            At AMNEEV Vision School, academic brilliance is the natural outcome of curiosity nurtured in an environment of safety, ethical grounding, and intellectual ambition.
          </p>
        </div>

        {/* Two-Column Asymmetrical Narrative & Leadership Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Pedagogical Thesis & 15-Year Heritage */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-charcoal-700 leading-relaxed">
            <p>
              Founded in 2011 on Farrukhabad Road in Etawah, AMNEEV was established on a simple conviction: that schooling in Uttar Pradesh should rival the world’s finest international institutions in holistic depth while remaining steadfastly rooted in Indian values and CBSE academic discipline.
            </p>
            <p>
              Across our 18,141 sq. metre campus, learning is not measured by rote repetition. From the sensory-rich Kreedo environment in early years to the research laboratories of senior secondary science and humanities, we mentor students to question deeply, collaborate generously, and lead with moral clarity.
            </p>

            <div className="pt-4 flex items-center gap-8 border-t border-sand-300">
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 block">15+</span>
                <span className="text-xs uppercase tracking-wider text-charcoal-600 font-sans">Years of Institutional Excellence</span>
              </div>
              <div className="h-10 w-px bg-sand-300" />
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 block">18,141</span>
                <span className="text-xs uppercase tracking-wider text-charcoal-600 font-sans">Sq. Metres Green Campus</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-forest-700 group transition-colors"
              >
                <span>Read our institutional heritage & governance</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-brass-600" />
              </Link>
            </div>
          </div>

          {/* Right Column: Principal's Leadership Letter & Portrait */}
          <div className="lg:col-span-5 bg-stonebg p-8 sm:p-10 rounded-sm border border-sand-300/80">
            <div className="flex items-start gap-6 mb-6">
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-sm overflow-hidden flex-shrink-0 border border-sand-300">
                <Image
                  src={schoolMedia.principal.url}
                  alt={schoolMedia.principal.alt}
                  fill
                  className="object-cover object-top"
                  sizes="120px"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                  {siteContent.school.principal.name}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-brass-700 mt-0.5">
                  {siteContent.school.principal.title}
                </p>
                <p className="text-xs text-charcoal-600 font-mono mt-1">
                  AMNEEV Vision School, Etawah
                </p>
              </div>
            </div>

            <blockquote className="font-serif text-lg text-forest-950 italic leading-snug border-l-2 border-brass-500 pl-4 my-4">
              &ldquo;True education is the cultivation of resilient character, critical reasoning, and empathetic leadership.&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mt-4">
              With our Atal Tinkering Lab, comprehensive athletic grounds, and accredited NCC cadet wing, we prepare Etawah’s learners to thrive at premier universities and lead global careers.
            </p>

            <div className="mt-6 pt-4 border-t border-sand-300 flex items-center justify-between text-xs">
              <span className="text-charcoal-500 font-mono">CBSE Affiliation No. 2131535</span>
              <Link
                href="/about#principal"
                className="font-semibold text-forest-900 hover:text-forest-700 transition-colors"
              >
                Full Letter →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
