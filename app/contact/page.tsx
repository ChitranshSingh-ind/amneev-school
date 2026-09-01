import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/ContactSection";
import { siteContent } from "@/data/siteContent";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Contact Us & Campus Tour | AMNEEV Vision School, Etawah",
  description: "Contact AMNEEV Vision School in Etawah: phone +91-9219600500, address in Sai City, Udaypura, NH-92, admissions inquiry, and FAQs.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Get In Touch & Visit"
        title="We'd Love to Welcome You to AMNEEV."
        subtitle="Contact our admissions office, schedule a guided tour of our 18,141 sq. m. campus, or speak directly with our educational coordinators."
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
      />

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-brass-600" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {siteContent.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-ivory p-6 rounded-sm border border-sand-200 shadow-subtle open:border-forest-700 transition-colors"
              >
                <summary className="font-serif text-lg sm:text-xl font-bold text-forest-950 cursor-pointer flex items-center justify-between list-none">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-forest-800 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed pt-3 border-t border-sand-200">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
