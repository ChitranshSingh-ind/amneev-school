import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { siteContent } from "@/data/siteContent";
import { CheckCircle2, FileText, AlertCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Admission Process & Documents | AMNEEV Vision School",
  description: "Step-by-step admissions walkthrough for session 2026–27 at AMNEEV Vision School in Etawah: enquiry, visit, registration ₹1,500, and required documents.",
};

export default function AdmissionsProcessPage() {
  const documentsRequired = [
    "Original / Self-attested copy of Birth Certificate (Nursery to Class I)",
    "Transfer Certificate (TC) from previous recognized school (Class II onwards)",
    "Previous academic year's Report Card / Marksheet",
    "Passport-size recent photographs of Student (4 copies)",
    "Passport-size recent photographs of Parents / Guardian (2 copies each)",
    "Aadhaar Card copy of Student and Parents / Guardian",
    "Caste / Category Certificate (if applicable)",
    "Medical fitness certificate / Blood group report",
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Step-by-Step Enrollment"
        title="The Admissions Journey."
        subtitle="A clear, transparent four-step process to welcome your family into the AMNEEV Vision School community for the 2026–27 academic year."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Process & Documents", href: "/admissions/process" },
        ]}
      />

      {/* 4 Step Deep Dive */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {siteContent.admissionsProcess.map((step, idx) => (
              <div
                key={step.step}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 rounded-sm bg-stonebg border border-sand-200 shadow-subtle"
              >
                <div className="lg:col-span-3 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-sm bg-forest-900 text-sand-50 font-mono text-2xl font-bold flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono text-brass-700 font-bold">Step {idx + 1}</span>
                    <h3 className="font-serif text-2xl font-bold text-forest-950">{step.title}</h3>
                  </div>
                </div>

                <div className="lg:col-span-9 space-y-3">
                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {step.step === "01" && (
                    <div className="pt-2">
                      <Link
                        href="/contact#visit"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-forest-900 hover:text-forest-700"
                      >
                        <span>Submit Online Inquiry Form</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                  {step.step === "02" && (
                    <p className="text-xs text-charcoal-600 italic">
                      Guided tours are conducted Monday through Saturday between 8:30 AM and 2:30 PM.
                    </p>
                  )}

                  {step.step === "03" && (
                    <div className="p-3 bg-sand-100 border border-sand-300 rounded-sm text-xs text-charcoal-800 font-mono">
                      Official Registration Fee: ₹1,500 per application (Non-refundable).
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Documents Checklist */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono tracking-editorial text-forest-800 font-bold">
              CHECKLIST & VERIFICATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950 mt-2">
              Documents Required for Admission
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal-600">
              Please prepare original documents for physical verification along with two sets of self-attested photocopies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documentsRequired.map((doc, idx) => (
              <div
                key={idx}
                className="p-4 bg-ivory rounded-sm border border-sand-200 flex items-start gap-3 text-sm text-charcoal-800 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-sm bg-sand-100 border border-sand-300 flex items-start gap-3 text-xs text-charcoal-700">
            <HelpCircle className="w-4 h-4 text-brass-700 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Important Advisory:</strong> Submission of registration forms and documents begins the review process. Registration does not guarantee automatic admission. Placement is confirmed following age-appropriate interaction and seat availability.
            </p>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
