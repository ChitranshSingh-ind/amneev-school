import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CollaborationsSection } from "@/components/CollaborationsSection";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { siteContent } from "@/data/siteContent";
import { CheckCircle2, ArrowRight, BookOpen, Atom, Cpu, Users } from "lucide-react";

export const metadata = {
  title: "Academics & Curriculum | AMNEEV Vision School",
  description: "Explore the comprehensive CBSE academic curriculum at AMNEEV Vision School, from foundational early years to senior secondary science, commerce, and humanities.",
};

export default function AcademicsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Curriculum & Pedagogy"
        title="Rigorous Academics. Meaningful Inquiry."
        subtitle="A CBSE-aligned academic framework from Nursery to Class XII, enriched by smart classrooms, advanced laboratories, and global partner curricula."
        bgImage={schoolMedia.academics.scienceLab.url}
        breadcrumbs={[{ label: "Learning", href: "/academics" }, { label: "Academic Overview", href: "/academics" }]}
      />

      {/* Philosophy of Academic Excellence */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono tracking-editorial text-forest-800 font-bold">
                CBSE AFFILIATION NO. 2131535
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                A curriculum structured for deep mastery and future readiness.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                At AMNEEV Vision School, academic instruction is designed around conceptual clarity, active experimentation, and analytical reasoning. Rather than rote memorization, our teachers engage learners through dialogue, problem sets, and practical laboratory tests.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>72 Smart Interactive Classrooms</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>6 Specialized Science & Tech Labs</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Atal Tinkering Lab (NITI Aayog)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Comprehensive Central Library</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.academics.smartClassroom.url}
                alt="Smart Classroom Session"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Academic Divisions */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Structured Progression
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              Three Distinct Stages of Learning
            </h2>
            <p className="mt-3 text-base text-charcoal-600">
              Tailored pedagogical methods aligned with each child&apos;s developmental milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.learningStages.map((stage) => (
              <div
                key={stage.id}
                className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-brass-700 bg-sand-100 px-2.5 py-1 rounded-sm">
                    {stage.grades}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mt-4 mb-2">
                    {stage.stage}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                  <ul className="space-y-2 text-xs text-charcoal-800 border-t border-sand-200 pt-4">
                    {stage.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest-700" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-sand-200">
                  <Link
                    href={stage.href}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-forest-900 hover:text-forest-700"
                  >
                    <span>Detailed Stage Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CollaborationsSection />
      <AdmissionsCta />
    </div>
  );
}
