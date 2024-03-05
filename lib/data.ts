import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import EspiaPorElMundoImg from "../public/espia-por-el-mundo.png";
import MelseraImg from "../public/Melsera.png";
import PowerEnLineaImg from "../public/powerenlinea.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Buenos Aires, Argentina",
    description:
      "I graduated after 3 months of studying. I immediately found a job as a Fullstack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "10/2021-1/2022",
  },
  {
    title: "Fullstack Developer",
    location: "Buenos Aires, Argentina",
    description:
      "I worked as a fullstack developer for 2 years building features on a very complex application for a geolocation company.",
    icon: React.createElement(CgWorkAlt),
    date: "march 2021 - june 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Buenos Aires, Argentina",
    description:
      "I'm now a full-stack developer working on Accenture.",
    icon: React.createElement(FaReact),
    date: "june 2023 - present",
  },
  {
    title: "Freelance developer",
    location: "Buenos Aires, Argentina",
    description:
      "Also the same year i started taking freelance projects mostly done on No-Code applications.",
    icon: React.createElement(FaReact),
    date: "june 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Espia Por El mundo",
    description:"Pia Bottero, Argentina's influencer, envisioned a platform where her 200,000+ followers could access incredible travel and hotel discounts, while also sharing their experiences through the blog section.",
    imageUrl: EspiaPorElMundoImg,
    link: "https://www.espiaporelmundo.com/",
    tags: ["Webflow"],
  }
  ,
  {
    title: "Power En linea",
    description:
      "Empowering Digital Success. With 50,000+ Instagram followers, this expert digital marketing academy offers over 6 years of experience, a team of 20+ professionals, and 100+ global clients. ",
    imageUrl: PowerEnLineaImg,
    link: "https://poweracademia.webflow.io/",
    tags: ["Webflow"],
  },
  {
    title: "Melsera",
    description:
      "Landing page of my Agency.",
    imageUrl: MelseraImg,
    link: "https://www.melsera.dev/",
    tags: ["Webflow"],
  }
] as const;

export const skillsData = [
  ".NET",
  "Angular",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const blogsData = [
  {
    title: "Trabajando en equipo como ingeniero",
    description:
      "Si mañana te atropella un colectivo, tu proyecto puede seguir en funcionamiento?",
    slug: "Trabajando-en-equipo-como-ingeniero",
    date: "January, 1 2024",
  },
  {
    title: "How to create a portfolio",
    description:
      "I will show you how to create a portfolio using Next.js and Webflow.",
    slug: "how-to-create-a-portfolio",
    date: "10/2021",
  },
  {
    title: "How to create a website",
    description:
      "I will show you how to create a website using Next.js and Webflow.",
    slug: "how-to-create-a-website",
    date: "10/2021",
  },
] as const;