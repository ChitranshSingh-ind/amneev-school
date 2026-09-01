import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { StatsGlance } from "@/components/StatsGlance";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { siteContent } from "@/data/siteContent";
import { schoolMedia } from "@/data/media";
import { ShieldCheck, Compass, Heart, Award, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About AMNEEV Vision School | History, Vision & Leadership",
  description: "Learn about AMNEEV Vision School in Etawah, established in 2011 with 15+ years of CBSE academic excellence, holistic education, and student leadership.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Institutional Heritage & Vision"
        title="15+ Years of Shaping Minds in Etawah."
        subtitle="Founded in 2011, AMNEEV Vision School brings together CBSE academic excellence, modern innovation, and deep-rooted character education."
        bgImage={schoolMedia.campus.aerial.url}
        breadcrumbs={[{ label: "About AMNEEV", href: "/about" }]}
      />

      {/* Institutional Overview & History */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-100 border border-sand-300 rounded-sm text-xs font-mono text-forest-800">
                <ShieldCheck className="w-3.5 h-3.5 text-brass-600" />
                <span>CBSE Affiliation No. 2131535 · School Code 70350</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                A community where ambition meets belonging.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                AMNEEV Vision School was established in 2011 with a single guiding mission: to create a modern Indian senior secondary school in Etawah that matches the highest standards of academic rigour while remaining deeply human, accessible, and grounded in enduring moral values.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Over the past 15+ years, AMNEEV has grown into a vibrant institution of more than 2,300 students from Nursery to Class XII. Spanning an expansive 18,141 sq. metre campus with 72 classrooms and 6 dedicated laboratories, the school provides an ecosystem where curiosity is encouraged and every learner is valued.
              </p>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.campus.corridor.url}
                alt="AMNEEV Vision School Corridor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="philosophy" className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              Vision & Guiding Principles
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              Shaping Minds, Building Futures
            </h2>
            <p className="mt-3 text-lg font-serif italic text-charcoal-700">
              &ldquo;Excellence and Ethics for a Global World.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-4">
              <Compass className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Our Mission</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                To foster intellectual curiosity, analytical clarity, and moral integrity through rigorous CBSE education, innovative STEM problem-solving, and inclusive campus life.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-4">
              <Heart className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Our Values</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Respect, empathy, discipline, resilience, and ethical leadership. We believe that character is forged through everyday acts of honesty and community responsibility.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-ivory border border-sand-200 shadow-subtle space-y-4">
              <Award className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Our Horizon</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                To equip our graduates with the cognitive agility and technological fluency required to succeed in premier universities, national services, and dynamic global careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Principal's Message Detail */}
      <section id="principal" className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stonebg p-8 sm:p-12 lg:p-16 rounded-sm border border-sand-200 shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                <div className="relative w-64 h-80 rounded-sm overflow-hidden shadow-subtle border-2 border-sand-300 mb-4">
                  <Image
                    src={schoolMedia.principal.url}
                    alt={siteContent.school.principal.name}
                    fill
                    sizes="(max-width: 1024px) 260px, 320px"
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  {siteContent.school.principal.name}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-brass-700">
                  {siteContent.school.principal.title}, AMNEEV Vision School
                </p>
                <p className="text-xs text-charcoal-500">{siteContent.school.principal.qualifications}</p>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <span className="text-xs uppercase font-mono tracking-widest text-forest-800 font-bold">
                  MESSAGE FROM THE PRINCIPAL
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-snug">
                  Nurturing curious minds and compassionate hearts in Etawah.
                </h3>
                <div className="text-sm sm:text-base text-charcoal-700 leading-relaxed space-y-4">
                  <p>{siteContent.school.principal.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsGlance />
      <AdmissionsCta />
    </div>
  );
}
