"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const navItems = [
    { name: "Startseite", href: "/" },
    { name: "Über uns", href: "/about" },
    { name: "Services", href: "/services" },
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom bezier curve für smoothere Animation
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          {/* Linke Navigation */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                custom={index}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Logo in der Mitte */}
          <motion.div 
            variants={itemVariants}
            className="text-xl font-bold"
          >
            LOGO
          </motion.div>

          {/* Rechte Buttons */}
          <div className="flex items-center gap-4">
            <motion.div variants={itemVariants}>
              <Button variant="ghost" size="sm">
                Anmelden
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button size="sm">
                Registrieren
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
} 