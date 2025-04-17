"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Briefcase, Award, Users } from "lucide-react"

const stats = [
  {
    value: 3,
    label: "Years Experience",
    icon: Briefcase,
    suffix: "+",
  },
  {
    value: 15,
    label: "Projects Completed",
    icon: Code,
    suffix: "+",
  },
  {
    value: 5,
    label: "Certifications",
    icon: Award,
    suffix: "+",
  },
  {
    value: 10,
    label: "Happy Clients",
    icon: Users,
    suffix: "+",
  },
]

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let startValue = 0
        const endValue = stat.value
        const duration = 2000
        const increment = Math.floor(duration / endValue)

        const timer = setInterval(() => {
          startValue += 1
          const newCounts = [...counts]
          newCounts[index] = startValue
          setCounts(newCounts)

          if (startValue === endValue) {
            clearInterval(timer)
          }
        }, increment)

        return () => clearInterval(timer)
      })
    }
  }, [isInView])

  return (
    <section className="py-16 bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                <stat.icon size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                {counts[index]}
                {stat.suffix}
              </h3>
              <p className="text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
