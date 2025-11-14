"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Briefcase, DollarSign, Clock, ArrowRight, Building2, Filter, X, Bookmark, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { mockJobs, categories, jobTypes, type Job } from "@/data/jobs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<"recent" | "relevant" | "salary">("recent")
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [savedJobs, setSavedJobs] = useState<number[]>([])

  // Toggle save job
  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    )
  }

  // Toggle job type filter
  const toggleJobType = (type: string) => {
    setSelectedJobTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  // Get job count for each category
  const getJobCount = (category: string) => {
    if (category === "All") return mockJobs.length
    return mockJobs.filter(job => job.category === category).length
  }

  // Filter jobs based on search, category, and job type
  const filteredJobs = mockJobs
    .filter((job) => {
      const matchesSearch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => 
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
      
      const matchesCategory = 
        selectedCategory === "All" || 
        job.category === selectedCategory
      
      const matchesJobType = 
        selectedJobTypes.length === 0 || 
        selectedJobTypes.includes(job.type)
      
      return matchesSearch && matchesCategory && matchesJobType
    })
    .sort((a, b) => {
      if (sortBy === 'recent') {
        // Simple sort by posted string for demo
        if (a.posted < b.posted) return 1
        if (a.posted > b.posted) return -1
        return 0
      } else if (sortBy === 'salary') {
        // Extract numeric values from salary strings (e.g., "₹15-20 LPA" -> 15 and 20)
        const getSalaryValue = (salary: string) => {
          const match = salary.match(/₹(\d+)/)
          return match ? parseInt(match[1], 10) : 0
        }
        return getSalaryValue(b.salary) - getSalaryValue(a.salary)
      }
      // Default sort by relevance (matching search term)
      return 0
    })

  const JobCard = ({ job }: { job: typeof mockJobs[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <Link href={`/jobs/${job.id}`}>
        <Card className="relative overflow-hidden transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:shadow-lg group-hover:-translate-y-1 h-full">
          <CardHeader className="pb-3">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {job.title}
                  </CardTitle>
                  <button 
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      // Handle save job
                    }}
                  >
                    <Bookmark 
                      className={`w-5 h-5 ${savedJobs.includes(job.id) ? 'fill-amber-400 text-amber-400' : ''}`} 
                    />
                  </button>
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-1">{job.company}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.slice(0, 3).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs font-normal">
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{job.skills.length - 3} more
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center gap-1 ml-auto">
                <Clock className="w-4 h-4" />
                <span className="text-xs">{job.posted}</span>
              </div>
            </div>
          </CardContent>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Card>
      </Link>
    </motion.div>
  )

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
                {filteredJobs.length} Jobs Available
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Find Your Dream Job
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover exciting career opportunities with top companies in the Bishnoi community network.
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
                    placeholder="Job title, company, or keywords..."
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
                  {['Software Engineer', 'Marketing', 'Remote', 'Finance'].map((tag) => (
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
                      <CardTitle className="text-lg font-semibold">Job Categories</CardTitle>
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
                                ? mockJobs.length 
                                : mockJobs.filter(job => job.category === category).length
                              }
                            </span>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Job Types */}
                  <Card className="border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">Job Type</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {jobTypes.map((type) => (
                          <div key={type} className="flex items-center">
                            <input
                              id={`type-${type}`}
                              type="checkbox"
                              checked={selectedJobTypes.includes(type)}
                              onChange={() => toggleJobType(type)}
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor={`type-${type}`} className="ml-3 text-sm text-gray-700 cursor-pointer">
                              {type}
                            </label>
                            <span className="ml-auto text-xs text-gray-500">
                              ({mockJobs.filter(job => job.type === type).length})
                            </span>
                          </div>
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
                    {selectedCategory === 'All' ? 'All Jobs' : `${selectedCategory} Jobs`}
                    <span className="text-gray-500 text-base font-normal ml-2">({filteredJobs.length})</span>
                  </h2>
                  <div className="mt-4 sm:mt-0">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2">
                          {sortBy === 'recent' && 'Most Recent'}
                          {sortBy === 'relevant' && 'Most Relevant'}
                          {sortBy === 'salary' && 'Highest Salary'}
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[200px]">
                        <DropdownMenuRadioGroup 
                          value={sortBy} 
                          onValueChange={(value) => setSortBy(value as "recent" | "relevant" | "salary")}
                        >
                          <DropdownMenuRadioItem value="recent" className="cursor-pointer">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>Most Recent</span>
                            </div>
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="relevant" className="cursor-pointer">
                            <div className="flex items-center gap-2">
                              <Search className="h-4 w-4 text-muted-foreground" />
                              <span>Most Relevant</span>
                            </div>
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="salary" className="cursor-pointer">
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                              <span>Highest Salary</span>
                            </div>
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* All Jobs */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      All Jobs
                    </h3>
                  </div>

                  {filteredJobs.length > 0 ? (
                    <AnimatePresence>
                      <div className="grid gap-4">
                        {filteredJobs.map((job) => (
                          <JobCard key={job.id} job={job} />
                        ))}
                      </div>
                    </AnimatePresence>
                  ) : (
                    <Card className="border-dashed border-2">
                      <CardContent className="py-12 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
                          <Search className="h-6 w-6 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No jobs found</h3>
                        <p className="text-gray-500 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
                        <Button 
                          variant="outline"
                          onClick={() => {
                            setSearchTerm('')
                            setSelectedCategory('All')
                          }}
                        >
                          Clear all filters
                        </Button>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-lg mb-8 opacity-90">Sign up for job alerts and we'll notify you when new positions are posted.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white/30"
                />
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Job Alerts
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
                        ? mockJobs.length 
                        : mockJobs.filter(job => job.category === category).length
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Job Type</h4>
              <div className="space-y-3">
                {jobTypes.map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      id={`mobile-type-${type}`}
                      type="checkbox"
                      checked={selectedJobTypes.includes(type)}
                      onChange={() => toggleJobType(type)}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`mobile-type-${type}`} className="ml-3 text-sm text-gray-700">
                      {type}
                    </label>
                    <span className="ml-auto text-xs text-gray-500">
                      ({mockJobs.filter(job => job.type === type).length})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => setShowMobileFilters(false)}
              >
                Show {filteredJobs.length} Jobs
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
