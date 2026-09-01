import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { Music, Palette, Theater, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Arts, Music & Culture | AMNEEV Vision School",
  description: "Expressive visual arts, Indian classical and contemporary music, dance, and theatre programs at AMNEEV Vision School in Etawah.",
};

export default function ArtsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Creative Expression & Heritage"
        title="Make Space for Imagination."
        subtitle="Nurturing creative confidence through dedicated fine arts studios, music instrumentation labs, and vibrant theatrical performances."
        bgImage={schoolMedia.arts.music.url}
        breadcrumbs={[
          { label: "Life at AMNEEV", href: "/student-life" },
          { label: "Arts & Culture", href: "/arts" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono tracking-editorial text-forest-800 font-bold">
                CREATIVE DISCOVERY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                Where cultural heritage meets contemporary artistic voice.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                At AMNEEV Vision School, the arts are integral to human flourishing. Our visual art ateliers and acoustic music suites provide students with the freedom to experiment with color, melody, rhythm, and stagecraft.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Students learn both Indian classical foundations—such as Hindustani vocal, tabla, and classical dance—as well as western acoustic instruments and modern dramatic performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Fine arts & canvas painting studios</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Acoustic vocal & instrumental suites</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Annual Cultural Panorama production</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Drama, elocution & debate forums</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.arts.painting.url}
                alt="Art Studio at AMNEEV"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Creative Domains */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle space-y-4">
              <Palette className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Visual Arts</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Sketching, watercolours, acrylics on canvas, pottery, traditional folk art, and student exhibition galleries throughout the school corridors.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle space-y-4">
              <Music className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Music & Harmony</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Vocal training, tabla, keyboard, guitar, and school choir performances that lead morning assemblies and ceremonial events.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle space-y-4">
              <Theater className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Theatre & Dance</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Stage presence, character acting, classical Kathak and folk dance, and annual theatrical plays staged before the school community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
