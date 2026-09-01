import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { siteContent } from "@/data/siteContent";
import { ShieldCheck, HelpCircle, ArrowRight, CreditCard, Clock, FileCheck } from "lucide-react";

export const metadata = {
  title: "Fee Guidelines & Policy | AMNEEV Vision School",
  description: "Transparent fee guidelines, registration fee ₹1,500, payment schedules, and admission policies for AMNEEV Vision School in Etawah.",
};

export default function AdmissionsFeesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Financial Clarity & Guidelines"
        title="Transparent Fee Policies."
        subtitle="We believe in complete transparency and predictability in all institutional fee structures, payment schedules, and enrollment guidelines."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Guidelines", href: "/admissions/fees" },
        ]}
      />

      {/* Fee Policy Overview */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono tracking-editorial text-forest-800 font-bold">
                INSTITUTIONAL FEE STRUCTURE (2026–27)
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                Education as an enduring investment in your child&apos;s future.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                At AMNEEV Vision School, our fee structure is set in strict alignment with CBSE guidelines and state regulatory norms. The fees cover our academic curriculum, smart classroom technology, laboratory consumables, library resources, sports coaching, and co-curricular programs.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-sm bg-stonebg border border-sand-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl font-bold text-forest-950">Application & Registration Fee</h3>
                    <span className="font-mono text-base font-bold text-forest-900 bg-sand-200/80 px-2.5 py-1 rounded-sm">
                      {siteContent.school.registrationFee}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    One-time, non-refundable administrative processing fee payable at the time of submitting the formal admission registration form.
                  </p>
                </div>

                <div className="p-5 rounded-sm bg-stonebg border border-sand-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl font-bold text-forest-950">Quarterly Tuition Schedule</h3>
                    <span className="font-mono text-xs uppercase text-brass-700 font-bold">Payable in 4 Installments</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    Composite tuition and academic development fees are billed quarterly (April, July, October, January) to allow families convenient planning.
                  </p>
                </div>

                <div className="p-5 rounded-sm bg-stonebg border border-sand-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl font-bold text-forest-950">Transport & Special Facilities</h3>
                    <span className="font-mono text-xs uppercase text-brass-700 font-bold">Route-Based</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    School bus transport fees vary depending on the student pickup distance within Etawah municipal and arterial zones.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stonebg p-8 rounded-sm border border-sand-200 shadow-elevated space-y-6">
              <h3 className="font-serif text-2xl font-bold text-forest-950 border-b border-sand-200 pb-3">
                Admissions Policy Notes
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <FileCheck className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>No Hidden Charges:</strong> All mandatory academic expenses are outlined clearly at the time of prospectus issuance.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <CreditCard className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Digital Payment Modes:</strong> Fees can be remitted securely via Net Banking, UPI, Demand Draft, or school fee counter.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Due Dates:</strong> Quarterly fees are payable within the first 10 calendar days of each billing cycle month.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Detailed Grade-wise Breakdown:</strong> Full itemized fee schedules for specific classes (Nursery to XII) are provided in the official printed prospectus during campus visit.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-sand-200">
                <Link
                  href="/contact#visit"
                  className="w-full text-center block py-3 bg-forest-900 text-sand-50 font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-forest-800 transition-colors"
                >
                  Request Itemized Prospectus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
