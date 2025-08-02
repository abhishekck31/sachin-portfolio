"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Star, Heart, Sparkles } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

// Client logos with placeholder images
const clientLogos = [
  {
    name: "Netflix",
    logo: "/placeholder.svg?height=80&width=120&text=Netflix&bg=e50914&color=white",
    industry: "Streaming",
  },
  {
    name: "Apple",
    logo: "/placeholder.svg?height=80&width=120&text=Apple&bg=000000&color=white",
    industry: "Technology",
  },
  {
    name: "Nike",
    logo: "/placeholder.svg?height=80&width=120&text=Nike&bg=000000&color=white",
    industry: "Sports",
  },
  {
    name: "Spotify",
    logo: "/placeholder.svg?height=80&width=120&text=Spotify&bg=1db954&color=white",
    industry: "Music",
  },
  {
    name: "Adobe",
    logo: "/placeholder.svg?height=80&width=120&text=Adobe&bg=ff0000&color=white",
    industry: "Software",
  },
  {
    name: "Tesla",
    logo: "/placeholder.svg?height=80&width=120&text=Tesla&bg=cc0000&color=white",
    industry: "Automotive",
  },
  {
    name: "Airbnb",
    logo: "/placeholder.svg?height=80&width=120&text=Airbnb&bg=ff5a5f&color=white",
    industry: "Travel",
  },
  {
    name: "Google",
    logo: "/placeholder.svg?height=80&width=120&text=Google&bg=4285f4&color=white",
    industry: "Technology",
  },
  {
    name: "Microsoft",
    logo: "/placeholder.svg?height=80&width=120&text=Microsoft&bg=00a1f1&color=white",
    industry: "Software",
  },
  {
    name: "Amazon",
    logo: "/placeholder.svg?height=80&width=120&text=Amazon&bg=ff9900&color=white",
    industry: "E-commerce",
  },
  {
    name: "Meta",
    logo: "/placeholder.svg?height=80&width=120&text=Meta&bg=1877f2&color=white",
    industry: "Social Media",
  },
  {
    name: "Uber",
    logo: "/placeholder.svg?height=80&width=120&text=Uber&bg=000000&color=white",
    industry: "Transportation",
  },
]

const testimonialHighlights = [
  {
    icon: Star,
    text: "Exceptional creativity",
    author: "Creative Director, Netflix",
  },
  {
    icon: Heart,
    text: "Always delivers magic",
    author: "Marketing Lead, Apple",
  },
  {
    icon: Sparkles,
    text: "Brings visions to life",
    author: "Brand Manager, Nike",
  },
]

export default function TrustedClientsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos]

  return (
    <motion.section ref={ref} style={{ scale, opacity }} className="py-32 bg-white overflow-hidden relative">
      {/* Smooth Glow Effect */}
      <motion.div
        style={{
          opacity: glow,
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
        }}
        className="absolute inset-0 bg-gradient-conic from-blue-50/10 via-purple-50/15 to-pink-50/10 pointer-events-none"
      />

      {/* Smooth Floating Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            whileInView={{ scale: [0.9, 1.05, 1], rotate: [0, -2, 0] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-white via-gray-50 to-white px-6 py-3 rounded-full text-sm text-gray-700 mb-8 shadow-lg border border-gray-200/50 backdrop-blur-sm"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.4)",
                  "0 0 0 8px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
              className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
            />
            <span className="font-outfit font-semibold">Trusted by industry leaders</span>
            <Sparkles className="w-4 h-4 text-gray-500" />
          </motion.div>

          <motion.h2
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6 font-outfit"
          >
            Loved by{" "}
            <motion.span
              className="italic bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              amazing
            </motion.span>{" "}
            brands
          </motion.h2>

          <motion.p
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-outfit font-light leading-relaxed"
          >
            Collaborating with <span className="font-semibold italic text-gray-800">visionary companies</span> to create
            unforgettable visual experiences that resonate globally.
          </motion.p>
        </motion.div>

        {/* Smooth Moving Client Logos */}
        <div className="relative mb-24 overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * clientLogos.length] }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex space-x-8 mb-8"
          >
            {duplicatedLogos.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-32 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ease-out border border-gray-100 relative overflow-hidden">
                  {/* Smooth shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-150, 150] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={100}
                    height={60}
                    className="object-contain relative z-10"
                  />
                </div>
                <motion.p
                  className="text-center mt-3 text-sm font-outfit font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300 ease-out"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {client.name}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Smooth Gradient Overlays */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Smooth Testimonial Highlights */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonialHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
              }}
              className="text-center group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200/50 shadow-lg backdrop-blur-sm cursor-pointer transition-all duration-300 ease-out"
            >
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.15,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-16 h-16 bg-gradient-to-br from-white to-gray-100 border-2 border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-out"
              >
                <highlight.icon className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300 ease-out" />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }} className="space-y-4">
                <p className="text-xl font-bold text-gray-900 font-outfit italic leading-relaxed">"{highlight.text}"</p>
                <p className="text-sm text-gray-500 font-outfit font-medium tracking-wide">— {highlight.author}</p>
              </motion.div>

              {/* Smooth decorative element */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "60%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-0.5 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 mx-auto mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
