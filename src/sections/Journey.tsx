import React from 'react';
import { journeyData } from '../data/experience';
import { SectionHeading } from '../components/SectionHeading';
import { Milestone, CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  // Automatically filter out any empty entries to avoid unfinished placeholders
  const validMilestones = journeyData.filter(
    (item) => item.title && item.period && item.summary
  );

  if (validMilestones.length === 0) return null;

  return (
    <section id="journey" className="py-20 bg-dark-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Progress"
          title="Experience &amp; Technical Journey"
          subtitle="Documenting self-directed project development, software milestones, and hardware experimentation."
        />

        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent opacity-40 hidden sm:block" />

          <div className="space-y-10">
            {validMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-5 w-8 h-8 rounded-full bg-dark-900 border-2 border-cyan-400 items-center justify-center text-cyan-400 z-10 shadow-glow-cyan">
                    <Milestone size={14} />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-6 rounded-2xl bg-dark-850 border border-dark-700/80 hover:border-cyan-500/30 transition-all duration-300 shadow-card">
                      
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/20">
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 uppercase">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-100 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {item.takeaways && item.takeaways.length > 0 && (
                        <div className="space-y-1.5 pt-3 border-t border-dark-800">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                            Key Learnings
                          </span>
                          {item.takeaways.map((takeaway, tIdx) => (
                            <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span>{takeaway}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
