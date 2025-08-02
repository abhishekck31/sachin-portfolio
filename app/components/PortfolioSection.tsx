"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Award, Eye, Calendar, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  id: number
  title: string
  client: string
  category: string
  year: string
  thumbnail: string
  description: string
  tags: string[]
  awards?: string[]
  views?: string
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Revolution",
    client: "TechCorp Industries",
    category: "Commercial",
    year: "2024",
    thumbnail: "/placeholder.svg?height=600&width=800",
    description:
      "A groundbreaking commercial campaign that redefined TechCorp's brand identity through innovative visual storytelling and cutting-edge motion graphics.",
    tags: ["Motion Graphics", "Color Grading", "Visual Effects"],
    awards: ["Cannes Lions Bronze", "D&AD Pencil"],
    views: "2.3M",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Midnight Dreams",
    client: "Luna Records",
    category: "Music Video",
    year: "2024",
    thumbnail: "/placeholder.svg?height=600&width=800",
    description:
      "An ethereal music video featuring seamless transitions and atmospheric visuals that perfectly complement the artist's electronic soundscape.",
    tags: ["Creative Direction", "Visual Effects", "Sound Design"],
    views: "5.7M",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "Ocean Conservation",
    client: "Blue Planet Foundation",
    category: "Documentary",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=800",
    description:
      "A compelling documentary showcasing marine conservation efforts through powerful storytelling and breathtaking underwater cinematography.",
    tags: ["Documentary Editing", "Audio Mixing", "Color Correction"],
    awards: ["Emmy Nomination"],
    views: "1.2M",
    color: "from-teal-500 to-blue-600",
  },
  {
    id: 4,
    title: "Startup Journey",
    client: "InnovateLab",
    category: "Corporate",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=800",
    description:
      "An inspiring corporate story highlighting innovation and growth through dynamic editing and professional motion graphics.",
    tags: ["Corporate Video", "Motion Graphics", "Interviews"],
    views: "890K",
    color: "from-orange-500 to-red-600",
  },
]

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentProject = projects[currentIndex]

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.015)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-50/30 to-purple-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600" />
            <span className="text-blue-600 text-sm font-semibold tracking-[0.2em] uppercase">Featured Work</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-blue-500 to-purple-600" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold mb-6 text-gray-900 tracking-tight">
            Selected
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            A showcase of award-winning projects that blend creativity with strategic thinking to deliver exceptional
            results.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-5 min-h-[600px]">
              {/* Image Section */}
              <div className="lg:col-span-3 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    className="relative h-full min-h-[400px] lg:min-h-[600px] group"
                  >
                    <Image
                      src={currentProject.thumbnail || "/placeholder.svg"}
                      alt={currentProject.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <div
                        className={`bg-gradient-to-r ${currentProject.color} px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg backdrop-blur-sm`}
                      >
                        {currentProject.category}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-6 left-6 flex space-x-3">
                      {currentProject.views && (
                        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                          <Eye className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-800 text-sm font-semibold">{currentProject.views}</span>
                        </div>
                      )}
                      {currentProject.awards && (
                        <div className="flex items-center space-x-2 bg-yellow-50/90 backdrop-blur-sm px-3 py-2 rounded-full border border-yellow-200 shadow-lg">
                          <Award className="w-4 h-4 text-yellow-600" />
                          <span className="text-yellow-700 text-sm font-semibold">{currentProject.awards.length}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50/50 to-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-600 text-sm font-semibold tracking-wide">{currentProject.year}</span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-poppins font-bold mb-3 text-gray-900 leading-tight">
                      {currentProject.title}
                    </h3>

                    <p className="text-gray-600 font-medium mb-6">{currentProject.client}</p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
                      {currentProject.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Awards */}
                    {currentProject.awards && (
                      <div className="mb-8">
                        <h4 className="text-gray-900 font-semibold mb-3 text-sm tracking-wide uppercase">
                          Recognition
                        </h4>
                        <div className="space-y-2">
                          {currentProject.awards.map((award, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <Award className="w-4 h-4 text-yellow-500" />
                              <span className="text-gray-700 font-medium">{award}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button
                      className={`group bg-gradient-to-r ${currentProject.color} hover:shadow-lg hover:shadow-current/25 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300`}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-16">
            <motion.button
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-14 h-14 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-16">
            <motion.button
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-14 h-14 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-28 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-lg ${
                index === currentIndex
                  ? "border-blue-500 shadow-blue-500/25 ring-4 ring-blue-500/20"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image src={project.thumbnail || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                  {project.title}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center">
          <div className="flex space-x-3">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-blue-500 to-purple-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
