import React from 'react';
import { Download, ExternalLink, FileText, CheckCircle2, Calendar } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Curriculum Vitae"
          title="Resume &amp; Qualifications"
          subtitle="Clean, ATS-compliant resume detailing academic credentials, verified project achievements, and technical skill sets."
        />

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-dark-850 via-dark-800 to-dark-850 border border-dark-700/80 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Left Column: Summary Info */}
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono border border-cyan-500/30">
                  <FileText size={13} />
                  <span>ATS-Optimized Format</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  {profileData.name} — Resume
                </h3>

                <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                  Includes full project breakdowns (YOLOv5 Human Detection, Agentic Platform), engineering coursework, programming competencies, and Anna University credentials.
                </p>

                {profileData.resumeLastUpdated && (
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar size={13} className="text-slate-500" />
                    <span>Last Updated: {profileData.resumeLastUpdated}</span>
                  </div>
                )}

                {/* Verified Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>Single-Page A4 Layout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>Standard Tech Headers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>Verified Project Stack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>Direct Recruiter Contact</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Download & View CTAs */}
              <div className="flex flex-col gap-3.5 w-full sm:w-auto flex-shrink-0">
                <a
                  href={profileData.resumePath}
                  download="Michael_Jacob_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 font-bold text-sm hover:brightness-110 shadow-glow-cyan transition-all"
                >
                  <Download size={16} />
                  <span>Download PDF Resume</span>
                </a>

                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-dark-900 hover:bg-dark-750 text-slate-200 hover:text-white border border-dark-700 hover:border-cyan-500/40 font-semibold text-sm transition-all"
                >
                  <ExternalLink size={15} className="text-cyan-400" />
                  <span>View in Browser (HTML)</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
