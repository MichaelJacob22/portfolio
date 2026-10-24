import { SkillGroup } from '../types';

/**
 * =======================================================================
 * TECHNICAL SKILLS CONFIGURATION
 * Verified technical skills only. No arbitrary percentages or fake progress bars.
 * =======================================================================
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    category: "Programming Languages",
    description: "Core languages used for algorithms, data science, and scripting.",
    icon: "Code2",
    skills: [
      { name: "Python", highlight: true, notes: "Primary language for ML, scripting & backend" },
      { name: "SQL", highlight: true, notes: "Relational queries, schema design, joins" }
    ]
  },
  {
    id: "ml-ai",
    category: "Machine Learning & AI",
    description: "Frameworks, computer vision architectures, and deep learning libraries.",
    icon: "Brain",
    skills: [
      { name: "YOLOv5 / Ultralytics", highlight: true, notes: "Object detection & custom bounding boxes" },
      { name: "OpenCV", highlight: true, notes: "Image preprocessing, frame analysis, video streams" },
      { name: "NumPy & Pandas", highlight: true, notes: "Data wrangling, matrix manipulation, tabular cleaning" },
      { name: "scikit-learn", highlight: false, notes: "Supervised & unsupervised baseline modeling" },
      { name: "PyTorch", highlight: false, notes: "Tensor computation & neural network workflows" },
      { name: "TensorFlow & TF Lite", highlight: true, notes: "Model training and lightweight edge conversion" }
    ]
  },
  {
    id: "backend-web",
    category: "Web & Backend Systems",
    description: "Server architecture, API design, and data persistence.",
    icon: "Server",
    skills: [
      { name: "Django", highlight: true, notes: "MVC web framework, ORM, secure authentication" },
      { name: "Django REST Framework (DRF)", highlight: true, notes: "RESTful endpoints & serializer design" },
      { name: "MySQL & SQLite", highlight: false, notes: "Relational database management" },
      { name: "Redis", highlight: false, notes: "In-memory caching and session acceleration" },
      { name: "JWT Authentication", highlight: false, notes: "Stateless token-based authorization" },
      { name: "HTML5 & CSS3", highlight: false, notes: "Semantic markup and responsive layouts" }
    ]
  },
  {
    id: "tools-platforms",
    category: "Developer Tools & Hardware",
    description: "Version control, experimental environments, and edge computing boards.",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", highlight: true, notes: "Version control, commits, branch management" },
      { name: "Google Colab", highlight: true, notes: "Cloud GPU environment for training & validation" },
      { name: "Raspberry Pi", highlight: true, notes: "Edge ARM single-board computer testing" },
      { name: "VS Code", highlight: false, notes: "Primary IDE & debugger configuration" },
      { name: "Linux CLI", highlight: false, notes: "Command-line file management and process execution" }
    ]
  }
];
