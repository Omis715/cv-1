import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,

} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
export const RESUME_DATA = {
  name: "Lamjadli Mohamed",
  initials: "LMJ",
  location: "Casablanca, Morocco, MA",
  locationLink: "https://www.google.com/maps/place/Casablanca",
  about:
    "Artificial Intelligence Engineer and Software Engineer",
  summary:
    "As an Artificial Intelligence Engineer and Data Specialist, specializing in machine learning, deep learning, and business intelligence, I excel in driving projects from inception to completion. ",
  avatarUrl: "https://i.ibb.co/g9yM3NX/cv-pic.png",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "simolamjadli07@gmail.com",
    tel: "+212632288515",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Omis715",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohamedlmj/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Ecole National des Sciences Arts et de Métier",
      degree: "Preparatory Classes",
      start: "2020",
      end: "2022",
    },
    {
      school: "Ecole National des Sciences Arts et de Métier",
      degree: "Engineer in Artificial Intelligence and Computer Engineering",
      start: "2022",
      end: "",
    }
  ],
  work: [
    {
      company: "Royal Air Maroc",
      link: "https://www.royalairmaroc.com/ma-fr",
      badges: ["Remote"],
      title: "Developer",
      logo: ParabolLogo,
      start: "01.07.23",
      end: "01.08.23",
      description:
        "Project management of contract digitization during an observational internship, optimizing processes and enhancing operational efficiency. ",
    }
  ],
  skills: [
    "PowerBI",
    "Machine Learning",
    "Unity",
    "Python",
    "Java",
    "AI",
    "MongoDB",
    "Oracle",
    "Android Developement",
    "React",
    "Angular",
    "HTML/CSS/JS"
  ],
  projects: [
    {
      title: "Rihla",
      techStack: [
        "Javascript",
        "Html",
        "CSS",
        "PhP",
      ],
      description: "A platform to find hostel, appartement and riad in all cities of Morocco.",
      logo: ConsultlyLogo,
      link: {
        label: "rihla.ma",
        href: "https://rihla-ma.000webhostapp.com/index.php",
      },
    },
    {
      title: "CareerNest",
      techStack: [
        "Spring Boot",
        "React",
        "Sql",
      ],
      description: "CareerNest is an online platform that serves as one of the world's largest job search engines.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Raja Club Athletic",
      techStack: [
        "Angular",
        "TypeScript",
        "LaravelApi",
        "Sql WorkBench"
      ],
      description: "Raja Website website serves as the online hub for fans and enthusiasts of the Real Madrid football club",
      logo: ConsultlyLogo,
      link: {
        label: "rajaclubathletic.ma",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7161297861190598657?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7161297861190598657%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BnDuFx9LZRoKLDDVEIkDGNw%3D%3D",
      },
    }
  ],
} as const;
