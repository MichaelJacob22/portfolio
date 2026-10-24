import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Compass, AlertCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-dark-900 border border-dark-700 rounded-2xl shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col animate-scaleUp">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-dark-800 flex items-start justify-between bg-dark-850/60 sticky top-0 z-20 backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-white hover:bg-dark-700 transition-colors ml-4 flex-shrink-0"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          
          {/* Problem Statement Alert */}
          <div className="p-4 rounded-xl bg-dark-800/80 border border-cyan-500/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5 mb-2">
              <AlertCircle size={15} /> Problem Statement
            </h4>
            <p className="text-slate-300 text-sm">
              {project.problemStatement}
            </p>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              Project Overview
            </h4>
            <p className="text-slate-300">
              {project.overview}
            </p>
          </div>

          {/* Actual Contribution */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5 mb-3">
              <CheckCircle2 size={16} className="text-cyan-400" /> My Verified Contributions
            </h4>
            <ul className="space-y-2">
              {project.myContribution.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Implemented Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-1.5 mb-3">
              <Cpu size={16} className="text-blue-400" /> Implemented Key Capabilities
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Roadmap / Planned Improvements */}
          {project.futureRoadmap && project.futureRoadmap.length > 0 && (
            <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-bold flex items-center gap-1.5 mb-2.5">
                <Compass size={15} /> Planned Future Enhancements (Roadmap)
              </h4>
              <ul className="space-y-1.5">
                {project.futureRoadmap.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-violet-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2.5">
              Verified Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-800 text-slate-200 border border-dark-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-dark-800 bg-dark-850 flex items-center justify-between gap-4 flex-wrap">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-slate-200 hover:text-white border border-dark-700 text-sm font-medium transition-colors"
            >
              <Github size={16} />
              <span>View Source on GitHub</span>
              <ExternalLink size={13} className="text-slate-400" />
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-500">
              Repository URL: Private / Academic Prototyping
            </span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-dark-950 font-semibold text-sm transition-colors ml-auto"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
