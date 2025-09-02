"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "How to Beat PROCRASTINATION",
    client: "Physics Wallah",
    category: "Education",
     image: "https://img.youtube.com/vi/xiAGZw8wREM/hqdefault.jpg",
     videoUrl: "https://www.youtube.com/embed/xiAGZw8wREM",
     description:
       "A groundbreaking commercial campaign that redefined TechCorp's brand identity through innovative visual storytelling.",
     duration: "2:30",
     year: "2024",
     color: "from-blue-500 to-purple-600",
     youtubeUrl: "https://www.youtube.com/embed/xiAGZw8wREM"
  },
  {
    id: 2,
    title: "Shortfrom vs Longform",
    client: "Aksher Creatives",
    category: "Education",
     image: "https://img.youtube.com/vi/LZfKX1ypjGI/hqdefault.jpg",
     videoUrl: "https://www.youtube.com/embed/LZfKX1ypjGI",
     description:
       "An ethereal music video featuring seamless transitions and atmospheric visuals that perfectly complement the electronic soundscape.",
     duration: "3:45",
     year: "2024",
     color: "from-purple-500 to-pink-600",
     youtubeUrl: "https://www.youtube.com/embed/LZfKX1ypjGI"
  },
  {
    id: 3,
    title: "Ocean Conservation",
    client: "Blue Planet",
    category: "Documentary",
    image: "https://img.youtube.com/vi/1oiNysEAyIk/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/1oiNysEAyIk",
    description:
      "A compelling documentary showcasing marine conservation efforts through powerful storytelling and breathtaking underwater cinematography.",
    duration: "45:00",
    year: "2023",
    color: "from-teal-500 to-blue-600",
    youtubeUrl: "https://www.youtube.com/embed/1oiNysEAyIk"
  },
  {
    id: 4,
    title: "Startup Journey",
    client: "InnovateLab",
    category: "Corporate",
    image: "https://img.youtube.com/vi/Ua1rvobHC4g/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Ua1rvobHC4g",
    description:
      "An inspiring corporate story highlighting innovation and growth through dynamic editing and professional motion graphics.",
    duration: "5:20",
    year: "2023",
    color: "from-orange-500 to-red-600",
    youtubeUrl: "https://www.youtube.com/embed/Ua1rvobHC4g"
  },
]

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Smooth Full-screen zoom effect
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.85, 1.1, 1.1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const borderRadius = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [24, 0, 0, 24])

  // Smooth Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const currentProject = projects[currentIndex]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    setIsAutoPlaying(false)
  }

  return (
    <motion.section ref={ref} id="work" style={{ scale, opacity }} className="py-32 bg-white relative overflow-hidden">
      {/* Smooth Background */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-conic from-purple-50/5 via-blue-50/10 to-pink-50/5 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-outfit"
          >
            Selected{" "}
            <motion.span
              className="italic bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Masterpieces
            </motion.span>
          </motion.h2>
          <motion.p
            whileInView={{ opacity: [0, 1], y: [15, 0] }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-outfit font-light leading-relaxed"
          >
            A curated showcase of projects that blend{" "}
            <span className="font-semibold italic text-gray-800">artistic vision</span> with strategic storytelling.
          </motion.p>
        </motion.div>

        {/* Main Video Player with Proper Sizing */}
        <motion.div
          style={{ borderRadius }}
          className="relative mb-8 overflow-hidden bg-black shadow-2xl w-full max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          {/* Responsive 16:9 Aspect Ratio Container */}
          <div className="relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[32rem]" style={{ aspectRatio: '16/9' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                {currentProject.youtubeUrl && isPlaying ? (
                  <iframe
                    src={currentProject.youtubeUrl + '?autoplay=1'}
                    title={currentProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full absolute inset-0"
                    style={{ border: 0 }}
                  />
                ) : (
                  <>
                    <Image
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    {currentProject.youtubeUrl && (
                      <button
                        onClick={() => {
                          setIsPlaying(true);
                          setIsAutoPlaying(false);
                        }}
                        className="absolute inset-0 flex items-center justify-center transition"
                        style={{ zIndex: 2 }}
                        aria-label="Play video"
                      >
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.85" />
                          <polygon points="32,26 32,54 56,40" fill="#FF0000" />
                        </svg>
                      </button>
                    )}
                  </>
                )}

                {/* Removed overlays and play/pause button for always-visible video */}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Smooth Navigation Controls */}
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevProject}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-200 ease-out"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextProject}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-200 ease-out"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </motion.button>
        </motion.div>

        {/* Clean Project Thumbnails */}
        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`relative flex-shrink-0 w-28 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ease-out shadow-lg ${
                index === currentIndex
                  ? "border-gray-900 shadow-2xl ring-4 ring-gray-900/10"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              {index === currentIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Smooth Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`h-2 rounded-full transition-all duration-400 ease-out ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-gray-800 to-gray-900"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2, y: -1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>

        {/* Smooth Auto-play Indicator */}
        <AnimatePresence>
          {isAutoPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-white px-4 py-2 rounded-full text-sm text-gray-600 font-outfit border border-gray-200 shadow-lg">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-4 h-4 border-2 border-gray-300 border-t-gray-700 rounded-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
