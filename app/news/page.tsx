"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Calendar, User, ArrowRight } from "lucide-react"

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

  const categories = [
    "All",
    "Community",
    "Agriculture",
    "Business",
    "Technology",
    "Culture",
    "Environment",
    "Education",
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-primary">News & Stories</h1>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest news, stories, and insights from the Bishnoi community.
              </p>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search articles, authors, or topics..."
                  className="pl-12 py-6 text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-12 sm:py-16 border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-primary mb-8">Featured Stories</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {featuredArticles.map((article) => (
                  <Link key={article.id} href={`/news/${article.id}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-border overflow-hidden">
                      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-primary/30">{article.image}</div>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        </div>
                        <CardTitle className="text-primary hover:text-primary/80 transition-colors line-clamp-2">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filters and Articles */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted hover:bg-muted/80 text-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Articles List */}
              <div className="lg:col-span-3 space-y-4">
                {regularArticles.length > 0 ? (
                  regularArticles.map((article) => (
                    <Link key={article.id} href={`/news/${article.id}`}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer border-border">
                        <div className="flex flex-col sm:flex-row">
                          {/* Image */}
                          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-full sm:w-48 h-48 sm:h-auto flex items-center justify-center flex-shrink-0">
                            <div className="text-3xl font-bold text-primary/20">{article.image}</div>
                          </div>

                          {/* Content */}
                          <CardHeader className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                                {article.category}
                              </span>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {article.readTime}
                              </span>
                            </div>
                            <CardTitle className="text-primary hover:text-primary/80 transition-colors">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="text-base mt-2">{article.excerpt}</CardDescription>
                          </CardHeader>

                          {/* Meta */}
                          <div className="flex flex-col justify-between p-4 sm:p-6 border-l border-border">
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {article.author}
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {new Date(article.date).toLocaleDateString()}
                              </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-primary mt-4" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))
                ) : (
                  <Card className="border-border">
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground">No articles found matching your criteria.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary text-primary-foreground py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">Stay Updated</h2>
              <p className="text-lg opacity-90">Subscribe to our newsletter for the latest news and stories.</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-primary-foreground text-primary placeholder:text-primary/50"
                />
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
