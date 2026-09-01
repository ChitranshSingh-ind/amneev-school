import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight, Bot, Lightbulb, Wrench, Sparkles } from "lucide-react";

export const AtalTinkeringSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: STEM Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sand-100 border border-sand-300 text-xs font-mono text-forest-800">
              <Sparkles className="w-3.5 h-3.5 text-brass-600" />
              <span>NITI Aayog · Atal Innovation Mission</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950 leading-editorial">
              Where ideas become <span className="italic font-normal text-forest-800">experiments</span>.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
              The Atal Tinkering Lab (ATL) at AMNEEV Vision School is our dedicated innovation workspace. Here, students shift from passive consumers of technology to proactive inventors, coders, and engineers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-sm bg-stonebg border border-sand-200">
                <Bot className="w-5 h-5 text-forest-800 mb-2" />
                <h4 className="font-serif text-base font-bold text-forest-950">Robotics & IoT</h4>
                <p className="text-xs text-charcoal-600 mt-1">
                  Microcontrollers, Arduino circuits, and automated robotic kits.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-stonebg border border-sand-200">
                <Lightbulb className="w-5 h-5 text-forest-800 mb-2" />
                <h4 className="font-serif text-base font-bold text-forest-950">Design Thinking</h4>
                <p className="text-xs text-charcoal-600 mt-1">
                  Solving real-world community challenges with structured ideation.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-stonebg border border-sand-200">
                <Wrench className="w-5 h-5 text-forest-800 mb-2" />
                <h4 className="font-serif text-base font-bold text-forest-950">Rapid Prototyping</h4>
                <p className="text-xs text-charcoal-600 mt-1">
                  3D design, sensors, mechanical tools, and hands-on assembly.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/innovation"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold px-5 py-3 rounded-sm bg-forest-900 text-sand-50 hover:bg-forest-800 transition-colors shadow-subtle group"
              >
                <span>Discover Innovation at AMNEEV</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-brass-400" />
              </Link>
            </div>
          </div>

          {/* Right: Large Visual Image with Overlay Stats */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.stem.atlLab.url}
                alt={schoolMedia.stem.atlLab.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-sand-50">
                <p className="text-xs font-mono uppercase tracking-widest text-brass-300 font-semibold mb-1">
                  Atal Tinkering Lab Workbench
                </p>
                <p className="text-sm font-serif italic text-sand-100">
                  Empowering young minds with robotics, electronics, and scientific problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
