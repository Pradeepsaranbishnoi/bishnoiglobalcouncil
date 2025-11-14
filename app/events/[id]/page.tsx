"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import Link from "next/link"
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Ticket, 
  Share2, 
  Check,
  Heart, 
  ChevronRight,
  MessageCircle,
  Mail,
  Phone,
  Globe,
  User,
  Mic2,
  Building2,
  Sparkles,
  Loader2,
  ArrowUp,
} from "lucide-react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const mockEvents = [
  {
    id: 1,
    title: "Bishnoi Community Expo 2025",
    type: "Expo",
    location: "Jodhpur, Rajasthan",
    date: "2025-03-15",
    time: "09:00 AM - 06:00 PM",
    description: "Annual community expo showcasing businesses, culture, and opportunities",
    attendees: 5000,
    price: "Free",
    fullDescription: `The Bishnoi Community Expo 2025 is the largest annual gathering of the Bishnoi community. This three-day event brings together entrepreneurs, professionals, students, and community leaders.

Event Highlights:
- 200+ business exhibitors
- Networking sessions
- Cultural performances
- Educational workshops
- Job fair
- Business pitch competition
- Community awards ceremony

This is the perfect opportunity to connect with community members, explore business opportunities, and celebrate our shared heritage.`,
    schedule: [
      { time: "09:00 AM", activity: "Registration & Welcome" },
      { time: "10:00 AM", activity: "Opening Ceremony" },
      { time: "11:00 AM", activity: "Business Exhibitions Begin" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM", activity: "Networking Sessions" },
      { time: "04:00 PM", activity: "Cultural Performances" },
      { time: "06:00 PM", activity: "Closing Ceremony" },
    ],
    speakers: [
      "Dr. Rajesh Kumar - Business Leader",
      "Ms. Priya Singh - Social Entrepreneur",
      "Mr. Vikram Patel - Tech Innovator",
    ],
    sponsors: ["TechCorp India", "Green Future Farms", "Heritage Crafts Studio"],
  },
  {
    id: 2,
    title: "Agricultural Innovation Summit",
    type: "Conference",
    location: "Bikaner, Rajasthan",
    date: "2025-02-20",
    time: "10:00 AM - 05:00 PM",
    description: "Discuss sustainable farming practices and modern agricultural technology",
    attendees: 800,
    price: "₹500",
    fullDescription: `The Agricultural Innovation Summit brings together farmers, agricultural experts, and technology providers to discuss sustainable farming practices.

Key Topics:
- Sustainable farming techniques
- Modern agricultural technology
- Water conservation methods
- Organic farming practices
- Government schemes and subsidies
- Market access and pricing

This summit is designed to help farmers increase productivity while maintaining environmental sustainability.`,
    schedule: [
      { time: "10:00 AM", activity: "Registration" },
      { time: "10:30 AM", activity: "Keynote: Future of Agriculture" },
      { time: "11:30 AM", activity: "Panel Discussion" },
      { time: "01:00 PM", activity: "Lunch" },
      { time: "02:00 PM", activity: "Breakout Sessions" },
      { time: "04:00 PM", activity: "Networking" },
      { time: "05:00 PM", activity: "Closing Remarks" },
    ],
    speakers: [
      "Dr. Arun Sharma - Agricultural Expert",
      "Mr. Harish Verma - Farmer Leader",
      "Ms. Neha Gupta - Tech Innovator",
    ],
    sponsors: ["Green Future Farms", "Agricultural Ministry"],
  },
  {
    id: 3,
    title: "Handicrafts & Artisan Fair",
    type: "Fair",
    location: "Jaisalmer, Rajasthan",
    date: "2025-04-10",
    time: "10:00 AM - 08:00 PM",
    description: "Celebrate traditional Bishnoi crafts and support local artisans",
    attendees: 3000,
    price: "Free",
    fullDescription: `The Handicrafts & Artisan Fair celebrates the rich tradition of Bishnoi craftsmanship. This event showcases handmade products from local artisans and provides a platform for direct sales.

Featured Crafts:
- Embroidered textiles
- Wooden handicrafts
- Ceramic pottery
- Jewelry and accessories
- Home decor items

Support local artisans and take home authentic Bishnoi crafts.`,
    schedule: [
      { time: "10:00 AM", activity: "Fair Opens" },
      { time: "12:00 PM", activity: "Artisan Demonstrations" },
      { time: "02:00 PM", activity: "Lunch Break" },
      { time: "03:00 PM", activity: "Craft Workshops" },
      { time: "05:00 PM", activity: "Live Music" },
      { time: "08:00 PM", activity: "Fair Closes" },
    ],
    speakers: ["Master Craftsman Rajesh", "Artisan Collective Leaders"],
    sponsors: ["Heritage Crafts Studio", "Tourism Board"],
  },
  {
    id: 4,
    title: "Tech & Innovation Meetup",
    type: "Meetup",
    location: "Bangalore, Karnataka",
    date: "2025-02-28",
    time: "06:00 PM - 09:00 PM",
    description: "Network with tech professionals and discuss latest innovations",
    attendees: 200,
    price: "Free",
    fullDescription: `Join tech professionals from the Bishnoi community for an evening of networking and knowledge sharing.

Topics:
- Latest tech trends
- Startup opportunities
- Career development
- Innovation in tech

Perfect for professionals, entrepreneurs, and students interested in technology.`,
    schedule: [
      { time: "06:00 PM", activity: "Registration & Networking" },
      { time: "06:30 PM", activity: "Welcome Address" },
      { time: "07:00 PM", activity: "Tech Talks" },
      { time: "08:00 PM", activity: "Open Discussion" },
      { time: "09:00 PM", activity: "Informal Networking" },
    ],
    speakers: ["Tech Leaders from TechCorp India"],
    sponsors: ["TechCorp India"],
  },
  {
    id: 5,
    title: "Women Entrepreneurs Workshop",
    type: "Workshop",
    location: "Delhi, India",
    date: "2025-03-08",
    time: "09:00 AM - 04:00 PM",
    description: "Empowering women entrepreneurs with business skills and mentorship",
    attendees: 150,
    price: "₹1000",
    fullDescription: `This workshop is designed to empower women entrepreneurs with essential business skills and mentorship.

Topics Covered:
- Business planning
- Financial management
- Marketing strategies
- Leadership skills
- Networking and partnerships

Limited seats available. Early registration recommended.`,
    schedule: [
      { time: "09:00 AM", activity: "Registration & Breakfast" },
      { time: "09:30 AM", activity: "Opening Session" },
      { time: "10:00 AM", activity: "Business Planning Workshop" },
      { time: "12:00 PM", activity: "Lunch" },
      { time: "01:00 PM", activity: "Financial Management" },
      { time: "02:30 PM", activity: "Mentorship Sessions" },
      { time: "04:00 PM", activity: "Closing & Networking" },
    ],
    speakers: ["Successful Women Entrepreneurs", "Business Mentors"],
    sponsors: ["Women Entrepreneur Network"],
  },
  {
    id: 6,
    title: "Cultural Heritage Celebration",
    type: "Festival",
    location: "Rajasthan (Multiple Cities)",
    date: "2025-05-01",
    time: "All Day",
    description: "Celebrate Bishnoi culture, traditions, and community values",
    attendees: 10000,
    price: "Free",
    fullDescription: `The Cultural Heritage Celebration is a grand festival celebrating Bishnoi culture, traditions, and values across multiple cities in Rajasthan.

Activities:
- Cultural performances
- Traditional food festival
- Art exhibitions
- Community gatherings
- Educational programs
- Youth competitions

Join us in celebrating our rich heritage and community spirit.`,
    schedule: [
      { time: "08:00 AM", activity: "Opening Ceremony" },
      { time: "09:00 AM", activity: "Cultural Performances" },
      { time: "12:00 PM", activity: "Food Festival" },
      { time: "02:00 PM", activity: "Art Exhibitions" },
      { time: "04:00 PM", activity: "Youth Competitions" },
      { time: "06:00 PM", activity: "Evening Performances" },
      { time: "08:00 PM", activity: "Closing Ceremony" },
    ],
    speakers: ["Community Leaders", "Cultural Experts"],
    sponsors: ["Multiple Community Organizations"],
  },
  {
    id: 7,
    title: "Youth Leadership Program",
    type: "Program",
    location: "Jaipur, Rajasthan",
    date: "2025-03-22",
    time: "09:00 AM - 05:00 PM",
    description: "Develop leadership skills and network with young community leaders",
    attendees: 300,
    price: "₹2000",
    fullDescription: `The Youth Leadership Program is designed to develop leadership skills in young community members and create a network of future leaders.

Program Includes:
- Leadership training
- Communication skills
- Decision-making workshops
- Mentorship from experienced leaders
- Networking opportunities

Open to youth aged 18-35.`,
    schedule: [
      { time: "09:00 AM", activity: "Registration & Breakfast" },
      { time: "09:30 AM", activity: "Opening Session" },
      { time: "10:00 AM", activity: "Leadership Training" },
      { time: "12:00 PM", activity: "Lunch" },
      { time: "01:00 PM", activity: "Communication Skills" },
      { time: "02:30 PM", activity: "Mentorship Sessions" },
      { time: "04:00 PM", activity: "Networking & Closing" },
    ],
    speakers: ["Leadership Experts", "Community Leaders"],
    sponsors: ["Youth Development Organization"],
  },
  {
    id: 8,
    title: "Sustainable Living Seminar",
    type: "Seminar",
    location: "Online",
    date: "2025-02-15",
    time: "07:00 PM - 08:30 PM",
    description: "Learn about sustainable practices aligned with Bishnoi values",
    attendees: 500,
    price: "Free",
    fullDescription: `This online seminar explores sustainable living practices that align with traditional Bishnoi values of environmental conservation.

Topics:
- Sustainable agriculture
- Water conservation
- Renewable energy
- Waste management
- Community sustainability initiatives

Join from anywhere and learn from environmental experts.`,
    schedule: [
      { time: "07:00 PM", activity: "Welcome & Introduction" },
      { time: "07:10 PM", activity: "Keynote Address" },
      { time: "07:40 PM", activity: "Q&A Session" },
      { time: "08:15 PM", activity: "Resources & Closing" },
    ],
    speakers: ["Environmental Experts", "Sustainability Leaders"],
    sponsors: ["Environmental Organization"],
  },
]

