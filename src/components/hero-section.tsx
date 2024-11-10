"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6, // Wartet bis Header-Animation fast fertig ist
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-[55vh] relative flex items-center justify-center bg-background border-b"
    >
      <div className="container mx-auto px-4 flex items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Linke Spalte mit Text */}
          <div>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Willkommen auf unserer Website
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl text-muted-foreground"
            >
              Eine moderne Website mit den neuesten Technologien
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex gap-4"
            >
              <Button size="lg">Registrieren</Button>
              <Button size="lg" variant="outline">Mehr erfahren</Button>
            </motion.div>
          </div>

          {/* Rechte Spalte mit 4 Bildern Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-4 gap-3 p-4 bg-card rounded-lg"
          >
            {/* Bilder mit individuellen Animationen */}
            <motion.div
              variants={imageVariants}
              className="col-span-2 relative aspect-[4/3] rounded-lg overflow-hidden bg-muted"
            >
              <Image src="/1.jpg" alt="Hero Sektion 1" fill className="object-cover" />
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="col-span-2 relative aspect-[4/3] rounded-lg overflow-hidden bg-muted"
            >
              <Image src="/2.jpg" alt="Hero Sektion 2" fill className="object-cover" />
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="relative aspect-[3/3] rounded-lg overflow-hidden bg-muted"
            >
              <Image src="/3.jpg" alt="Hero Sektion 3" fill className="object-cover" />
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="col-span-3 relative aspect-[3/2] rounded-lg overflow-hidden bg-muted"
            >
              <Image src="/4.jpg" alt="Hero Sektion 4" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 