import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { ArrowRight, ArrowUpRight, Calendar, Phone, MapPin } from "lucide-react";

export const AdmissionsGateway: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-stonebg text-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory rounded-sm border border-sand-300 shadow-elevated p-8 sm:p-14 lg:p-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Admissions Invitation Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-forest-800 uppercase tracking-widest block">
                Academic Session 2026–27
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950 leading-tight">
                Begin your child&apos;s journey at <span className="italic font-normal text-forest-800">AMNEEV</span>.
              </h2>

              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
                Admissions are open from Nursery through Class XII across all major streams. We invite families to visit our 18,141 sq. metre campus in Etawah, meet our academic faculty, and experience our learning community firsthand.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-charcoal-600 font-mono">
                <span>Registration Fee: <strong>{siteContent.school.registrationFee}</strong></span>
                <span>·</span>
                <span>Nursery to Class XII</span>
                <span>·</span>
                <span>CBSE Affiliated</span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/admissions"
                  className="w-full sm:w-auto px-8 py-4 rounded-sm bg-forest-900 text-sand-50 hover:bg-forest-850 font-semibold text-xs uppercase tracking-wider transition-colors shadow-subtle flex items-center justify-center gap-2"
                >
                  <span>Apply for 2026–27</span>
                  <ArrowUpRight className="w-4 h-4 text-brass-400" />
                </Link>
                <Link
                  href="/contact#visit"
                  className="w-full sm:w-auto px-8 py-4 rounded-sm bg-stonebg text-forest-950 hover:bg-sand-200/60 font-semibold text-xs uppercase tracking-wider border border-sand-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-forest-900" />
                  <span>Schedule Campus Tour</span>
                </Link>
              </div>
            </div>

            {/* Right: Quick Campus Wayfinding & Direct Desk Info */}
            <div className="lg:col-span-5 bg-stonebg/60 p-8 rounded-sm border border-sand-300 space-y-6">
              <h3 className="font-serif text-xl font-bold text-forest-950">
                Admissions & Campus Desk
              </h3>

              <div className="space-y-4 text-xs text-charcoal-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-forest-800 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-forest-950 font-sans">Campus Location</strong>
                    <p className="mt-0.5 leading-relaxed">{siteContent.school.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-forest-800 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-forest-950 font-sans">Admissions Helpline</strong>
                    <a
                      href={`tel:${siteContent.school.phone}`}
                      className="font-mono text-forest-900 hover:text-forest-700 font-semibold text-sm block mt-0.5"
                    >
                      {siteContent.school.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-sand-300/80">
                  <span className="text-[11px] text-charcoal-500 font-mono">
                    Office Hours: {siteContent.school.officeHours}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/admissions/process"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 hover:text-forest-700 transition-colors"
                >
                  <span>View Step-by-Step Process & Documents</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brass-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
