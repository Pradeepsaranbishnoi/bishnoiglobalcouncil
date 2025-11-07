"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Zap size={16} className="text-white" />
            <span className="text-sm font-semibold text-white">Ready to get started?</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Join the Bishnoi Community Today
            </h2>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
              Connect with thousands of professionals, access exclusive opportunities, and be part of a global community
              dedicated to growth and success.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-bold h-14 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold h-14 px-8 rounded-lg transition-all duration-300 bg-transparent"
            >
              Get in Touch
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-white/80 text-sm font-medium pt-4">
            No credit card required • Free forever • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
