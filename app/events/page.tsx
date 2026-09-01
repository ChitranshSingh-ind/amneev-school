import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Events Calendar & Key Dates | AMNEEV Vision School",
  description: "Upcoming events, parent forums, cultural festivals, and academic calendar dates at AMNEEV Vision School in Etawah.",
};

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="School Calendar & Dates"
        title="Events & Campus Gatherings."
        subtitle="Stay engaged with school assemblies, academic symposiums, parent-teacher forums, and cultural celebrations throughout the year."
        breadcrumbs={[{ label: "Events", href: "/events" }]}
      />

      {/* Events List */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {schoolMedia.events.map((event) => (
              <div
                key={event.id}
                className="bg-stonebg p-6 sm:p-8 rounded-sm border border-sand-200 shadow-subtle hover:border-sand-300 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-forest-900 bg-sand-200 px-2.5 py-1 rounded-sm">
                      {event.date}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brass-700">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-forest-950">
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-charcoal-600 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-charcoal-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-charcoal-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-ivory hover:bg-sand-100 text-forest-950 text-xs font-semibold uppercase tracking-wider rounded-sm border border-sand-300 transition-colors"
                  >
                    <span>Event Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
