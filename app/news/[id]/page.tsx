"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Heart,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  ChevronRight
} from "lucide-react"
import { format, parseISO } from "date-fns"
import { cn } from "@/lib/utils"

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
    content: `The Bishnoi community is excited to announce the launch of Bishnoi Global Council, a comprehensive digital platform designed to connect community members globally. This platform brings together job opportunities, business networking, events, and news in one unified space.

## Platform Features

Bishnoi Global Council offers several key features:

- **Job Portal**: Access career opportunities with leading companies
- **Business Directory**: Connect with thriving businesses in the community
- **Events & Expos**: Discover networking opportunities and community celebrations
- **News & Stories**: Stay updated with community news and insights
- **Community Profiles**: Build your professional network

## Impact on the Community

The launch of Bishnoi Global Council marks a significant milestone in digital transformation for the Bishnoi community. By providing a centralized platform, we aim to:

- Strengthen community bonds across geographical boundaries
- Create economic opportunities for community members
- Preserve and promote Bishnoi culture and values
- Foster collaboration and innovation

## Looking Forward

The platform is just the beginning. We have plans to expand with features like:

- User authentication and profiles
- Advanced job matching algorithms
- Business analytics and insights
- Community forums and discussions
- Mobile applications

We invite all community members to join Bishnoi Global Council and be part of this digital revolution.`,
    relatedArticles: [2, 3, 8],
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
    content: `Bishnoi farmers have long been known for their commitment to sustainable and environmentally conscious farming practices. Today, these traditional methods are gaining recognition in modern agriculture.

## Traditional Bishnoi Farming Practices

The Bishnoi community has practiced sustainable agriculture for centuries:

- **Water Conservation**: Efficient irrigation techniques and rainwater harvesting
- **Soil Health**: Crop rotation and organic farming methods
- **Biodiversity**: Protecting native plants and wildlife
- **Community Cooperation**: Shared resources and collective farming

## Modern Recognition

Recent studies have shown that traditional Bishnoi farming practices:

- Increase soil fertility and crop yield
- Reduce environmental impact
- Lower production costs
- Improve long-term sustainability

## Success Stories

Many Bishnoi farmers have successfully combined traditional practices with modern technology:

- Using drip irrigation systems
- Implementing precision agriculture
- Adopting organic certification
- Exporting premium quality products

## The Future

As the world focuses on sustainable agriculture, Bishnoi farmers are positioned to lead the way. Their centuries-old wisdom combined with modern technology creates a powerful model for sustainable food production.`,
    relatedArticles: [1, 6, 7],
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
    content: `Bishnoi women entrepreneurs are breaking barriers and building successful businesses across various sectors. Their stories inspire and demonstrate the potential within the community.

## Inspiring Stories

### Textile Business Success
Ms. Anjali Patel started a textile business with traditional designs and modern marketing. Today, her products are sold internationally.

### Agricultural Innovation
Ms. Priya Sharma introduced organic farming techniques to her village, creating employment for 50+ women.

### Tech Startup
Ms. Neha Singh founded a software company that now employs 100+ professionals.

## Challenges and Solutions

Women entrepreneurs face unique challenges:

- Access to capital
- Work-life balance
- Market access
- Skill development

However, through community support and determination, many have overcome these obstacles.

## Support Systems

The community is building support systems:

- Mentorship programs
- Microfinance initiatives
- Skill development workshops
- Networking events

## Call to Action

We encourage more women to pursue entrepreneurship. The Bishnoi community has the resources and values to support women-led businesses.`,
    relatedArticles: [1, 4, 7],
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
    content: `Young Bishnoi professionals are making significant contributions to the technology industry globally. Their innovations and leadership are reshaping the tech landscape.

## Tech Leaders

### Software Development
Bishnoi developers are working at leading tech companies like Google, Microsoft, and Amazon, contributing to cutting-edge projects.

### Startups
Several Bishnoi-founded startups are disrupting industries with innovative solutions in AI, blockchain, and cloud computing.

### Research & Development
Bishnoi researchers are contributing to advancements in machine learning, cybersecurity, and quantum computing.

## Key Contributions

- Developing scalable software solutions
- Creating innovative business models
- Mentoring the next generation
- Contributing to open-source projects

## Challenges in Tech

Despite their success, Bishnoi tech professionals face:

- Representation in leadership roles
- Access to funding for startups
- Work-life balance in demanding roles
- Maintaining cultural values in competitive environments

## Future Opportunities

The tech industry offers immense opportunities:

- Growing demand for skilled professionals
- Startup ecosystem development
- Remote work possibilities
- Global collaboration opportunities

## Conclusion

Bishnoi professionals are proving that they can compete and excel at the highest levels of the tech industry while maintaining their cultural values.`,
    relatedArticles: [1, 5, 8],
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
    content: `Traditional Bishnoi crafts represent centuries of cultural heritage. Today, artisans are finding innovative ways to preserve these crafts while adapting to modern markets.

## Traditional Crafts

### Embroidery
Intricate embroidery patterns passed down through generations continue to be created by skilled artisans.

### Woodcraft
Wooden handicrafts showcase the artistic talent and craftsmanship of Bishnoi artisans.

### Pottery
Ceramic pottery reflects the cultural identity and artistic expression of the community.

## Modern Adaptations

Artisans are successfully adapting traditional crafts:

- Using modern marketing and e-commerce
- Creating contemporary designs while maintaining tradition
- Collaborating with designers
- Exporting to international markets

## Challenges

Traditional crafts face challenges:

- Competition from mass production
- Declining interest among youth
- Limited market access
- Fair pricing for artisans

## Support Initiatives

The community is supporting craft preservation:

- Training programs for youth
- Fair trade platforms
- Government subsidies
- Cultural promotion events

## Success Stories

Many artisans have successfully built sustainable businesses while preserving traditional crafts.`,
    relatedArticles: [2, 6, 8],
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
    content: `Environmental conservation is at the core of Bishnoi values. The community continues to lead by example in protecting nature and promoting sustainability.

## Core Bishnoi Values

The Bishnoi faith emphasizes:

- Respect for all living beings
- Protection of forests and wildlife
- Water conservation
- Sustainable resource use

## Community Initiatives

### Reforestation Projects
Community members have planted millions of trees across Rajasthan.

### Wildlife Protection
Bishnoi communities actively protect endangered species and their habitats.

### Water Conservation
Traditional water harvesting techniques are being revived and modernized.

### Sustainable Farming
Organic and sustainable farming practices are promoted throughout the community.

## Impact

These initiatives have resulted in:

- Increased forest cover
- Protected wildlife populations
- Improved water availability
- Healthier ecosystems

## Global Recognition

Bishnoi environmental efforts have gained international recognition and support.

## Future Goals

The community aims to:

- Expand reforestation efforts
- Strengthen wildlife protection
- Promote renewable energy
- Lead in sustainable development

## Call to Action

We invite all community members and allies to join in environmental conservation efforts.`,
    relatedArticles: [2, 5, 7],
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
    content: `Education and skill development are crucial for the community's future. New initiatives are being launched to provide quality education and training opportunities.

## Education Programs

### School Education
Scholarships and support programs for underprivileged students.

### Higher Education
Mentorship and guidance for pursuing advanced degrees.

### Skill Development
Training programs in various trades and professions.

### Digital Literacy
Programs to bridge the digital divide in rural areas.

## Key Initiatives

- Scholarship programs
- Mentorship networks
- Online learning platforms
- Vocational training centers

## Impact

These programs have:

- Increased enrollment rates
- Improved educational outcomes
- Created employment opportunities
- Empowered youth

## Success Stories

Many students have benefited from these programs and gone on to successful careers.

## Future Plans

- Expand program reach
- Introduce new skill areas
- Strengthen industry partnerships
- Increase scholarship funding

## Conclusion

Investing in education and skill development is investing in the community's future.`,
    relatedArticles: [1, 3, 4],
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
    content: `The Bishnoi diaspora spans across the globe. Through Bishnoi Global Council and other initiatives, communities are strengthening bonds and supporting each other.

## Global Presence

Bishnoi communities exist in:

- North America
- Europe
- Middle East
- Southeast Asia
- Australia

## Connection Initiatives

### Bishnoi Global Council Platform
A digital platform connecting community members globally.

### Cultural Events
Annual celebrations and gatherings worldwide.

### Business Networks
Facilitating trade and business opportunities.

### Knowledge Sharing
Exchanging ideas and best practices.

## Benefits of Global Network

- Economic opportunities
- Cultural preservation
- Mutual support
- Collective strength

## Success Stories

Many community members have benefited from global connections:

- Business partnerships
- Career opportunities
- Cultural exchange
- Personal relationships

## Future Vision

The global Bishnoi network aims to:

- Strengthen community bonds
- Create economic opportunities
- Preserve cultural heritage
- Support community development

## Conclusion

The global Bishnoi network demonstrates the power of community and shared values.`,
    relatedArticles: [1, 5, 6],
  },
]

interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
}

const NewsDetailPage = () => {
  const router = useRouter()
  const params = useParams()
  const articleId = parseInt(params.id as string)
  const article = mockArticles.find(a => a.id === articleId)
  const [isLiked, setIsLiked] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({ name: '', content: '' })
  const relatedArticles = mockArticles.filter(a => a.id !== articleId).slice(0, 3)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="gap-2">
              <Link href="/news">
                <ArrowLeft className="h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/news/${articleId}` : ''
  const shareText = `Check out this article: ${article.title}`

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(shareUrl)
    const text = encodeURIComponent(shareText)
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      copy: url
    }

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl)
      // Show feedback that link was copied
      const copyButton = document.querySelector('[aria-label="Copy link"]')
      if (copyButton) {
        const originalHTML = copyButton.innerHTML
        copyButton.innerHTML = '<span class="text-green-600">✓ Copied!</span>'
        setTimeout(() => {
          copyButton.innerHTML = originalHTML
        }, 2000)
      }
      return
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'noopener,noreferrer')
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.name.trim() || !newComment.content.trim()) return
    
    const comment: Comment = {
      id: Date.now().toString(),
      name: newComment.name.trim(),
      content: newComment.content.trim(),
      date: new Date().toISOString()
    }
    
    setComments([...comments, comment])
    setNewComment({ name: '', content: '' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      {/* Back to News Button (Floating) */}
      <button
        onClick={() => router.back()}
        className={cn(
          "fixed left-4 top-24 z-20 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:shadow-xl",
          isScrolled ? 'translate-x-0' : '-translate-x-20',
          "border border-gray-200"
        )}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="text-sm font-medium">Back</span>
      </button>

      <main className="flex-1 pt-6 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <Badge variant="outline" className="mb-6">
              {article.category}
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback>{article.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{article.author}</p>
                  <div className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1.5" />
                    <span>{format(parseISO(article.date), 'MMMM d, yyyy')}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3.5 w-3.5 mr-1.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full gap-1.5"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart 
                    className={cn("h-4 w-4", isLiked ? "fill-red-500 text-red-500" : "")} 
                  />
                  <span>Like</span>
                </Button>
                
                <div className="relative">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full gap-1.5"
                    onClick={() => setShowShareOptions(!showShareOptions)}
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                  
                  <div 
                    className={`absolute right-0 top-full mt-2 ${showShareOptions ? 'flex' : 'hidden'} bg-white rounded-lg shadow-lg p-2 z-10 border border-gray-100`}
                  >
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="p-2 hover:bg-gray-50 rounded-md transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="h-5 w-5 text-blue-600" />
                    </button>
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="p-2 hover:bg-gray-50 rounded-md transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="h-5 w-5 text-blue-400" />
                    </button>
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="p-2 hover:bg-gray-50 rounded-md transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-blue-700" />
                    </button>
                    <button 
                      onClick={() => handleShare('copy')}
                      className="p-2 hover:bg-gray-50 rounded-md transition-colors"
                      aria-label="Copy link"
                    >
                      <Link2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-8" />
          </div>
          
          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Featured Image */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-10 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-lg">
                    <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </div>
                </div>
              </div>
              
              {/* Article Body */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {/* Introduction */}
                <div className="mb-10">
                  <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                    {article.content.split('\n\n')[0]}
                  </p>
                  
                  {/* Demo Image Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                    <div className="bg-muted/30 rounded-xl aspect-video flex items-center justify-center p-6">
                      <span className="text-muted-foreground text-center">
                        {article.category} Image 1
                      </span>
                    </div>
                    <div className="bg-muted/30 rounded-xl aspect-video flex items-center justify-center p-6">
                      <span className="text-muted-foreground text-center">
                        {article.category} Image 2
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Main Content with Proper Headings */}
                <div className="space-y-8">
                  {article.content.split('\n\n').slice(1).map((section, index) => {
                    if (section.startsWith('## ')) {
                      return (
                        <div key={index} className="pt-4">
                          <h2 className="text-2xl font-bold mb-4 text-foreground">
                            {section.replace('## ', '')}
                          </h2>
                        </div>
                      )
                    } else if (section.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                          {section.replace('### ', '')}
                        </h3>
                      )
                    } else if (section.startsWith('- ')) {
                      const items = section.split('\n').filter(Boolean)
                      return (
                        <ul key={index} className="space-y-2 pl-6">
                          {items.map((item, i) => (
                            <li key={i} className="relative pl-2 before:content-[''] before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
                              {item.replace(/^-\s*/, '')}
                            </li>
                          ))}
                        </ul>
                      )
                    } else if (section.trim()) {
                      return (
                        <p key={index} className="text-foreground/90 leading-relaxed">
                          {section}
                        </p>
                      )
                    }
                    return null
                  })}
                </div>
                
                {/* Call to Action */}
                <div className="mt-12 p-6 bg-muted/30 rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-3">Join the Conversation</h3>
                  <p className="text-muted-foreground mb-4">
                    Share your thoughts and experiences in the comments below.
                  </p>
                  <Button variant="outline" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Leave a Comment
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Comments Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
              
              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-10">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={newComment.name}
                      onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                      placeholder="Your name"
                      className="max-w-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-muted-foreground mb-1">
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      value={newComment.content}
                      onChange={(e) => setNewComment({...newComment, content: e.target.value})}
                      placeholder="Share your thoughts..."
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-2xl"
                      required
                    />
                  </div>
                  <Button type="submit" className="mt-2">
                    Post Comment
                  </Button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                          {comment.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{comment.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(comment.date), 'MMM d, yyyy')}
                            </span>
                          </div>
                          <p className="mt-1 text-foreground/90">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground italic">No comments yet. Be the first to share your thoughts!</p>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {[...new Set([article.category, 'Bishnoi', 'Community', 'News'])].map((tag, index) => (
                  <Badge key={`${tag}-${index}`} variant="outline" className="px-3 py-1.5 text-sm font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Author Bio */}
            <Card className="mt-12 bg-muted/30 border-muted-foreground/20">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="shrink-0">
                    <Avatar className="h-20 w-20">
                      <AvatarFallback>{article.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">About {article.author}</h3>
                    <p className="text-muted-foreground mt-2">
                      {article.author} is a passionate writer and active member of the Bishnoi community, 
                      dedicated to sharing insights and stories that matter.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Comments Section */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Comments (24)</h3>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <MessageSquare className="h-4 w-4" />
                  <span>Add Comment</span>
                </Button>
              </div>
              
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">User {i}</h4>
                          <span className="text-xs text-muted-foreground">{i}h ago</span>
                        </div>
                        <p className="text-sm mt-1 text-foreground/90">
                          This is a sample comment about the article. Thanks for sharing this insightful content!
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <button className="text-xs text-muted-foreground hover:text-foreground">
                            Like (3)
                          </button>
                          <button className="text-xs text-muted-foreground hover:text-foreground">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mt-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">You might also like</h2>
              <Button variant="ghost" className="gap-1.5 text-primary" asChild>
                <Link href="/news">
                  View all
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Card key={related.id} className="group overflow-hidden hover:shadow-md transition-shadow">
                  <Link href={`/news/${related.id}`}>
                    <div className="aspect-video bg-muted/30 flex items-center justify-center text-muted-foreground">
                      {related.image}
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {related.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{format(parseISO(related.date), 'MMM d, yyyy')}</span>
                        <span className="flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-1.5" />
                          {related.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest news, articles, and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default NewsDetailPage
