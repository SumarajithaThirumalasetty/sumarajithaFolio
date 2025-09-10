/* Change this file to customize your portfolio */

// Basic Info
const greeting = {
  name: "Sumarajitha Thirumalasetty",
  title: "Hi all, I'm Sumarajitha",
  description: "AWS | Azure | DevOps | Data Engineering | GenAI",
  resumeLink: "https://github.com/SumarajithaThirumalasetty",
};

// Hireable status
const isHireable = true;

// Social media links
const socialMediaLinks = {
  github: "https://github.com/SumarajithaThirumalasetty",
  linkedin: "https://www.linkedin.com/in/sumarajitha/",
  twitter: "",
  instagram: "",
  facebook: "",
};

// Skills
const skillsSection = [
  {
    title: "Cloud & DevOps",
    skillSet: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "CI/CD Pipelines"],
  },
  {
    title: "Data Engineering",
    skillSet: ["Python", "PySpark", "SQL", "ETL Pipelines", "Data Warehousing"],
  },
];

// Work experience
const workExperiences = [
  {
    role: "AWS Data Engineer",
    company: "Cargill",
    duration: "Jun 2024 - Present",
    responsibilities: [
      "Built and maintained ETL pipelines using AWS Glue",
      "Optimized schemas in Amazon Redshift",
      "Developed ingestion APIs with AWS Lambda",
      "Orchestrated workflows using AWS Step Functions",
      "Secured data pipelines using KMS and Secrets Manager",
      "Automated infrastructure provisioning with Terraform and GitHub Actions",
    ],
  },
  {
    role: "Azure Data Engineer",
    company: "Cargill",
    duration: "Jan 2023 - May 2024",
    responsibilities: [
      "Developed and maintained Azure Data Factory pipelines",
      "Built ingestion APIs using Azure Functions",
      "Secured pipelines using Azure Key Vault",
      "Automated infrastructure deployment using ARM templates and GitHub Actions",
    ],
  },
];

// Projects
const projects = [
  {
    title: "CloudOps Health Monitor",
    description: "Unified monitoring dashboards using Prometheus, CloudWatch, and Azure Monitor",
  },
  {
    title: "ETL Template Hub",
    description: "Prompt-based scaffolding system using LangChain + Copilot",
  },
];

// Big Projects (optional)
const bigProjects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio using React and hosted on GitHub Pages",
  },
];

// Education
const educationInfo = [
  { degree: "Master of Information Studies", institute: "Trine University" },
  { degree: "Bachelor of Computer Science", institute: "Acharya Nagarjuna University" },
];

// Certifications
const certifications = [
  "Microsoft Azure Data Fundamentals",
  "Google Cloud: Generative AI Fundamentals",
  "Databricks Lakehouse Fundamentals",
  "IBM Data Engineering Foundations",
  "Gen AI Essentials",
  "SQL for Data Science",
];

// Contact Info
const contactInfo = {
  email: "sumarajithat@gmail.com",
  phone: "+1-(945)-216-1551",
  linkedin: "https://www.linkedin.com/in/sumarajitha/",
};

// Open source, achievements, blog, talks, resume sections
const openSource = [];
const achievementSection = [];
const blogSection = [];
const talkSection = [];
const resumeSection = [];

// Splash Screen Info
const splashScreen = {
  enabled: true,
  image: require("./assets/images/Raji.jpeg"), // local image
  duration: 2000,
  message: "Welcome to Sumarajitha's Portfolio",
};

// Illustration (optional)
const illustration = {
  animated: true,
};

// Podcast Section (optional)
const podcastSection = [];

// Tech Stack (optional)
const techStack = [
  { name: "AWS", icon: "aws-icon" },
  { name: "Azure", icon: "azure-icon" },
  { name: "Python", icon: "python-icon" },
];

// Twitter Details (optional)
const twitterDetails = {
  username: "",
  link: "",
};

// Export everything
export {
  greeting,
  isHireable,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  projects,
  bigProjects,
  educationInfo,
  certifications,
  contactInfo,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  resumeSection,
  splashScreen,
  illustration,
  podcastSection,
  techStack,
  twitterDetails,
};
