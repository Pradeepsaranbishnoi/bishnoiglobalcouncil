import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Users, Target, Globe, HeartHandshake } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Bishnoi Global Council",
  description: "Learn about our mission, vision, and the team behind Bishnoi Global Council",
}

export default function AboutPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Global Community",
      description: "Connecting Bishnoi community members worldwide"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Our Mission",
      description: "Empowering the Bishnoi community through collaboration and support"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Serving Bishnoi communities across the globe"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Our Values",
      description: "Unity, Integrity, and Service to the community"
    }
  ]

  const team = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/team/placeholder.jpg"
    },
    {
      name: "Jane Smith",
      role: "Community Head",
      image: "/team/placeholder.jpg"
    },
    {
      name: "Robert Johnson",
      role: "Operations Manager",
      image: "/team/placeholder.jpg"
    },
    {
      name: "Emily Davis",
      role: "Event Coordinator",
      image: "/team/placeholder.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Bishnoi Global Council</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connecting the global Bishnoi community through culture, business, and shared values.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to unite the Bishnoi community worldwide, Bishnoi Global Council has grown into a vibrant platform that connects individuals, businesses, and organizations across the globe.
                </p>
                <p>
                  Our journey began with a simple idea: to create a space where the Bishnoi community can come together to share, learn, and grow while preserving our rich cultural heritage.
                </p>
                <p>
                  Today, we are proud to serve thousands of community members through our various initiatives, events, and digital platforms.
                </p>
              </div>
              <Button className="mt-6" size="lg">
                Learn More About Our Work
              </Button>
            </div>
            <div className="relative h-80 bg-muted rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground/50">Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values and principles guide everything we do at Bishnoi Global Council
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The dedicated individuals who make Bishnoi Global Council possible
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-64 bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground/50">Photo</span>
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Become part of the growing Bishnoi Global Council community and connect with like-minded individuals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Sign Up Now
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
