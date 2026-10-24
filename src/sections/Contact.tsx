import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, AlertCircle, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';
import { CopyEmailButton } from '../components/CopyEmailButton';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ready_mailto'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Prepare direct mailto URL
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setStatus('ready_mailto');
      // Trigger user's mail client directly
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-dark-900/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="Interested in hiring an AI/ML intern or collaborating on technical projects? Feel free to reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-dark-850 border border-dark-700/80 space-y-6">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> Direct Communication
              </h3>

              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
                  <Mail size={15} className="text-cyan-400" />
                  <span>EMAIL ADDRESS</span>
                </div>
                <div>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors block"
                  >
                    {profileData.email}
                  </a>
                  <div className="mt-2">
                    <CopyEmailButton />
                  </div>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="space-y-1.5 pt-4 border-t border-dark-800">
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
                  <MapPin size={15} className="text-blue-400" />
                  <span>LOCATION</span>
                </div>
                <div className="text-sm text-slate-200">
                  {profileData.location}
                </div>
                <div className="text-xs text-slate-400">
                  Available for on-site &amp; remote internship roles.
                </div>
              </div>

              {/* Phone */}
              {profileData.phone && (
                <div className="space-y-1.5 pt-4 border-t border-dark-800">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
                    <Phone size={15} className="text-emerald-400" />
                    <span>PHONE / WHATSAPP</span>
                  </div>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="text-sm text-slate-200 hover:text-cyan-400 transition-colors block font-mono"
                  >
                    {profileData.phone}
                  </a>
                </div>
              )}

              {/* Social Profiles */}
              <div className="pt-4 border-t border-dark-800 space-y-3">
                <span className="text-xs font-mono text-slate-400 block">
                  PROFESSIONAL PROFILES
                </span>
                <div className="space-y-2">
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-dark-900 border border-dark-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 text-xs transition-all"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <Linkedin size={16} className="text-[#0A66C2]" /> LinkedIn Profile
                    </span>
                    <span className="font-mono text-slate-500 text-[11px]">&rarr;</span>
                  </a>

                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-dark-900 border border-dark-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 text-xs transition-all"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <Github size={16} className="text-slate-200" /> GitHub Repositories
                    </span>
                    <span className="font-mono text-slate-500 text-[11px]">&rarr;</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-850 border border-dark-700/80 shadow-card">
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-100">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your inquiry details below. Your default mail client will open with pre-filled content.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    YOUR NAME <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-900 border ${
                      errors.name ? 'border-red-500' : 'border-dark-750 focus:border-cyan-500'
                    } text-slate-100 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    YOUR EMAIL <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-900 border ${
                      errors.email ? 'border-red-500' : 'border-dark-750 focus:border-cyan-500'
                    } text-slate-100 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    SUBJECT (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI / ML Internship Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-dark-750 focus:border-cyan-500 text-slate-100 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    MESSAGE <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role details, questions, or project collaboration ideas..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-900 border ${
                      errors.message ? 'border-red-500' : 'border-dark-750 focus:border-cyan-500'
                    } text-slate-100 text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 font-bold text-sm hover:brightness-110 shadow-glow-cyan transition-all disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message (via Mail Client)</span>
                    </>
                  )}
                </button>

                {status === 'ready_mailto' && (
                  <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300 flex items-start gap-2 animate-fadeIn">
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Draft opened in your email client! If it didn't open automatically, send directly to <strong className="text-white">{profileData.email}</strong>.
                    </span>
                  </div>
                )}

                <div className="text-[11px] text-slate-500 text-center pt-2">
                  No third-party trackers. Messages route straight to Michael's verified mailbox.
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
