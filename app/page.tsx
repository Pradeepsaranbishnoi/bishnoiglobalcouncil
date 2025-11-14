"use client"

import { HeroSection } from "@/components/hero-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { FeaturesSection } from "@/components/features-section"
import { AnimatedStats } from "@/components/animated-stats"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { SuccessStories } from "@/components/success-stories"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <main className="flex-1 overflow-hidden">
        <HeroSection />
        <GetInvolvedSection />
        <FeaturesSection />
        <AnimatedStats />
        <HowItWorks />
        <WhyChooseUs />
        <SuccessStories />
        <CTASection />
      </main>
    </div>
  )
}
