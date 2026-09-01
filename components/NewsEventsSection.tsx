import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

export const NewsEventsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-stonebg text-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Campus Life & Announcements
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950">
              What&apos;s happening at AMNEEV.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/news"
              className="text-xs uppercase tracking-wider font-bold text-forest-900 hover:text-forest-700 transition-colors"
            >
              All News
            </Link>
            <span className="text-sand-300">|</span>
            <Link
              href="/events"
              className="text-xs uppercase tracking-wider font-bold text-forest-900 hover:text-forest-700 transition-colors"
            >
              Events Calendar
            </Link>
          </div>
        </div>

        {/* 2-Column Grid: Left 2 News Articles, Right Upcoming Calendar Events */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 2 Featured Editorial News Stories (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {schoolMedia.news.slice(0, 2).map((item) => (
              <article
                key={item.id}
                className="bg-ivory rounded-sm border border-sand-200 overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col sm:flex-row group"
              >
                <div className="relative w-full sm:w-52 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 250px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-brass-700 bg-sand-100 px-2 py-0.5 rounded-sm">
                        {item.category}
                      </span>
                      <span className="text-xs text-charcoal-500 font-sans">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-950 group-hover:text-forest-800 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-sand-200">
                    <Link
                      href="/news"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-forest-900 group-hover:text-forest-700 transition-colors"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Upcoming Calendar Events (5 cols) */}
          <div className="lg:col-span-5 bg-ivory p-6 sm:p-7 rounded-sm border border-sand-200 shadow-subtle space-y-5">
            <div className="flex items-center justify-between border-b border-sand-200 pb-3">
              <h3 className="font-serif text-xl font-bold text-forest-950 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-forest-800" />
                <span>Upcoming Events</span>
              </h3>
              <span className="text-xs uppercase font-mono text-brass-700 font-semibold">2026 Term</span>
            </div>

            <div className="space-y-4">
              {schoolMedia.events.map((event) => (
                <div
                  key={event.id}
                  className="p-3.5 rounded-sm bg-stonebg border border-sand-200 hover:border-sand-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-forest-900 bg-sand-200/80 px-2 py-0.5 rounded-sm">
                      {event.date}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-brass-700">
                      {event.category}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-forest-950 mt-1">
                    {event.title}
                  </h4>
                  <div className="mt-2 text-xs text-charcoal-600 space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-charcoal-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-charcoal-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/events"
                className="block text-center w-full py-2.5 rounded-sm bg-stonebg hover:bg-sand-200/60 text-forest-950 font-semibold text-xs uppercase tracking-wider border border-sand-300 transition-colors"
              >
                View Full School Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
