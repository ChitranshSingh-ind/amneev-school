"use client";

import React, { useState } from "react";
import Image from "next/image";
import { schoolMedia } from "@/data/media";
import { Quote, X, Sparkles } from "lucide-react";

export const CommunityStories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedStory, setSelectedStory] = useState<typeof schoolMedia.stories[0] | null>(null);

  const categories = ["ALL", "STUDENT", "PARENT", "ALUMNI", "TEACHER"];

  const filteredStories =
    activeCategory === "ALL"
      ? schoolMedia.stories
      : schoolMedia.stories.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brass-600" />
              <span>Community Perspectives</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-950">
              Stories from AMNEEV.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-stonebg p-1 rounded-sm border border-sand-200">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                  activeCategory === cat
                    ? "bg-forest-900 text-sand-50 shadow-xs"
                    : "text-charcoal-700 hover:text-forest-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Large Editorial Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group cursor-pointer bg-stonebg rounded-sm overflow-hidden border border-sand-200 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              {/* Portrait Photo */}
              <div className="relative h-64 w-full overflow-hidden bg-sand-200">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute top-3 left-3 bg-forest-950/80 text-sand-50 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm backdrop-blur-xs">
                  {story.category}
                </div>
              </div>

              {/* Story Excerpt Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <Quote className="w-5 h-5 text-brass-600 mb-2 opacity-70" />
                  <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-serif italic line-clamp-4">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-300/80">
                  <p className="font-serif text-base font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
                    {story.name}
                  </p>
                  <p className="text-xs text-charcoal-600 mt-0.5">{story.grade}</p>
                  <span className="inline-block mt-2 text-[10px] uppercase font-mono tracking-wider text-brass-700 bg-sand-200/70 px-2 py-0.5 rounded-sm">
                    {story.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-charcoal-500 italic">
          * Representative community story placeholders. Final authorized testimonials will be updated upon board review.
        </div>
      </div>

      {/* Accessible Story Detail Modal / Lightbox */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-forest-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="relative bg-ivory max-w-2xl w-full rounded-sm border border-sand-200 shadow-floating overflow-hidden p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 p-2 rounded-sm text-charcoal-600 hover:text-forest-950 hover:bg-sand-200 transition-colors"
              aria-label="Close Story"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-brass-400">
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brass-700 font-bold bg-sand-100 px-2 py-0.5 rounded-sm">
                  {selectedStory.category} PERSPECTIVE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mt-1">
                  {selectedStory.name}
                </h3>
                <p className="text-xs text-charcoal-600">{selectedStory.grade}</p>
              </div>
            </div>

            <blockquote className="font-serif text-lg sm:text-xl text-forest-950 leading-relaxed italic border-l-2 border-brass-500 pl-4 my-6">
              &ldquo;{selectedStory.quote}&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              At AMNEEV Vision School, our learners and families experience a nurturing culture founded on academic excellence, moral clarity, and future readiness.
            </p>

            <div className="mt-6 pt-4 border-t border-sand-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm bg-forest-900 text-sand-50 hover:bg-forest-800 transition-colors"
              >
                Close Perspective
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
