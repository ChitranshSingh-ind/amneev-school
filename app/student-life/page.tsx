import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { Users, HeartHandshake, Shield, Sparkles, Trophy, Music, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Life at AMNEEV | Campus Culture & Student Wellness",
  description: "Experience the vibrant daily life at AMNEEV Vision School in Etawah: house system, clubs, sports, pastoral wellness, and student leadership.",
};

export default function StudentLifePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Campus Culture & Daily Life"
        title="Where Community, Passion & Purpose Meet."
        subtitle="School life at AMNEEV is rich with opportunity—from morning assembly dialogues and inter-house athletics to cultural celebrations and leadership councils."
        bgImage={schoolMedia.pillars.belong.url}
        breadcrumbs={[{ label: "Life at AMNEEV", href: "/student-life" }]}
      />

      {/* Philosophy of Student Life */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono tracking-editorial text-forest-800 font-bold">
                HOLISTIC STUDENT EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                A day filled with inquiry, movement, and camaraderie.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                At AMNEEV Vision School, the student experience is thoughtfully orchestrated to balance intense intellectual work with physical rejuvenation, creative expression, and social responsibility.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Every learner belongs to a school House, building bonds across age groups, learning to win with humility, and supporting their peers through academic and co-curricular pursuits.
              </p>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.gallery[12].url}
                alt="Students collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Campus Life */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <Trophy className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">The House System</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Inter-house athletic, quiz, debate, and cultural championships fostering healthy competitive spirit and school pride.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <Users className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Clubs & Societies</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Eco-club, robotics circle, literary society, chess forum, and drama guild allowing students to pursue passions.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <HeartHandshake className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Pastoral Care</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Dedicated student counselling, emotional wellbeing mentorship, and proactive teacher-parent communication channels.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-3">
              <Shield className="w-6 h-6 text-forest-800" />
              <h3 className="font-serif text-xl font-bold text-forest-950">Safe & Inclusive</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Zero-tolerance anti-bullying policy, round-the-clock security, CCTV monitoring, and hygienic campus infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
