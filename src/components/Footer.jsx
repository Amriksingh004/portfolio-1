import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-[#050309] border-t border-purple-500/15 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-purple-500/15">
          
          {/* Left: AS Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-900/70 to-indigo-900/70 border border-purple-500/40 group-hover:border-purple-400 transition-colors shadow-sm">
                <span className="font-heading font-black text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200">
                  AS
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                  {personalInfo.name}
                </span>
                <p className="text-[11px] font-mono text-purple-400/90 -mt-1">
                  Full-Stack &amp; MERN Developer
                </p>
              </div>
            </a>
            <p className="text-xs text-slate-400 max-w-sm mt-3 leading-relaxed">
              Crafting modern, responsive, and user-friendly web applications with clean architecture and reactive state management.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-purple-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.email}
              className="p-2.5 rounded-xl bg-[#140b29] hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400/60 text-slate-300 hover:text-white transition-all shadow-sm"
              title="Send an Email"
              aria-label="Email Amrik Singh"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#140b29] hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400/60 text-slate-300 hover:text-white transition-all shadow-sm"
              title="GitHub Profile"
              aria-label="Amrik Singh GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#140b29] hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400/60 text-slate-300 hover:text-white transition-all shadow-sm"
              title="LinkedIn Profile"
              aria-label="Amrik Singh LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 hover:text-white transition-all ml-2 flex items-center gap-1 text-xs font-mono group"
              title="Scroll to Top"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React 19, Tailwind CSS &amp; Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
