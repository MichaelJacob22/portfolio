import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/education';
import { SectionHeading } from '../components/SectionHeading';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academics"
          title="Education &amp; Core Foundations"
          subtitle="Rigorous engineering coursework covering digital systems, signal processing, algorithms, and software engineering."
        />

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-dark-850 border border-dark-700/80 p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-card"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-dark-750 pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-400 flex-shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {item.degree}
                    </h3>
                    <p className="text-base text-cyan-400 font-medium mt-0.5">
                      {item.institution}
                    </p>
                    <p className="text-sm text-slate-400">
                      Affiliated with <strong className="text-slate-300">{item.university}</strong>
                    </p>
                  </div>
                </div>

                <div className="sm:text-right space-y-1 font-mono text-xs text-slate-400 flex-shrink-0">
                  <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin size={13} className="text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                  {item.cgpa && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-bold mt-1">
                      <Award size={13} />
                      <span>CGPA: {item.cgpa}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Coursework & Focus */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5 mb-3">
                    <BookOpen size={14} className="text-cyan-400" /> Key Engineering Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.courseworkHighlights.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-900 text-slate-300 border border-dark-750"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {item.notes && (
                  <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-dark-800">
                    <strong className="text-slate-300">Academic Focus:</strong> {item.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
