"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React.js", logo: "/placeholder.svg?height=40&width=40", level: 90 },
      { name: "Next.js", logo: "/placeholder.svg?height=40&width=40", level: 85 },
      { name: "JavaScript", logo: "/placeholder.svg?height=40&width=40", level: 90 },
      { name: "TypeScript", logo: "/placeholder.svg?height=40&width=40", level: 80 },
      { name: "HTML5", logo: "/placeholder.svg?height=40&width=40", level: 95 },
      { name: "CSS3", logo: "/placeholder.svg?height=40&width=40", level: 90 },
      { name: "Tailwind CSS", logo: "/placeholder.svg?height=40&width=40", level: 85 },
      { name: "Bootstrap", logo: "/placeholder.svg?height=40&width=40", level: 85 },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", logo: "/placeholder.svg?height=40&width=40", level: 85 },
      { name: "Express.js", logo: "/placeholder.svg?height=40&width=40", level: 85 },
      { name: "Django", logo: "/placeholder.svg?height=40&width=40", level: 80 },
      { name: "Django REST API", logo: "/placeholder.svg?height=40&width=40", level: 80 },
    ],
  },
  {
    category: "Database & Tools",
    technologies: [
      { name: "PostgreSQL", logo: "/placeholder.svg?height=40&width=40", level: 80 },
      { name: "MySQL", logo: "/placeholder.svg?height=40&width=40", level: 80 },
      { name: "Prisma", logo: "/placeholder.svg?height=40&width=40", level: 75 },
      { name: "AWS", logo: "/placeholder.svg?height=40&width=40", level: 70 },
      { name: "Git", logo: "/placeholder.svg?height=40&width=40", level: 85 },
      { name: "GitHub Actions", logo: "/placeholder.svg?height=40&width=40", level: 75 },
    ],
  },
  {
    category: "Programming Languages",
    technologies: [
      { name: "Python", logo: "/placeholder.svg?height=40&width=40", level: 80 },
      { name: "Java", logo: "/placeholder.svg?height=40&width=40", level: 75 },
      { name: "C", logo: "/placeholder.svg?height=40&width=40", level: 70 },
      { name: "C#", logo: "/placeholder.svg?height=40&width=40", level: 70 },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              Technical Skills
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My expertise spans across various technologies and frameworks, allowing me to build complete, scalable
            applications.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                className="text-2xl font-semibold mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                {skillCategory.category}
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {skillCategory.technologies.map((tech, techIndex) => (
                  <motion.div key={techIndex} className="group" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                    <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 group-hover:border-emerald-500 rounded-xl p-6 h-full transition-all duration-300 transform group-hover:-translate-y-2">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 mb-4 p-2 rounded-full bg-zinc-700/50 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                          <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-10 h-10" />
                        </div>
                        <h4 className="text-lg font-medium mb-3">{tech.name}</h4>
                        <div className="w-full bg-zinc-700 rounded-full h-2.5 mb-1">
                          <motion.div
                            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${tech.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.3 + techIndex * 0.1 }}
                          ></motion.div>
                        </div>
                        <span className="text-sm text-zinc-400">{tech.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
