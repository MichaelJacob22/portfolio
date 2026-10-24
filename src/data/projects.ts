import { Project } from '../types';

/**
 * =======================================================================
 * FEATURED PROJECTS CONFIGURATION
 * All project metrics and contributions are strictly verified.
 * Distinguishes implemented features from planned future roadmap items.
 * =======================================================================
 */
export const projectsData: Project[] = [
  {
    id: "yolo-human-detection",
    title: "YOLO-Based Human Detection for Disaster Management",
    category: "Computer Vision & AI",
    isFeatured: true,
    status: "Prototype Completed",
    shortDescription: "Computer vision pipeline detecting individuals in visual feeds to accelerate search-and-rescue screening in simulated disaster scenarios.",
    problemStatement: "During post-disaster rescue operations, first responders must analyze hours of aerial and ground surveillance footage. Manual visual screening is slow and causes fatigue, delaying critical survivor extraction.",
    overview: "This project explores applying deep learning object detection (YOLOv5) to identify human survivors in video feeds and still frames. The system was trained, validated, and evaluated inside Google Colab, then converted to lightweight formats for edge deployment.",
    technologies: [
      "Python",
      "YOLOv5 / Ultralytics",
      "OpenCV",
      "Google Colab",
      "TensorFlow Lite",
      "Raspberry Pi"
    ],
    myContribution: [
      "Configured YOLOv5 model weights and evaluated detection confidence across diverse lighting and occlusion scenarios in Google Colab.",
      "Built an OpenCV video ingestion workflow to process multi-frame sequences, rendering bounding boxes and detection confidence tags in real time.",
      "Exported the trained detection model to TensorFlow Lite (.tflite) format and performed initial benchmark tests for on-device inference on a Raspberry Pi edge board."
    ],
    keyFeatures: [
      "Real-time bounding box localization and confidence scoring for human presence.",
      "Modular frame-processing script supporting both static images and continuous video files.",
      "Exploratory edge quantization reducing model memory footprint for low-power computing hardware."
    ],
    futureRoadmap: [
      "Integration with drone-mounted high-altitude video feeds.",
      "Thermal / IR camera video ingestion for nighttime survivor localization.",
      "Onboard GPS coordinate tagging to pinpoint identified survivor locations."
    ],
    githubUrl: "https://github.com/MichaelJacob22",
    liveUrl: undefined,
    imagePlaceholderTitle: "YOLOv5 Detection Pipeline"
  },
  {
    id: "agentic-ai-platform",
    title: "Agentic AI Platform for Jobs, Internships & Hackathons",
    category: "Full-Stack & LLM",
    isFeatured: true,
    status: "In Active Development",
    shortDescription: "AI-assisted career opportunity aggregator that matches student profiles with openings and generates personalized skill-gap roadmaps.",
    problemStatement: "Undergraduate students miss high-value internships and hackathons because listings are fragmented across dozens of platforms, and job descriptions rarely clarify which specific skills applicants are missing.",
    overview: "An opportunity discovery platform built with a Python/Django backend. It integrates the Google Gemini API to parse job requirements against student competencies, providing targeted recommendations and action items.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "Gemini API",
      "REST APIs",
      "SQLite",
      "Redis"
    ],
    myContribution: [
      "Architected relational schema and REST API endpoints in Django to manage opportunity data (deadlines, skills, categories).",
      "Constructed prompt templates and API connectors for Google Gemini to deliver automated skill-gap analysis.",
      "Configured Redis caching on high-frequency opportunity queries to minimize redundant database lookups."
    ],
    keyFeatures: [
      "Structured opportunity filtering by category (Internship, Hackathon, Full-Time) and required tech stack.",
      "LLM-powered skill-gap analyzer comparing user skill tags against role descriptions.",
      "Clean RESTful endpoints ready for consumption by modern web and mobile frontends."
    ],
    futureRoadmap: [
      "Vector embeddings with pgvector for semantic search across job postings.",
      "Automated weekly email digests summarizing newly posted hackathons.",
      "Resume PDF parser for automatic profile skill population."
    ],
    githubUrl: "https://github.com/MichaelJacob22",
    liveUrl: undefined,
    imagePlaceholderTitle: "Agentic Career Aggregator"
  },
  {
    id: "teleguard-esp32-surveillance",
    title: "Telegaurd — ESP32-CAM Smart Surveillance",
    category: "IoT & Embedded",
    isFeatured: true,
    status: "Hardware Validated",
    shortDescription: "Microcontroller-based IoT surveillance prototype featuring motion-triggered camera capture and local hardware status reporting.",
    problemStatement: "Continuous video recording wastes substantial power and storage bandwidth, while commercial smart cameras rely heavily on expensive cloud subscriptions and uninterrupted internet connections.",
    overview: "Telegaurd is an embedded hardware security project that pairs a passive infrared (PIR) motion sensor with an ESP32-CAM module and an Arduino Uno. The camera module remains idle until physical motion is detected, drastically cutting power and storage consumption.",
    technologies: [
      "ESP32-CAM",
      "PIR Motion Sensor",
      "Arduino Uno",
      "C++ / Embedded C",
      "LCD Display Module",
      "Breadboard Prototyping"
    ],
    myContribution: [
      "Wired and calibrated the PIR motion sensor sensitivity thresholds to minimize ambient false triggers.",
      "Flashed and configured ESP32-CAM firmware to trigger image snapshot upon digital high pin signals.",
      "Interfaced an 16x2 LCD display to Arduino Uno for local real-time device health diagnostics and trigger counts."
    ],
    keyFeatures: [
      "Event-driven sensor activation: Camera captures images only upon motion detection.",
      "Low idle power consumption compared to continuous streaming devices.",
      "Local hardware feedback display showing system readiness and trigger counters."
    ],
    futureRoadmap: [
      "Wi-Fi alert dispatch sending captured snapshots directly to a Telegram bot channel.",
      "Onboard MicroSD card circular buffer logging for offline evidence storage.",
      "Micro-ML human presence classifier running directly on the ESP32 chip."
    ],
    githubUrl: "https://github.com/MichaelJacob22",
    liveUrl: undefined,
    imagePlaceholderTitle: "ESP32-CAM IoT Security Rig"
  }
];
