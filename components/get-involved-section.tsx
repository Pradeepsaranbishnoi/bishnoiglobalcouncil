"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { HeartHandshake, Briefcase, Mic2, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const involvementOptions = [
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers and contribute to the success of our events and initiatives.",
    buttonText: "Become a Volunteer",
    link: "/volunteer"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Sponsor",
    description: "Partner with us and showcase your brand to thousands of community members and businesses.",
    buttonText: "Become a Sponsor",
    link: "/sponsor"
  },
  {
    icon: <Mic2 className="w-8 h-8 text-primary" />,
    title: "Speaker",
    description: "Share your expertise and inspire others by speaking at our events and conferences.",
    buttonText: "Apply to Speak",
    link: "/speak"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Submit an Idea",
    description: "Have an idea for an event or initiative? We'd love to hear from you!",
    buttonText: "Share Your Idea",
    link: "/submit-idea"
  }
];

// Animation variants
import type { Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export function GetInvolvedSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600 text-sm font-semibold mb-6 shadow-sm shadow-emerald-100/50"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Get Involved
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join Our <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Community</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Be part of something bigger. Contribute your skills, ideas, and energy to help our community thrive.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {involvementOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                } 
              }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-gray-100"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white to-gray-50 -z-10">
                <div className="absolute inset-0 rounded-3xl bg-white"></div>
              </div>
              
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Icon with gradient background */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-sm group-hover:shadow-md transition-all duration-300">
                {React.cloneElement(option.icon, { 
                  className: 'h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110',
                })}
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent">
                {option.title}
              </h3>
              
              <p className="mb-6 text-gray-600 transition-colors group-hover:text-gray-700">
                {option.description}
              </p>
              
              <Button
                variant="ghost"
                className="group/btn -ml-2 px-2 text-primary hover:bg-transparent hover:text-primary/80"
                asChild
              >
                <a href={option.link} className="flex items-center">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-1">
                      {option.buttonText}
                    </span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-full bg-gradient-to-r from-primary to-emerald-500 opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100"></span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </Button>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 h-16 w-16 overflow-hidden">
                <div className="absolute -bottom-8 -right-8 h-16 w-16 rotate-45 transform bg-gradient-to-br from-primary/5 to-transparent transition-all duration-300 group-hover:opacity-0"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="mb-6 text-lg text-gray-600">Ready to make an impact?</p>
          <Button 
            size="lg" 
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-emerald-600 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="relative z-10 flex items-center">
              Join Us Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/90 to-emerald-600/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 transition-all duration-700 group-hover:scale-150 group-hover:opacity-0"></div>
          </Button>
        </motion.div>
      </div>
      
     
    </section>
  );
}