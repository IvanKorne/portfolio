import React from "react";
import { ChevronsLeftRight, TramFront, Bot } from "lucide-react";
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
    title: "Azure AI Project Intern",
    location: "WE Accelerate - Remote, CA",
    description:
      "Worked in a team to create a ChatBot for medical researchers, recieving two Microsoft certifications in the process.",
    icon: React.createElement(Bot),
    date: "Jan 2024 - April 2024",
  },
  {
    title: "Embedded Software Engineer",
    location: "Waterloo Aerial Group - Kitchener, CA",
    description:
      "Experienced in analyzing electrical components and data protocols (UART, I2C) from data sheets, and skilled in debugging and ensuring the functionality of code implementations for drone systems.",
    icon: React.createElement(ChevronsLeftRight),
    date: "May 2024 - July 2024",
  },
  {
    title: "Frontend Developer Intern",
    location: "Blaise Transit - Montreal, CA",
    description:
      "Assisted in creating and maintaining the user interface of web applications, collaborating closely with the development team to translate design mockups into interactive, responsive web pages. ",
    icon: React.createElement(TramFront),
    date: "Sept 2024 - Jan 2024",
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
