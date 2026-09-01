import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-sand-100 border-t border-forest-900 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding & Strategic Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-forest-900">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-sm bg-sand-50 text-forest-950 flex items-center justify-center font-serif font-bold text-xl tracking-wider">
                A
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-sand-50 tracking-tight block">
                  AMNEEV Vision School
                </span>
                <span className="text-xs uppercase tracking-widest text-brass-400 font-medium block">
                  Etawah, Uttar Pradesh
                </span>
              </div>
            </div>

            <p className="text-base text-sand-200 leading-relaxed font-serif italic max-w-md">
              &ldquo;Shaping Minds, Building Futures: Excellence and Ethics for a Global World.&rdquo;
            </p>

            <p className="text-sm text-sand-300/80 leading-relaxed max-w-md">
              A premier CBSE-affiliated senior secondary school fostering rigorous academics, innovation through the Atal Tinkering Lab, character through NCC, and holistic human growth on a spacious 18,141 sq. m. campus.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-forest-900/80 border border-forest-800 text-xs text-sand-200">
              <ShieldCheck className="w-4 h-4 text-brass-400" />
              <span>CBSE Affiliation No. <strong>2131535</strong> · School Code <strong>70350</strong></span>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            {/* Column 1: School */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-brass-400 font-semibold font-sans">
                School
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="hover:text-sand-50 transition-colors text-sand-300">
                    About AMNEEV
                  </Link>
                </li>
                <li>
                  <Link href="/about#philosophy" className="hover:text-sand-50 transition-colors text-sand-300">
                    Vision & Values
                  </Link>
                </li>
                <li>
                  <Link href="/about#principal" className="hover:text-sand-50 transition-colors text-sand-300">
                    Principal&apos;s Message
                  </Link>
                </li>
                <li>
                  <Link href="/campus" className="hover:text-sand-50 transition-colors text-sand-300">
                    Campus Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-sand-50 transition-colors text-sand-300">
                    School News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Learning */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-brass-400 font-semibold font-sans">
                Learning
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/early-years" className="hover:text-sand-50 transition-colors text-sand-300">
                    Early Years
                  </Link>
                </li>
                <li>
                  <Link href="/middle-school" className="hover:text-sand-50 transition-colors text-sand-300">
                    Middle School
                  </Link>
                </li>
                <li>
                  <Link href="/senior-school" className="hover:text-sand-50 transition-colors text-sand-300">
                    Senior School
                  </Link>
                </li>
                <li>
                  <Link href="/innovation" className="hover:text-sand-50 transition-colors text-sand-300">
                    Atal Tinkering Lab
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="hover:text-sand-50 transition-colors text-sand-300">
                    CBSE Curriculum
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Life at AMNEEV */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-brass-400 font-semibold font-sans">
                Life at AMNEEV
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/sports" className="hover:text-sand-50 transition-colors text-sand-300">
                    Sports & Athletics
                  </Link>
                </li>
                <li>
                  <Link href="/arts" className="hover:text-sand-50 transition-colors text-sand-300">
                    Arts & Music
                  </Link>
                </li>
                <li>
                  <Link href="/ncc" className="hover:text-sand-50 transition-colors text-sand-300">
                    NCC Cadet Wing
                  </Link>
                </li>
                <li>
                  <Link href="/student-life" className="hover:text-sand-50 transition-colors text-sand-300">
                    Student Life
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-sand-50 transition-colors text-sand-300">
                    Photo Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Admissions */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-brass-400 font-semibold font-sans">
                Admissions
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/admissions" className="hover:text-sand-50 transition-colors text-sand-300 font-medium">
                    Admissions 2026–27
                  </Link>
                </li>
                <li>
                  <Link href="/admissions/process" className="hover:text-sand-50 transition-colors text-sand-300">
                    4-Step Process
                  </Link>
                </li>
                <li>
                  <Link href="/admissions/fees" className="hover:text-sand-50 transition-colors text-sand-300">
                    Fee Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/contact#visit" className="hover:text-sand-50 transition-colors text-sand-300">
                    Book Campus Tour
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-sand-50 transition-colors text-sand-300">
                    Contact Desk
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Location Strip */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-sand-300 border-b border-forest-900">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-brass-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sand-100">Campus Location</p>
              <p className="mt-1 leading-relaxed">
                Sai City, Udaypura, Farrukhabad Road, NH-92, Etawah, Uttar Pradesh 206001, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-brass-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sand-100">Admissions & Office Desk</p>
              <p className="mt-1">
                <a href={`tel:${siteContent.school.phone}`} className="hover:text-sand-50 font-medium">
                  {siteContent.school.phoneDisplay}
                </a>
              </p>
              <p className="text-[11px] text-sand-400 mt-0.5">Direct Helpline for 2026–27 Admissions</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-brass-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sand-100">Administrative Hours</p>
              <p className="mt-1">{siteContent.school.officeHours}</p>
              <p className="text-[11px] text-sand-400 mt-0.5">Visitors by appointment or walk-in</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Credential Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-400/80 gap-4">
          <p>© {new Date().getFullYear()} AMNEEV Vision School. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>CBSE Affiliated Senior Secondary School</span>
            <span>Est. 2011</span>
            <Link href="/admissions/fees" className="hover:text-sand-200 transition-colors">
              Terms & Policy
            </Link>
            <Link href="/contact" className="hover:text-sand-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
