import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight, Trees, Building2, ShieldCheck, MapPin } from "lucide-react";

export const CampusSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-stonebg text-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Infrastructure & Architecture
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950">
              A place designed for possibility.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
            Located in Sai City, Udaypura on NH-92, our 18,141 sq. metre campus provides a peaceful, green environment designed to inspire focused learning and healthy play.
          </p>
        </div>

        {/* Full-width Hero Campus Imagery */}
        <div className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] rounded-sm overflow-hidden shadow-elevated mb-12">
          <Image
            src={schoolMedia.campus.aerial.url}
            alt={schoolMedia.campus.aerial.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between text-sand-50 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-brass-300 font-mono mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>NH-92, Farrukhabad Road, Etawah, Uttar Pradesh</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                18,141+ Sq. Metres of Academic & Athletic Space
              </h3>
            </div>
            <Link
              href="/campus"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-sand-50/90 hover:bg-sand-50 text-forest-950 font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore Facilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Architectural Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle">
            <Building2 className="w-6 h-6 text-forest-800 mb-3" />
            <h4 className="font-serif text-xl font-bold text-forest-950 mb-1">72 Classrooms</h4>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Airy, sunlit, and digitally-integrated spaces engineered for collaborative pedagogy and focused attention.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle">
            <div className="w-6 h-6 rounded-sm bg-forest-900 text-brass-400 flex items-center justify-center font-mono text-xs font-bold mb-3">
              6
            </div>
            <h4 className="font-serif text-xl font-bold text-forest-950 mb-1">Laboratories</h4>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Physics, Chemistry, Biology, Atal Tinkering Lab, and twin computer labs with modern equipment.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle">
            <Trees className="w-6 h-6 text-forest-800 mb-3" />
            <h4 className="font-serif text-xl font-bold text-forest-950 mb-1">Open Green Grounds</h4>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Spacious open-air quads, tree-lined walkways, and dedicated outdoor sports turfs for full physical wellbeing.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle">
            <ShieldCheck className="w-6 h-6 text-forest-800 mb-3" />
            <h4 className="font-serif text-xl font-bold text-forest-950 mb-1">Safe Campus Protocol</h4>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              24/7 security, comprehensive CCTV surveillance, hygienic amenities, and dedicated student pastoral care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
