"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Calendar, User, ArrowRight, Mail } from "lucide-react"

const mockArticles = [
  {
    id: 1,
    title: "Bishnoi Community Launches New Digital Platform",
    excerpt: "Bishnoi Global Council platform aims to connect thousands of community members globally",
    category: "Community",
    author: "Rajesh Kumar",
    date: "2025-02-10",
    readTime: "5 min read",
    featured: true,
    image: "Community",
  },
  {
    id: 2,
    title: "Sustainable Agriculture: Bishnoi Farmers Lead the Way",
    excerpt: "Traditional Bishnoi farming practices prove effective in modern sustainable agriculture",
    category: "Agriculture",
    author: "Priya Singh",
    date: "2025-02-08",
    readTime: "7 min read",
    featured: true,
    image: "Agriculture",
  },
  {
    id: 3,
    title: "Women Entrepreneurs: Breaking Barriers in Business",
    excerpt: "Inspiring stories of Bishnoi women building successful businesses",
    category: "Business",
    author: "Neha Gupta",
    date: "2025-02-05",
    readTime: "6 min read",
    featured: false,
    image: "Business",
  },
  {
    id: 4,
    title: "Tech Innovation: How Young Bishnoi Professionals Are Changing the Industry",
    excerpt: "Meet the tech leaders from the Bishnoi community making global impact",
    category: "Technology",
    author: "Vikram Patel",
    date: "2025-02-03",
    readTime: "8 min read",
    featured: false,
    image: "Technology",
  },
  {
    id: 5,
    title: "Preserving Heritage: Traditional Bishnoi Crafts in Modern Times",
    excerpt: "How artisans are keeping traditional crafts alive while adapting to modern markets",
    category: "Culture",
    author: "Arun Sharma",
    date: "2025-02-01",
    readTime: "6 min read",
    featured: false,
    image: "Culture",
  },
  {
    id: 6,
    title: "Environmental Conservation: Bishnoi Values in Action",
    excerpt: "Community initiatives focused on environmental protection and sustainability",
    category: "Environment",
    author: "Meera Verma",
    date: "2025-01-30",
    readTime: "7 min read",
    featured: false,
    image: "Environment",
  },
  {
    id: 7,
    title: "Education & Skill Development: Investing in Our Youth",
    excerpt: "New programs launched to provide quality education and skill training",
    category: "Education",
    author: "Harish Singh",
    date: "2025-01-28",
    readTime: "5 min read",
    featured: false,
    image: "Education",
  },
  {
    id: 8,
    title: "Global Bishnoi Network: Connecting Communities Worldwide",
    excerpt: "How the diaspora is strengthening bonds with the homeland",
    category: "Community",
    author: "Anjali Patel",
    date: "2025-01-25",
    readTime: "6 min read",
    featured: false,
    image: "Global",
  },
]

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(false)

  const categories = [
    { name: "All", count: mockArticles.length },
    { name: "Community", count: mockArticles.filter(a => a.category === "Community").length },
    { name: "Agriculture", count: mockArticles.filter(a => a.category === "Agriculture").length },
    { name: "Business", count: mockArticles.filter(a => a.category === "Business").length },
    { name: "Technology", count: mockArticles.filter(a => a.category === "Technology").length },
    { name: "Culture", count: mockArticles.filter(a => a.category === "Culture").length },
    { name: "Environment", count: mockArticles.filter(a => a.category === "Environment").length },
    { name: "Education", count: mockArticles.filter(a => a.category === "Education").length },
  ]

  const filteredArticles = mockArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = filteredArticles.filter((a) => a.featured)
  const regularArticles = filteredArticles.filter((a) => !a.featured)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -right-1/3 -top-1/3 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-primary/10 to-blue-100/20 blur-3xl"></div>
            <div className="absolute -left-1/4 -bottom-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-r from-amber-100/10 to-rose-100/10 blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Latest News & Updates
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bishnoi News & Stories
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the latest happenings, success stories, and insights from the Bishnoi community worldwide.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mt-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Search articles, authors, or topics..."
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
                  {['Community', 'Business', 'Education', 'Technology'].map((tag) => (
                    <button 
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 rounded-full bg-white hover:bg-gray-100 text-sm transition-colors shadow-sm"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-12 sm:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent -z-10" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Featured Stories</h2>
                  <p className="text-muted-foreground mt-1">Handpicked stories from our community</p>
                </div>
                <Button variant="ghost" className="text-primary hover:bg-primary/5">
                  View all featured
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {featuredArticles.map((article) => (
                  <Link key={article.id} href={`/news/${article.id}`} className="group">
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                      <div className="relative">
                        <div className="bg-gradient-to-br from-primary/10 to-emerald-100 dark:from-primary/20 dark:to-emerald-900/30 h-48 flex items-center justify-center">
                          <div className="text-5xl font-bold text-primary/20 dark:text-primary/30">
                            {article.image.charAt(0)}
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary backdrop-blur-sm">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <CardHeader className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1.5" />
                            {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </span>
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                              <User className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-medium text-foreground">{article.author}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/5">
                            Read more
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                    <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`w-full flex items-center justify-between text-left px-4 py-2.5 rounded-lg transition-all ${
                            selectedCategory === category.name
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-foreground/80 hover:bg-muted/50"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5">
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                    <h3 className="font-semibold text-foreground mb-3">Subscribe</h3>
                    <p className="text-sm text-muted-foreground mb-3">Get the latest news delivered to your inbox</p>
                    <div className="space-y-3">
                      <Input 
                        placeholder="Your email" 
                        className="bg-background"
                      />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Latest Stories</h2>
                    <p className="text-muted-foreground text-sm">
                      {regularArticles.length} {regularArticles.length === 1 ? 'article' : 'articles'} found
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="h-9">
                      <Calendar className="h-4 w-4 mr-2" />
                      Latest
                    </Button>
                    <Button variant="outline" size="sm" className="h-9">
                      <span>Most Viewed</span>
                    </Button>
                  </div>
                </div>

                {regularArticles.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2">
                    {regularArticles.map((article) => (
                      <Link key={article.id} href={`/news/${article.id}`} className="group">
                        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md border-border/50 bg-card/50">
                          <div className="relative h-40 bg-gradient-to-br from-primary/5 to-muted/30">
                            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20">
                              {article.image.charAt(0)}
                            </div>
                            <div className="absolute bottom-3 left-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary backdrop-blur-sm">
                                {article.category}
                              </span>
                            </div>
                          </div>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                              {article.title}
                            </CardTitle>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              <span className="mx-1.5">•</span>
                              <span>{article.readTime}</span>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{article.excerpt}</p>
                            <div className="flex items-center justify-between pt-2 border-t border-border/30">
                              <div className="flex items-center">
                                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                                  <User className="h-3 w-3" />
                                </div>
                                <span className="text-sm text-foreground/80">{article.author}</span>
                              </div>
                              <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-primary">
                                Read
                                <ArrowRight className="ml-1 h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Card className="border-dashed border-2 border-border/50 bg-transparent">
                    <CardContent className="py-16 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted mb-4">
                        <Search className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-1">No articles found</h3>
                      <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                        We couldn't find any articles matching your search. Try adjusting your filters.
                      </p>
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
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-primary/90 to-emerald-700 text-primary-foreground">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '60px 60px',
              opacity: 0.4
            }} />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest news, success stories, and community updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary/70" />
                  <Input
                    placeholder="Your email address"
                    className="pl-12 py-6 text-base border-2 border-white/20 bg-white/10 backdrop-blur-sm placeholder:text-white/70 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent text-white"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-200 py-6 px-6 font-medium"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm opacity-80 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
