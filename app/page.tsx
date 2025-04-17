import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import SkillsSection from "@/components/skills-section"
import ExperienceTimeline from "@/components/experience-timeline"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import HeroSection from "@/components/hero-section"
import ParticleBackground from "@/components/particle-background"
import StatsCounter from "@/components/stats-counter"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white overflow-hidden">
      <ParticleBackground />

      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Rahul</span>{" "}
          Kumar
        </h1>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-zinc-300 hover:text-emerald-400 transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-zinc-300 hover:text-emerald-400 transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-zinc-300 hover:text-emerald-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-zinc-300 hover:text-emerald-400 transition-colors">
              Projects
            </Link>
            <Link href="#education" className="text-zinc-300 hover:text-emerald-400 transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-zinc-300 hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Counter Section */}
        <StatsCounter />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <footer className="bg-zinc-950 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Rahul Kumar. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="mailto:Rks950408@gmail.com"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://github.com/rks950408"
              target="_blank"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rahul-sahu-25163b233/"
              target="_blank"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
