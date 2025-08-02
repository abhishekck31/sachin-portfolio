"use client"

import Link from "next/link"
import { Mail, Linkedin, Instagram, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Aesthetic Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-2xl font-bold font-outfit bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Sachin
            </span>
          </motion.div>

          {/* Navigation */}
          <div className="flex space-x-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#work", label: "Work" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05, y: -2 }}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-outfit font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Aesthetic Social Links */}
          <div className="flex space-x-4">
            {[
              { icon: Linkedin, href: "#", color: "from-blue-600 to-blue-700" },
              { icon: Instagram, href: "#", color: "from-pink-500 to-purple-600" },
              { icon: Mail, href: "#", color: "from-gray-700 to-gray-900" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <social.icon size={20} className="text-white" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Aesthetic Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm font-outfit">
            © 2024 Sachin. Crafted with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="text-red-500"
            >
              ♥
            </motion.span>{" "}
            for visual storytellers.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
