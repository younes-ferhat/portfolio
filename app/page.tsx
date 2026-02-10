import { SidebarNav } from "@/components/sidebar-nav"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ResumeSection } from "@/components/resume-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <SidebarNav />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1a1040] to-[#0f172a] pt-[57px] lg:ml-[72px] lg:pt-0">
        <HeroSection />
        <TechStack />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ResumeSection />
        <Footer />
      </main>
    </>
  )
}
