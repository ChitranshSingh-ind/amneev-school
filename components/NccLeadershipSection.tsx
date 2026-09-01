import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight, Award, Compass, Shield, Users } from "lucide-react";

export const NccLeadershipSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-forest-950 text-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Leadership Narrative & NCC Unit */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-forest-900 border border-forest-800 text-xs font-mono text-brass-300">
              <Award className="w-3.5 h-3.5" />
              <span>National Cadet Corps (NCC) Unit</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-sand-50 leading-editorial">
              Learning to <span className="italic font-normal text-brass-200">lead</span>.
            </h2>

            <p className="text-base sm:text-lg text-sand-200 leading-relaxed font-normal">
              Leadership at AMNEEV is not a title—it is an earned discipline of service, courage, and accountability. Through our active NCC cadet unit and student council, learners discover what it means to be responsible for others.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-sm bg-forest-900/60 border border-forest-800">
                <Shield className="w-5 h-5 text-brass-400 mb-2" />
                <h4 className="font-serif text-base font-bold text-sand-50">Discipline & Drill</h4>
                <p className="text-xs text-sand-300 mt-1">
                  Parade training, ceremonial precision, and unshakeable physical stamina.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-forest-900/60 border border-forest-800">
                <Compass className="w-5 h-5 text-brass-400 mb-2" />
                <h4 className="font-serif text-base font-bold text-sand-50">Civic Duty & Camps</h4>
                <p className="text-xs text-sand-300 mt-1">
                  Outdoor training camps, disaster response awareness, and community service.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-forest-900/60 border border-forest-800 sm:col-span-2">
                <Users className="w-5 h-5 text-brass-400 mb-2" />
                <h4 className="font-serif text-base font-bold text-sand-50">Student Council & Prefectorial Body</h4>
                <p className="text-xs text-sand-300 mt-1">
                  Democratically elected student captains who lead school assemblies, coordinate house events, and champion student voice.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/ncc"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold px-5 py-3 rounded-sm bg-sand-50 text-forest-950 hover:bg-brass-100 transition-colors shadow-subtle group"
              >
                <span>Read About NCC & Leadership</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-forest-900" />
              </Link>
            </div>
          </div>

          {/* Right: Large NCC Drill Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-sm overflow-hidden shadow-elevated">
              <Image
                src={schoolMedia.ncc.drill.url}
                alt={schoolMedia.ncc.drill.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-sand-50">
                <p className="text-xs uppercase tracking-widest text-brass-300 font-mono mb-1">
                  AMNEEV NCC Cadet Unit
                </p>
                <p className="text-sm font-serif italic text-sand-100">
                  Instilling national pride, civic service, and executive poise in young Indian citizens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
