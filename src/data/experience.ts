import { JourneyMilestone } from '../types';

/**
 * =======================================================================
 * EXPERIENCE & TECHNICAL JOURNEY
 * Documents real engineering milestones, self-directed research, and projects.
 * No fabricated employment history or fake job titles.
 * =======================================================================
 */
export const journeyData: JourneyMilestone[] = [
  {
    period: "2024 – Present",
    title: "Edge Computer Vision & Deep Learning Exploration",
    type: "Project",
    summary: "Initiated hands-on experiments with YOLOv5 and OpenCV. Explored model optimization pipelines to convert deep neural networks into TensorFlow Lite format for deployment on edge devices like Raspberry Pi.",
    takeaways: [
      "Trained and evaluated custom object detection models on Google Colab GPU runtimes.",
      "Engineered real-time video streaming pipelines with OpenCV.",
      "Learned practical trade-offs between model quantization, FPS throughput, and inference precision."
    ]
  },
  {
    period: "2024",
    title: "Full-Stack AI Application Architecture",
    type: "Milestone",
    summary: "Built an end-to-end backend for the Agentic Career Platform using Django, integrating external LLM APIs (Google Gemini) and implementing Redis caching.",
    takeaways: [
      "Mastered Django REST Framework architecture and serializer design.",
      "Gained experience implementing JWT stateless authentication and relational schema indexing.",
      "Integrated prompt engineering workflows for structured JSON extraction via Gemini API."
    ]
  },
  {
    period: "2024",
    title: "Embedded Systems & IoT Hardware Integration",
    type: "Academic",
    summary: "Designed and built Telegaurd, combining an ESP32-CAM module, PIR motion sensor, and Arduino Uno to create a power-conscious event-triggered surveillance rig.",
    takeaways: [
      "Calibrated analog and digital sensors to eliminate false positive triggers.",
      "Flashed microcontroller firmware and managed hardware communication protocols.",
      "Connected embedded electronics with visual sensor hardware."
    ]
  }
];
