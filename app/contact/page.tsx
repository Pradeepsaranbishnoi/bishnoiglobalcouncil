"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Our Location",
      description: "123 Bishnoi Nagar, Jodhpur, Rajasthan, India",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      description: "info@bishnoiglobalcouncil.org",
      link: "mailto:info@bishnoiglobalcouncil.org",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      description: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Working Hours",
      description: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Type your message here..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our community, events, or services? We're here to help and would love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.description}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { 
                      name: 'Facebook', 
                      icon: <Facebook className="w-5 h-5" />, 
                      url: 'https://facebook.com/bishnoiglobalcouncil' 
                    },
                    { 
                      name: 'Twitter', 
                      icon: <Twitter className="w-5 h-5" />, 
                      url: 'https://twitter.com/bishnoicouncil' 
                    },
                    { 
                      name: 'Instagram', 
                      icon: <Instagram className="w-5 h-5" />, 
                      url: 'https://instagram.com/bishnoiglobalcouncil' 
                    },
                    { 
                      name: 'LinkedIn', 
                      icon: <Linkedin className="w-5 h-5" />, 
                      url: 'https://linkedin.com/company/bishnoiglobalcouncil' 
                    },
                    { 
                      name: 'YouTube', 
                      icon: <Youtube className="w-5 h-5" />, 
                      url: 'https://youtube.com/@bishnoiglobalcouncil' 
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Find Us on Map</h2>
          <div className="aspect-video bg-muted rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Map Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
