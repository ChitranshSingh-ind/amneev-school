import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs uppercase font-medium tracking-editorial mb-3",
            dark ? "text-brass-400" : "text-forest-700"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl tracking-tight leading-editorial mb-4",
          dark ? "text-sand-50" : "text-forest-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed font-normal",
            dark ? "text-sand-200" : "text-charcoal-700"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
