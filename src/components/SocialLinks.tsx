import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 20,
  showLabels = false
}) => {
  const links = [
    {
      name: 'GitHub',
      url: profileData.githubUrl,
      icon: <Github size={iconSize} />,
      label: 'github.com/MichaelJacob22'
    },
    {
      name: 'LinkedIn',
      url: profileData.linkedinUrl,
      icon: <Linkedin size={iconSize} />,
      label: 'linkedin.com/in/michaeljacobd'
    },
    {
      name: 'Email',
      url: `mailto:${profileData.email}`,
      icon: <Mail size={iconSize} />,
      label: profileData.email
    }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.name === 'Email' ? undefined : '_blank'}
          rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
          aria-label={link.name}
          className={`group flex items-center gap-2 p-2.5 rounded-lg bg-dark-800/80 border border-dark-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-dark-700/80 transition-all duration-200 shadow-sm`}
        >
          <span className="transition-transform group-hover:scale-110">
            {link.icon}
          </span>
          {showLabels && (
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">
              {link.name}
            </span>
          )}
          {showLabels && link.name !== 'Email' && (
            <ExternalLink size={13} className="text-slate-500 group-hover:text-cyan-400" />
          )}
        </a>
      ))}
    </div>
  );
};
