import type {
  NavLink,
  Service,
  PortfolioItem,
  Testimonial,
  FaqItem,
  WorkExperience,
  Achievement,
} from "./types";

export const personalInfo = {
  name: "Yansen",
  fullName: "Yansen Valerio",
  profession: "Tech Advisor & Enthusiast",
  tagline: "Design with Intent. Create for Impact.",
  bio: "Yansen's journey into tech began with one mission — to bring meaningful digital presence to life. He thrives in the rhythm of exploration: uncovering the problem, analyzing the why, then shaping clean, considered solutions.",
  location: "Pekalongan, Indonesia",
  status: "Available for Projects",
  email: "yanson672@gmail.com",
  phone: "+62 851-8507-5636",
  whatsappNumber: "6285185075636",
  website: "yansenvalerio.dev",
  address: "Pekalongan, Indonesia",
};

export const socialLinks = [
  {
    name: "Instagram",
    handle: "@yansenvalerio",
    href: "https://instagram.com/yansenvalerio",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    handle: "Yansen Valerio",
    href: "https://linkedin.com/in/yansenvalerio",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    handle: "yansenvalerio",
    href: "https://github.com/yansenvalerio",
    icon: "github",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    icon: "code",
    title: "Web Development",
    description:
      "Build fast, scalable web apps with Next.js & Laravel — from landing pages to fullstack platforms.",
    featured: true,
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with React Native — native feel, single codebase, faster shipping.",
    featured: false,
  },
  {
    icon: "database",
    title: "Backend & Database",
    description:
      "REST APIs, server logic, PostgreSQL & MySQL setup. Architected for performance and scale.",
    featured: false,
  },
  {
    icon: "compass",
    title: "Tech Consultation",
    description:
      "Stack advisory, code review, architecture audit. Make confident tech decisions backed by experience.",
    featured: false,
  },
  {
    icon: "trending-up",
    title: "Business Advisor",
    description:
      "Tech-aware business strategy. Aligning product roadmap with business goals and market reality.",
    featured: false,
  },
  {
    icon: "bar-chart",
    title: "Data Analyst",
    description:
      "Turning raw data into insights. Dashboards, reports, and actionable intelligence for decisions.",
    featured: false,
  },
];

export const portfolio: PortfolioItem[] = [
  {
    number: "01",
    title: "Notic — Company Profile",
    description:
      "A sustainable brand based in Pekalongan that transforms discarded HDPE plastic into handcrafted bracelets, beads, and home coasters. Built as a fast, responsive Next.js showcase highlighting the production process and impact metrics.",
    tags: ["Next.js", "React", "Tailwind", "Sustainability"],
    images: [
      "/portfolio/notic-1.jpg",
      "/portfolio/notic-2.jpg",
      "/portfolio/notic-3.jpg",
    ],
    liveUrl: "https://notic-final-website.vercel.app/",
  },
  {
    number: "02",
    title: "Greeva — Green Marketplace",
    description:
      "A curated marketplace for Indonesia's local sustainable brands — connecting eco-conscious shoppers with circular-economy makers. Features a filterable product catalog, detailed product pages with variant selection, a slide-out cart, and full authentication. Designed end-to-end around discovery, trust, and a clean buying flow.",
    tags: ["E-Commerce", "Product Catalog", "Cart & Auth", "Sustainability"],
    images: [
      "/portfolio/marketplace-1.jpg",
      "/portfolio/marketplace-2.jpg",
      "/portfolio/marketplace-3.jpg",
      "/portfolio/marketplace-4.jpg",
    ],
    liveUrl: "https://behance.net",
  },
  {
    number: "03",
    title: "Plesir Pekalongan — SaaS",
    description:
      "A tourism platform showcasing Pekalongan — the World Batik City. Visitors browse destinations, events, news, and craft itineraries; admins manage all content from a dedicated dashboard. Public site + admin panel built as a complete end-to-end SaaS experience.",
    tags: ["Next.js", "Tailwind", "Admin Dashboard", "Tourism SaaS"],
    images: [
      "/portfolio/plesir-1.jpg",
      "/portfolio/plesir-2.jpg",
      "/portfolio/plesir-3.jpg",
      "/portfolio/plesir-4.jpg",
      "/portfolio/plesir-5.jpg",
    ],
    liveUrl: "https://plesir-pekalongan.vercel.app/",
  },
  {
    number: "04",
    title: "Yansen Valerio — Portfolio",
    description:
      "A personal portfolio site built to introduce who I am, what I build, and how I think. Features a draggable 3D ID-card lanyard, scroll-driven horizontal carousel, tech-stack showcase, and a contact form that opens straight into WhatsApp.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
    images: [
      "/portfolio/portfolio-1.jpg",
      "/portfolio/portfolio-2.jpg",
      "/portfolio/portfolio-3.jpg",
    ],
    liveUrl: "https://yansen-portfolio.vercel.app/",
  },
  {
    number: "05",
    title: "Jejalah — Gamified City Explorer",
    description:
      "A gamified mobile app that turns exploring Pekalongan into a quest. Players complete daily, weekly, and story missions across culinary, culture, and nature — earning XP, leveling up, unlocking badges, and climbing the leaderboard. Built with React Native & Expo, featuring auth (email + GitHub), player profiles, and a Trophy Room.",
    tags: ["React Native", "Expo", "Gamification", "Travel"],
    images: [
      "/portfolio/mobile-1.jpg",
      "/portfolio/mobile-2.jpg",
      "/portfolio/mobile-3.jpg",
    ],
    liveUrl: "https://jejalah-web.vercel.app/",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Alfa",
    role: "Founder, Notic",
    avatar: "https://picsum.photos/seed/alfa/80/80",
    quote:
      "Yansen brought Notic's story to life online. He understood our sustainability mission from day one and turned it into a fast, beautiful website that genuinely represents the brand. Communication was clear and he delivered exactly what we needed — couldn't be happier.",
  },
  {
    name: "Sani",
    role: "Marketer, Greeva",
    avatar: "https://picsum.photos/seed/sani/80/80",
    quote:
      "Working with Yansen on Greeva was effortless. He took our idea for a green marketplace and shaped it into a clean, trustworthy shopping experience that our customers love. Thoughtful, detail-oriented, and always one step ahead.",
  },
  {
    name: "Kevin",
    role: "Content Creator",
    avatar: "https://picsum.photos/seed/kevin/80/80",
    quote:
      "Yansen just gets it. He listens, he thinks ahead, and he ships work that looks and feels premium. Every project we've collaborated on came back better than I pictured. A rare mix of technical skill and real creative taste.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in graphic design, branding, UI/UX design, and digital illustration. I also provide website design services and marketing materials tailored to your business needs.",
  },
  {
    question: "How do I hire you for a project?",
    answer:
      "Simply reach out via the contact form or email me directly. We'll schedule a discovery call to discuss your project requirements, timeline, and budget. From there, I'll send a detailed proposal.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing varies based on the project scope, complexity, and timeline. I offer both fixed-price packages and hourly rates. Contact me for a custom quote tailored to your specific needs.",
  },
  {
    question: "Can I see samples of your work?",
    answer:
      "Absolutely! You can browse my portfolio section above to see a selection of my recent projects across UI design, graphic design, and brand identity work.",
  },
];

