import { Hero } from "@/components/Hero";
import { PhilosophyLeadership } from "@/components/PhilosophyLeadership";
import { DistinctivePillars } from "@/components/DistinctivePillars";
import { CampusExperience } from "@/components/CampusExperience";
import { InstitutionalCredibility } from "@/components/InstitutionalCredibility";
import { AdmissionsGateway } from "@/components/AdmissionsGateway";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Chapter 1: Cinematic Hero & Anchor */}
      <Hero />

      {/* Chapter 2: Educational Ethos & Principal's Leadership Letter */}
      <PhilosophyLeadership />

      {/* Chapter 3: Three Pillars of Distinction (Academics, STEM, Character) */}
      <DistinctivePillars />

      {/* Chapter 4: Living Campus (18,141 sq. m.) & Developmental Continuum */}
      <CampusExperience />

      {/* Chapter 5: Institutional Heritage & Numbers That Matter */}
      <InstitutionalCredibility />

      {/* Chapter 6: Admissions Gateway & Visit Invitation */}
      <AdmissionsGateway />
    </div>
  );
}
