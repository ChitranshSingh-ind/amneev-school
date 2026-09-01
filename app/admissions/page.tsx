import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsWalkthrough } from "@/components/AdmissionsWalkthrough";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { siteContent } from "@/data/siteContent";
import { schoolMedia } from "@/data/media";
import { CheckCircle2, ArrowRight, FileText, Calendar, Phone, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Admissions 2026–27 | AMNEEV Vision School, Etawah",
  description: "Admissions open for academic year 2026–27 from Nursery to Class XII at AMNEEV Vision School. Learn about eligibility, process, and registration.",
};

export default function AdmissionsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Admissions Open · Session 2026–27"
        title="Your Child's Journey Starts Here."
        subtitle="We welcome applications from Nursery through Class XII. Discover our holistic CBSE curriculum, state-of-the-art labs, and values-centered campus."
        bgImage={schoolMedia.admissionsCta.url}
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }]}
      />

      {/* Admissions Overview */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-100 border border-sand-300 rounded-sm text-xs font-mono text-forest-800">
                <Calendar className="w-3.5 h-3.5 text-brass-600" />
                <span>Admissions Cycle: 2026–27 Academic Year</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                A welcoming and personalized admissions experience.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Choosing the right school for your child is one of the most consequential decisions a parent makes. At AMNEEV Vision School, we strive to make the admissions journey informative, transparent, and supportive.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Whether you are seeking admission for a 3-year-old entering our Kreedo-powered Early Years program or a senior secondary student preparing for Class XI Science, Commerce, or Humanities board examinations, our mentors are here to assist.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/admissions/process"
                  className="px-6 py-3 bg-forest-900 text-sand-50 hover:bg-forest-800 font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors shadow-subtle flex items-center justify-center gap-2"
                >
                  <span>Step-by-Step Process</span>
                  <ArrowRight className="w-4 h-4 text-brass-400" />
                </Link>
                <Link
                  href="/admissions/fees"
                  className="px-6 py-3 bg-stonebg text-forest-950 hover:bg-sand-200/70 font-semibold text-xs uppercase tracking-wider rounded-sm border border-sand-300 transition-colors text-center"
                >
                  Fee Guidelines & Policy
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stonebg p-8 rounded-sm border border-sand-200 shadow-elevated space-y-6">
              <h3 className="font-serif text-2xl font-bold text-forest-950 border-b border-sand-200 pb-3">
                Key Admission Facts
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs uppercase font-mono text-charcoal-500 font-semibold block">Classes Open</span>
                  <p className="font-semibold text-forest-950 mt-0.5">{siteContent.school.classesOffered}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-charcoal-500 font-semibold block">Academic Session</span>
                  <p className="font-semibold text-forest-950 mt-0.5">2026–2027</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-charcoal-500 font-semibold block">Registration Fee</span>
                  <p className="font-semibold text-forest-950 mt-0.5">{siteContent.school.registrationFee}</p>
                  <span className="text-[11px] text-charcoal-500 italic block mt-0.5">Non-refundable; required upon formal registration</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-charcoal-500 font-semibold block">Helpline</span>
                  <p className="font-bold text-forest-900 mt-0.5 text-base">
                    <a href={`tel:${siteContent.school.phone}`}>{siteContent.school.phoneDisplay}</a>
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact#visit"
                  className="w-full text-center block py-3 bg-forest-900 text-sand-50 font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-forest-800 transition-colors"
                >
                  Schedule an In-Person Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Walkthrough */}
      <AdmissionsWalkthrough />

      <AdmissionsCta />
    </div>
  );
}
