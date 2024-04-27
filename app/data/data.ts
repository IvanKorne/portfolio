import React from "react";
import { GraduationCap, NotebookPen, Bot } from "lucide-react";
import engioPic from "../assets/engioPic.png";
import chatpdfPic from "../assets/pdfchatPic.png";
import notePic from "../assets/notePic.png";
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "React",
  "React-Native",
  "TailwindCSS",
  "Nextjs",
  "Nodejs",
  "Expressjs",
  "Python",
  "Git",
  "MongoDB",
  "Nextjs",
  "Vercel",
  "Convex",
  "Kinde",
  "Redux",
  "Shadcn",
  "Supabase",
  "Cypress",
  "GraphQL",
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
    title: "Azure AI Project Intern",
    location: "Remote, CA",
    description:
      "Worked in a team to create a ChatBot for medical researchers, recieving two Microsoft certifications in the process.",
    icon: React.createElement(Bot),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "NoteVault",
    description:
      "Create a fully functioning SaaS where you can store, create and edit notes as well as change themes with multiple users. Utilized stripe to make the product subscription-based. ",
    tags: ["React", "Nextjs", "Stripe", "Typescript", "Kinde"],
    imageUrl: notePic,
    href: "https://iknotes.vercel.app/",
  },
  {
    title: "ChatPDF",
    description:
      "Talk to your PDF in seconds! Using OpenAI, you can insert any PDF, and be able to ask a personalized chatbot to query information from the selected PDF.  ",
    tags: ["React", "TypeScript", "Next.js", "DrizzleORM", "OpenAI"],
    imageUrl: chatpdfPic,
    href: "https://pdf-chat-ruby.vercel.app/",
  },
  {
    title: "Engio - Eraser.io Clone",
    description:
      "A Eraser.io Clone with authentication, a database with users and their corresponding files, as well as the ability to draw and write text on a workspace.",
    tags: ["React", "Next.js", "Convex", "Tailwind", "Kinde"],
    imageUrl: engioPic,
    href: "https://engio.vercel.app/",
  },
];
