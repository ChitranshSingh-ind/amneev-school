import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { Award, BookOpen, Atom, TrendingUp, Compass, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Senior School (Classes IX to XII) | AMNEEV Vision School",
  description: "Senior secondary CBSE curriculum for Classes IX through XII at AMNEEV Vision School. Offering Science, Commerce, and Humanities streams in Etawah.",
};

export default function SeniorSchoolPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Secondary & Senior Secondary (Classes IX – XII)"
        title="Academic Rigour. Board Distinction. Future Direction."
        subtitle="Empowering senior secondary scholars with rigorous CBSE preparation, advanced laboratory inquiry, stream-specific faculty mentoring, and career guidance."
        bgImage={schoolMedia.learning.seniorSchool.url}
        breadcrumbs={[
          { label: "Learning", href: "/academics" },
          { label: "Senior School", href: "/senior-school" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono tracking-editorial text-forest-800 font-bold">
                CBSE SENIOR SECONDARY EXCELLENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                Guiding students toward premier university destinations and careers.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                The Senior School at AMNEEV Vision School (Classes IX to XII) provides focused academic preparation for the CBSE All India Secondary School Examination (AISSE) and All India Senior School Certificate Examination (AISSCE).
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Under the mentorship of seasoned subject experts and aided by 6 advanced laboratories, students receive rigorous conceptual coaching, continuous mock evaluations, and career guidance, enriched by our <strong>IIT Madras vocational course</strong> collaboration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Science, Commerce & Humanities streams</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>IIT Madras vocational skills collaboration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Full CBSE laboratory practical compliance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Career counselling & competitive entrance focus</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.learning.seniorSchool.url}
                alt="Senior Secondary Class Discussion"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Senior Secondary Streams */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Class XI & XII Specialization
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              Senior Secondary Streams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stream 1: Science */}
            <div className="p-8 rounded-sm bg-ivory border border-sand-200 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-brass-700 font-mono text-xs uppercase font-bold mb-3">
                  <Atom className="w-4 h-4" />
                  <span>Science Stream (PCM / PCB)</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                  Engineering & Medical Sciences
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                  Comprehensive mastery in Physics, Chemistry, Mathematics / Biology, and Computer Science / Informatics Practices.
                </p>
                <div className="border-t border-sand-200 pt-3 text-xs text-charcoal-700 space-y-1">
                  <p>• Advanced hands-on physics & chemistry labs</p>
                  <p>• IIT Madras emerging skills exposure</p>
                  <p>• JEE / NEET orientation support</p>
                </div>
              </div>
            </div>

            {/* Stream 2: Commerce */}
            <div className="p-8 rounded-sm bg-ivory border border-sand-200 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-brass-700 font-mono text-xs uppercase font-bold mb-3">
                  <TrendingUp className="w-4 h-4" />
                  <span>Commerce Stream</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                  Business, Finance & Economics
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                  Rigorous preparation in Accountancy, Business Studies, Economics, and Applied Mathematics.
                </p>
                <div className="border-t border-sand-200 pt-3 text-xs text-charcoal-700 space-y-1">
                  <p>• Case study & real-world financial literacy</p>
                  <p>• CA / CUET entrance foundational mentoring</p>
                  <p>• Business communication modules</p>
                </div>
              </div>
            </div>

            {/* Stream 3: Humanities */}
            <div className="p-8 rounded-sm bg-ivory border border-sand-200 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-brass-700 font-mono text-xs uppercase font-bold mb-3">
                  <Compass className="w-4 h-4" />
                  <span>Humanities Stream</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                  Social Sciences & Liberal Arts
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                  Deep engagement with History, Political Science, Geography, Sociology, and Literature.
                </p>
                <div className="border-t border-sand-200 pt-3 text-xs text-charcoal-700 space-y-1">
                  <p>• Critical essay writing & debate seminars</p>
                  <p>• Civil Services & legal career awareness</p>
                  <p>• Research paper methodology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
