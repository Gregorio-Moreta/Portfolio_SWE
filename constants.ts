
import { Project, Experience, SkillCategory } from './types';

export const GITHUB_URL = "https://github.com/Gregorio-Moreta";
export const LINKEDIN_URL = "https://www.linkedin.com/in/gregorio-moreta/";
export const EMAIL_ADDRESS = "greg.moreta1@gmail.com";

export const PROJECTS: Project[] = [
  {
    title: "The Music Bugle",
    description: "A dynamic music article website with a custom CMS migration, Stripe integration for donations, and a third-party commenting system to foster user engagement.",
    imageUrl: "public/images/themusicbugle.png",
    tags: ["TypeScript", "Next.js", "React", "Sanity CMS", "Tailwind CSS", "Stripe"],
    liveUrl: "https://themusicbugle.net/",
    codeUrl: "https://github.com/NJL611/Music_Bugle",
  },
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer Senior Instructor",
    company: "General Assembly",
    period: "July 2023 - April 2025",
    description: [
      "Conducted advanced workshops on CI/CD, Agile development, and database design.",
      "Provided expert code reviews and feedback, ensuring adherence to industry standards.",
      "Mentored students on debugging and optimizing full-stack applications with Typescript, JavaScript, and Python/Django.",
      "Collaborated with cross-functional teams to enhance curriculum and integrate modern technologies.",
    ]
  },
  {
    role: "Software Engineer Instructor Associate",
    company: "General Assembly",
    period: "April 2022 - July 2023",
    description: [
      "Facilitated project-based learning on full-stack web development using React, Node.js, and SQL.",
      "Led Agile team sessions, including sprint planning and retrospectives.",
      "Delivered hands-on training in Git workflows and version control.",
      "Mentored over 100 aspiring software engineers, resulting in an estimated $1M+ in market value from successful placements.",
    ]
  },
];

export const EDUCATION: Experience[] = [
    {
        role: "Software Engineering Immersive Bootcamp",
        company: "General Assembly",
        period: "July 2021 - January 2022",
        description: [
            "Completed a rigorous 500+ hour program covering full-stack web development, algorithms, and computer science fundamentals.",
            "Built multiple full-stack applications utilizing technologies such as Ruby, JavaScript, React, Node.js, Express, MongoDB, and PostgreSQL.",
            "Gained hands-on experience with version control systems like Git and collaborative workflows using GitHub."
        ]
    }
]

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express", "Next.js", "Python", "Django", "Ruby on Rails", "Tailwind CSS"]
  },
  {
    title: "Databases & APIs",
    skills: ["MongoDB", "PostgreSQL", "SQL", "RESTful API", "Mongoose"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Docker", "VSCode", "Postman", "Terminal", "Figma", "Netlify", "Vercel", "Heroku", "CI/CD", "Agile"]
  }
];