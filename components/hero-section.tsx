"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Sparkles, Globe, Heart, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-emerald-50 py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-primary/5 to-primary/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                Bishnoi Global Convention & Expo 2026
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  Together We
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Thrive & Grow</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-100/70 -z-0"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Join our global community of Bishnoi professionals, entrepreneurs, and leaders. Connect, collaborate, and celebrate our rich heritage while building a brighter future together.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-100">
                <Globe className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-500">Countries</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-100">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-bold text-gray-900">10K+</div>
                  <div className="text-xs text-gray-500">Members</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-100">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-bold text-gray-900">100+</div>
                  <div className="text-xs text-gray-500">Success Stories</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="group h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                  Explore Community
                </span>
                <ArrowRight className="ml-2 h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg font-semibold border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/30 rounded-xl backdrop-blur-sm bg-white/50"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Our Network
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Community Showcase */}
          <div className="relative h-[600px] w-full">
            {/* Main image with gradient overlay */}
            <div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1">
              <div className="relative w-full h-full">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-emerald-600/90"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 -right-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl"></div>
                
                {/* Community illustration */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full h-full">
                    {/* Connection lines */}
                    <div className="absolute top-1/2 left-1/2 w-4/5 h-0.5 bg-white/20 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-4/5 bg-white/20 -translate-x-1/2 -translate-y-1/2"></div>
                    
                    {/* Floating avatars */}
                    {[
                      { top: '20%', left: '20%' },  // Top-left
                      { top: '20%', right: '20%' }, // Top-right
                      { bottom: '20%', left: '20%' }, // Bottom-left
                      { bottom: '20%', right: '20%' }, // Bottom-right
                      { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', size: 'lg' } // Center
                    ].map((pos, i) => (
                      <div 
                        key={i}
                        className={`absolute ${pos.top ? `${pos.top}` : ''} ${pos.left ? `${pos.left}` : ''} 
                          ${pos.right ? `${pos.right}` : ''} ${pos.bottom ? `${pos.bottom}` : ''}
                          ${pos.transform || '-translate-x-1/2 -translate-y-1/2'}
                          ${pos.size === 'lg' ? 'w-24 h-24' : 'w-16 h-16'}
                          rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 
                          flex items-center justify-center shadow-lg`}
                      >
                        <div className={`${pos.size === 'lg' ? 'w-20 h-20' : 'w-12 h-12'} rounded-full bg-white/20 flex items-center justify-center`}>
                          <Users className={`${pos.size === 'lg' ? 'w-10 h-10' : 'w-6 h-6'} text-white`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Event Card */}
            <div className="absolute bottom-6 left-0 w-[70%] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform -rotate-1 hover:rotate-0 transition-all duration-300">
              <div className="bg-gradient-to-r from-primary to-emerald-600 p-4 text-white text-center">
                <h3 className="text-lg font-bold">Upcoming Event</h3>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Calendar className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-center text-gray-800 mb-2">Bishnoi Global Convention 2026</h4>
                <div className="flex flex-col items-center space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    March 15-17, 2026
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Jodhpur, India
                  </div>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Register Now
                </button>
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute top-10 right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 w-52 hover:shadow-2xl transition-all duration-300 z-20 transform hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 16h.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">500+ Job Listings</p>
                  <p className="text-xs text-gray-500">Fresh opportunities daily</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-40 right-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 w-52 hover:shadow-2xl transition-all duration-300 z-20 transform hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 6v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">200+ Businesses</p>
                  <p className="text-xs text-gray-500">Connect & collaborate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
