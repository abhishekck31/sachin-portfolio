"use client"

import { Scissors, Palette, Zap, Volume2, Film, Target } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Scissors,
    title: "Video Editing",
    description: "Professional video editing with seamless transitions and compelling storytelling.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Advanced color correction and grading to enhance visual appeal and mood.",
  },
  {
    icon: Zap,
    title: "Motion Graphics",
    description: "Dynamic motion graphics and visual effects that engage and captivate.",
  },
  {
    icon: Volume2,
    title: "Sound Design",
    description: "Audio mixing and sound design for immersive viewing experiences.",
  },
  {
    icon: Film,
    title: "Post-Production",
    description: "Complete post-production services from editing to final delivery.",
  },
  {
    icon: Target,
    title: "Creative Direction",
    description: "Strategic creative direction to ensure your vision comes to life.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive video editing services tailored to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
