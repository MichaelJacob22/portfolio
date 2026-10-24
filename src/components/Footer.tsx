import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-extrabold text-lg text-slate-100">
                {profileData.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-dark-800 text-cyan-400 font-mono border border-dark-700">
                AI / ML
              </span>
            </div>
            <p className="text-slate-400 text-sm mt-1 max-w-sm">
              Electronics &amp; Communication Engineering student building practical AI and computer vision solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <SocialLinks iconSize={18} />
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-cyan-400 border border-dark-700/80 text-xs font-medium transition-all group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-8 border-t border-dark-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>
            &copy; {currentYear} {profileData.name}. All verified projects &amp; academic information.
          </p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
