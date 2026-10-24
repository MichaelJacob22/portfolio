import React from 'react';
import { skillGroups } from '../data/skills';
import { SkillCategory } from '../components/SkillCategory';
import { SectionHeading } from '../components/SectionHeading';
import { ShieldCheck } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Skills"
          title="Verified Tools &amp; Competencies"
          subtitle="Honest technical capabilities derived from project implementations and academic exploration. No arbitrary percentage meters."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <SkillCategory key={group.id} group={group} />
          ))}
        </div>

        {/* Verification Footer Note */}
        <div className="mt-12 p-4 rounded-xl bg-dark-850/60 border border-dark-750 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-cyan-400 flex-shrink-0" />
            <span>
              All listed technologies reflect hands-on usage in prototypes, scripts, or course labs.
            </span>
          </div>
          <span className="font-mono text-slate-500 text-[11px]">
            Configured centrally via <code className="text-cyan-400/90 font-semibold">src/data/skills.ts</code>
          </span>
        </div>

      </div>
    </section>
  );
};
