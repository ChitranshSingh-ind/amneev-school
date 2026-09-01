import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { Trophy, Activity, CheckCircle2, Shield, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sports & Athletics | AMNEEV Vision School",
  description: "Comprehensive sports and physical development program at AMNEEV Vision School in Etawah: football turf, cricket pitch, basketball courts, and athletics.",
};

export default function SportsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Physical Wellbeing & Athletics"
        title="Move. Compete. Persevere."
        subtitle="Cultivating physical endurance, sportsmanship, and tactical discipline across our multi-sport campus grounds in Etawah."
        bgImage={schoolMedia.sports.football.url}
        breadcrumbs={[
          { label: "Life at AMNEEV", href: "/student-life" },
          { label: "Sports & Athletics", href: "/sports" },
        ]}
      />

      {/* Philosophy of Sports */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono tracking-editorial text-forest-800 font-bold">
                ATHLETIC EXCELLENCE & HEALTH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                Building character through the crucible of fair competition.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                At AMNEEV Vision School, athletics is not an extracurricular afterthought—it is a vital component of daily student growth. On our 18,141 sq. metre campus, students enjoy dedicated facilities for football, cricket, basketball, volleyball, athletics, and traditional games.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Under certified physical education instructors, learners develop cardiovascular stamina, motor coordination, strategic collaboration, and the grace to win and lose with dignity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Expansive open-air football turf</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Dedicated cricket practice nets & pitch</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Full-size basketball & volleyball courts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Track & field athletics training</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.sports.cricket.url}
                alt="Cricket Practice at AMNEEV"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-ivory p-6 rounded-sm border border-sand-200 shadow-subtle space-y-3">
              <h3 className="font-serif text-xl font-bold text-forest-950">Football</h3>
              <p className="text-xs sm:text-sm text-charcoal-600">
                Team tactics, agility training, and inter-school tournament squad preparation on full-size turf.
              </p>
            </div>
            <div className="bg-ivory p-6 rounded-sm border border-sand-200 shadow-subtle space-y-3">
              <h3 className="font-serif text-xl font-bold text-forest-950">Cricket</h3>
              <p className="text-xs sm:text-sm text-charcoal-600">
                Batting technique, bowling mechanics, match fielding drills, and seasonal friendly leagues.
              </p>
            </div>
            <div className="bg-ivory p-6 rounded-sm border border-sand-200 shadow-subtle space-y-3">
              <h3 className="font-serif text-xl font-bold text-forest-950">Basketball</h3>
              <p className="text-xs sm:text-sm text-charcoal-600">
                Fast-break coordination, shooting accuracy, defensive positioning, and house leagues.
              </p>
            </div>
            <div className="bg-ivory p-6 rounded-sm border border-sand-200 shadow-subtle space-y-3">
              <h3 className="font-serif text-xl font-bold text-forest-950">Track & Field</h3>
              <p className="text-xs sm:text-sm text-charcoal-600">
                Sprints, middle-distance running, long jump, shot put, and annual athletic championship events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
