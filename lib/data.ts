import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "CorpComment",
    description:
      "CorpComment is a platform that allows companies to gather feedback from their employees. It is a fullstack application built with Next.js, Prisma, and PostgreSQL.",
    imageUrl: "",
    link: "https://corpcomment.com",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
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
