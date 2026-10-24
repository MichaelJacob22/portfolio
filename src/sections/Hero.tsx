import React from 'react';
import { ArrowDown, FileText, Sparkles, Eye, Cpu, Database } from 'lucide-react';
import { profileData } from '../data/profile';
import { SocialLinks } from '../components/SocialLinks';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Subtle Tech Accents */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking AI/ML &amp; Software Engineering Internships</span>
            </div>

            {/* Main Greeting & Headline */}
            <div>
              <p className="text-base sm:text-lg font-mono text-cyan-400 tracking-wide mb-1 font-semibold">
                Hi, I'm {profileData.name}.
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.12]">
                Building intelligent solutions with <span className="text-gradient">AI &amp; Machine Learning.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profileData.supportingText}
            </p>

            {/* Quick Tech Highlights Badge Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-xs text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-dark-850 border border-dark-750 flex items-center gap-1.5">
                <Eye size={13} className="text-cyan-400" /> YOLOv5 &bull; OpenCV
              </span>
              <span className="px-2.5 py-1 rounded-md bg-dark-850 border border-dark-750 flex items-center gap-1.5">
                <Cpu size={13} className="text-blue-400" /> Edge AI &bull; TFLite
              </span>
              <span className="px-2.5 py-1 rounded-md bg-dark-850 border border-dark-750 flex items-center gap-1.5">
                <Database size={13} className="text-violet-400" /> Django REST &bull; Redis
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 font-bold text-sm hover:brightness-110 shadow-glow-cyan transition-all"
              >
                <span>Explore My Projects</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="#resume"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-200 hover:text-white border border-dark-700 hover:border-cyan-500/40 font-semibold text-sm transition-all"
              >
                <FileText size={15} className="text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <SocialLinks iconSize={18} />
            </div>

          </div>

          {/* Right Column: Technical Neural / Architecture Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-dark-850 border border-dark-700/80 p-6 shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              
              {/* Subtle top indicator bar */}
              <div className="flex items-center justify-between pb-4 border-b border-dark-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-300 font-semibold ml-1">michael_jacob.py</span>
                </div>
                <span className="text-cyan-400">status: active</span>
              </div>

              {/* Code / Profile Preview Card */}
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-3">
                  {/* Clean Initials Avatar */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold text-xl shadow-glow-cyan">
                    MJ
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-200">Michael Jacob</div>
                    <div className="text-xs text-cyan-400">B.E. Electronics &amp; Comm. (2024–2028)</div>
                    <div className="text-[11px] text-slate-400">Sri Shakthi Inst. of Engg. &amp; Tech.</div>
                  </div>
                </div>

                {/* Simulated Technical Pipeline Schematic */}
                <div className="pt-3 border-t border-dark-800 space-y-2">
                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>ARCHITECTURE FOCUS</span>
                    <span className="text-cyan-400">EDGE TO BACKEND</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded-lg bg-dark-900 border border-dark-800">
                      <div className="text-cyan-400 font-bold">INPUT</div>
                      <div className="text-slate-400 mt-0.5">Video / Stream</div>
                    </div>
                    <div className="p-2 rounded-lg bg-dark-900 border border-cyan-500/30">
                      <div className="text-blue-400 font-bold">MODEL</div>
                      <div className="text-slate-400 mt-0.5">YOLO / TFLite</div>
                    </div>
                    <div className="p-2 rounded-lg bg-dark-900 border border-dark-800">
                      <div className="text-violet-400 font-bold">OUTPUT</div>
                      <div className="text-slate-400 mt-0.5">REST API / Alert</div>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="p-3 rounded-lg bg-dark-900/80 border border-dark-800 text-[11px] space-y-1">
                  <div className="text-slate-400 flex justify-between">
                    <span>Academic Performance:</span>
                    <span className="text-emerald-400 font-bold">CGPA 8.43 / 10.0</span>
                  </div>
                  <div className="text-slate-400 flex justify-between">
                    <span>Core Discipline:</span>
                    <span className="text-slate-300">Electronics &amp; Software</span>
                  </div>
                  <div className="text-slate-400 flex justify-between">
                    <span>Target Roles:</span>
                    <span className="text-cyan-400">AI / ML / SWE Intern</span>
                  </div>
                </div>

                {/* Bottom live indicator */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={12} className="text-cyan-400" />
                    Open to Summer &amp; Term Internships
                  </span>
                  <span className="text-slate-500">Erode, TN</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
