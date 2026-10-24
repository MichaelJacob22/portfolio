import React from 'react';
import { Eye, Cpu, Network, Server, GraduationCap, MapPin, Target } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="text-cyan-400" size={20} />;
      case 'Cpu':
        return <Cpu className="text-blue-400" size={20} />;
      case 'Network':
        return <Network className="text-violet-400" size={20} />;
      case 'Server':
      default:
        return <Server className="text-emerald-400" size={20} />;
    }
  };

  return (
    <section id="about" className="py-20 relative bg-dark-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="Bridging Electronics, Software &amp; Intelligence"
          subtitle="Understanding how hardware signals and deep learning algorithms come together to solve practical problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            {profileData.shortBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Quick Fact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-dark-850 border border-dark-700/80">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-1">
                  <GraduationCap size={15} /> DEGREE
                </div>
                <div className="text-sm font-semibold text-slate-200">B.E. in ECE</div>
                <div className="text-xs text-slate-400">2024 – 2028 Batch</div>
              </div>

              <div className="p-4 rounded-xl bg-dark-850 border border-dark-700/80">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold mb-1">
                  <MapPin size={15} /> LOCATION
                </div>
                <div className="text-sm font-semibold text-slate-200">Erode, TN, India</div>
                <div className="text-xs text-slate-400">Open to Relocation</div>
              </div>

              <div className="p-4 rounded-xl bg-dark-850 border border-dark-700/80">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-1">
                  <Target size={15} /> GOAL
                </div>
                <div className="text-sm font-semibold text-slate-200">AI / ML Intern</div>
                <div className="text-xs text-slate-400">Hands-on Growth</div>
              </div>
            </div>

            {/* Career Goals Callout */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-dark-850 to-blue-950/30 border border-cyan-500/20 mt-4">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                Target Internship Roles
              </span>
              <p className="text-sm text-slate-300">
                Actively preparing for <strong className="text-white">AI Engineer Intern</strong>, <strong className="text-white">Machine Learning Intern</strong>, and <strong className="text-white">Software Engineer Intern</strong> positions where I can contribute to model pipelines and production-grade code.
              </p>
            </div>
          </div>

          {/* Right Column: "Currently Exploring" Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Currently Exploring
            </h3>

            <div className="space-y-3">
              {profileData.currentlyExploring.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-dark-850 border border-dark-700/70 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-dark-900 border border-dark-750 flex-shrink-0 mt-0.5">
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
