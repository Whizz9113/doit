"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube, Mail, Hammer, ShoppingBag, Heart } from "lucide-react"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-background border-t"
    >
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hauptbereich mit Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* DIY Community */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Hammer className="w-5 h-5" /> DIY Community
            </h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Forum</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">DIY Kurse</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Projekt Galerie</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
            </ul>
          </motion.div>

          {/* Verkaufen */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" /> Verkaufen
            </h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Shop eröffnen</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Verkäufer-Dashboard</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Verkäufer-Richtlinien</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Erfolgsgeschichten</Link></li>
            </ul>
          </motion.div>

          {/* Über uns */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Heart className="w-5 h-5" /> Über uns
            </h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Unsere Geschichte</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Nachhaltigkeit</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Karriere</Link></li>
            </ul>
          </motion.div>

          {/* Kontakt */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Mail className="w-5 h-5" /> Kontakt
            </h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Hilfe & FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Kontaktformular</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link></li>
            </ul>
          </motion.div>
        </div>

        {/* Unterer Bereich mit Social Media */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 DIY Marketplace. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
} 