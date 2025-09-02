"use client"

import Image from "next/image"
import { Award, Users, Clock, Star, Trophy, Target } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { icon: Clock, label: "Years Experience", value: "8+" },
  { icon: Users, label: "Happy Clients", value: "150+" },
  { icon: Award, label: "Projects Completed", value: "500+" },
  { icon: Star, label: "Awards Won", value: "25+" },
]

const achievements = [
  { icon: Trophy, title: "Cannes Lions Winner", description: "Gold Lion for Best Commercial Edit" },
  { icon: Star, title: "Emmy Nominated", description: "Outstanding Achievement in Video Editing" },
  { icon: Target, title: "Industry Recognition", description: "Featured in Creative Review Magazine" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Sachin</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a passionate video editor with over 8 years of experience creating compelling visual stories for
                brands, agencies, and creators worldwide.
              </p>
              <p>
                My approach combines technical precision with creative storytelling, ensuring every project not only
                looks exceptional but also drives meaningful results for my clients.
              </p>
              <p>
                From commercials to documentaries, I specialize in transforming raw footage into polished narratives
                that captivate audiences and exceed expectations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-2xl"
                >
                  <stat.icon className="w-8 h-8 text-gray-900 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=480" alt="Alex Rivera" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
