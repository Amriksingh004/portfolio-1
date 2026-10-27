import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  MapPin,
  Sparkles,
  Check,
  Copy,
  AlertCircle,
  Clock,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      if (onNotify) {
        onNotify({
          type: 'error',
          title: 'Validation Failed',
          message: 'Please check the highlighted fields before submitting.',
        });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate clean form handling without false delivery claim
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage({
        senderName: formData.name,
        senderEmail: formData.email,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });

      if (onNotify) {
        onNotify({
          type: 'success',
          title: 'Form Submission Recorded',
          message: `Thank you, ${formData.name}! Your message was validated and captured in demo mode.`,
        });
      }

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onNotify) {
      onNotify({
        type: 'success',
        title: 'Email Copied',
        message: `${personalInfo.email} copied to clipboard!`,
      });
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#080512]/70 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300">Touch</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Interested in collaborating on a full-stack project or discussing engineering opportunities? Reach out directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Card */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-[#130b29]/90 via-[#0e071e]/90 to-[#0a0516]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl shadow-purple-950/20">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Feel free to email me directly or copy my address to your clipboard. I typically reply within 24 hours.
              </p>

              {/* Email Row with Copy Button */}
              <div className="p-4 rounded-xl bg-[#170e33] border border-purple-500/25 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-300 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
                      Primary Email
                    </div>
                    <a
                      href={personalInfo.socials.email}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 truncate block transition-colors"
                      title={personalInfo.email}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 border border-purple-500/30 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#170e33]/70 border border-purple-500/15 flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-purple-500/15 text-purple-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
                    Location &amp; University
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    DAV University, Jalandhar &bull; Punjab, India
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-purple-500/15">
                <div className="text-xs font-mono text-slate-400 mb-3">
                  Online Profiles:
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-[#160d33] hover:bg-purple-900/40 border border-purple-500/25 transition-all hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-[#160d33] hover:bg-purple-900/40 border border-purple-500/25 transition-all hover:text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick response pledge banner */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-purple-200 flex items-center gap-3">
              <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>
                Available for internships, full-time developer opportunities, and collaborative projects.
              </span>
            </div>
          </motion.div>

          {/* Right Form Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#130b29]/90 via-[#0e071e]/90 to-[#0a0516]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl shadow-purple-950/20">
              <h3 className="text-xl font-heading font-bold text-white mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Fill out the form below to initiate a discussion.
              </p>

              {/* Success Notification Banner after simulation */}
              {submittedMessage && (
                <div className="mb-6 p-4 rounded-xl bg-[#14261d] border border-emerald-500/40 text-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <p className="font-semibold text-white">
                      Message Captured (Demo Mode)
                    </p>
                    <p className="mt-0.5 text-slate-300">
                      Thank you, <strong className="text-emerald-300">{submittedMessage.senderName}</strong>! Your inputs have passed client-side validation. You can also reach me directly at <a href={`mailto:${personalInfo.email}`} className="text-purple-300 underline font-mono">{personalInfo.email}</a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#180f33]/80 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/30'
                          : 'border-purple-500/25 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#180f33]/80 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/30'
                          : 'border-purple-500/25 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Opportunity Inquiry / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#180f33]/80 border border-purple-500/25 text-white text-xs sm:text-sm placeholder-slate-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 focus:outline-none transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                  >
                    Your Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#180f33]/80 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/30'
                        : 'border-purple-500/25 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Explicit Backend Disclaimer */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-[11px] text-purple-300/90 leading-snug">
                  <AlertCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Service Integration Notice:</strong> Client-side validation active. Form data is recorded in demo mode. Connect EmailJS, Nodemailer, or an API backend in production to route directly to an email inbox.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(147,51,234,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Validating &amp; Recording...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-purple-200" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
