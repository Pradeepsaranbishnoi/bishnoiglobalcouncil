export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  category: string;
  description: string;
  posted: string;
  experience: string;
  skills: string[];
  companyLogo: string;
}

export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp India",
    location: "Bangalore, India",
    salary: "₹15-20 LPA",
    type: "Full-time",
    category: "Technology",
    description: "We're looking for an experienced Senior Software Engineer to join our growing team. You'll be responsible for designing and implementing scalable web applications using modern technologies.",
    posted: "2 days ago",
    experience: "3-5 years",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    companyLogo: "/company-logos/techcorp.png"
  },
  {
    id: 2,
    title: "Business Development Manager",
    company: "Global Trade Solutions",
    location: "Delhi, India",
    salary: "₹12-18 LPA",
    type: "Full-time",
    category: "Business",
    description: "Lead our business expansion initiatives and develop strategic partnerships. Ideal candidate has experience in B2B sales and a strong network in the industry.",
    posted: "1 week ago",
    experience: "5-8 years",
    skills: ["Business Development", "Sales", "Market Research", "Negotiation"],
    companyLogo: "/company-logos/global-trade.png"
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    company: "Digital Ventures",
    location: "Mumbai, India",
    salary: "₹8-12 LPA",
    type: "Full-time",
    category: "Marketing",
    description: "Create and execute digital marketing campaigns across various channels including social media, email, and PPC to drive brand awareness and lead generation.",
    posted: "3 days ago",
    experience: "2-4 years",
    skills: ["SEO", "Social Media", "Google Ads", "Content Marketing"],
    companyLogo: "/company-logos/digital-ventures.png"
  },
  {
    id: 4,
    title: "Financial Analyst",
    company: "Investment Partners",
    location: "Jaipur, India",
    salary: "₹10-15 LPA",
    type: "Full-time",
    category: "Finance",
    description: "Analyze financial data, prepare reports, and provide insights to support investment decisions and business strategies.",
    posted: "5 days ago",
    experience: "3-6 years",
    skills: ["Financial Modeling", "Excel", "Data Analysis", "Forecasting"],
    companyLogo: "/company-logos/investment-partners.png"
  },
  {
    id: 5,
    title: "Senior Project Manager",
    company: "Construction & Development",
    location: "Rajasthan, India",
    salary: "₹11-16 LPA",
    type: "Full-time",
    category: "Management",
    description: "Oversee large-scale construction projects from conception to completion, ensuring they are completed on time and within budget.",
    posted: "1 week ago",
    experience: "7-10 years",
    skills: ["Project Management", "Construction", "Stakeholder Management", "Budgeting"],
    companyLogo: "/company-logos/construction-dev.png"
  },
  {
    id: 6,
    title: "Agricultural Consultant",
    company: "Green Future Farms",
    location: "Rajasthan, India",
    salary: "₹9-13 LPA",
    type: "Full-time",
    category: "Agriculture",
    description: "Provide expert guidance on sustainable farming practices, crop management, and agricultural technology to improve farm productivity.",
    posted: "4 days ago",
    experience: "4-7 years",
    skills: ["Sustainable Farming", "Crop Management", "Soil Science", "Agri-Tech"],
    companyLogo: "/company-logos/green-future.png"
  }
];

export const categories = ["All", "Technology", "Business", "Marketing", "Finance", "Management", "Agriculture"] as const;

export const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote"] as const;
