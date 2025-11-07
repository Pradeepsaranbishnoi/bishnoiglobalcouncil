"use client"

import { ArrowRight, Zap, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PremiumCTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Main CTA */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-95"></div>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Ready to <span className="text-yellow-200">Transform</span> Your Future?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                Join thousands of Bishnoi community members who are already connecting, growing, and succeeding together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto rounded-full gap-2 group">
                  Get Started Free <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Community Support", desc: "Access to 50,000+ active members" },
            { icon: Zap, title: "Fast Growth", desc: "Rapid career and business opportunities" },
            { icon: Lightbulb, title: "Innovation Hub", desc: "Collaborate on groundbreaking ideas" },
          ].map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-all"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
