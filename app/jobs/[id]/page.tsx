"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"

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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
} as const;
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { 
  ArrowLeft, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Clock, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  ExternalLink, 
  Users, 
  FileText, 
  Send, 
  Bookmark, 
  Share2, 
  ArrowUpRight, 
  ChevronRight, 
  Star, 
  Check, 
  Globe, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  MapPin as MapPinIcon,
  ChevronDown,
  ChevronUp,
  User
} from "lucide-react"

const mockJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp India",
    location: "Bangalore, India",
    salary: "₹15-20 LPA",
    type: "Full-time",
    category: "Technology",
    description: "Looking for experienced software engineers to join our growing team.",
    posted: "2 days ago",
    fullDescription: `We are looking for a Senior Software Engineer to join our innovative team at TechCorp India. You will work on cutting-edge technologies and contribute to products used by millions.

Key Responsibilities:
- Design and develop scalable software solutions
- Collaborate with cross-functional teams
- Mentor junior developers
- Participate in code reviews and architecture discussions
- Contribute to technical documentation

Requirements:
- 5+ years of software development experience
- Strong proficiency in Java, Python, or Go
- Experience with cloud platforms (AWS, GCP, Azure)
- Excellent problem-solving skills
- Strong communication abilities`,
    requirements: [
      "5+ years of software development experience",
      "Strong proficiency in Java, Python, or Go",
      "Experience with cloud platforms",
      "Excellent problem-solving skills",
      "Strong communication abilities",
    ],
    benefits: ["Health Insurance", "Stock Options", "Remote Work", "Professional Development", "Flexible Hours"],
  },
  {
    id: 2,
    title: "Business Development Manager",
    company: "Global Trade Solutions",
    location: "Delhi, India",
    salary: "₹12-18 LPA",
    type: "Full-time",
    category: "Business",
    description: "Expand our business network and drive growth in emerging markets.",
    posted: "1 week ago",
    fullDescription: `Join Global Trade Solutions as a Business Development Manager and help us expand our presence in emerging markets.

Key Responsibilities:
- Identify and develop new business opportunities
- Build and maintain relationships with key clients
- Develop business strategies and proposals
- Manage sales pipeline and forecasting
- Represent the company at industry events

Requirements:
- 3+ years of business development experience
- Strong negotiation skills
- Excellent communication abilities
- Knowledge of international trade
- Proven track record of closing deals`,
    requirements: [
      "3+ years of business development experience",
      "Strong negotiation skills",
      "Knowledge of international trade",
      "Proven track record of closing deals",
    ],
    benefits: ["Performance Bonus", "Travel Allowance", "Health Insurance", "Career Growth"],
  },
  {
    id: 3,
    title: "Marketing Specialist",
    company: "Digital Ventures",
    location: "Mumbai, India",
    salary: "₹8-12 LPA",
    type: "Full-time",
    category: "Marketing",
    description: "Create and execute marketing strategies for our digital products.",
    posted: "3 days ago",
    fullDescription: `Digital Ventures is seeking a talented Marketing Specialist to drive our brand growth and customer acquisition.

Key Responsibilities:
- Develop and execute marketing campaigns
- Manage social media presence
- Create engaging content
- Analyze marketing metrics and ROI
- Collaborate with product and sales teams

Requirements:
- 2+ years of marketing experience
- Strong digital marketing knowledge
- Proficiency in marketing tools and analytics
- Creative thinking and problem-solving
- Excellent written and verbal communication`,
    requirements: [
      "2+ years of marketing experience",
      "Strong digital marketing knowledge",
      "Proficiency in marketing tools",
      "Creative thinking",
      "Excellent communication",
    ],
    benefits: ["Creative Freedom", "Learning Budget", "Flexible Schedule", "Team Outings"],
  },
  {
    id: 4,
    title: "Financial Analyst",
    company: "Investment Partners",
    location: "Jaipur, India",
    salary: "₹10-15 LPA",
    type: "Full-time",
    category: "Finance",
    description: "Analyze financial data and provide insights for investment decisions.",
    posted: "5 days ago",
    fullDescription: `Investment Partners is looking for a Financial Analyst to support our investment decision-making process.

Key Responsibilities:
- Analyze financial statements and market data
- Prepare investment reports and recommendations
- Monitor portfolio performance
- Conduct financial modeling
- Present findings to senior management

Requirements:
- Bachelor's degree in Finance or related field
- 2+ years of financial analysis experience
- Proficiency in Excel and financial modeling
- Strong analytical skills
- Knowledge of financial markets`,
    requirements: [
      "Bachelor's degree in Finance",
      "2+ years of financial analysis experience",
      "Proficiency in Excel",
      "Strong analytical skills",
      "Knowledge of financial markets",
    ],
    benefits: ["Performance Bonus", "Health Insurance", "Professional Certifications", "Career Development"],
  },
  {
    id: 5,
    title: "Project Manager",
    company: "Construction & Development",
    location: "Rajasthan, India",
    salary: "₹11-16 LPA",
    type: "Full-time",
    category: "Management",
    description: "Lead and manage large-scale construction projects.",
    posted: "1 week ago",
    fullDescription: `Construction & Development seeks an experienced Project Manager to oversee large-scale construction projects.

Key Responsibilities:
- Plan and execute construction projects
- Manage budgets and timelines
- Coordinate with contractors and stakeholders
- Ensure quality and safety standards
- Report project progress to senior management

Requirements:
- 5+ years of project management experience
- Knowledge of construction industry
- Strong leadership and communication skills
- Proficiency in project management tools
- Problem-solving abilities`,
    requirements: [
      "5+ years of project management experience",
      "Knowledge of construction industry",
      "Strong leadership skills",
      "Proficiency in project management tools",
      "Problem-solving abilities",
    ],
    benefits: ["Performance Bonus", "Health Insurance", "Site Allowance", "Professional Development"],
  },
  {
    id: 6,
    title: "Agricultural Consultant",
    company: "Green Future Farms",
    location: "Rajasthan, India",
    salary: "₹9-13 LPA",
    type: "Full-time",
    category: "Agriculture",
    description: "Provide expert guidance on sustainable farming practices.",
    posted: "4 days ago",
    fullDescription: `Green Future Farms is seeking an Agricultural Consultant to promote sustainable farming practices.

Key Responsibilities:
- Provide technical guidance to farmers
- Conduct soil and crop analysis
- Develop sustainable farming strategies
- Conduct training and workshops
- Monitor and report on farm performance

Requirements:
- Bachelor's degree in Agriculture or related field
- 3+ years of agricultural experience
- Knowledge of sustainable farming practices
- Strong communication skills
- Passion for environmental conservation`,
    requirements: [
      "Bachelor's degree in Agriculture",
      "3+ years of agricultural experience",
      "Knowledge of sustainable farming",
      "Strong communication skills",
      "Passion for conservation",
    ],
    benefits: ["Field Allowance", "Health Insurance", "Training Programs", "Community Impact"],
  },
]

const JobDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [isSaved, setIsSaved] = useState(false)
  const [job, setJob] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("description")
  const [showFullDescription, setShowFullDescription] = useState(false)

  useEffect(() => {
    // Simulate API fetch
    const jobData = mockJobs.find(job => job.id === Number(params.id))
    if (jobData) {
      setJob(jobData)
      setIsLoading(false)
    } else {
      router.push('/jobs')
    }
  }, [params.id, router])

  const handleSaveJob = () => {
    setIsSaved(!isSaved)
    // In a real app, you would make an API call here
  }

  if (isLoading || !job) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <main className="flex-1">
          {/* Loading Skeleton */}
          <div className="bg-gradient-to-r from-primary/5 via-white to-accent/5 border-b py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="h-12 w-48 bg-gray-200 rounded-full mb-8"></div>
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gray-200 animate-pulse"></div>
                        <div className="space-y-2">
                          <div className="h-6 w-48 bg-gray-200 rounded"></div>
                          <div className="h-4 w-32 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-8 w-24 bg-gray-200 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <div className="h-12 w-32 bg-gray-200 rounded-lg"></div>
                      <div className="h-12 w-32 bg-gray-200 rounded-lg"></div>
                      <div className="h-12 w-32 bg-primary/10 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-8">
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 bg-gray-100 rounded w-full"></div>
                    ))}
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
                  <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gray-100 rounded-lg"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-4 bg-gray-100 rounded w-24"></div>
                          <div className="h-4 bg-gray-100 rounded w-32"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Glass Morphism */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 border-b">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative z-10 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="max-w-6xl mx-auto"
              >
                <Button 
                  variant="ghost" 
                  onClick={() => router.back()} 
                  className="mb-8 group hover:bg-white/50 backdrop-blur-sm transition-all duration-300 px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 text-primary group-hover:-translate-x-0.5 transition-transform" />
                  Back to all jobs
                </Button>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/50">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-white shadow-sm">
                        <Building2 className="w-10 h-10 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{job.title}</h1>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-lg text-gray-600">{job.company}</p>
                              <span className="text-gray-400">•</span>
                              <Badge variant="outline" className="rounded-full border-primary/20 text-primary bg-primary/5">
                                {job.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="rounded-full h-10 w-10 p-0 group hover:bg-primary/5"
                              onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                toast({
                                  title: "Link copied to clipboard!",
                                  description: "Share this job with others",
                                });
                              }}
                            >
                              <Share2 className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                            </Button>
                            <Button 
                              variant={isSaved ? "default" : "outline"}
                              size="sm" 
                              className="rounded-full h-10 px-4 gap-2 group transition-all"
                              onClick={handleSaveJob}
                            >
                              <Bookmark className={cn(
                                "w-4 h-4 transition-all",
                                isSaved ? "fill-white" : "text-gray-500 group-hover:text-primary"
                              )} />
                              {isSaved ? 'Saved' : 'Save'}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex flex-wrap gap-2">
                          <Badge variant="outline" className="rounded-full px-4 py-1.5 bg-white/50 backdrop-blur-sm border-gray-200">
                            <Briefcase className="w-4 h-4 mr-1.5 text-emerald-500" />
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="rounded-full px-4 py-1.5 bg-white/50 backdrop-blur-sm border-gray-200">
                            <MapPin className="w-4 h-4 mr-1.5 text-primary" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="rounded-full px-4 py-1.5 bg-white/50 backdrop-blur-sm border-gray-200">
                            <DollarSign className="w-4 h-4 mr-1.5 text-amber-500" />
                            {job.salary}
                          </Badge>
                          <Badge variant="outline" className="rounded-full px-4 py-1.5 bg-white/50 backdrop-blur-sm border-gray-200">
                            <Clock className="w-4 h-4 mr-1.5 text-purple-500" />
                            Posted {job.posted}
                          </Badge>
                        </div>
                        
                        <div className="mt-6">
                          <Button 
                            size="lg" 
                            className="rounded-full px-8 h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
                            asChild
                          >
                            <a href="#apply">
                              Apply Now
                              <ArrowUpRight className="w-5 h-5 ml-2" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Job Details Tabs */}
              <motion.div variants={fadeInUp}>
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1.5 rounded-xl h-auto">
                    <TabsTrigger 
                      value="description" 
                      className="py-2.5 px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary"
                      onClick={() => setActiveTab("description")}
                    >
                      Description
                    </TabsTrigger>
                    <TabsTrigger 
                      value="requirements" 
                      className="py-2.5 px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary"
                      onClick={() => setActiveTab("requirements")}
                    >
                      Requirements
                    </TabsTrigger>
                    <TabsTrigger 
                      value="benefits" 
                      className="py-2.5 px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary"
                      onClick={() => setActiveTab("benefits")}
                    >
                      Benefits
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-6">
                    <Card className="border-none shadow-sm overflow-hidden">
                      <CardHeader className="bg-gray-50 border-b">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-semibold flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" />
                            Job Description
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="prose max-w-none text-gray-700">
                          {job.fullDescription.split('\n\n').map((paragraph: string, i: number) => (
                            <p key={i} className="mb-4 leading-relaxed text-gray-700">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="requirements" className="mt-6">
                    <Card className="border-none shadow-sm overflow-hidden">
                      <CardHeader className="bg-gray-50 border-b">
                        <CardTitle className="text-xl font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          Requirements & Skills
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-3">Key Responsibilities</h3>
                            <ul className="space-y-3">
                              {job.requirements.slice(0, 4).map((req: string, i: number) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{req}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="pt-4">
                            <h3 className="font-medium text-gray-900 mb-3">Required Skills</h3>
                            <div className="flex flex-wrap gap-2">
                              {['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker'].map((skill, i) => (
                                <Badge 
                                  key={i} 
                                  variant="outline" 
                                  className="px-3 py-1.5 rounded-full bg-white border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="benefits" className="mt-6">
                    <Card className="border-none shadow-sm overflow-hidden">
                      <CardHeader className="bg-gray-50 border-b">
                        <CardTitle className="text-xl font-semibold flex items-center gap-2">
                          <Users className="w-5 h-5 text-amber-500" />
                          Benefits & Perks
                        </CardTitle>
                        <CardDescription>
                          We offer a comprehensive benefits package to support our team members.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {job.benefits.map((benefit: string, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-primary/20 transition-colors group"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                                <CheckCircle2 className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{benefit}</h4>
                                <p className="text-sm text-gray-500 mt-1">Comprehensive coverage for all employees</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>

              {/* Company Culture */}
              <motion.div variants={fadeInUp}>
                <Card className="border-none shadow-sm overflow-hidden">
                  <CardHeader className="bg-gray-50 border-b">
                    <CardTitle className="text-xl font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      Our Culture
                    </CardTitle>
                    <CardDescription>
                      What it's like to work at {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-3">
                          <Users className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-gray-900">Collaborative Environment</h4>
                        <p className="text-sm text-gray-600">Work with talented individuals in a supportive team setting.</p>
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500 mb-3">
                          <Globe className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-gray-900">Flexible Work</h4>
                        <p className="text-sm text-gray-600">Remote and hybrid work options available.</p>
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 mb-3">
                          <Star className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-gray-900">Growth Opportunities</h4>
                        <p className="text-sm text-gray-600">Continuous learning and career development.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Application Form */}
              <motion.div variants={fadeInUp} id="apply">
                <Card className="border-none shadow-sm overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardHeader className="border-b border-white/20">
                    <CardTitle className="text-2xl font-bold">
                      Apply for this position
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below to submit your application.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <Input 
                              id="name" 
                              placeholder="John Doe" 
                              className="bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary/20 pl-10 h-11 rounded-lg"
                              required
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="john@example.com" 
                              className="bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary/20 pl-10 h-11 rounded-lg"
                              required
                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                          <div className="relative">
                            <Input 
                              id="phone" 
                              type="tel" 
                              placeholder="+91 98765 43210" 
                              className="bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary/20 pl-10 h-11 rounded-lg"
                            />
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="resume" className="text-sm font-medium text-gray-700">Resume/CV <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <Input 
                              id="resume" 
                              type="file" 
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              required
                            />
                            <div className="flex items-center justify-between px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-primary transition-colors">
                              <span className="text-sm text-gray-500 truncate">Choose file</span>
                              <Button type="button" variant="outline" size="sm" className="h-8 rounded-md">
                                Browse
                              </Button>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="cover-letter" className="text-sm font-medium text-gray-700">Cover Letter (Optional)</label>
                        <textarea 
                          id="cover-letter" 
                          rows={5} 
                          className="flex w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Tell us why you're the perfect fit for this role..."
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="privacy-policy" 
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          required
                        />
                        <label htmlFor="privacy-policy" className="ml-2 text-sm text-gray-600">
                          I agree to the <a href="#" className="text-primary hover:underline">privacy policy</a> and consent to my data being processed.
                        </label>
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full md:w-auto px-8 h-12 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Job Summary */}
              <motion.div variants={fadeInUp}>
                <Card className="border-none shadow-sm overflow-hidden">
                  <CardHeader className="bg-gray-50 border-b">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Job Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg text-gray-500">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Job Type</p>
                          <p className="font-medium text-gray-900">{job.type}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg text-gray-500">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium text-gray-900">{job.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg text-amber-500">
                          <DollarSign className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Salary</p>
                          <p className="font-medium text-gray-900">{job.salary}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg text-purple-500">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Posted</p>
                          <p className="font-medium text-gray-900">{job.posted}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Company Info */}
              <motion.div variants={fadeInUp}>
                <Card className="border-none shadow-sm overflow-hidden">
                  <CardHeader className="bg-gray-50 border-b">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      About {job.company}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <Building2 className="w-16 h-16 text-gray-300" />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {job.company} is a leading company in the {job.category.toLowerCase()} industry, 
                          dedicated to providing exceptional services and innovative solutions.
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-500">Company Size</h4>
                          <p className="text-gray-700">51-200 employees</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-500">Industry</h4>
                          <p className="text-gray-700">{job.category}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-500">Website</h4>
                          <a href="#" className="text-primary hover:underline flex items-center gap-1">
                            www.{job.company.toLowerCase().replace(/\s+/g, '')}.com
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-3">Follow Us</h4>
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                            <Linkedin className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                            <Twitter className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                            <Facebook className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                            <Instagram className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Similar Jobs */}
              <motion.div variants={fadeInUp}>
                <Card className="border-none shadow-sm overflow-hidden">
                  <CardHeader className="bg-gray-50 border-b">
                    <CardTitle className="text-lg font-semibold">
                      Similar Jobs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        {
                          id: 2,
                          title: "Wildlife Conservation Officer",
                          company: "Green Earth Foundation",
                          location: "Rajasthan, India",
                          salary: "₹25,000 - ₹35,000/month",
                          type: "Full-time",
                          posted: "3 days ago",
                          category: "Conservation"
                        },
                        {
                          id: 3,
                          title: "Environmental Educator",
                          company: "Eco Awareness Society",
                          location: "Gujarat, India",
                          salary: "₹20,000 - ₹30,000/month",
                          type: "Full-time",
                          posted: "1 week ago",
                          category: "Education"
                        },
                        {
                          id: 4,
                          title: "Forest Ranger",
                          company: "Wildlife Protection Agency",
                          location: "Madhya Pradesh, India",
                          salary: "₹30,000 - ₹40,000/month",
                          type: "Full-time",
                          posted: "5 days ago",
                          category: "Conservation"
                        }
                      ].map((job) => (
                        <div key={job.id} className="p-4 border border-gray-100 rounded-lg hover:border-primary/20 transition-colors group">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                              <Briefcase className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                                {job.title}
                              </h4>
                              <p className="text-sm text-gray-500">{job.company}</p>
                              <div className="mt-2 flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {job.type}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {job.location}
                                </Badge>
                              </div>
                              <div className="mt-2 flex items-center justify-between">
                                <span className="text-sm text-gray-600">{job.salary}</span>
                                <span className="text-xs text-gray-500">Posted {job.posted}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 text-center">
                        <Link href="/jobs" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                          View all jobs
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to take the next step in your career?
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join our team of talented professionals and work on exciting projects that make a difference.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button 
                  size="lg" 
                  className="rounded-full px-8 h-12 bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  asChild
                >
                  <Link href="/jobs">
                    Browse All Jobs
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 h-12 border-white/20 text-white hover:bg-white/10 hover:border-white/30"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default JobDetailPage;