// Use a consistent primary color for all events
const getEventColor = () => {
  return 'from-primary to-accent';
};

// Share data for social media
const shareEvent = (platform: string) => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const title = 'Check out this event!'
  const text = 'I found this event and thought you might be interested!'
  
  switch (platform) {
    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
      break
    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
      break
    case 'linkedin':
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
      break
    case 'copy':
      navigator.clipboard.writeText(url)
      toast.success('Link copied to clipboard!')
      break
  }
}

export default function EventDetailPage() {
  const router = useRouter()
  const params = useParams()
  const eventId = Number.parseInt(params.id as string)
  const event = mockEvents.find((e) => e.id === eventId)
  const eventColor = getEventColor()
  
  // State for saved events and loading states
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState({
    register: false,
    save: false,
    share: false
  })
  const [showBackToTop, setShowBackToTop] = useState(false)
  
  // Check if event is saved on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEvents = JSON.parse(localStorage.getItem('savedEvents') || '[]')
      setIsSaved(savedEvents.includes(eventId))
    }
    
    // Add scroll event listener for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [eventId])
  
  // Handle event registration
  const handleRegister = () => {
    setIsLoading(prev => ({ ...prev, register: true }))
    // Simulate API call
    setTimeout(() => {
      setIsLoading(prev => ({ ...prev, register: false }))
      toast.success('Successfully registered for the event!')
      // Redirect to registration page or show a modal
    }, 1000)
  }
  
  // Toggle save event
  const toggleSaveEvent = () => {
    setIsLoading(prev => ({ ...prev, save: true }))
    
    setTimeout(() => {
      const savedEvents = JSON.parse(localStorage.getItem('savedEvents') || '[]')
      let updatedEvents
      
      if (isSaved) {
        updatedEvents = savedEvents.filter((id: number) => id !== eventId)
        toast.success('Event removed from saved')
      } else {
        updatedEvents = [...new Set([...savedEvents, eventId])]
        toast.success('Event saved successfully')
      }
      
      localStorage.setItem('savedEvents', JSON.stringify(updatedEvents))
      setIsSaved(!isSaved)
      setIsLoading(prev => ({ ...prev, save: false }))
    }, 500)
  }
  
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <motion.div 
            className="text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-6xl font-bold mb-4">404</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Event Not Found</h1>
            <p className="text-muted-foreground mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <Link href="/events">
              <Button size="lg">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Button>
            </Link>
          </motion.div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary/5 to-accent/10 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
          <div className="absolute -left-1/4 -top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -right-1/4 -bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
            <Link 
              href="/events" 
              className="inline-flex items-center group text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Events
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {event.type}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-6">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span className="max-w-[200px] truncate">{event.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
                  onClick={handleRegister}
                  disabled={isLoading.register}
                >
                  {isLoading.register ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Ticket className="h-5 w-5 mr-2" />
                      Register Now
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-foreground/20 hover:bg-foreground/5 hover:border-foreground/30"
                  onClick={() => shareEvent('copy')}
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 hover:bg-foreground/5"
                  onClick={toggleSaveEvent}
                  disabled={isLoading.save}
                >
                  {isLoading.save ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : isSaved ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Heart className="h-5 w-5 text-rose-500" />
                  )}
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>{event.attendees.toLocaleString()}+ people already registered</span>
              </div>
            </div>
          </div>
          
          <div className="h-16 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    About This Event
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm sm:prose max-w-none text-muted-foreground">
                    {event.fullDescription.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Event Schedule
                  </CardTitle>
                  <CardDescription>Detailed timeline of the event</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        {item.time.split(':')[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground">{item.activity}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Speakers Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Mic2 className="h-5 w-5 text-primary" />
                    Speakers & Experts
                  </CardTitle>
                  <CardDescription>Meet our distinguished speakers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.speakers.map((speaker, index) => {
                      const [name, title] = speaker.split(' - ');
                      return (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg border hover:shadow-sm transition-all"
                        >
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <User className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-medium text-foreground truncate">{name}</h4>
                            {title && <p className="text-sm text-muted-foreground truncate">{title}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Sponsors Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Our Sponsors
                  </CardTitle>
                  <CardDescription>Organizations making this event possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {event.sponsors.map((sponsor, index) => (
                      <div 
                        key={index}
                        className="px-4 py-2 bg-muted/50 rounded-md border text-sm font-medium"
                      >
                        {sponsor}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Event Details Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date & Time</p>
                      <p className="font-medium">
                        {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                        <br />
                        {event.time}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{event.location}</p>
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm">
                        View on map <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Attendees</p>
                      <p className="font-medium">{event.attendees.toLocaleString()}+ registered</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Ticket className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="text-xl font-bold text-primary">
                        {event.price === 'Free' ? 'Free' : event.price}
                      </p>
                      {event.price !== 'Free' && (
                        <p className="text-xs text-muted-foreground mt-1">+ taxes & fees may apply</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Have Questions?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Contact the event organizer for more information.
                  </p>
                  <a href={`mailto:info@example.com?subject=Question about ${encodeURIComponent(event.title)}`} className="w-full">
                    <Button variant="outline" className="w-full justify-start mb-2">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Organizer
                    </Button>
                  </a>
                  <a href="tel:+1234567890" className="w-full">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Organizer
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Share Card */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-primary" />
                    Share This Event
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Help spread the word about this event with your network
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2 h-auto py-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                      onClick={() => shareEvent('facebook')}
                    >
                      <div className="p-1.5 rounded-md bg-blue-100 text-blue-600">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </div>
                      <span className="text-sm">Facebook</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2 h-auto py-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                      onClick={() => shareEvent('twitter')}
                    >
                      <div className="p-1.5 rounded-md bg-sky-100 text-sky-500">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </div>
                      <span className="text-sm">Twitter</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2 h-auto py-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                      onClick={() => shareEvent('linkedin')}
                    >
                      <div className="p-1.5 rounded-md bg-blue-600 text-white">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <span className="text-sm">LinkedIn</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start gap-2 h-auto py-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                      onClick={() => shareEvent('copy')}
                    >
                      <div className="p-1.5 rounded-md bg-rose-100 text-rose-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8l8 8 8-8"></path>
                        </svg>
                      </div>
                      <span className="text-sm">Copy Link</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted/50 border-t mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Don't Miss Out
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Ready to join us at {event.title}?
              </h2>
              
              <p className="text-muted-foreground mb-8">
                Secure your spot today and be part of this amazing experience with {event.attendees.toLocaleString()}+ other attendees.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Ticket className="h-5 w-5 mr-2" />
                  Register Now
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Organizer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      
      {/* Toast container */}
      <div id="toast-container"></div>
    </div>
  )
}
