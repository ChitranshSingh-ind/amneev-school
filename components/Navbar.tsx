"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/siteContent";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Accessible Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forest-900 focus:text-sand-50 focus:rounded-sm focus:font-semibold focus:text-xs focus:uppercase focus:tracking-wider focus:shadow-floating focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md border-b border-sand-200/80 shadow-subtle py-3.5"
            : "bg-gradient-to-b from-forest-950/80 via-forest-950/30 to-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* AMNEEV Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-forest-700 rounded-sm"
              aria-label="AMNEEV Vision School Home"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-sm flex items-center justify-center font-serif font-bold text-lg tracking-wider border transition-colors",
                  isScrolled
                    ? "bg-forest-900 text-sand-50 border-forest-800"
                    : "bg-sand-50 text-forest-950 border-sand-200 shadow-sm"
                )}
              >
                A
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-serif text-lg sm:text-xl font-bold tracking-tight leading-none transition-colors",
                    isScrolled ? "text-forest-950" : "text-white"
                  )}
                >
                  AMNEEV
                </span>
                <span
                  className={cn(
                    "text-[10px] sm:text-[11px] font-sans uppercase tracking-widest font-medium transition-colors mt-0.5",
                    isScrolled ? "text-forest-700" : "text-sand-200"
                  )}
                >
                  Vision School · Etawah
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {siteContent.navigation.main.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isActive = pathname.startsWith(item.href);

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                    onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors rounded-sm",
                        isScrolled
                          ? isActive
                            ? "text-forest-800 font-semibold"
                            : "text-charcoal-800 hover:text-forest-900"
                          : isActive
                          ? "text-white font-semibold"
                          : "text-sand-100 hover:text-white"
                      )}
                    >
                      {item.label}
                      {hasChildren && (
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200 opacity-70",
                            activeDropdown === item.label && "transform rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* Desktop Dropdown Flyout */}
                    {hasChildren && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in z-50">
                        <div className="bg-ivory border border-sand-200 rounded-md shadow-elevated p-2 overflow-hidden">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group block p-2.5 rounded-sm hover:bg-stonebg transition-colors"
                            >
                              <div className="text-sm font-medium text-forest-950 group-hover:text-forest-800 flex items-center justify-between">
                                {child.label}
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brass-600" />
                              </div>
                              {child.description && (
                                <p className="text-xs text-charcoal-600 mt-0.5 leading-normal line-clamp-1 font-normal">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/contact#visit"
                className={cn(
                  "text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm transition-all",
                  isScrolled
                    ? "text-forest-900 hover:bg-sand-100 border border-sand-300"
                    : "text-sand-50 hover:bg-white/10 border border-white/30"
                )}
              >
                Visit Us
              </Link>
              <Link
                href="/admissions"
                className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm bg-forest-900 hover:bg-forest-800 text-sand-50 transition-all shadow-subtle flex items-center gap-1.5"
              >
                <span>Apply 2026–27</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-700",
                isScrolled ? "text-forest-950" : "text-white"
              )}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ivory pt-20 pb-8 px-6 overflow-y-auto lg:hidden animate-fade-in flex flex-col justify-between">
          <div className="space-y-6">
            <div className="border-b border-sand-200 pb-4">
              <p className="text-xs uppercase tracking-editorial text-forest-700 font-medium mb-1">
                AMNEEV Vision School · Etawah
              </p>
              <p className="text-xs text-charcoal-600">CBSE Affiliated Senior Secondary School (No. 2131535)</p>
            </div>

            <nav className="space-y-4">
              {siteContent.navigation.main.map((item) => (
                <div key={item.label} className="border-b border-sand-100 pb-3">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="font-serif text-2xl font-semibold text-forest-950 hover:text-forest-800"
                    >
                      {item.label}
                    </Link>
                  </div>
                  {item.children && (
                    <div className="pl-3 mt-2 space-y-2 border-l border-sand-300">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block text-sm text-charcoal-700 hover:text-forest-900 py-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Secondary Mobile Links */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {siteContent.navigation.secondary.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-charcoal-700 hover:text-forest-900 py-1.5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="pt-8 border-t border-sand-200 space-y-4 mt-8">
            <div className="flex flex-col gap-3">
              <Link
                href="/admissions"
                className="w-full text-center py-3 bg-forest-900 text-sand-50 font-semibold text-sm rounded-sm tracking-wide shadow-sm"
              >
                Apply for Admissions 2026–27
              </Link>
              <Link
                href="/contact#visit"
                className="w-full text-center py-3 bg-stonebg text-forest-950 font-semibold text-sm rounded-sm border border-sand-300"
              >
                Schedule a Campus Visit
              </Link>
            </div>

            <div className="flex items-center justify-between text-xs text-charcoal-600 pt-2">
              <a
                href={`tel:${siteContent.school.phone}`}
                className="flex items-center gap-1.5 font-medium text-forest-900"
              >
                <Phone className="w-3.5 h-3.5 text-brass-600" />
                {siteContent.school.phoneDisplay}
              </a>
              <span>Est. 2011 · Etawah, UP</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
