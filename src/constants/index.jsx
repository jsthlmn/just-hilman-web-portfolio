import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaY,
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
  { label: "Blog", href: "#blog" },
  { label: "Trivia", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export const PROFILE = {
  name: "Just Hilman ",
  info: "Python Developer Specializing in Data Engineering for Data Solutions. Currently on a Mission to Turn Data Chaos into Clarity🪄",
};

export const ABOUT = {
  text1:
    "I create dynamic, full-stack applications using Python",
  text2:
    "Hello! I'm Hilman, a Python Developer and Data Engineer with a passion for building efficient, scalable data pipelines and solutions. I specialize in transforming raw data into actionable insights by designing robust ETL processes and optimizing data workflows for high performance. With a strong focus on data integrity and a commitment to clean, maintainable code, I thrive on solving complex data challenges and enabling seamless data integration. Outside of work, I continuously explore new tools and technologies to stay ahead in the rapidly evolving world of data engineering. Whether it's architecting a scalable data platform or fine-tuning pipelines for real-time analytics, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "AI Chat Assistant",
    subtitle:
      "An intelligent English-learning chat assistant built with Python, powered by Google Gemini and Whatsapp API. This AI-driven tool engages users in real-time conversations to boost language skills, offering grammar tips, vocabulary suggestions, and natural dialogue flow. A perfect blend of AI, backend engineering, and educational innovation.",
    image: image1,
  },
  {
    title: "Netflix Clone",
    subtitle: "A dynamic Netflix clone crafted with Django and PostgreSQL, designed to mirror the look and feel of the popular streaming giant. Features include user authentication, movie/show browsing, and a sleek UI for an immersive viewing experience.",
    image: image3,
  },
  {
    title: "Spotify Clone",
    subtitle: "A full-featured Spotify clone built with React and Django, replicating the sleek UI and core functionalities of the original platform. Enjoy seamless music browsing, playback, and playlist management in a responsive, modern interface.",
    image: image7,
  },
  {
    title: "Modern Blogging Platform (On-Going)",
    subtitle:
      "A full-stack blogging platform built with Python, React, and PostgreSQL — designed for seamless writing, smooth performance, and a clean user experience from backend to frontend.",
    image: image6,
  },
  {
    title: "Diabetes Prediction Web App — Built with Flask",
    subtitle:
    "A project that predicts diabetes using machine learning. Built with Flask, starts with EDA and feature engineering to prepare public health data. Multiple models (KNN, SVC, Random Forest, Logistic Regression, Decision Tree) were trained and evaluated, with the most accurate one deployed in the app.",
    image: image4,
  },
  {
    title: "Movie Recommendation System",
    subtitle:
    "An intelligent app that personalizes anime suggestions based on user activity. Powered by real-world data from MyAnimeList.com, this project delivers tailored recommendations to enhance user experience and engagement.",
    image: image5,
  },
  {
    title: "End-to-End Data Pipeline with GCP",
    subtitle:
      "This project simulates the real-world workflow of a data engineer using the Google Cloud Platform. It starts with collecting data from APIs, followed by smart data modeling and ETL processing: raw data is ingested into Google Cloud Storage, transformed through intuitive pipelines built with Mage AI, and then loaded into BigQuery for efficient querying. Finally, actionable insights are visualized using Looker Studio, closing the loop from ingestion to impactful data storytelling.",
    image: image2,
  },
  {
    title: "Realtime Data Streaming Pipeline",
    subtitle: "This real-time data streaming pipeline fetches data from APIs and processes it using a robust tech stack: Apache Airflow, Python, Kafka, Zookeeper, Apache Spark, and Cassandra—all orchestrated within Docker containers. Designed for high-throughput, low-latency data flow, this project is a testament to end-to-end streaming architecture and real-world big data engineering.",
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
    experience: "1+ years",
  },
  {
    icon: <GrDocker className="text-4xl lg:text-6xl text-sky-400" />,
    name: "Docker",
    experience: "1+ years",
  },
];

export const ACHIEVEMENT = {
  title: "Will AI Replace Humans? A Glimpse Into the Future of Work and Society",
  award: "Hilman - 2024",
  description:
    "I’ve often wondered about the impact AI will have on our lives and careers. While it’s true that AI is reshaping industries, I believe it’s less about replacement and more about transformation. AI can take over repetitive tasks, freeing us to focus on creativity, strategy, and empathy—things that make us uniquely human.",
};

export const TESTIMONIALS = [
  {
    name: "Fei Fei Li",
    title: "Chief Scientist of AI/ML, Google",
    quote:
      "If Data is the new oil, then AI is the new engine",
    image: user1,
  },
  {
    name: "Elon Musk",
    title: "CEO, Tesla",
    quote:
      "Engineering is the closest thing to magic that exists in the world.",
    image: user2,
  },
  {
    name: "Steve Jobs",
    title: "Co-Founder, Apple",
    quote:
      "Technology is nothing. What’s important is that you have faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.",
    image: user3,
  },
  {
    name: "- Unknown",
    title: "",
    quote:
      "Never let a computer know you’re in a hurry.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/jsthlmn",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.youtube.com/@jsthlmn",
    icon: <FaYoutube fontSize={25} className="hover:opacity-80" />,
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
