"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Globe, 
  Mail, 
  Star, 
  Share2, 
  MessageSquare, 
  Calendar, 
  Users, 
  CheckCircle, 
  Clock, 
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink
} from "lucide-react"
import { cn } from "@/lib/utils"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const mockBusinesses = [
  {
    id: 1,
    name: "Rajasthan Textiles Co.",
    category: "Textiles",
    location: "Jodhpur, Rajasthan",
    phone: "+91-291-2234567",
    email: "info@rajasthan-textiles.com",
    website: "www.rajasthan-textiles.com",
    description: "Premium traditional and modern textile products",
    rating: 4.8,
    reviews: 156,
    established: 1995,
    employees: "50-100",
    fullDescription: `Rajasthan Textiles Co. is a leading textile manufacturer with over 25 years of experience in producing premium quality fabrics. We specialize in traditional Bishnoi designs combined with modern manufacturing techniques.

Our Products:
- Traditional handwoven textiles
- Modern cotton and silk blends
- Customized fabric solutions
- Eco-friendly textile products

We are committed to sustainable practices and fair trade principles. Our products are exported to over 15 countries worldwide.`,
    services: ["Custom fabric design", "Bulk orders", "Export services", "Quality assurance", "Sustainable production"],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Green Agriculture Solutions",
    category: "Agriculture",
    location: "Bikaner, Rajasthan",
    phone: "+91-151-2345678",
    email: "contact@greenag-solutions.com",
    website: "www.greenag-solutions.com",
    description: "Sustainable farming equipment and consulting",
    rating: 4.6,
    reviews: 89,
    established: 2010,
    employees: "20-50",
    fullDescription: `Green Agriculture Solutions provides comprehensive agricultural support to farmers across Rajasthan. We focus on sustainable farming practices and modern agricultural technology.

Our Services:
- Soil testing and analysis
- Crop planning and consultation
- Equipment rental and sales
- Training and workshops
- Organic certification support

We have helped over 500 farmers increase their yield by 30% through our sustainable practices.`,
    services: ["Soil analysis", "Crop consultation", "Equipment rental", "Farmer training", "Organic certification"],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Heritage Crafts Studio",
    category: "Handicrafts",
    location: "Jaisalmer, Rajasthan",
    phone: "+91-2992-252525",
    email: "studio@heritage-crafts.com",
    website: "www.heritage-crafts.com",
    description: "Handmade traditional Bishnoi crafts and art",
    rating: 4.9,
    reviews: 234,
    established: 2005,
    employees: "30-75",
    fullDescription: `Heritage Crafts Studio preserves and promotes traditional Bishnoi handicrafts. Each piece is handcrafted by skilled artisans using traditional techniques passed down through generations.

Our Collections:
- Embroidered textiles
- Wooden handicrafts
- Ceramic pottery
- Jewelry and accessories
- Home decor items

We work directly with artisan communities to ensure fair wages and sustainable livelihoods.`,
    services: ["Custom orders", "Wholesale pricing", "Artisan collaboration", "Export services", "Workshop training"],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Tech Innovations Ltd.",
    category: "Technology",
    location: "Bangalore, Karnataka",
    phone: "+91-80-4567890",
    email: "hello@techinnovations.com",
    website: "www.techinnovations.com",
    description: "Software development and IT consulting services",
    rating: 4.7,
    reviews: 312,
    established: 2008,
    employees: "100-200",
    fullDescription: `Tech Innovations Ltd. is a leading software development company providing cutting-edge IT solutions to businesses worldwide. We specialize in custom software development, cloud solutions, and digital transformation.

Our Services:
- Custom software development
- Cloud infrastructure
- Mobile app development
- AI and machine learning solutions
- IT consulting

We have successfully delivered 200+ projects for clients across various industries.`,
    services: ["Software development", "Cloud solutions", "Mobile apps", "AI solutions", "IT consulting"],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "Organic Spices Export",
    category: "Food & Beverages",
    location: "Nagpur, Maharashtra",
    phone: "+91-712-2567890",
    email: "export@organic-spices.com",
    website: "www.organic-spices.com",
    description: "Premium organic spices and food products",
    rating: 4.5,
    reviews: 178,
    established: 2012,
    employees: "50-100",
    fullDescription: `Organic Spices Export is a certified organic spice producer and exporter. We source directly from organic farms and maintain the highest quality standards.

Our Products:
- Organic turmeric
- Organic cumin
- Organic coriander
- Organic chili powder
- Spice blends

All our products are certified organic and exported to 25+ countries.`,
    services: ["Organic certification", "Bulk export", "Custom blends", "Quality testing", "Packaging solutions"],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 6,
    name: "Real Estate Ventures",
    category: "Real Estate",
    location: "Delhi, India",
    phone: "+91-11-4567890",
    email: "info@realestate-ventures.com",
    website: "www.realestate-ventures.com",
    description: "Residential and commercial property development",
    rating: 4.4,
    reviews: 145,
    established: 2000,
    employees: "75-150",
    fullDescription: `Real Estate Ventures is a premier real estate developer with 20+ years of experience. We develop residential and commercial properties with a focus on quality and sustainability.

Our Projects:
- Residential complexes
- Commercial spaces
- Mixed-use developments
- Sustainable buildings

We have completed 50+ projects across major Indian cities.`,
    services: [
      "Property development",
      "Project management",
      "Consultation",
      "Investment advisory",
      "Property management",
    ],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 7,
    name: "Education Plus Academy",
    category: "Education",
    location: "Jaipur, Rajasthan",
    phone: "+91-141-2345678",
    email: "admissions@eduplus-academy.com",
    website: "www.eduplus-academy.com",
    description: "Online and offline educational programs",
    rating: 4.8,
    reviews: 267,
    established: 2015,
    employees: "40-80",
    fullDescription: `Education Plus Academy provides comprehensive educational programs for students of all ages. We offer both online and offline courses with experienced instructors.

Our Programs:
- School preparation courses
- Professional certifications
- Skill development programs
- Language courses
- Online learning platform

We have trained over 5000 students with a 95% success rate.`,
    services: ["Online courses", "Offline classes", "Certification programs", "Corporate training", "Mentorship"],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 8,
    name: "Healthcare Services Network",
    category: "Healthcare",
    location: "Mumbai, Maharashtra",
    phone: "+91-22-4567890",
    email: "contact@healthcare-network.com",
    website: "www.healthcare-network.com",
    description: "Comprehensive healthcare and wellness services",
    rating: 4.6,
    reviews: 198,
    established: 2010,
    employees: "100-250",
    fullDescription: `Healthcare Services Network provides comprehensive healthcare solutions including medical services, wellness programs, and health insurance.

Our Services:
- Medical consultations
- Diagnostic services
- Wellness programs
- Health insurance
- Telemedicine

We serve over 50,000 patients annually across our network.`,
    services: ["Medical services", "Diagnostics", "Wellness programs", "Insurance", "Telemedicine"],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
]

const BusinessDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [business, setBusiness] = useState<any>(null)

  useEffect(() => {
    // Simulate API call
    const businessId = Number.parseInt(params.id as string)
    const businessData = mockBusinesses.find((b) => b.id === businessId)
    
    if (businessData) {
      setBusiness(businessData)
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [params.id])

  if (isLoading || !business) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="bg-gradient-to-b from-primary/5 to-white py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-6">
                  <Skeleton className="h-10 w-3/4" />
                  <Skeleton className="h-5 w-1/2" />
                  <div className="flex flex-wrap gap-4 pt-4">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-10 w-32 rounded-full" />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
              
              <div className="space-y-6">
                <Skeleton className="h-64 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!business) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center max-w-md px-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Business Not Found</h1>
            <p className="text-gray-600 mb-6">The business you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => router.push('/business')} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Directory
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        {/* Back Button */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => router.back()}
                className="text-gray-600 hover:bg-gray-100 gap-2 group"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Back to Directory
              </Button>
            </div>
          </div>
        </div>

        {/* Business Header */}
        <div className="bg-gradient-to-b from-primary/5 to-white py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex flex-col md:flex-row md:items-start gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden"
                variants={fadeInUp}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-2xl sm:text-4xl font-bold text-primary/80">
                    {business.name.charAt(0)}
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1 min-w-0"
                variants={fadeInUp}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{business.name}</h1>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {business.category}
                      </Badge>
                    </div>
                    
                    <div className="mt-2 flex items-center flex-wrap gap-x-6 gap-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1.5 flex-shrink-0" />
                        <span>{business.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-gray-400 mr-1.5 flex-shrink-0" />
                        <span>Est. {business.established}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 text-gray-400 mr-1.5 flex-shrink-0" />
                        <span>{business.employees} employees</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                    <Button size="sm" className="gap-1.5">
                      <MessageSquare className="h-4 w-4" />
                      <span>Contact</span>
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-5 w-5 ${star <= Math.floor(business.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      {business.rating}
                    </span>
                    <span className="mx-1.5 text-gray-300">•</span>
                    <a href="#reviews" className="text-sm font-medium text-primary hover:underline">
                      {business.reviews} reviews
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <Tabs 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="w-full justify-start rounded-xl p-1 h-auto bg-gray-100">
                    <TabsTrigger 
                      value="overview" 
                      className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg px-4 py-2 text-sm font-medium"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger 
                      value="openings" 
                      className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg px-4 py-2 text-sm font-medium"
                    >
                      Openings
                    </TabsTrigger>
                    <TabsTrigger 
                      value="services" 
                      className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg px-4 py-2 text-sm font-medium"
                    >
                      Services
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="border-0 shadow-sm">
                        <CardHeader>
                          <CardTitle className="text-lg font-semibold">About {business.name}</CardTitle>
                          <CardDescription className="mt-1">
                            Learn more about our business and what we offer
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="prose max-w-none text-gray-600">
                            {business.fullDescription.split('\n\n').map((paragraph: string, i: number) => (
                              <p key={i} className="mb-4 last:mb-0">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Business Highlights */}
                      <Card className="border-0 shadow-sm">
                        <CardHeader>
                          <CardTitle className="text-lg font-semibold">Business Highlights</CardTitle>
                          <CardDescription className="mt-1">
                            What makes us stand out
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4 sm:grid-cols-2">
                            {[
                              { 
                                icon: <CheckCircle className="h-5 w-5 text-green-500" />, 
                                title: 'Established in ' + business.established,
                                description: 'Years of trusted service'
                              },
                              { 
                                icon: <Users className="h-5 w-5 text-blue-500" />, 
                                title: business.employees + ' Employees',
                                description: 'Dedicated team'
                              },
                              { 
                                icon: <Star className="h-5 w-5 text-yellow-500" />, 
                                title: business.rating + ' Star Rating',
                                description: 'Based on ' + business.reviews + ' reviews'
                              },
                              { 
                                icon: <Globe className="h-5 w-5 text-purple-500" />, 
                                title: 'Global Reach',
                                description: 'Serving customers worldwide'
                              }
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 bg-white hover:shadow-sm transition-shadow">
                                <div className="flex-shrink-0 mt-0.5">
                                  {item.icon}
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                                  <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="services">
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Card className="border-0 shadow-sm">
                        <CardHeader>
                          <CardTitle className="text-lg font-semibold">Our Services</CardTitle>
                          <CardDescription className="mt-1">
                            Explore the range of services we offer
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4 sm:grid-cols-2">
                            {business.services.map((service: string, index: number) => (
                              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 bg-white hover:shadow-sm transition-shadow">
                                <div className="flex-shrink-0 mt-0.5">
                                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                                    <CheckCircle className="h-4 w-4" />
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900">{service}</h4>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Learn more about our {service.toLowerCase()} services
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="openings">
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Card className="border-0 shadow-sm">
                        <CardHeader>
                          <CardTitle className="text-lg font-semibold">Current Openings</CardTitle>
                          <CardDescription className="mt-1">
                            Explore career opportunities at {business.name}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            {/* Job Opening 1 */}
                            <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                  <h3 className="text-lg font-medium text-gray-900">Senior {business.services[0]} Specialist</h3>
                                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                                    <div className="flex items-center">
                                      <MapPin className="h-4 w-4 mr-1" />
                                      {business.location}
                                    </div>
                                    <span>•</span>
                                    <div className="flex items-center">
                                      <Clock className="h-4 w-4 mr-1" />
                                      Full-time
                                    </div>
                                    <span>•</span>
                                    <div className="flex items-center">
                                      <Calendar className="h-4 w-4 mr-1" />
                                      Posted 2 days ago
                                    </div>
                                  </div>
                                </div>
                                <Button className="whitespace-nowrap">Apply Now</Button>
                              </div>
                              <div className="mt-4">
                                <p className="text-gray-700 mb-3">
                                  We're looking for an experienced {business.services[0]} specialist to join our growing team. You'll be responsible for leading projects and working with clients to deliver exceptional results.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                                    {business.services[0]}
                                  </Badge>
                                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                                    3+ years experience
                                  </Badge>
                                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                                    Full-time
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            {/* Job Opening 2 */}
                            <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                  <h3 className="text-lg font-medium text-gray-900">Business Development Executive</h3>
                                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                                    <div className="flex items-center">
                                      <MapPin className="h-4 w-4 mr-1" />
                                      {business.location} (Hybrid)
                                    </div>
                                    <span>•</span>
                                    <div className="flex items-center">
                                      <Clock className="h-4 w-4 mr-1" />
                                      Full-time
                                    </div>
                                    <span>•</span>
                                    <div className="flex items-center">
                                      <Calendar className="h-4 w-4 mr-1" />
                                      Posted 1 week ago
                                    </div>
                                  </div>
                                </div>
                                <Button className="whitespace-nowrap">Apply Now</Button>
                              </div>
                              <div className="mt-4">
                                <p className="text-gray-700 mb-3">
                                  Join our business development team to help expand our {business.category.toLowerCase()} services. This role involves identifying new business opportunities and building strong client relationships.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                                    Business Development
                                  </Badge>
                                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                                    2+ years experience
                                  </Badge>
                                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                                    Hybrid
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            <div className="mt-8 text-center">
                              <p className="text-sm text-gray-500">
                                Don't see a role that matches your skills? 
                                <a href="#" className="font-medium text-primary hover:underline ml-1">
                                  Submit your resume
                                </a>
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <motion.div 
                  className="sticky top-6 space-y-6"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <Card className="border-0 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gray-50 border-b">
                      <CardTitle className="text-lg font-semibold">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 border border-gray-100">
                            <Phone className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Phone</p>
                            <a 
                              href={`tel:${business.phone}`} 
                              className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
                            >
                              {business.phone}
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 border border-gray-100">
                            <Mail className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Email</p>
                            <a 
                              href={`mailto:${business.email}`} 
                              className="text-base font-medium text-gray-900 hover:text-primary transition-colors break-all"
                            >
                              {business.email}
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 border border-gray-100">
                            <Globe className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Website</p>
                            <a 
                              href={`https://${business.website}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-base font-medium text-primary hover:underline inline-flex items-center gap-1.5"
                            >
                              {business.website}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 border border-gray-100">
                            <Clock className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Business Hours</p>
                            <div className="text-base font-medium text-gray-900">
                              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                              <p>Sat: 10:00 AM - 4:00 PM</p>
                              <p>Sun: Closed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-4 border-t border-gray-100">
                        <h4 className="text-sm font-medium text-gray-500 mb-3">Connect with us</h4>
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                            <Facebook className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                            <Twitter className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                            <Instagram className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gray-50 border-b">
                      <CardTitle className="text-lg font-semibold">Location</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <div className="text-center p-6">
                          <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-500">Map of {business.location}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-600 mb-4">
                          {business.name} is located in the heart of {business.location}. Visit us at our office during business hours.
                        </p>
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <MapPin className="h-4 w-4" />
                          Get Directions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BusinessDetailPage
