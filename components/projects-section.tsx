"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const projects = [
  {
    title: "Tree Cutting & Town Planning Management",
    description:
      "Web application for Nanded Waghala City Municipal Corporation with real-time updates, notifications, and officer approvals.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    techStack: ["Python", "Django", "React", "PostgreSQL"],
  },
  {
    title: "E-Legal Metrology System",
    description:
      "Web application for Jharkhand Legal Metrology enabling seamless access and level-wise officer approvals.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    techStack: ["Python", "Django", "React", "PostgreSQL"],
  },
  {
    title: "Public Transport System",
    description:
      "Online ticketing system with Bluetooth printer integration for 70+ buses for Ranchi Municipal Corporation.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    techStack: ["Node.js", "Express", "React", "Next.js", "PostgreSQL"],
  },
  {
    title: "Parking Management System",
    description: "System with secure payments, real-time lot updates, and pass expiration notifications.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    techStack: ["Node.js", "Express", "React", "Next.js", "PostgreSQL"],
  },
  {
    title: "Land Assets Management System",
    description: "System to store and manage Land Assets of Ranchi Municipal with real-time updates and notifications.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    techStack: ["Node.js", "Express", "React", "Next.js", "PostgreSQL"],
  },
  {
    title: "E-commerce Platform",
    description: "E-commerce website with vendor support and online payment capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    techStack: ["React", "Redux", "JavaScript", "TypeScript"],
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              Featured Projects
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A showcase of my most significant work and technical achievements.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} className="group" variants={itemVariants}>
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-700 group-hover:border-emerald-500 transition-all duration-300 transform group-hover:-translate-y-2 shadow-lg group-hover:shadow-emerald-500/10 h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full transition-colors"
                        aria-label={`View ${project.title} project`}
                      >
                        <ExternalLink size={20} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-zinc-700/50 text-emerald-300 px-2 py-1 rounded-md border border-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
