import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { Award, Shield, Compass, Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "NCC & Youth Leadership | AMNEEV Vision School",
  description: "National Cadet Corps (NCC) unit at AMNEEV Vision School in Etawah: discipline, civic duty, ceremonial drill, adventure camps, and leadership.",
};

export default function NccPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Youth Leadership & Character"
        title="Discipline. Duty. Distinction."
        subtitle="Our accredited National Cadet Corps (NCC) unit instills patriotic pride, commanding self-confidence, teamwork, and civic responsibility."
        bgImage={schoolMedia.ncc.drill.url}
        breadcrumbs={[
          { label: "Life at AMNEEV", href: "/student-life" },
          { label: "NCC & Leadership", href: "/ncc" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-100 border border-sand-300 rounded-sm text-xs font-mono text-forest-800">
                <Award className="w-3.5 h-3.5 text-brass-600" />
                <span>National Cadet Corps (NCC) Accredited Wing</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                Instilling executive presence, courage, and service.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                The National Cadet Corps unit at AMNEEV Vision School stands as a pillar of character development. Cadets participate in rigorous parade drill, physical conditioning, map reading, basic first aid, and disaster management drills.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Beyond physical stamina, NCC instills punctuality, mutual respect, and a deep sense of civic duty toward society and the nation. Cadets represent the school at ceremonial parades, state camps, and community outreach drives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Ceremonial parade & synchronized drill</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Combined Annual Training Camps (CATC)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Community cleanliness & social awareness drives</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Officer-like qualities & executive presence</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.ncc.drill.url}
                alt="NCC Cadets Marching"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Dimensions */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle space-y-4">
              <Shield className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Discipline & Poise</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Mastering the discipline of synchronized movement, immaculate uniform standards, and decisive obedience to command.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle space-y-4">
              <Compass className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Adventure & Camps</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Trekking, obstacle courses, night bivouac experience, map reading, and outdoor survival skills under expert instructors.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle space-y-4">
              <Users className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Civic Duty</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Leading tree plantation campaigns, blood donation drives, traffic awareness rallies, and local community service in Etawah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
