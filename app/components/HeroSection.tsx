"use client"

import Link from "next/link"
import { ArrowRight, Play, Sparkles, Star } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.section
      ref={ref}
      id="home"
      style={{ scale, opacity, y }}
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
    >
      {/* Smooth Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-conic from-blue-50 via-purple-50 to-pink-50"
      />

      {/* Smooth Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-pink-100/40 to-orange-100/40 rounded-full blur-xl"
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-10"
        >
          {/* Smooth Badge */}
          <motion.div
            whileInView={{ scale: [0.9, 1.05, 1], rotate: [0, 2, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-white to-gray-50 px-6 py-3 rounded-full text-sm text-gray-700 border border-gray-200/50 shadow-lg backdrop-blur-sm"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.6)",
                  "0 0 0 8px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
              className="w-3 h-3 bg-green-500 rounded-full"
            />
            <span className="font-outfit font-medium">Available for creative projects</span>
            <Sparkles className="w-4 h-4 text-gray-500" />
          </motion.div>

          {/* Smooth Main Heading */}
          <div className="space-y-6">
            <motion.h1
              whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bold leading-tight font-outfit"
            >
              <motion.span
                className="block text-gray-900 mb-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                SACHIN
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 bg-clip-text text-transparent italic font-light"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Visual Artist
              </motion.span>
            </motion.h1>

            <motion.div
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-4"
            >
              <motion.div
                animate={{ width: [0, 50, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
              />
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-gray-600 font-outfit text-sm tracking-wider">CREATIVE DIRECTOR</span>
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <motion.div
                animate={{ width: [0, 50, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
              />
            </motion.div>

            <motion.p
              whileInView={{ opacity: [0, 1], y: [15, 0] }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-outfit font-light"
            >
              Crafting <span className="font-semibold italic text-gray-800">cinematic experiences</span> that captivate
              audiences and transform brands through the art of visual storytelling.
            </motion.p>
          </div>

          {/* Smooth CTA Buttons */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Link
                href="#work"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-10 py-5 rounded-2xl font-outfit font-semibold text-lg shadow-2xl transition-all duration-300 ease-out relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <Play size={24} className="group-hover:scale-110 transition-transform duration-200 ease-out" />
                <span>View My Work</span>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-1 transition-transform duration-200 ease-out"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Link
                href="#about"
                className="group inline-flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-all duration-200 ease-out font-outfit font-medium text-lg"
              >
                <span>Discover More</span>
                <motion.div whileHover={{ rotate: 30, scale: 1.1 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                  <Sparkles size={20} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Smooth Stats */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-20"
          >
            {[
              { number: "500+", label: "Projects", icon: "🎬" },
              { number: "150+", label: "Clients", icon: "🤝" },
              { number: "8+", label: "Years", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-center bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 rounded-3xl p-8 shadow-lg backdrop-blur-sm cursor-pointer group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200 ease-out">
                  {stat.icon}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-4xl font-bold text-gray-900 font-outfit mb-2 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 ease-out"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-500 font-outfit font-medium tracking-wide group-hover:text-gray-700 transition-colors duration-200 ease-out">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span className="text-gray-500 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-200 ease-out font-outfit font-medium tracking-wide">
            Scroll to explore
          </span>
          <div className="w-6 h-12 border-2 border-gray-300 group-hover:border-gray-500 rounded-full flex justify-center transition-all duration-200 ease-out bg-white/50 backdrop-blur-sm shadow-lg">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-2 h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
