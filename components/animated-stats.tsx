"use client"

import { useEffect, useRef, useState } from "react"

interface StatItem {
  number: number
  suffix: string
  label: string
  description: string
}

const stats: StatItem[] = [
  { number: 50000, suffix: "+", label: "Active Members", description: "Growing Bishnoi community worldwide" },
  { number: 5000, suffix: "+", label: "Job Opportunities", description: "Career paths for all skill levels" },
  { number: 2000, suffix: "+", label: "Businesses", description: "Community enterprises connected" },
  { number: 150, suffix: "+", label: "Events Yearly", description: "Networking and learning opportunities" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const increment = target / 50
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isVisible, target])

  return (
    <span
      ref={ref}
      className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function AnimatedStats() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Growing Community{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Connecting thousands of Bishnoi members globally through opportunities and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-foreground/60">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
