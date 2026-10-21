import React, { useState } from 'react';
import { Check, Copy, Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio.config';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioConfig;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(personal.socials.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = personal.socials.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} via Portfolio`
    );
    const body = encodeURIComponent(
      `Hello Jose,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );

    window.location.href = `mailto:${personal.socials.email}?subject=${subject}&body=${body}`;
    setStatusMessage('Drafted in your default email client. You can also email directly to ' + personal.socials.email);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#F7F5F0] text-[#111111] py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#111111]/15 overflow-hidden"
    >
      {/* Light Grid Overlay */}
      <div className="absolute inset-0 hero-grid-pattern-light pointer-events-none opacity-50" />

      {/* Crosshair Corner Markers */}
      <span className="crosshair-corner text-[#111111]/30 top-12 left-6 sm:left-12" />
      <span className="crosshair-corner text-[#111111]/30 top-12 right-6 sm:right-12" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#111111]/15 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77736E]">
            <span className="text-[#F04419] font-bold text-sm">✱</span>
            <span>05 // INITIATE DIALOGUE</span>
          </div>

          <div className="font-mono text-xs text-[#77736E] uppercase tracking-wider">
            OPEN FOR COLLABORATION
          </div>
        </div>

        {/* Master Heading */}
        <div className="max-w-5xl mb-14 sm:mb-20 text-left">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.98] text-[#111111] uppercase">
            Let's make something <span className="text-[#F04419]">meaningful.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#77736E] max-w-2xl leading-relaxed">
            Interested in discussing computer vision pipelines, enterprise software, embedded firmware, or high-impact engineering opportunities.
          </p>
        </div>

        {/* Form and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-xs bg-[#FFFFFF] border border-[#111111]/10 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F04419] font-bold block mb-2">
                DIRECT INBOX
              </span>
              <p className="text-sm text-[#77736E] mb-6 leading-relaxed">
                Reach out directly via email or connect through professional networks.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xs bg-[#F7F5F0] border border-[#111111]/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#F04419] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-[#111111] font-bold truncate">
                    {personal.socials.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xs bg-[#111111] hover:bg-[#F04419] text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {copied && (
                <span className="font-mono text-[11px] text-emerald-600 mt-2 block animate-fadeIn font-semibold">
                  ✓ Email copied to clipboard
                </span>
              )}

              {/* Social Channels */}
              <div className="mt-6 pt-6 border-t border-[#111111]/10 space-y-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xs bg-[#F7F5F0] hover:bg-[#111111] text-[#111111] hover:text-white border border-[#111111]/10 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[#F04419]" />
                    <span className="font-mono text-xs font-semibold">github.com/{personal.socials.githubUsername}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77736E] group-hover:text-[#F04419] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xs bg-[#F7F5F0] hover:bg-[#111111] text-[#111111] hover:text-white border border-[#111111]/10 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[#F04419]" />
                    <span className="font-mono text-xs font-semibold">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77736E] group-hover:text-[#F04419] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#77736E]">
                  <MapPin className="w-3.5 h-3.5 text-[#F04419]" />
                  <span>{personal.location} (IST • UTC+05:30)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-xs bg-[#FFFFFF] border border-[#111111]/10 shadow-xs flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#77736E] mb-2 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Chen"
                    className="w-full px-4 py-3 rounded-xs bg-[#F7F5F0] border border-[#111111]/15 focus:border-[#F04419] text-sm text-[#111111] placeholder:text-[#77736E] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#77736E] mb-2 font-bold">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-xs bg-[#F7F5F0] border border-[#111111]/15 focus:border-[#F04419] text-sm text-[#111111] placeholder:text-[#77736E] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#77736E] mb-2 font-bold">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Engineering Role / Project Collaboration / Technical Discussion"
                  className="w-full px-4 py-3 rounded-xs bg-[#F7F5F0] border border-[#111111]/15 focus:border-[#F04419] text-sm text-[#111111] placeholder:text-[#77736E] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#77736E] mb-2 font-bold">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide context on your engineering requirements, timelines, or research objectives..."
                  className="w-full px-4 py-3 rounded-xs bg-[#F7F5F0] border border-[#111111]/15 focus:border-[#F04419] text-sm text-[#111111] placeholder:text-[#77736E] outline-none transition-colors resize-none"
                />
              </div>

              {statusMessage && (
                <div className="p-3.5 rounded-xs bg-[#111111] text-white font-mono text-xs border border-white/10">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xs bg-[#F04419] hover:bg-[#FF4B2B] text-white font-mono text-xs tracking-wider font-semibold transition-all shadow-md cursor-pointer mt-2"
              >
                <span>TRANSMIT INQUIRY</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
