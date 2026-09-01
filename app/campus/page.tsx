import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { StatsGlance } from "@/components/StatsGlance";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { siteContent } from "@/data/siteContent";
import { Building2, Trees, ShieldCheck, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Campus & Infrastructure | AMNEEV Vision School",
  description: "Explore the 18,141 sq. metre campus of AMNEEV Vision School in Etawah: 72 smart classrooms, 6 labs, sports turf, library, and green quads.",
};

export default function CampusPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Campus & Environment"
        title="18,141+ Sq. Metres Designed for Possibility."
        subtitle="Situated on Farrukhabad Road (NH-92) in Sai City, Udaypura, our expansive campus blends modern architectural safety with lush open greenery."
        bgImage={schoolMedia.campus.aerial.url}
        breadcrumbs={[{ label: "Campus & Facilities", href: "/campus" }]}
      />

      {/* Campus Overview */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-100 border border-sand-300 rounded-sm text-xs font-mono text-forest-800">
                <MapPin className="w-3.5 h-3.5 text-brass-600" />
                <span>Sai City, Udaypura, NH-92, Etawah 206001</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                A serene, secure sanctuary for ambitious learners.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                The AMNEEV Vision School campus was conceived to give children the mental and physical breathing room necessary for excellence. Away from crowded urban congestion, our 18,141 sq. metre property features wide open quadrangles, landscaped gardens, and modern academic blocks.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Every building is optimized for natural daylight, proper ventilation, and accessibility, providing 72 digitally-integrated classrooms, 6 specialized labs, and sports arenas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>72 Smart interactive classrooms</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>6 Specialized science & tech laboratories</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>24/7 CCTV surveillance & perimeter security</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Dedicated fleet of monitored school buses</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.campus.corridor.url}
                alt="AMNEEV School Campus Corridor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Physical Infrastructure
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              Spaces Engineered for Focus & Wellness
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory rounded-sm overflow-hidden border border-sand-200 shadow-subtle group">
              <div className="relative h-56 w-full">
                <Image
                  src={schoolMedia.academics.library.url}
                  alt="School Library"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">Central Library</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Extensive reference stacks, journals, digital kiosks, and quiet study carrels for independent research.
                </p>
              </div>
            </div>

            <div className="bg-ivory rounded-sm overflow-hidden border border-sand-200 shadow-subtle group">
              <div className="relative h-56 w-full">
                <Image
                  src={schoolMedia.campus.sportsGround.url}
                  alt="Sports Ground"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">Athletic Grounds</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Turf football field, cricket pitch, basketball courts, and athletics tracks under open Etawah skies.
                </p>
              </div>
            </div>

            <div className="bg-ivory rounded-sm overflow-hidden border border-sand-200 shadow-subtle group">
              <div className="relative h-56 w-full">
                <Image
                  src={schoolMedia.campus.assemblyHall.url}
                  alt="Multi-Purpose Hall"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">Auditorium & Arena</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Acoustic assembly arena for school presentations, parent symposiums, and cultural performances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsGlance />
      <AdmissionsCta />
    </div>
  );
}
