"use client"

import { Briefcase, Users, Calendar, Newspaper, Zap, Globe, ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

const features = [
  {
    icon: Briefcase,
    title: "Job Portal",
    description: "Discover curated career opportunities in your field with our exclusive job board",
    highlight: "500+ Listings",
    color: "text-blue-500",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-100"
  },
  {
    icon: Users,
    title: "Business Directory",
    description: "Connect with verified Bishnoi-owned businesses and service providers",
    highlight: "200+ Businesses",
    color: "text-emerald-500",
    bg: "from-emerald-50 to-emerald-100",
    border: "border-emerald-100"
  },
  {
    icon: Calendar,
    title: "Events & Expos",
    description: "Never miss out on community gatherings, workshops, and celebrations",
    highlight: "Monthly Events",
    color: "text-purple-500",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-100"
  },
  {
    icon: Newspaper,
    title: "News Hub",
    description: "Stay informed with the latest community news and success stories",
    highlight: "Daily Updates",
    color: "text-amber-500",
    bg: "from-amber-50 to-amber-100",
    border: "border-amber-100"
  },
  {
    icon: Zap,
    title: "Resources",
    description: "Access mentorship programs and professional development resources",
    highlight: "Expert Guidance",
    color: "text-rose-500",
    bg: "from-rose-50 to-rose-100",
    border: "border-rose-100"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with the worldwide Bishnoi diaspora and expand your network",
    highlight: "50+ Countries",
    color: "text-indigo-500",
    bg: "from-indigo-50 to-indigo-100",
    border: "border-indigo-100"
  },
];

// Animation variants
const containerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.5
    }
  },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

// Animation for the section header
const headerVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Animation for the background elements
const backgroundVariant: Variants = {
  initial: { 
    opacity: 0.3,
    scale: 0.8 
  },
  animate: {
    opacity: [0.3, 0.4, 0.3],
    scale: [0.8, 0.9, 0.8],
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

export function FeaturesSection() {
  return (
    <section className="relative pb-20 overflow-hidden">
      {/* Full width background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white to-gray-50"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute -right-1/3 -top-1/3 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-emerald-100/40 to-blue-100/40 blur-3xl -z-10"
        variants={backgroundVariant}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="absolute -left-1/4 -bottom-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-r from-amber-100/30 to-rose-100/30 blur-3xl -z-10"
        variants={backgroundVariant}
        initial="initial"
        animate="animate"
        style={{
          animationDelay: '2s',
          transformOrigin: 'center center'
        }}
      />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariant}
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
            Our Platform Features
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Thrive
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive suite of tools designed to connect, empower, and uplift the global Bishnoi community.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover="hover"
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-gray-100"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white to-gray-50 -z-10`}>
                <div className="absolute inset-0 rounded-3xl bg-white"></div>
              </div>
              
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              
              {/* Icon with gradient background */}
              <motion.div 
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-sm group-hover:shadow-md transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <feature.icon 
                  className={`h-7 w-7 ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                  strokeWidth={1.75}
                />
              </motion.div>
              
              <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent">
                {feature.title}
              </h3>
              
              <p className="mb-6 text-gray-600 transition-colors group-hover:text-gray-700">
                {feature.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/90 group-hover:ring-gray-300">
                  {feature.highlight}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-400 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-primary group-hover:ring-primary/20">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 h-16 w-16 overflow-hidden">
                <div className={`absolute -bottom-8 -right-8 h-16 w-16 rotate-45 transform bg-gradient-to-br from-primary/5 to-transparent transition-all duration-300 group-hover:opacity-0`}></div>
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
          <motion.button 
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/90 to-emerald-600/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 transition-all duration-700 group-hover:scale-150 group-hover:opacity-0"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
