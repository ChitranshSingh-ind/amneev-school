import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  bgImage,
  breadcrumbs,
}) => {
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-forest-950 text-sand-50 overflow-hidden">
      {/* Background Image if provided */}
      {bgImage && (
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={bgImage}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/90" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb row */}
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-sand-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sand-50 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-brass-500 flex-shrink-0" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-brass-300 font-medium">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-sand-50 transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-xs uppercase tracking-editorial font-semibold text-brass-400 mb-2 font-mono">
            {eyebrow}
          </p>
        )}

        {/* Main Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-sand-50 max-w-4xl leading-tight text-balance">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-sand-200 leading-relaxed font-normal text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
