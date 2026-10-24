import React from 'react';
import { Code2, Brain, Server, Wrench, Check } from 'lucide-react';
import { SkillGroup } from '../types';

interface SkillCategoryProps {
  group: SkillGroup;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ group }) => {
  const getIcon = () => {
    switch (group.id) {
      case 'programming':
        return <Code2 className="text-cyan-400" size={20} />;
      case 'ml-ai':
        return <Brain className="text-blue-400" size={20} />;
      case 'backend-web':
        return <Server className="text-violet-400" size={20} />;
      case 'tools-platforms':
      default:
        return <Wrench className="text-emerald-400" size={20} />;
    }
  };

  return (
    <div className="rounded-2xl bg-dark-850 border border-dark-700/80 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 shadow-card">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-dark-900 border border-dark-700/80">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">
              {group.category}
            </h3>
            <p className="text-xs text-slate-400">
              {group.description}
            </p>
          </div>
        </div>

        {/* Skill Items List */}
        <div className="mt-5 space-y-2.5">
          {group.skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-2.5 rounded-xl border transition-colors ${
                skill.highlight
                  ? 'bg-dark-900/90 border-cyan-500/30'
                  : 'bg-dark-900/40 border-dark-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-slate-200 flex items-center gap-2">
                  {skill.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/20">
                    Core
                  </span>
                )}
              </div>
              {skill.notes && (
                <p className="text-xs text-slate-400 mt-1 pl-3.5 leading-relaxed">
                  {skill.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-dark-800 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
        <Check size={13} className="text-emerald-400" /> Verified Project Practice
      </div>
    </div>
  );
};
