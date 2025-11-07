"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2, Heart } from "lucide-react"
import { useParams } from "next/navigation"

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

export default function NewsDetailPage() {
  const params = useParams()
  const articleId = Number.parseInt(params.id as string)
  const article = mockArticles.find((a) => a.id === articleId)

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Article Not Found</h1>
            <Link href="/news">
              <Button>Back to News</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedArticles = mockArticles.filter((a) => article.relatedArticles?.includes(a.id))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Back Button */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/news" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary">{article.title}</h1>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-accent" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span>
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">{article.image}</div>
                </div>

                {/* Article Content */}
                <div className="prose prose-sm max-w-none">
                  <div className="space-y-6 text-muted-foreground">
                    {article.content.split("\n\n").map((paragraph, index) => {
                      if (paragraph.startsWith("##")) {
                        return (
                          <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
                            {paragraph.replace("## ", "")}
                          </h2>
                        )
                      }
                      if (paragraph.startsWith("###")) {
                        return (
                          <h3 key={index} className="text-xl font-semibold text-primary mt-6 mb-2">
                            {paragraph.replace("### ", "")}
                          </h3>
                        )
                      }
                      if (paragraph.startsWith("-")) {
                        return (
                          <ul key={index} className="list-disc list-inside space-y-2">
                            {paragraph.split("\n").map((item, i) => (
                              <li key={i}>{item.replace("- ", "")}</li>
                            ))}
                          </ul>
                        )
                      }
                      return (
                        <p key={index} className="leading-relaxed">
                          {paragraph}
                        </p>
                      )
                    })}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex gap-4 pt-8 border-t border-border">
                  <Button variant="outline" className="bg-transparent">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-20 space-y-6">
                  {/* Author Card */}
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">About the Author</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-semibold text-foreground">{article.author}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Experienced journalist and community contributor covering stories from the Bishnoi community.
                        </p>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        Follow Author
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Related Articles */}
                  {relatedArticles.length > 0 && (
                    <Card className="border-border">
                      <CardHeader>
                        <CardTitle className="text-lg">Related Articles</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {relatedArticles.map((related) => (
                          <Link key={related.id} href={`/news/${related.id}`}>
                            <div className="group cursor-pointer">
                              <p className="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                                {related.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">{related.category}</p>
                            </div>
                          </Link>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* Newsletter */}
                  <Card className="border-border bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-lg">Subscribe</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Get the latest news and stories delivered to your inbox.
                      </p>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Subscribe Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
