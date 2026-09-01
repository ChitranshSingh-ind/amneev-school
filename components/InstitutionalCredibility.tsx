import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { ArrowRight } from "lucide-react";

export const InstitutionalCredibility: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-forest-950 text-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-sand-50 leading-tight text-balance">
              A 15-year legacy of <br />
              <span className="italic font-normal text-brass-200">measurable excellence</span>.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-sand-200 leading-relaxed font-normal text-pretty">
              Affiliated with the Central Board of Secondary Education (CBSE No. 2131535), AMNEEV provides structured academic rigour and national benchmarking for students in Etawah.
            </p>
          </div>
        </div>

        {/* 6 Key Milestones Broadsheet Ledger */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-10 border-y border-forest-800">
          {siteContent.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-brass-200 tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-semibold text-sand-100 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-[11px] text-sand-400 leading-tight">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Collaborations & Institutional Partners */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-forest-900">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-sand-50">
                Academic & Pedagogical Collaborations
              </h3>
              <p className="text-xs text-sand-400 mt-1">
                Integrated curricula with national benchmarks and specialized research bodies.
              </p>
            </div>
            <Link
              href="/about#partners"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brass-300 hover:text-brass-200 transition-colors"
            >
              <span>View All Affiliations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.collaborations.slice(0, 3).map((partner, idx) => (
              <div
                key={idx}
                className="space-y-2 border-l border-forest-800 pl-5"
              >
                <div className="font-serif text-xl font-bold text-sand-50">
                  {partner.name}
                </div>
                <div className="text-[11px] uppercase font-mono tracking-widest text-brass-400 font-semibold">
                  {partner.type}
                </div>
                <p className="text-xs text-sand-300 leading-relaxed pt-1">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
