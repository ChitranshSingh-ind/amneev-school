import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { Sparkles, Heart, Smile, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Early Years (Nursery to UKG) | AMNEEV Vision School",
  description: "Explore the Early Years experiential learning program powered by Kreedo at AMNEEV Vision School in Etawah for Nursery, LKG, and UKG learners.",
};

export default function EarlyYearsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Foundational Education (Nursery – UKG)"
        title="Curiosity Ignited Through Joyful Discovery."
        subtitle="Our early years program blends the Kreedo experiential methodology with warm emotional support to cultivate confidence, phonetics, numeracy, and motor skills."
        bgImage={schoolMedia.learning.earlyYears.url}
        breadcrumbs={[
          { label: "Learning", href: "/academics" },
          { label: "Early Years", href: "/early-years" },
        ]}
      />

      {/* Early Years Overview */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-100 border border-sand-300 rounded-sm text-xs font-mono text-forest-800">
                <Sparkles className="w-3.5 h-3.5 text-brass-600" />
                <span>Kreedo Early Learning Ecosystem</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                Where every child learns at their own joyful rhythm.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                The early childhood years form the bedrock of cognitive, emotional, and social development. At AMNEEV Vision School, our dedicated Early Years Wing is tailored to young learners from Nursery to UKG.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Through our collaboration with <strong>Kreedo</strong>, students engage with Montessori-inspired sensorial materials that make letters, sounds, shapes, and numbers concrete and delightful before abstract pencil-and-paper writing begins.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Montessori-aligned tactile apparatus</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Phonics & language immersion</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Safe, cushioned play & activity spaces</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Empathetic, specialized early educators</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.learning.earlyYears.url}
                alt="Early Years Classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Early Childhood */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Developmental Dimensions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              The Four Foundations of Early Years
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <Smile className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Sensory Discovery</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Hands-on materials that develop fine motor control, hand-eye coordination, and spatial discernment.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <BookOpen className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Language & Phonics</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Storytelling, interactive rhymes, and structured phonetic awareness in English and Hindi.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <Sparkles className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Early Numeracy</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Grasping quantity, sequence, patterns, and basic arithmetic through concrete counting beads and blocks.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <Heart className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Social & Emotional</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Sharing, empathy, respectful communication, and building trusting bonds with peers and educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
