import React from "react";
import Image from "next/image";
import Link from "next/link";
import { schoolMedia } from "@/data/media";
import { ArrowRight, Trophy, Activity, Users } from "lucide-react";

export const SportsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Sports Image Montage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded-sm overflow-hidden shadow-subtle group">
              <Image
                src={schoolMedia.sports.football.url}
                alt={schoolMedia.sports.football.alt}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-sand-50 uppercase tracking-wider">
                Football Turf
              </span>
            </div>

            <div className="relative h-64 sm:h-80 rounded-sm overflow-hidden shadow-subtle group mt-6">
              <Image
                src={schoolMedia.sports.cricket.url}
                alt={schoolMedia.sports.cricket.alt}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-sand-50 uppercase tracking-wider">
                Cricket Pitch
              </span>
            </div>

            <div className="relative h-64 sm:h-80 rounded-sm overflow-hidden shadow-subtle group -mt-6">
              <Image
                src={schoolMedia.sports.basketball.url}
                alt={schoolMedia.sports.basketball.alt}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-sand-50 uppercase tracking-wider">
                Basketball Court
              </span>
            </div>

            <div className="relative h-64 sm:h-80 rounded-sm overflow-hidden shadow-subtle group">
              <Image
                src={schoolMedia.sports.athletics.url}
                alt={schoolMedia.sports.athletics.alt}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-sand-50 uppercase tracking-wider">
                Track & Athletics
              </span>
            </div>
          </div>

          {/* Right: Sports Philosophy & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700">
              Physical Development & Athletics
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950 leading-editorial">
              Move. Compete. <span className="italic font-normal text-forest-800">Grow.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
              At AMNEEV, athletic training is a cornerstone of character education. We believe that regular physical exertion cultivates emotional resilience, strategic discipline, and authentic camaraderie that serves students throughout life.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-stonebg text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-950">Daily Physical Activity</h4>
                  <p className="text-xs sm:text-sm text-charcoal-600">
                    Integrated fitness, agility drills, and yoga suited to each developmental age from early primary to senior years.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-stonebg text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-950">Inter-School Competitions</h4>
                  <p className="text-xs sm:text-sm text-charcoal-600">
                    Regular participation in district, regional CBSE, and state-level athletic and team sports tournaments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-stonebg text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-950">House System & Sports Day</h4>
                  <p className="text-xs sm:text-sm text-charcoal-600">
                    Inclusive intra-school athletic championships fostering house loyalty, healthy rivalry, and teamwork.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/sports"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-forest-900 hover:text-forest-700 group transition-colors"
              >
                <span>Explore Sports Curriculum & Facilities</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
