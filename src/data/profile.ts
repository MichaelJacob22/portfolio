import { ProfileConfig } from '../types';

/**
 * =======================================================================
 * CENTRAL PROFILE CONFIGURATION
 * Edit this file to update personal details, links, or bio information.
 * =======================================================================
 */
export const profileData: ProfileConfig = {
  name: "Michael Jacob",
  title: "AI/ML Engineer in Progress | ECE Student",
  headline: "Building intelligent solutions with AI and Machine Learning.",
  supportingText: "I'm an Electronics and Communication Engineering student exploring Machine Learning, computer vision, and AI-powered applications. I enjoy turning technical ideas into practical projects.",
  
  location: "Erode, Tamil Nadu, India",
  email: "michaeljacobd2211@gmail.com",
  phone: "+91 8122614563",
  githubUrl: "https://github.com/MichaelJacob22",
  linkedinUrl: "https://linkedin.com/in/michaeljacobd",
  resumePath: "/resume.pdf",
  resumeLastUpdated: "October 2024",
  avatarPlaceholderText: "MJ",

  shortBio: [
    "I am an undergraduate in Electronics and Communication Engineering (2024–2028) at Sri Shakthi Institute of Engineering and Technology, affiliated with Anna University.",
    "My focus lies at the convergence of hardware, software, and intelligence. I am intrigued by how mathematical models can extract actionable meaning from video streams, and how lightweight AI models can run on low-power embedded processors.",
    "Rather than treating machine learning as an abstract concept, I prioritize building end-to-end prototypes—from video frame acquisition and preprocessing to model inference and clean backend APIs."
  ],

  primaryInterests: [
    "Artificial Intelligence",
    "Machine Learning & Deep Learning",
    "Computer Vision (YOLO, OpenCV)",
    "Intelligent Automation",
    "Edge AI Deployment (TensorFlow Lite, Raspberry Pi)"
  ],

  careerGoals: [
    "AI Engineer Intern",
    "Machine Learning Intern",
    "Software Engineer Intern"
  ],

  currentlyExploring: [
    {
      title: "Real-Time Object Detection",
      description: "Experimenting with YOLOv5 and Ultralytics architectures for low-latency visual detection and custom object classification.",
      icon: "Eye"
    },
    {
      title: "Edge AI & Embedded Inference",
      description: "Converting neural network models into TensorFlow Lite format to run inference on edge boards like Raspberry Pi without cloud dependency.",
      icon: "Cpu"
    },
    {
      title: "Agentic AI & LLM Systems",
      description: "Integrating LLM APIs (such as Google Gemini) into Django backends to build goal-oriented automation and recommendations.",
      icon: "Network"
    },
    {
      title: "Full-Stack Backend Services",
      description: "Developing robust REST APIs with Django, PostgreSQL/MySQL, SQLite, and Redis caching for scalable application workflows.",
      icon: "Server"
    }
  ]
};
