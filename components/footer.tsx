"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black">
                BGC
              </div>
              <span className="font-black text-lg">Bishnoi Global Council</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering the Bishnoi community through global connections, opportunities, and shared growth.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/jobs" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Job Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  Business Directory
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Events & Expos
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  News & Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Mail size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@Bishnoi Global Council.com"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  hello@Bishnoi Global Council.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+91-9876543210"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  +91-9876543210
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70">India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 Bishnoi Global Council. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
