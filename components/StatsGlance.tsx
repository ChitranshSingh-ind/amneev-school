import React from "react";
import { siteContent } from "@/data/siteContent";

export const StatsGlance: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-forest-950 text-sand-50 border-y border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-editorial font-semibold text-brass-400 mb-2">
            AMNEEV At A Glance
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-sand-50">
            A Legacy of Excellence in Numbers
          </h2>
        </div>

        {/* 6 High-Impact Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {siteContent.stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 rounded-sm bg-forest-900/40 border border-forest-800/80 hover:border-brass-600/40 transition-colors"
            >
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brass-200 tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="font-sans text-xs sm:text-sm font-semibold text-sand-100 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-sand-400 leading-tight">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
