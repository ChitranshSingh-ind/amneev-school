import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { schoolMedia } from "@/data/media";
import { Quote, ArrowRight } from "lucide-react";

export const PrincipalMessage: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-stonebg text-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory rounded-sm border border-sand-200 shadow-elevated p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Principal Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-sm overflow-hidden shadow-elevated border-4 border-sand-100 mb-6">
                <Image
                  src={schoolMedia.principal.url}
                  alt={schoolMedia.principal.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 300px, 400px"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-950">
                {siteContent.school.principal.name}
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-brass-700 mt-1">
                {siteContent.school.principal.title}, AMNEEV Vision School
              </p>
              <p className="text-xs text-charcoal-600 mt-0.5">
                {siteContent.school.principal.qualifications}
              </p>
            </div>

            {/* Right: Principal's Editorial Message */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-forest-700">
                <Quote className="w-8 h-8 text-brass-600 opacity-80" />
                <span className="text-xs uppercase tracking-editorial font-semibold">
                  Institutional Leadership
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold tracking-tight text-forest-950 leading-snug">
                &ldquo;True education is the cultivation of resilient character, critical reasoning, and empathetic leadership.&rdquo;
              </h2>

              <div className="text-sm sm:text-base text-charcoal-700 space-y-4 leading-relaxed font-normal">
                <p>
                  At AMNEEV Vision School, our commitment goes far beyond textbook instruction. We see each student as an individual of boundless potential, natural curiosity, and moral depth.
                </p>
                <p>
                  With our rigorous CBSE curriculum, our Atal Tinkering Lab, our comprehensive sports infrastructure, and our accredited NCC cadet wing, we provide our learners in Etawah with opportunities that prepare them to thrive anywhere in the world.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/about#principal"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-sm bg-forest-900 text-sand-50 hover:bg-forest-800 transition-colors shadow-subtle group"
                >
                  <span>Read Full Leadership Statement</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-brass-400" />
                </Link>
                <Link
                  href="/contact#visit"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-forest-800 hover:text-forest-950 transition-colors"
                >
                  <span>Meet Our Academic Leadership</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
