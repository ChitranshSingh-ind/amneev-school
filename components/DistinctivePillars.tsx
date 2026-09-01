import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight } from "lucide-react";

export const DistinctivePillars: React.FC = () => {
  const pillars = [
    {
      title: "Intellectual Rigour & Academic Pathways",
      summary:
        "From early childhood sensory exploration with Kreedo to senior secondary CBSE board mastery across Science, Commerce, and Humanities. Supported by 72 modern smart classrooms and dedicated faculty mentorship.",
      href: "/academics",
      cta: "Explore Curriculum & Stages",
      image: schoolMedia.learning.seniorSchool.url,
      alt: "AMNEEV senior secondary students engaged in structured academic inquiry",
      stats: "Nursery to XII · CBSE Affiliation No. 2131535 · 72 Classrooms",
    },
    {
      title: "Applied Innovation & STEM Discovery",
      summary:
        "Home to an authorized Atal Tinkering Lab (NITI Aayog) and 6 specialized science, computer, and research laboratories. Students design robotics, prototype IoT electronics, and write code from middle school onward.",
      href: "/innovation",
      cta: "Explore Atal Tinkering Lab & 6 Suites",
      image: schoolMedia.academics.scienceLab.url,
      alt: "Students conducting experiments inside the advanced science laboratory",
      stats: "Atal Tinkering Lab · Physics, Chemistry & Biology Labs · Modern Computing",
    },
    {
      title: "Character, Leadership & Athletic Mastery",
      summary:
        "Disciplined civic leadership through an authorized National Cadet Corps (NCC) unit paired with an 18,141 sq. metre sports infrastructure for football, cricket, basketball, and performing arts studios.",
      href: "/ncc",
      cta: "Explore NCC, Sports & Student Life",
      image: schoolMedia.ncc.drill.url,
      alt: "AMNEEV NCC cadets during ceremonial parade drill on campus grounds",
      stats: "NCC Cadet Wing · Multidisciplinary Sports Complex · Fine Arts & Music Studios",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-stonebg text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950 leading-tight text-balance">
            Three pillars of an <br />
            <span className="italic font-normal text-forest-800">AMNEEV education</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal text-pretty">
            We structure our learning environment around three pillars that cultivate intellect, curiosity, and ethical responsibility in equal measure.
          </p>
        </div>

        {/* 3 Major Editorial Pillar Rows with Varied Layout Compositions */}
        <div className="space-y-24 sm:space-y-32">
          {/* Pillar 01: Intellectual Rigour & CBSE Academic Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="relative w-full h-[340px] sm:h-[440px] md:h-[500px] rounded-sm overflow-hidden border border-sand-300 shadow-elevated">
                <Image
                  src={schoolMedia.learning.seniorSchool.url}
                  alt="AMNEEV senior secondary students engaged in structured academic inquiry"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono text-charcoal-500 uppercase tracking-widest block">
                Pillar 01 · Academic Rigour
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-3.5xl font-bold tracking-tight text-forest-950 leading-snug">
                Intellectual Rigour & CBSE Pathways
              </h3>
              <p className="text-base text-charcoal-700 leading-relaxed font-normal">
                From early childhood sensory exploration with Kreedo to senior secondary CBSE board mastery across Science, Commerce, and Humanities. Supported by 72 modern smart classrooms and dedicated faculty mentorship.
              </p>
              <div className="pt-2 text-xs font-mono text-forest-800 border-t border-sand-300">
                Nursery to XII · CBSE Affiliation No. 2131535 · 72 Classrooms
              </div>
              <div className="pt-2">
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-forest-950 hover:text-forest-700 group transition-colors"
                >
                  <span>Explore Academic Curriculum & Stages</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-brass-600" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pillar 02: Applied Innovation & NITI Aayog ATL Lab (Asymmetrical Blueprint Style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 lg:order-1 space-y-5">
              <span className="text-xs font-mono text-charcoal-500 uppercase tracking-widest block">
                Pillar 02 · Applied Innovation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-3.5xl font-bold tracking-tight text-forest-950 leading-snug">
                Atal Tinkering Lab & Scientific Inquiry
              </h3>
              <p className="text-base text-charcoal-700 leading-relaxed font-normal">
                Authorized by NITI Aayog, our Atal Tinkering Lab (ATL) and 6 specialized science, computer, and research laboratories empower students to design robotics, prototype IoT electronics, and write code from middle school onward.
              </p>
              <div className="pt-2 text-xs font-mono text-forest-800 border-t border-sand-300">
                NITI Aayog ATL · Physics, Chemistry & Biology Labs · Modern Computing
              </div>
              <div className="pt-2">
                <Link
                  href="/innovation"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-forest-950 hover:text-forest-700 group transition-colors"
                >
                  <span>Explore Atal Tinkering Lab & 6 Suites</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-brass-600" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 lg:order-2">
              <div className="relative w-full h-[340px] sm:h-[440px] md:h-[500px] rounded-sm overflow-hidden border border-sand-300 shadow-elevated">
                <Image
                  src={schoolMedia.academics.scienceLab.url}
                  alt="Students conducting experiments inside the advanced science laboratory"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-forest-950/85 backdrop-blur-sm p-3.5 rounded-sm text-xs text-sand-100 flex items-center justify-between border border-forest-800">
                  <span className="font-mono text-brass-300">Atal Innovation Mission · NITI Aayog</span>
                  <span className="font-mono text-sand-300">6 Research Labs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 03: Character, Leadership & Athletics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="relative w-full h-[340px] sm:h-[440px] md:h-[500px] rounded-sm overflow-hidden border border-sand-300 shadow-elevated">
                <Image
                  src={schoolMedia.ncc.drill.url}
                  alt="AMNEEV NCC cadets during ceremonial parade drill on campus grounds"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono text-charcoal-500 uppercase tracking-widest block">
                Pillar 03 · Character & Service
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-3.5xl font-bold tracking-tight text-forest-950 leading-snug">
                NCC Leadership & Athletic Mastery
              </h3>
              <p className="text-base text-charcoal-700 leading-relaxed font-normal">
                Disciplined civic service through an authorized National Cadet Corps (NCC) unit paired with an 18,141 sq. metre sports infrastructure for football, cricket, basketball, athletics, and classical/contemporary arts studios.
              </p>
              <div className="pt-2 text-xs font-mono text-forest-800 border-t border-sand-300">
                NCC Cadet Wing · Sports Complex · Fine Arts & Music Studios
              </div>
              <div className="pt-2">
                <Link
                  href="/ncc"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-forest-950 hover:text-forest-700 group transition-colors"
                >
                  <span>Explore NCC, Sports & Student Life</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-brass-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