export const experienceItems = [
  {
    number: "01",
    title: "Junior Product Designer",
    years: "(2017–2019)",
    description:
      "I began my product design journey by focusing on user research and prototyping, collaborating with cross-functional teams to deliver intuitive user experiences.",
  },
  {
    number: "02",
    title: "Mid-Level Product Designer",
    years: "(2019–2022)",
    description:
      "Led the redesign of key interfaces, driving a 33% improvement in user satisfaction by managing the full end-to-end product development cycle.",
  },
  {
    number: "03",
    title: "Senior Product Designer",
    years: "(2022–Present)",
    description:
      "I direct design strategy, lead a team of designers, and ensure the delivery of seamless user experiences for innovative new products.",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    company: "Mas & Mbak Duta Wisata Pekalongan City",
    role: "Chairperson – Selection Committee",
    period: "2025",
    type: "Leadership",
    description:
      "Led the selection committee for the city's annual tourism ambassador program — coordinating judging panels, managing event logistics, and shaping the overall candidate journey.",
    skills: ["Event Management", "Team Leadership", "Public Speaking"],
  },
  {
    company: "Nolos Collection",
    role: "Website Developer",
    period: "2024 — 2025",
    type: "Project",
    description:
      "Built a business website end-to-end for a local clothing brand — designing the layout, implementing responsive pages, and ensuring a smooth browsing experience for customers.",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    company: "Regional Tourism Office (Dinas Pariwisata)",
    role: "Database Designer",
    period: "2024 — 2025",
    type: "Project",
    description:
      "Designed the database schema for a regional tourism information system — modeling entities, defining relationships, and optimizing queries for efficient data retrieval.",
    skills: ["Database Design", "MySQL", "ERD", "SQL"],
  },
  {
    company: "Hotel Reservation System",
    role: "Desktop Application Developer",
    period: "2024 — 2025",
    type: "Academic Project",
    description:
      "Developed a desktop-based hotel reservation application — handling booking flow, room availability, and customer records with a focus on clear UX and reliable data handling.",
    skills: ["Desktop App", "Database", "System Design", "UX Flow"],
  },
  {
    company: "HABITUS — Kampung Batik Kauman & Pesindon",
    role: "Tour Leader",
    period: "2024",
    type: "Event",
    description:
      "Guided visitors through Pekalongan's heritage batik villages, sharing cultural stories and historical context while leading multi-language tour groups.",
    skills: ["Public Speaking", "Cultural Knowledge", "English"],
  },
  {
    company: "SMA Santo Bernardus",
    role: "Moderator – OSIS Chairman Election",
    period: "2023 — 2024",
    type: "Event",
    description:
      "Moderated the student council chairman election — facilitating candidate debates, keeping the event on schedule, and ensuring a fair, structured forum for all participants.",
    skills: ["Public Speaking", "Moderating", "Event Coordination"],
  },
  {
    company: "YASIKA Learning House",
    role: "Volunteer Teacher",
    period: "2023 — Present",
    type: "Volunteer",
    description:
      "Teach and mentor students in a community learning house — preparing lessons, guiding individual learners, and helping build confidence beyond the school curriculum.",
    skills: ["Teaching", "Mentoring", "Curriculum"],
  },
];

export const achievements: Achievement[] = [
  {
    year: "2024",
    rank: "1st Place",
    title: "Mas Duta Wisata Pekalongan City",
    organization: "Pekalongan Tourism Board",
  },
  {
    year: "2024",
    rank: "1st Place",
    title: "Accounting League 2024",
    organization: "Faculty of Economics & Business, University of Pekalongan",
  },
  {
    year: "2024",
    rank: "Top 10 National Finalist",
    title: "TIOS Scientific Writing Competition",
    organization: "TIOS National",
  },
  {
    year: "2023",
    rank: "1st Place",
    title: "Quiz Competition (LCC) Book Fair",
    organization: "University of Pekalongan Library",
  },
];

export const clientLogos = [
  "TeamTalk",
  "PayScale",
  "People;",
  "arktico",
  "getdone",
  "Stripo",
  "TeamTalk",
  "PayScale",
  "People;",
  "arktico",
  "getdone",
  "Stripo",
];
