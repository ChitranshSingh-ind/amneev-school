import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { BookOpen, Layers, CheckCircle2, ArrowRight, FlaskConical, Laptop, Dumbbell } from "lucide-react";

export const metadata = {
  title: "Foundation & Middle School (Classes I to VIII) | AMNEEV Vision School",
  description: "Classes I through VIII curriculum at AMNEEV Vision School, blending CBSE foundational subjects, Cambridge inquiry, Extramarks smart classrooms, and STEM.",
};

export default function MiddleSchoolPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Foundation & Middle Years (Classes I – VIII)"
        title="Building Conceptual Clarity & Inquiring Minds."
        subtitle="A vital transition from foundational literacy and numeracy to disciplined analytical thinking, science laboratories, coding, and team sports."
        bgImage={schoolMedia.learning.middleSchool.url}
        breadcrumbs={[
          { label: "Learning", href: "/academics" },
          { label: "Middle School", href: "/middle-school" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono tracking-editorial text-forest-800 font-bold">
                CLASSES I TO VIII PEDAGOGY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                Deepening core concepts through active questioning.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                In Middle School, students develop intellectual stamina and independence. Our teachers guide students across languages (English, Hindi, Sanskrit), Mathematics, General Science, Social Studies, and Computer Science.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                By integrating <strong>Extramarks smart classroom modules</strong> and <strong>Cambridge Education Lab inquiry</strong>, abstract theories in physics, biology, and geometry are animated through digital 3D models and verified through hands-on laboratory exercises.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Mathematics laboratory discovery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Introductory coding & digital literacy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Atal Tinkering Lab basic modules</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Intra-school debates & exhibitions</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.learning.middleSchool.url}
                alt="Middle School Students Collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Architecture */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Academic Disciplines
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              A Well-Rounded Foundation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <BookOpen className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Languages & Literature</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Fluency in written expression, reading comprehension, British Council communicative English, Hindi, and Sanskrit.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <FlaskConical className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Experiential Science</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Physics, Chemistry, and Environmental Biology taught through laboratory observations and field studies.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <Laptop className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Computing & STEM</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Logic building, introductory Python programming, robotics basics in ATL, and safe digital citizenship.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <Dumbbell className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Physical & Co-Curricular</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Football, cricket, athletics, yoga, visual arts, and vocal music integrated directly into the weekly schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
