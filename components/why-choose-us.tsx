"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Users, Zap, Award } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Connect with Mentors",
    description:
      "Find and connect with experienced professionals from the Bishnoi community who can guide your career journey.",
  },
  {
    icon: Award,
    title: "Knowledge Sharing",
    description: "Access resources, articles, and tutorials shared by industry experts and community members.",
  },
  {
    icon: Zap,
    title: "Community Networking",
    description: "Build meaningful relationships within the Bishnoi professional community and expand your network.",
  },
  {
    icon: CheckCircle2,
    title: "Direct Communication",
    description: "Engage in secure, one-on-one conversations with mentors and peers in your field.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-black text-foreground">Why Choose Bishnoi Global Council</h2>
              <p className="text-lg text-foreground/60 leading-relaxed font-light">
                Our platform is designed to empower Bishnoi professionals and entrepreneurs with the tools, connections,
                and resources needed to succeed.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
                      <p className="text-foreground/60 text-sm leading-relaxed font-light">{reason.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Stats Cards */}
          <div className="grid gap-4">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <div className="space-y-2">
                  <p className="text-5xl font-black text-primary">10K+</p>
                  <p className="text-foreground/70 font-medium">Active Members</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <div className="space-y-2">
                  <p className="text-5xl font-black text-accent">500+</p>
                  <p className="text-foreground/70 font-medium">Job Opportunities</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <div className="space-y-2">
                  <p className="text-5xl font-black text-secondary">200+</p>
                  <p className="text-foreground/70 font-medium">Verified Businesses</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
