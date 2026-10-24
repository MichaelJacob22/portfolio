import React from 'react';
import { Github, ExternalLink, ArrowRight, Eye, Network, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  // Select icon based on category
  const renderVisualHeader = () => {
    switch (project.category) {
      case 'Computer Vision & AI':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-dark-850 to-dark-800 p-4 flex flex-col justify-between relative overflow-hidden border-b border-dark-700/60">
            {/* Background grid */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            {/* Simulated Bounding Box Graphic */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/90 text-cyan-400 font-mono text-[11px] border border-cyan-500/30">
                <Eye size={12} /> YOLOv5 Detection Feed
              </span>
              <span className="font-mono text-[10px] text-slate-400 bg-dark-900/80 px-2 py-0.5 rounded border border-dark-700">
                TFLite &bull; Edge ARM
              </span>
            </div>
            {/* Simulated Detection Box */}
            <div className="relative z-10 my-auto mx-auto w-48 h-20 border border-cyan-400/60 rounded flex flex-col justify-between p-1.5 bg-cyan-500/5">
              <div className="flex justify-between items-center text-[10px] font-mono text-cyan-300">
                <span>class: human</span>
                <span>conf: 0.94</span>
              </div>
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                <span>[x1, y1, x2, y2]</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
          </div>
        );
      case 'Full-Stack & LLM':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-dark-850 to-dark-800 p-4 flex flex-col justify-between relative overflow-hidden border-b border-dark-700/60">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-950/90 text-blue-400 font-mono text-[11px] border border-blue-500/30">
                <Network size={12} /> Gemini Agent Pipeline
              </span>
              <span className="font-mono text-[10px] text-slate-400 bg-dark-900/80 px-2 py-0.5 rounded border border-dark-700">
                Django REST &bull; Redis
              </span>
            </div>
            {/* Career match node flow */}
            <div className="relative z-10 my-auto flex items-center justify-center gap-2 text-xs font-mono">
              <div className="px-2.5 py-1 rounded bg-dark-900 border border-dark-700 text-slate-300">
                User Skills
              </div>
              <span className="text-cyan-400">&rarr;</span>
              <div className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                Gemini LLM
              </div>
              <span className="text-cyan-400">&rarr;</span>
              <div className="px-2.5 py-1 rounded bg-dark-900 border border-dark-700 text-slate-300">
                Skill Gap Roadmap
              </div>
            </div>
          </div>
        );
      case 'IoT & Embedded':
      default:
        return (
          <div className="h-44 w-full bg-gradient-to-br from-dark-850 to-dark-800 p-4 flex flex-col justify-between relative overflow-hidden border-b border-dark-700/60">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-violet-950/90 text-violet-400 font-mono text-[11px] border border-violet-500/30">
                <Cpu size={12} /> ESP32-CAM &bull; PIR Rig
              </span>
              <span className="font-mono text-[10px] text-slate-400 bg-dark-900/80 px-2 py-0.5 rounded border border-dark-700">
                Embedded Hardware
              </span>
            </div>
            <div className="relative z-10 my-auto flex items-center justify-center gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-dark-900 border border-dark-700 text-center">
                <div className="text-[10px] font-mono text-slate-400">PIR SENSOR</div>
                <div className="text-xs font-mono text-emerald-400 font-bold">ARMED</div>
              </div>
              <div className="text-violet-400 font-mono text-sm">&rarr;</div>
              <div className="px-3 py-1.5 rounded-lg bg-dark-900 border border-dark-700 text-center">
                <div className="text-[10px] font-mono text-slate-400">ESP32-CAM</div>
                <div className="text-xs font-mono text-cyan-400 font-bold">SNAPSHOT</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="rounded-2xl bg-dark-850 border border-dark-700/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card group hover:-translate-y-1">
      
      {/* Top Visual Canvas Header */}
      {renderVisualHeader()}

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-medium">
              {project.category}
            </span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-dark-800 text-slate-400 border border-dark-700">
              {project.status}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {project.title}
          </h3>

          <p className="mt-2 text-slate-400 text-sm line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-900 text-slate-300 border border-dark-750"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-dark-900 text-slate-500 border border-dark-800">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-dark-800 flex items-center justify-between gap-2">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
          >
            <span>Project Details</span>
            <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-slate-300 hover:text-white border border-dark-700 transition-colors"
                title="View on GitHub"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-slate-300 hover:text-white border border-dark-700 transition-colors"
                title="Live Demo"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
