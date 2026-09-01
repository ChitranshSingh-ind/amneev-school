import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { ArrowRight, FileCheck, HelpCircle } from "lucide-react";

export const AdmissionsWalkthrough: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-stonebg text-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sand-100 border border-sand-300 text-xs font-mono text-forest-800 mb-3">
            <FileCheck className="w-3.5 h-3.5 text-brass-600" />
            <span>Academic Session 2026–27</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950 leading-tight">
            Your child&apos;s journey starts here.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
            We guide families through an intentional, transparent admissions process designed to understand your child&apos;s individuality and aspirations.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteContent.admissionsProcess.map((step) => (
            <div
              key={step.step}
              className="p-6 sm:p-7 rounded-sm bg-ivory border border-sand-200 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-brass-700 bg-sand-100 w-9 h-9 rounded-sm flex items-center justify-center border border-sand-300 mb-5">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.step === "03" && (
                <div className="mt-4 pt-3 border-t border-sand-200 text-[11px] text-charcoal-600 font-mono">
                  Registration Fee: <strong>{siteContent.school.registrationFee}</strong>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Advisory Note */}
        <div className="mt-10 p-4 rounded-sm bg-sand-100/70 border border-sand-300 max-w-2xl mx-auto flex items-start gap-3 text-xs text-charcoal-700">
          <HelpCircle className="w-4 h-4 text-brass-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Registration Policy:</strong> Submission of the ₹1,500 registration form initiates the evaluation process and does not guarantee automatic admission. Final placement depends on age-appropriate assessment and seat availability across streams.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-forest-900 text-sand-50 hover:bg-forest-800 font-semibold text-xs uppercase tracking-wider transition-colors shadow-subtle flex items-center justify-center gap-2"
          >
            <span>Explore Complete Admissions Guide</span>
            <ArrowRight className="w-4 h-4 text-brass-400" />
          </Link>
          <Link
            href="/admissions/process"
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-ivory text-forest-950 hover:bg-sand-100 font-semibold text-xs uppercase tracking-wider border border-sand-300 transition-colors"
          >
            View Required Documents
          </Link>
        </div>
      </div>
    </section>
  );
};
