"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Send } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              Get In Touch
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
              <div className="flex gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <Mail className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:Rks950408@gmail.com" className="text-emerald-400 hover:underline">
                    Rks950408@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
              <div className="flex gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:+918227986162" className="text-emerald-400 hover:underline">
                    +91 8227986162
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
              <div className="flex gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <Linkedin className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/rahul-sahu-25163b233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600/20 to-teal-500/20 p-6 rounded-xl border border-emerald-500/30">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-300">Let's Work Together</h3>
                <p className="text-zinc-300 relative z-10">
                  I'm currently available for freelance work and full-time positions. If you have a project that needs
                  my expertise, don't hesitate to reach out!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">Send Me a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-left mb-1 text-zinc-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-zinc-700/50 border border-zinc-600 focus:border-emerald-500 rounded-lg text-white outline-none transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-left mb-1 text-zinc-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-zinc-700/50 border border-zinc-600 focus:border-emerald-500 rounded-lg text-white outline-none transition-colors"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-left mb-1 text-zinc-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-zinc-700/50 border border-zinc-600 focus:border-emerald-500 rounded-lg text-white outline-none transition-colors"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-left mb-1 text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-zinc-700/50 border border-zinc-600 focus:border-emerald-500 rounded-lg text-white outline-none transition-colors"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
