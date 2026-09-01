import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export const metadata = {
  title: "School News & Updates | AMNEEV Vision School",
  description: "Read the latest news, student achievements, academic updates, and announcements from AMNEEV Vision School in Etawah.",
};

export default function NewsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Editorial News & Dispatches"
        title="What's Happening at AMNEEV."
        subtitle="Stories of student innovation, academic milestones, athletics, and community life from our 18,141 sq. m. campus in Etawah."
        bgImage={schoolMedia.news[0].image}
        breadcrumbs={[{ label: "News", href: "/news" }]}
      />

      {/* News Grid */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolMedia.news.map((item) => (
              <article
                key={item.id}
                className="bg-stonebg rounded-sm border border-sand-200 overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-forest-950/80 text-sand-50 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm backdrop-blur-xs">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-charcoal-500 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-800 leading-snug mb-3">
                      {item.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="border-t border-sand-200/80 pt-4 flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-brass-700 font-semibold">AMNEEV Editorial</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-forest-900 group-hover:text-forest-700">
                      Read story <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
