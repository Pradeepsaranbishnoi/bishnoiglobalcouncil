"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields")
      return
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }
    
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }
    
    if (!acceptTerms) {
      setError("You must accept the terms and conditions")
      return
    }
    
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, you would send this data to your backend
      console.log("Signup attempt with:", { 
        name: formData.name,
        email: formData.email,
        // Never log or store plain passwords in production
        hasPassword: !!formData.password 
      })
      
      // Redirect to verification page on success
      router.push("/auth/verify-email")
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="min-h-[calc(100vh-80px)] flex">
          {/* Left side - Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
            <div className="w-full max-w-md space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Join Bishnoi Global Council today
                </p>
              </div>

              {/* Social Sign Up */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="gap-2" disabled={isLoading}>
                  {isLoading ? (
                    <Icons.spinner className="h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.google className="h-4 w-4" />
                  )}
                  Google
                </Button>
                <Button variant="outline" className="gap-2" disabled={isLoading}>
                  {isLoading ? (
                    <Icons.spinner className="h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.github className="h-4 w-4" />
                  )}
                  GitHub
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 text-sm text-red-600 bg-red-50 rounded-md">
                  {error}
                </div>
              )}

              {/* Sign Up Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      autoComplete="name"
                      disabled={isLoading}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      autoComplete="new-password"
                      disabled={isLoading}
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <p className="text-xs text-muted-foreground">
                      Must be at least 8 characters
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      autoComplete="new-password"
                      disabled={isLoading}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox 
                      id="terms" 
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      className="mt-1"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{' '}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  Create Account
                </Button>
              </form>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link href="/auth/login" className="font-medium text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Image/Illustration */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 items-center justify-center p-8">
            <div className="max-w-md text-center space-y-6">
              <div className="mx-auto w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                <Icons.logo className="h-24 w-24 text-primary" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Join Our Community</h2>
                <p className="text-muted-foreground">
                  Create an account to connect with fellow Bishnoi members, access exclusive content, and participate in events.
                </p>
              </div>
              <div className="pt-4">
                <div className="space-y-4 text-left">
                  {[
                    "Connect with community members",
                    "Access exclusive content and resources",
                    "Participate in events and discussions",
                    "Stay updated with the latest news"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <Icons.checkCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
