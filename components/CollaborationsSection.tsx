import React from "react";
import { siteContent } from "@/data/siteContent";
import { Globe2 } from "lucide-react";

export const CollaborationsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
            <Globe2 className="w-3.5 h-3.5 text-brass-600" />
            <span>Academic & Technology Collaborations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-4.5xl font-bold tracking-tight text-forest-950">
            Learning connected to a wider world.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-700 leading-relaxed">
            We partner with leading academic bodies and technology innovators to enrich our classrooms with national and global pedagogical standards.
          </p>
        </div>

        {/* Text Wordmarks & Descriptive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.collaborations.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-stonebg border border-sand-200 shadow-subtle hover:border-sand-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-forest-950 tracking-tight">
                  {partner.name}
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-brass-700 font-semibold mt-1 mb-3">
                  {partner.type}
                </div>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sand-200/80 text-[11px] text-charcoal-500 font-mono">
                Integrated Academic Collaboration
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
