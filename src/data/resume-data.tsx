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
  name: "Imad El Rhassouli",
  initials: "IMAD",
  location: "Casablanca, Morocco, MA",
  locationLink: "https://www.google.com/maps/place/Casablanca",
  about:
    "Master's student in Accounting, Management Control, Audi",
  summary:
    "Currently a Master's student in CCA (Accounting, Control, Audit) at Univ Mundiapolis. ",
  avatarUrl: "https://i.ibb.co/v1xD6vL/Imad.png",
  personalWebsiteUrl: "",
  contact: {
    email: "imadelrh2001@gmail.com",
    tel: "+212650314691",
    social: [
  
     
    ],
  },
  education: [
    {
      school: "University Mundiapolis",
      degree: "Master's Degree in Accounting, Management Control, and Audit",
      start: "2021",
      end: "",
    },
    {
      school: "Fac Ibn Tofail",
      degree: "Bachelor's Degree in Management",
      start: "2020",
      end: "2021",
    },
    {
      school: "EST Safi",
      degree: "University Diploma in Finance and Accounting Technology",
      start: "2018",
      end: "2020",
    },
    {
      school: "Tarek Ibn Ziad High School",
      degree: "Baccalauréat in Economics with a specialization in Accounting Management",
      start: "2017",
      end: "2018",
    }

  ],
  work: [
    {
      company: "Royal Air Maroc",
      link: "https://www.royalairmaroc.com/ma-fr",
      badges: ["Remote"],
      title: "Internship",
      logo: ParabolLogo,
      start: "01.07.19",
      end: "01.08.19",
      description:
        "Performing tasks such as invoice data entry, order tracking, and accounting document entry.",
    },
    {
      company: "Cabinet Salma conseil",
      link: "",
      badges: [""],
      title: "Accounting and Finance Officer",
      logo: ParabolLogo,
      start: "01.07.22",
      end: "01.09.22",
      description:
        "Responsible for accounting records, inputting financial documents, handling VAT, CNSS, and income tax declarations, and processing payroll.",
    }
  ],
  skills: [
    "ArabIc (motherlanguage)",
    "French (fluent)",
    "English(intermediate)",
    "German (beginner)",
    "Office Suite (Word, Excel, PowerPoint)",
    "Sage software",
    "Logique raisonement",
    "Organisation and planning",
    "Responsibility and autonomy",
    "Passionate about numbers and analysis",
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
