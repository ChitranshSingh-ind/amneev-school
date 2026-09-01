import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowUpRight, Calendar } from "lucide-react";

export const AdmissionsCta: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-forest-950 text-sand-50 overflow-hidden">
      {/* Full-width Background Photo with Gradient Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src={schoolMedia.admissionsCta.url}
          alt={schoolMedia.admissionsCta.alt}
          fill
          className="object-cover object-center filter brightness-[0.4] contrast-105 transform scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-forest-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-forest-900/80 border border-sand-200/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brass-400" />
          <span className="text-xs uppercase tracking-editorial font-medium text-sand-100">
            Admissions Open · Session 2026–27
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-sand-50 leading-tight mb-6">
          Ready to discover <span className="italic font-normal text-brass-200">AMNEEV?</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-sand-200 font-normal leading-relaxed mb-10 text-pretty">
          Come experience our 18,141 sq. m. campus in Etawah, meet our dedicated academic mentors, and discover a learning environment built around every child&apos;s potential.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact#visit"
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-sand-50 text-forest-950 font-bold text-xs uppercase tracking-wider hover:bg-brass-100 transition-colors shadow-elevated flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-forest-900" />
            <span>Schedule a Campus Visit</span>
          </Link>
          <Link
            href="/admissions"
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-forest-900 hover:bg-forest-850 text-sand-50 font-bold text-xs uppercase tracking-wider border border-sand-200/30 backdrop-blur-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>Apply for 2026–27</span>
            <ArrowUpRight className="w-4 h-4 text-brass-400" />
          </Link>
        </div>

        <div className="mt-8 text-xs text-sand-400 font-sans">
          Helpline: +91 92196 00500 · Monday to Saturday 8:00 AM – 3:30 PM
        </div>
      </div>
    </section>
  );
};
