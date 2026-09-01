import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight, BookOpen, Cpu, FlaskConical, MonitorCheck } from "lucide-react";

export const AcademicExcellence: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-forest-950 text-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 sm:mb-18">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-editorial font-semibold text-brass-400 mb-3">
              Academic Infrastructure & Pedagogy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-bold tracking-tight text-sand-50 leading-editorial">
              Challenge. Curiosity. <span className="italic font-normal text-brass-200">Confidence.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-sand-200 leading-relaxed">
              Our academic model unites rigorous CBSE syllabus mastery with experiential inquiry. With 72 smart classrooms and 6 dedicated laboratories, learners test theory through hands-on practice.
            </p>
          </div>
        </div>

        {/* Big Lab Showcase & Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Visual Feature */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] rounded-sm overflow-hidden shadow-elevated">
            <Image
              src={schoolMedia.academics.scienceLab.url}
              alt={schoolMedia.academics.scienceLab.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-sand-50">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-forest-900/90 border border-sand-200/20 text-xs font-mono text-brass-300 mb-2">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>6 Specialized Science & Computing Labs</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Advanced Experimental Chemistry & Physics Laboratories
              </h3>
              <p className="text-xs sm:text-sm text-sand-200/90 mt-1 max-w-lg">
                Compliant with highest safety protocols, allowing senior students to execute comprehensive CBSE board practicals and autonomous research projects.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Infrastructure Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Box 1: Smart Classrooms */}
            <div className="p-6 rounded-sm bg-forest-900/60 border border-forest-800 hover:border-forest-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-sm bg-forest-800 flex items-center justify-center text-brass-400">
                  <MonitorCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-sand-50">
                  72 Smart Classrooms
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-sand-300 leading-relaxed">
                Equipped with interactive audio-visual displays and Extramarks digital curricula, turning abstract concepts into animated, memorable lessons.
              </p>
            </div>

            {/* Box 2: Computing & Digital Labs */}
            <div className="p-6 rounded-sm bg-forest-900/60 border border-forest-800 hover:border-forest-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-sm bg-forest-800 flex items-center justify-center text-brass-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-sand-50">
                  Modern Computing Suites
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-sand-300 leading-relaxed">
                High-speed networked terminals providing computer science, coding, and multimedia literacy from primary grades through Class XII Python/Informatics.
              </p>
            </div>

            {/* Box 3: Central Library */}
            <div className="p-6 rounded-sm bg-forest-900/60 border border-forest-800 hover:border-forest-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-sm bg-forest-800 flex items-center justify-center text-brass-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-sand-50">
                  Comprehensive Knowledge Center
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-sand-300 leading-relaxed">
                Vast repository of reference volumes, periodicals, digital archives, and quiet study alcoves fostering independent inquiry and scholarly reading.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="mt-10 pt-6 border-t border-forest-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sand-400">
            CBSE Senior Secondary Affiliation No. 2131535 · Standard Secondary & Higher Secondary Curriculum
          </p>
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brass-300 hover:text-brass-200 transition-colors"
          >
            <span>View Full Academic Framework & Faculty Mentorship</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
