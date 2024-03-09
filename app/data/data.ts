import React from "react";
import { GraduationCap, NotebookPen, Bot } from "lucide-react";
import engioPic from "../assets/engioPic.png";
import ecomPic from "../assets/ecomPic.png";
import soundewavePic from "../assets/soundwavePic.png";
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "React",
  "TailwindCSS",
  "Nodejs",
  "Expressjs",
  "MongoDB",
  "Nextjs",
  "Vercel",
  "Convex",
  "Kinde",
  "Python",
  "Git",
  "Redux",
  "Shadcn",
  "MySQL",
  "Cypress",
] as const;

export const experiencesData = [
  {
    title: "Math Tutor",
    location: "Windsor, Canada",
    description:
      "Tutored students ages 13-16 on advanced math topics, with a focus on math contest preperation.",
    icon: React.createElement(NotebookPen),
    date: "2021 - 2022",
  },
  {
    title: "Enrolled into University of Waterloo",
    location: "Waterloo, ON",
    description:
      "I am currently studying electrical engineering with a passion for software and web development. ",
    icon: React.createElement(GraduationCap),
    date: "2023 - 2028",
  },
  {
    title: "Azure AI Project Member Co-op",
    location: "Remote, CA",
    description:
      "Worked in a team to create a ChatBot for medical researchers, recieving two Microsoft certifications in the process.",
    icon: React.createElement(Bot),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Soundwave Music Player",
    description:
      "Create a fully functioning music player connecting to your personal Spotify account, where you are able to change tracks, albums, update volume, as well as rewind and skip tracks.",
    tags: ["React", "JavaScript", "Axios", "Tailwind", "Spotify API"],
    imageUrl: soundewavePic,
    href: "https://github.com/IvanKorne/SoundWave",
  },
  {
    title: "eCommerce Price Tracker",
    description:
      "This price tracker scrapes the Amazon website for the current, highest, and lowest price. A Cron job is setup to rescrape the product, and if the product reaches a lower price, the project will send an email notifying you.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Nodemailer"],
    imageUrl: ecomPic,
    href: "https://github.com/IvanKorne/ecom",
  },
  {
    title: "Engio - Eraser.io Clone",
    description:
      "A Eraser.io Clone with authentication, a database with users and their corresponding files, as well as the ability to draw and write text on a workspace.",
    tags: ["React", "Next.js", "Convex", "Tailwind", "Kinde"],
    imageUrl: engioPic,
    href: "https://github.com/IvanKorne/engio",
  },
] as const;
