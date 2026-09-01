import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { AdmissionsCta } from "@/components/AdmissionsCta";
import { schoolMedia } from "@/data/media";

export const metadata = {
  title: "Photo Gallery | AMNEEV Vision School",
  description: "Visual journey through AMNEEV Vision School: campus architecture, smart classrooms, science labs, athletics, arts, and student life in Etawah.",
};

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Visual Archive & Life"
        title="Moments & Memories at AMNEEV."
        subtitle="Explore our vibrant campus life, academic inquiry, athletic competitions, and cultural celebrations through our photography archive."
        bgImage={schoolMedia.gallery[3].url}
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      <GalleryLightbox />

      <AdmissionsCta />
    </div>
  );
}
