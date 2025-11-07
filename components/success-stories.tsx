"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const stories = [
  {
    quote:
      "This platform transformed my career. I found a mentor who not only guided me through challenges but became a lifelong professional connection.",
    author: "Kamlesh Bishnoi",
    role: "Software Engineer",
    company: "Fleetx",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kamlesh",
  },
  {
    quote:
      "As a senior professional, I wanted to give back. This platform made it seamless to connect with talented individuals and share my expertise with the next generation.",
    author: "Mohan Bishnoi",
    role: "Frontend Lead",
    company: "Unolo",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohan",
  },
  {
    quote:
      "The resources and genuine connections here are invaluable. It feels like having an extended professional family supporting your every step.",
    author: "Rahul Bishnoi",
    role: "Mechanical Engineer",
    company: "Tech Innovators",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
  },
]

export function SuccessStories() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground">Success Stories</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light">
            Hear from community members who have transformed their careers through Bishnoi Global Council
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="border-0 bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 italic leading-relaxed font-light text-lg">"{story.quote}"</p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-foreground">{story.author}</p>
                    <p className="text-sm text-foreground/60">
                      {story.role} • <span className="font-medium">{story.company}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
