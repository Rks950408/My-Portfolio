"use client"

import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Ranchi University, Ranchi",
    period: "Aug 2024 – Sept 2026",
    grade: "CGPA: 8.36",
    location: "Ranchi, India",
  },
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Ranchi University, Ranchi",
    period: "Aug 2020 – Sept 2022",
    grade: "CGPA: 8.36",
    location: "Ranchi, India",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Ranchi University, Ranchi",
    period: "Aug 2017 – Sept 2020",
    grade: "Percentage: 72.14%",
    location: "Ranchi, India",
  },
  {
    degree: "Intermediate of Science (I.Sc)",
    institution: "Dr. SPM Inter College, Sindri",
    period: "Aug 2015 – June 2017",
    grade: "Percentage: 60.00%",
    location: "Sindri, India",
  },
];


const certifications = [
  {
    title: "Accenture. Software Engineering Virtual Experience",
    issuer: "Accenture",
    link: "#",
    logo: "/Accenture.png?height=40&width=40",
  },
  {
    title: "Certificate of Excellence in Javascript",
    issuer: "Udemy",
    link: "#",
    logo: "/udemy.png?height=40&width=40",
  },
  {
    title: "Certificate of Excellence in React",
    issuer: "Udemy",
    link: "#",
    logo: "/udemy.png?height=40&width=40",
  },
]

export default function EducationSection() {
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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              Education & Certifications
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my expertise.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="text-emerald-400" />
              <span>Academic Education</span>
            </motion.h3>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} className="group">
                  <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 group-hover:border-emerald-500 transition-all duration-300 transform group-hover:-translate-y-2 shadow-lg group-hover:shadow-emerald-500/10">
                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                      <Calendar size={18} />
                      <span>{edu.period}</span>
                    </div>
                    <h4 className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-zinc-300">{edu.institution}</p>
                    <div className="flex justify-between mt-2 text-zinc-400">
                      <span>{edu.grade}</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Award className="text-emerald-400" />
              <span>Certifications</span>
            </motion.h3>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants} className="group">
                  <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 group-hover:border-emerald-500 transition-all duration-300 transform group-hover:-translate-y-2 shadow-lg group-hover:shadow-emerald-500/10">
                    <div className="flex items-start gap-4">
                      <div className="bg-zinc-700/50 p-2 rounded-lg">
                        <img src={cert.logo || "/placeholder.svg"} alt={cert.issuer} className="w-10 h-10" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-zinc-400 mb-4">Issued by {cert.issuer}</p>
                        <motion.a
                          href={cert.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                          rel="noreferrer"
                          whileHover={{ x: 5 }}
                        >
                          View Certificate <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="relative overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-500/20 p-6 rounded-xl border border-emerald-500/30">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
                  <h4 className="text-lg font-semibold mb-4 text-emerald-300">Continuous Learning</h4>
                  <p className="mb-4 text-zinc-300 relative z-10">
                    I'm constantly improving my skills through online courses, workshops, and self-learning projects.
                  </p>
                  <p className="text-zinc-300 relative z-10">
                    My focus areas for ongoing education include cloud technologies, advanced React patterns, and AI
                    integration.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
