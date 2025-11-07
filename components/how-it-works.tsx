"use client"

import { CheckCircle2, Network, Briefcase, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Network,
    title: "Connect",
    description: "Join the global Bishnoi network and connect with like-minded community members",
    color: "from-primary to-primary/70",
  },
  {
    icon: Briefcase,
    title: "Explore",
    description: "Discover job opportunities, businesses, and growth prospects in our directory",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: CheckCircle2,
    title: "Engage",
    description: "Participate in events, workshops, and community initiatives",
    color: "from-accent to-accent/70",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Achieve your goals with support from the community and available resources",
    color: "from-primary to-accent",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-foreground/2">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Simple steps to join and thrive in the Bishnoi community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}

                <div className="h-full p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 text-5xl font-black text-primary/10">{index + 1}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground/60">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
