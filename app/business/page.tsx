"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Globe, Phone, Star, ChevronDown, ChevronRight, Building2, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
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

const mockBusinesses = [
  {
    id: 1,
    name: "Rajasthan Textiles Co.",
    category: "Textiles",
    location: "Jodhpur, Rajasthan",
    phone: "+91-291-2234567",
    website: "www.rajasthan-textiles.com",
    description: "Premium traditional and modern textile products",
    rating: 4.8,
    reviews: 156,
    established: 1995,
    employees: "50-100",
  },
  {
    id: 2,
    name: "Green Agriculture Solutions",
    category: "Agriculture",
    location: "Bikaner, Rajasthan",
    phone: "+91-151-2345678",
    website: "www.greenag-solutions.com",
    description: "Sustainable farming equipment and consulting",
    rating: 4.6,
    reviews: 89,
    established: 2010,
    employees: "20-50",
  },
  {
    id: 3,
    name: "Heritage Crafts Studio",
    category: "Handicrafts",
    location: "Jaisalmer, Rajasthan",
    phone: "+91-2992-252525",
    website: "www.heritage-crafts.com",
    description: "Handmade traditional Bishnoi crafts and art",
    rating: 4.9,
    reviews: 234,
    established: 2005,
    employees: "30-75",
  },
  {
    id: 4,
    name: "Tech Innovations Ltd.",
    category: "Technology",
    location: "Bangalore, Karnataka",
    phone: "+91-80-4567890",
    website: "www.techinnovations.com",
    description: "Software development and IT consulting services",
    rating: 4.7,
    reviews: 312,
    established: 2008,
    employees: "100-200",
  },
  {
    id: 5,
    name: "Organic Spices Export",
    category: "Food & Beverages",
    location: "Nagpur, Maharashtra",
    phone: "+91-712-2567890",
    website: "www.organic-spices.com",
    description: "Premium organic spices and food products",
    rating: 4.5,
    reviews: 178,
    established: 2012,
    employees: "50-100",
  },
  {
    id: 6,
    name: "Real Estate Ventures",
    category: "Real Estate",
    location: "Delhi, India",
    phone: "+91-11-4567890",
    website: "www.realestate-ventures.com",
    description: "Residential and commercial property development",
    rating: 4.4,
    reviews: 145,
    established: 2000,
    employees: "75-150",
  },
  {
    id: 7,
    name: "Education Plus Academy",
    category: "Education",
    location: "Jaipur, Rajasthan",
    phone: "+91-141-2345678",
    website: "www.eduplus-academy.com",
    description: "Online and offline educational programs",
    rating: 4.8,
    reviews: 267,
    established: 2015,
    employees: "40-80",
  },
  {
    id: 8,
    name: "Healthcare Services Network",
    category: "Healthcare",
    location: "Mumbai, Maharashtra",
    phone: "+91-22-4567890",
    website: "www.healthcare-network.com",
    description: "Comprehensive healthcare and wellness services",
    rating: 4.6,
    reviews: 198,
    established: 2010,
    employees: "100-250",
  },
]

export default function BusinessPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const categories = ["All", "Textiles", "Agriculture", "Handicrafts", "Technology", "Food & Beverages", "Real Estate", "Education", "Healthcare"]

  const filteredBusinesses = mockBusinesses.filter((business) => {
    const matchesSearch =
      searchTerm === "" ||
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === "All" || business.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  // Get business count for each category
  const getBusinessCount = (category: string) => {
    if (category === "All") return mockBusinesses.length
    return mockBusinesses.filter(business => business.category === category).length
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
                {filteredBusinesses.length} Businesses Listed
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Business Directory
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with thriving businesses in the Bishnoi community. Find partners, suppliers, and opportunities.
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
                    placeholder="Business name, category, or location..."
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
                  <span className="font-medium">Popular Searches:</span>
                  {['Textiles', 'Agriculture', 'Jodhpur', 'Healthcare'].map((tag) => (
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
              <div className="hidden lg:block w-72 flex-shrink-0">
                <div className="sticky top-24 space-y-8">
                  {/* Categories */}
                  <Card className="border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">Business Categories</CardTitle>
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
                              {category === 'All' 
                                ? mockBusinesses.length 
                                : mockBusinesses.filter(business => business.category === category).length
                              }
                            </span>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedCategory === 'All' ? 'All Businesses' : `${selectedCategory} Businesses`}
                    <span className="text-gray-500 text-base font-normal ml-2">({filteredBusinesses.length})</span>
                  </h2>
                </div>

                {/* Businesses Grid */}
                <div className="space-y-4">
                  {filteredBusinesses.length > 0 ? (
                    <AnimatePresence>
                      <div className="grid gap-6 md:grid-cols-2">
                        {filteredBusinesses.map((business) => (
                          <motion.div
                            key={business.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                          >
                            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                              <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3">
                                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-primary" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <CardTitle className="text-lg font-semibold text-gray-900 truncate">{business.name}</CardTitle>
                                        <div className="flex items-center mt-1">
                                          <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30">
                                            {business.category}
                                          </Badge>
                                          <div className="flex items-center ml-3 text-amber-500">
                                            <Star className="h-4 w-4 fill-current" />
                                            <span className="ml-1 text-sm font-medium text-gray-900">{business.rating}</span>
                                            <span className="ml-1 text-xs text-gray-500">({business.reviews})</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{business.description}</p>
                                
                                <div className="space-y-3 text-sm">
                                  <div className="flex items-center text-gray-600">
                                    <MapPin className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                    <span className="truncate">{business.location}</span>
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <Phone className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                    <span>{business.phone}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Globe className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                    <a 
                                      href={`https://${business.website}`} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-primary hover:underline truncate"
                                    >
                                      {business.website}
                                    </a>
                                  </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                  <div className="flex justify-between text-xs text-gray-500">
                                    <div className="flex items-center">
                                      <span className="text-gray-900 font-medium">Est. {business.established}</span>
                                    </div>
                                    <div className="flex items-center">
                                      <span className="text-gray-600">{business.employees} employees</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-6 px-1 -mx-1">
                                  <Link href={`/business/${business.id}`} className="block w-full">
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="w-full h-10 flex items-center justify-center gap-2 font-medium text-primary/90 border border-gray-200 
                                      hover:border-primary/40 hover:bg-white hover:shadow-sm hover:text-primary
                                      transition-all duration-200 ease-in-out transform hover:-translate-y-0.5
                                      group relative overflow-hidden"
                                    >
                                      <span className="relative z-10 flex items-center">
                                        View Details
                                        <ChevronRight className="ml-2 h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
                                      </span>
                                      <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                    </Button>
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </AnimatePresence>
                  ) : (
                    <Card className="border-border">
                      <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">No businesses found matching your criteria.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to list your business?</h2>
              <p className="text-lg mb-8 opacity-90">Join our business directory and connect with the Bishnoi community.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="text" 
                  placeholder="Business name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white/30"
                />
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Filters Panel */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Filters</h3>
            <button 
              onClick={() => setShowMobileFilters(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowMobileFilters(false)
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{category}</span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      {category === 'All' 
                        ? mockBusinesses.length 
                        : mockBusinesses.filter(business => business.category === category).length
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
            <Button 
              className="w-full" 
              size="lg"
              onClick={() => setShowMobileFilters(false)}
            >
              Show {filteredBusinesses.length} Businesses
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
