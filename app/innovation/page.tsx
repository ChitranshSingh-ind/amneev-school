import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";
import { Bot, Lightbulb, Wrench, Sparkles, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Atal Tinkering Lab & STEM Innovation | AMNEEV Vision School",
  description: "Explore the Atal Tinkering Lab (ATL) at AMNEEV Vision School in Etawah: robotics, electronics, design thinking, microcontrollers, and hands-on STEM.",
};

export default function InnovationPage() {
  return (
    <div>
      <PageHeader
        eyebrow="STEM & Innovation Ecosystem"
        title="Where Curiosity Becomes Invention."
        subtitle="Our Atal Tinkering Lab (ATL) transforms students into inventors, coders, and makers who tackle real-world challenges with scientific precision."
        bgImage={schoolMedia.stem.atlLab.url}
        breadcrumbs={[
          { label: "Learning", href: "/academics" },
          { label: "Atal Tinkering Lab", href: "/innovation" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-ivory text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-100 border border-sand-300 rounded-sm text-xs font-mono text-forest-800">
                <Sparkles className="w-3.5 h-3.5 text-brass-600" />
                <span>Atal Innovation Mission (AIM), NITI Aayog</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                A state-of-the-art workspace for hands-on scientific discovery.
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                The Atal Tinkering Lab at AMNEEV Vision School is a specialized maker space established under the prestigious Atal Innovation Mission. Equipped with electronic toolkits, sensor modules, microcontrollers, and 3D design apparatus, ATL empowers learners from Class VI onward to prototype ideas into working hardware.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Rather than memorizing electronic equations on a blackboard, students wire circuit breadboards, code Arduino microcontrollers, and construct robotic chassis with their own hands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Arduino, Raspberry Pi & Microcontroller kits</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Sensor arrays: ultrasonic, IR, gas, moisture</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Mechanical fabrication & soldering workbenches</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <span>Design thinking & rapid prototyping curricula</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-96 rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.stem.atlLab.url}
                alt="Atal Tinkering Lab Workbench"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core ATL Focus Areas */}
      <section className="py-20 bg-stonebg text-forest-950 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle space-y-4">
              <Bot className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Robotics & IoT</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Autonomous navigation, motor controllers, wireless communication, and IoT sensor telemetry programmed via visual blocks and Python.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle space-y-4">
              <Lightbulb className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Design Thinking</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Structured human-centered problem solving: identifying local community needs in agriculture, health, or energy, and iterating solutions.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-sm border border-sand-200 shadow-subtle space-y-4">
              <Wrench className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">Making & Prototyping</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Practical engineering habits: component schematics, safety protocols, chassis assembly, and product presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </div>
  );
}
