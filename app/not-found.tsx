"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-2xl w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 text-destructive mb-6">
            <AlertTriangle className="h-10 w-10" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404 - Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="gap-2">
              <Link href="#" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-muted/30 rounded-xl max-w-md mx-auto">
            <h3 className="font-medium mb-2">Looking for something specific?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try these helpful links instead:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="/news">News & Updates</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="/business">Business Directory</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="/events">Upcoming Events</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="/jobs">Job Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
