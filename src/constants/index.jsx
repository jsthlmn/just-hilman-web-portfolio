import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { DiPython } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { SiApachehadoop } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import image4 from "../assets/project4.png";
import image5 from "../assets/project5.png";
import image6 from "../assets/project6.png";
import image7 from "../assets/project7.png";
import image8 from "../assets/project8.png";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export const PROFILE = {
  name: "Just Hilman ",
  info: "Python Developer Specializing in Data Engineering for Machine Learning Solutions.",
};

export const ABOUT = {
  text1:
    "I create dynamic, full-stack applications using Python",
  text2:
    "Hello! I'm Hilman, a Python Developer and Data Engineer with a passion for building efficient, scalable data pipelines and solutions. I specialize in transforming raw data into actionable insights by designing robust ETL processes and optimizing data workflows for high performance. With a strong focus on data integrity and a commitment to clean, maintainable code, I thrive on solving complex data challenges and enabling seamless data integration. Outside of work, I continuously explore new tools and technologies to stay ahead in the rapidly evolving world of data engineering. Whether it's architecting a scalable data platform or fine-tuning pipelines for real-time analytics, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "AI Chatbot",
    subtitle:
      "A full-stack chatbot built with Django, OpenAI, and MongoDB.",
    image: image1,
  },
  {
    title: "Social Media App",
    subtitle:
      "A social media application developed using Django and Firebase.",
    image: image2,
  },
  {
    title: "Netflix Clone",
    subtitle: "A netflix clone built with Django and PostgreSQL.",
    image: image3,
  },
  {
    title: "Diabetes Prediction App",
    subtitle:
      "A personal portfolio website that can predict diabetes, built with Flask.",
    image: image4,
  },
  {
    title: "Weather Dashboard",
    subtitle:
      "A weather dashboard application built with React.js and Django.",
    image: image5,
  },
  {
    title: "Blog Platform",
    subtitle:
      "A blogging platform developed with Python, React and PostgreSQL.",
    image: image6,
  },
  {
    title: "Spotify Clone",
    subtitle: "A Spotify clone app developed with React and Django.",
    image: image7,
  },
  {
    title: "Realtime Chat App",
    subtitle: "A Realtime Chat App developed with Python and fastAPI.",
    image: image8,
  },
];

export const SKILLS = [
  {
    icon: <DiPython className="text-4xl lg:text-6xl text-blue-400" />,
    name: "Python",
    experience: "3+ years",
  },
  {
    icon: <SiDjango className="text-4xl lg:text-6xl text-green-400" />,
    name: "Django",
    experience: "1.5+ years",
  },
  {
    icon: <SiApachehadoop className="text-4xl lg:text-6xl text-yellow-400" />,
    name: "Apache Hadoop",
    experience: "1+ year",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-400" />,
    name: "PostgreSQL",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "2+ years",
  },
  {
    icon: <GrDocker className="text-4xl lg:text-6xl text-sky-400" />,
    name: "Docker",
    experience: "1+ years",
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/jsthlmn",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/jsthlmn",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/jsthlmn",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/jsthlmn",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/jsthlmn",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/jsthlmn",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
