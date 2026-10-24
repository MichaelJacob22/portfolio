import React, { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

export const CopyEmailButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-dark-800 border border-dark-700 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all text-xs font-mono group"
      title="Click to copy email address"
      aria-label="Copy email address"
    >
      <Mail size={14} className="text-cyan-400" />
      <span>{profileData.email}</span>
      {copied ? (
        <span className="flex items-center gap-1 text-emerald-400 font-sans font-semibold text-xs ml-1">
          <Check size={14} /> Copied!
        </span>
      ) : (
        <Copy size={13} className="text-slate-500 group-hover:text-cyan-400 transition-colors ml-1" />
      )}
    </button>
  );
};
