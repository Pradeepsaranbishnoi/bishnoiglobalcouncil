"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search, MapPin, Calendar, Users, Ticket, Clock, ArrowRight, Filter, ChevronDown, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

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
    image: "Expo",
    category: "Business",
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
    image: "Conference",
    category: "Agriculture",
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
    image: "Fair",
    category: "Culture",
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
    image: "Meetup",
    category: "Technology",
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
    image: "Workshop",
    category: "Business",
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
    image: "Festival",
    category: "Culture",
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
    image: "Program",
    category: "Education",
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
    image: "Seminar",
    category: "Environment",
  },
  {
    id: 9,
    title: "Bishnoi Global Business Summit 2026",
    type: "Summit",
    location: "Jaipur, Rajasthan",
    date: "2026-01-20",
    time: "09:00 AM - 06:00 PM",
    description: "Annual gathering of Bishnoi business leaders and entrepreneurs to discuss future trends and collaborations",
    attendees: 1200,
    price: "₹5,000",
    image: "Summit",
    category: "Business",
  },
  {
    id: 10,
    title: "Traditional Handicrafts Exhibition",
    type: "Exhibition",
    location: "Udaipur, Rajasthan",
    date: "2026-02-10",
    time: "10:00 AM - 08:00 PM",
    description: "Showcasing traditional Bishnoi handicrafts and artisanal products",
    attendees: 2500,
    price: "₹200",
    image: "Exhibition",
    category: "Culture",
  },
  {
    id: 11,
    title: "Agri-Tech Innovation Conference",
    type: "Conference",
    location: "Jodhpur, Rajasthan",
    date: "2026-03-05",
    time: "09:30 AM - 05:30 PM",
    description: "Exploring the latest agricultural technologies and sustainable farming practices",
    attendees: 800,
    price: "₹1,500",
    image: "Conference",
    category: "Agriculture",
  },
  {
    id: 12,
    title: "Bishnoi Youth Leadership Camp",
    type: "Camp",
    location: "Mount Abu, Rajasthan",
    date: "2026-04-15",
    time: "08:00 AM - 08:00 PM",
    description: "Leadership development program for young Bishnoi community members",
    attendees: 300,
    price: "₹3,500",
    image: "Camp",
    category: "Education",
  },
  {
    id: 13,
    title: "Eco-Tourism Festival",
    type: "Festival",
    location: "Jaisalmer, Rajasthan",
    date: "2026-05-01",
    time: "All Day",
    description: "Celebrating sustainable tourism and environmental conservation",
    attendees: 5000,
    price: "Free",
    image: "Festival",
    category: "Environment",
  },
]

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
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeTab, setActiveTab] = useState("upcoming")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const categories = ["All", "Business", "Agriculture", "Culture", "Technology", "Education", "Environment"]

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch =
      searchTerm === "" ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    
  const pastEvents = filteredEvents
    .filter(event => new Date(event.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -right-1/3 -top-1/3 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-primary/10 to-blue-100/20 blur-3xl"></div>
            <div className="absolute -left-1/4 -bottom-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-r from-amber-100/10 to-rose-100/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-4xl mx-auto text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {upcomingEvents.length} Upcoming Events
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Discover Amazing Events
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect, learn, and grow with our community through exciting events and gatherings.
              </p>

              {/* Search Bar */}
              <motion.div 
                className="relative max-w-2xl mx-auto mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Search events, locations, or categories..."
                    className="pl-12 pr-6 py-6 text-base border-0 shadow-lg rounded-2xl bg-white/90 backdrop-blur-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button 
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 h-10 bg-primary hover:bg-primary/90"
                    size="sm"
                  >
                    Search
                  </Button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-sm text-muted-foreground">
                  <span className="font-medium">Popular:</span>
                  {['Business', 'Culture', 'Workshop', 'Free'].map((tag) => (
                    <button 
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 rounded-full bg-white hover:bg-gray-100 text-sm transition-colors shadow-sm"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile Filters */}
              <div className="lg:hidden mb-6">
                <Button 
                  variant="outline" 
                  className="w-full justify-between"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  <span>Filters</span>
                  <Filter className="h-4 w-4 ml-2" />
                </Button>
              </div>

              {/* Sidebar - Desktop */}
              <div className={cn(
                "lg:block w-72 flex-shrink-0",
                showMobileFilters ? "block" : "hidden"
              )}>
                <div className="sticky top-24 space-y-8">
                  {/* Categories */}
                  <Card className="border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                              selectedCategory === category
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span>{category}</span>
                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                              {(() => {
                                const events = activeTab === 'upcoming' 
                                  ? upcomingEvents 
                                  : pastEvents;
                                  
                                return category === 'All' 
                                  ? events.length 
                                  : events.filter(e => e.category === category).length;
                              })()}
                            </span>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Events Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedCategory === 'All' ? 'All Events' : selectedCategory} 
                    <span className="text-gray-500 text-lg font-normal ml-2">
                      ({activeTab === 'upcoming' ? upcomingEvents.length : pastEvents.length} {activeTab === 'upcoming' ? 'upcoming' : 'past'})
                    </span>
                  </h2>
                  
                  <Tabs 
                    value={activeTab} 
                    onValueChange={setActiveTab}
                    className="hidden sm:block"
                  >
                    <TabsList>
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="past">Past Events</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Mobile Tabs */}
                <div className="sm:hidden mb-6">
                  <Tabs 
                    value={activeTab} 
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="past">Past Events</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
                  >
                    {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).length > 0 ? (
                      (activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
                        <motion.div
                          key={event.id}
                          variants={fadeInUp}
                          className="group"
                        >
                          <Link href={`/events/${event.id}`} className="block h-full">
                            <Card className="h-full overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-lg group-hover:-translate-y-1">
                              <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                  <Button variant="secondary" size="sm" className="ml-auto">
                                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                                  </Button>
                                </div>
                                <div className="text-4xl font-bold text-primary/20">{event.image}</div>
                              </div>
                              
                              <CardHeader className="pb-3">
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <div className="flex items-center gap-2 mb-2">
                                      <Badge variant="outline" className={cn(
                                        "px-2 py-0.5 text-xs font-medium",
                                        event.category === 'Business' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                        event.category === 'Culture' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                        event.category === 'Technology' ? 'bg-cyan-50 text-cyan-700 border-cyan-200' :
                                        'bg-gray-50 text-gray-700 border-gray-200'
                                      )}>
                                        {event.category}
                                      </Badge>
                                      <Badge variant="secondary" className="px-2 py-0.5 text-xs font-medium">
                                        {event.type}
                                      </Badge>
                                    </div>
                                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                                      {event.title}
                                    </CardTitle>
                                  </div>
                                  <div className="flex-shrink-0 text-right">
                                    <div className="text-sm font-medium text-primary">
                                      {event.price === 'Free' ? 'FREE' : event.price}
                                    </div>
                                  </div>
                                </div>
                              </CardHeader>
                              
                              <CardContent className="pt-0 pb-4">
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                                
                                <div className="space-y-3 text-sm">
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <span>
                                      {new Date(event.date).toLocaleDateString('en-US', { 
                                        weekday: 'short', 
                                        month: 'short', 
                                        day: 'numeric',
                                        year: 'numeric'
                                      })}
                                      {event.time && (
                                        <>
                                          <span className="mx-2">•</span>
                                          {event.time.split(' - ')[0]} - {event.time.split(' - ')[1]?.replace(' AM', '').replace(' PM', '')}
                                          {event.time.includes('PM') ? 'PM' : 'AM'}
                                        </>
                                      )}
                                    </span>
                                  </div>
                                  
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                    <span className="line-clamp-1">{event.location}</span>
                                  </div>
                                  
                                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                      <Users className="h-4 w-4" />
                                      <span>{event.attendees.toLocaleString()} attending</span>
                                    </div>
                                    <Button variant="outline" size="sm" className="h-8 text-xs">
                                      <Ticket className="h-3.5 w-3.5 mr-1.5" />
                                      Register
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-full py-12 text-center">
                        <div className="mx-auto h-24 w-24 text-muted-foreground/25 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" x2="16" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="2" y2="6" />
                            <line x1="3" x2="21" y1="10" y2="10" />
                            <path d="M8 14h.01" />
                            <path d="M12 14h.01" />
                            <path d="M16 14h.01" />
                            <path d="M8 18h.01" />
                            <path d="M12 18h.01" />
                            <path d="M16 18h.01" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No {activeTab} events found</h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                          {searchTerm || selectedCategory !== 'All' 
                            ? 'Try adjusting your search or filter criteria.' 
                            : `There are currently no ${activeTab} events. Check back later!`}
                        </p>
                        {(searchTerm || selectedCategory !== 'All') && (
                          <Button 
                            variant="outline" 
                            className="mt-4"
                            onClick={() => {
                              setSearchTerm('')
                              setSelectedCategory('All')
                            }}
                          >
                            Clear filters
                          </Button>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-r from-primary to-accent text-white py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
            <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute -left-1/4 -bottom-1/4 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              className="max-w-3xl mx-auto text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/75 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Grow Your Audience
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold">Host Your Next Event With Us</h2>
              
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Reach thousands of engaged community members and make your event a success with our platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Create an Event
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
              
              <div className="pt-8 flex items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"></div>
                    ))}
                  </div>
                  <span>5,000+ event organizers</span>
                </div>
                <div className="h-4 w-px bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                  <span>4.9/5 from 1,200+ reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
