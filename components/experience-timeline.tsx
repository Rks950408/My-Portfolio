"use client"

import { Briefcase, Calendar } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Sparrow Softech Pvt Ltd",
    period: "Oct 24 – Present",
    description: [
      "Developed Android and web applications for Nanded Waghala Municipal Corporation (Maharashtra Government), including the Tree Cutting and Town Planning Management Systems, as well as HRMS. Additionally, developed the E-Legal Metrology system for Jharkhand Municipal Corporation.",
      "Built a web app for Nanded Waghala City Municipal Corporation, integrating real-time lot updates, expiration notifications, and officer approvals in the Tree-Cutting module and Town Planning.",
      "Developed a web app for Jharkhand Legal Metrology, enabling seamless access and level-wise officer approvals.",
      "Developed an Inventory Management System, streamlining stock tracking, supplier management, and real-time reporting for efficient business operations.",
    ],
    techStack: "Python, Django, React JS, Html, Css, Javascript, Bootstrap, PostgreSQL, and Github.",
  },
  {
    title: "Fullstack Developer",
    company: "Aadrika Enterprises Pvt. Ltd",
    period: "Feb 22 – Oct 2024",
    description: [
      "Developed Android & web apps for Ranchi Municipal Corporation's Public Transport and Parking Management Systems and Land assets Management System.",
      "Public Transport System: Online ticketing with Bluetooth printer integration for 70+ buses.",
      "Parking Management System: Secure payments, real-time lot updates, and pass expiration notifications.",
      "Land and Assets Parking Management System where store the Land Assets of Ranchi Municipal real-time lot updates, and pass expiration notifications.",
    ],
    techStack: "Express js, Node Js, React JS, Tailwind, Next js, PostgreSQL, Prisma and Github.",
  },
  {
    title: "Paid Internship: Frontend Developer",
    company: "BMP-Infotech Pvt. Ltd (Remote)",
    period: "Sept 21 – Feb 22",
    description: ["Developed an e-commerce website with vendor support and online payment capabilities."],
    techStack: "ReactJS, Redux, JavaScript, Typescript.",
  },
  {
    title: "Internship: React Developer",
    company: "B12M2 Technologies Pvt. Ltd",
    period: "Aug 21 – Sept 21",
    description: ["Developed a React and React Native AI-powered Betting Application."],
    techStack: "React, React Native, Firebase, SQLite, Node JS, Firebase functions, Typescript.",
  },
]

export default function ExperienceTimeline() {
  const containerRef = useRef(null)

  return (
    <section id="experience" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              Professional Journey
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My career path showcases a progression of challenging roles and impactful projects.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-teal-400"></div>

          {/* Timeline items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ experience, index }) {
  const itemRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [index % 2 === 0 ? -50 : 50, 0, 0, index % 2 === 0 ? -50 : 50],
  )

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, scale, x }}
      className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-400 border-4 border-zinc-900 z-10">
        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30"></div>
      </div>

      {/* Content */}
      <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
        <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
          <div className="flex items-center gap-2 text-emerald-400 mb-2">
            <Calendar size={18} />
            <span>{experience.period}</span>
          </div>
          <h3 className="text-xl font-semibold">{experience.title}</h3>
          <div className="flex items-center gap-2 text-zinc-400 mb-4">
            <Briefcase size={16} />
            <span>{experience.company}</span>
          </div>
          <ul className="list-disc list-inside space-y-2 mb-4 text-zinc-300">
            {experience.description.map((item, i) => (
              <li key={i} className="pl-2">
                <span className="text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-zinc-700">
            <p className="text-sm font-medium text-emerald-400">Tech Stack:</p>
            <p className="text-zinc-300">{experience.techStack}</p>
          </div>
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  )
}
