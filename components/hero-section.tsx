"use client"

import { MoveRight, Mail, Phone, Github, Linkedin, Globe, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-6xl font-bold mb-6 leading-tight">
                <span className="block">Hi, I'm Rahul</span>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "React Specialist",
                    2000,
                    "Node.js Expert",
                    2000,
                    "Django Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300"
                />
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-zinc-300 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A passionate Full Stack Developer with expertise in React,
              Node.js, and Django. I specialize in creating responsive web
              applications and solving complex problems with clean, efficient
              code.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-emerald-500/20"
                >
                  Contact Me <MoveRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-6 py-3 rounded-full transition-all"
                >
                  Download CV <Download size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.a
                href="mailto:Rks950408@gmail.com"
                className="bg-zinc-800/50 p-3 rounded-full border border-zinc-700 hover:border-emerald-500 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail size={20} className="text-emerald-400" />
              </motion.a>

              <motion.a
                href="tel:+918227986162"
                className="bg-zinc-800/50 p-3 rounded-full border border-zinc-700 hover:border-emerald-500 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Phone"
              >
                <Phone size={20} className="text-emerald-400" />
              </motion.a>

              <motion.a
                href="https://github.com/rks950408"
                target="_blank"
                className="bg-zinc-800/50 p-3 rounded-full border border-zinc-700 hover:border-emerald-500 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
                rel="noreferrer"
              >
                <Github size={20} className="text-emerald-400" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rahul-sahu-25163b233/"
                target="_blank"
                className="bg-zinc-800/50 p-3 rounded-full border border-zinc-700 hover:border-emerald-500 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
                rel="noreferrer"
              >
                <Linkedin size={20} className="text-emerald-400" />
              </motion.a>

              <motion.a
                href="https://rahul-kr-sahu-950408.web.app/"
                target="_blank"
                className="bg-zinc-800/50 p-3 rounded-full border border-zinc-700 hover:border-emerald-500 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Website"
                rel="noreferrer"
              >
                <Globe size={20} className="text-emerald-400" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-800">
                <img
                  src="/Rahul.jpg?height=320&width=320"
                  alt="Rahul Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-zinc-800/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg border border-zinc-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="font-bold text-emerald-400">
                  3+ Years Experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
