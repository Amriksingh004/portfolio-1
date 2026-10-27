import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  ArrowRight,
  Terminal,
  Play,
  Copy,
  Check,
  Cpu
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onNotify }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [copied, setCopied] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState(false);

  const codeSnippets = {
    profile: `// Amrik Singh — Profile Definition
import { Developer } from '@amrik/core';

class FullStackEngineer extends Developer {
  constructor() {
    super();
    this.name = "Amrik Singh";
    this.role = "Full-Stack & MERN Specialist";
    this.education = "DAV University, Jalandhar (B.Tech CSE)";
    this.mindset = "Clean Architecture, High UX & Performance";
  }

  getCurrentStatus() {
    return {
      status: "Available for Full-Stack Opportunities",
      focus: ["React.js", "Node.js", "Express", "MongoDB", "Firebase"],
      passion: "Transforming ambitious ideas into fluid web products"
    };
  }
}

export default new FullStackEngineer();`,

    techstack: `{
  "developer": "Amrik Singh",
  "stack": {
    "frontend": ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"],
    "backend": ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    "databases": ["MongoDB", "Cloud Firestore", "Firebase Realtime DB", "SQL"],
    "tools": ["Git", "VS Code", "Firebase Hosting", "Vite"]
  },
  "strengths": [
    "Rapid Prototyping",
    "Responsive Design",
    "Real-Time Data Sync",
    "Secure REST Endpoints"
  ]
}`,

    terminal: `$ amrik --version
Amrik CLI v2.4.0 (DAV University CSE)

$ amrik status --verbose
[SYSTEM] Initializing MERN developer runtime...
[SUCCESS] React 19 + Node.js v22 environment online.
[READY] 3 Flagship Projects deployed.
[INFO] Contact: as8469004@gmail.com
[STATUS] Ready to build next-generation web applications!`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    if (onNotify) {
      onNotify({
        type: 'success',
        title: 'Copied to Clipboard',
        message: 'Developer code snippet copied successfully!',
      });
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setTerminalOutput(true);
    if (onNotify) {
      onNotify({
        type: 'info',
        title: 'Script Executed',
        message: 'Developer profile runtime compiled successfully.',
      });
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden">
      {/* Background Neon Purple Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
              <span className="text-xs font-medium text-purple-200 tracking-wide">
                Available for Full-Stack &amp; MERN Roles
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.12] mb-4">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-indigo-300 drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                {personalInfo.name}
              </span>
            </h1>

            {/* Title / Role */}
            <div className="flex items-center gap-2 mb-5">
              <div className="h-0.5 w-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
              <h2 className="text-lg sm:text-xl font-medium text-purple-300/90 font-mono tracking-tight">
                {personalInfo.roleTitle}
              </h2>
            </div>

            {/* Introduction Quote */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
              "{personalInfo.shortBio}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Amrik-Singh-Resume.pdf"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-purple-200 bg-[#120a24]/80 hover:bg-purple-900/30 border border-purple-500/30 hover:border-purple-400/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-purple-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons & Email Links */}
            <div className="flex items-center gap-3 pt-2 border-t border-purple-500/15 w-full">
              <span className="text-xs text-slate-400 font-mono mr-2">Connect:</span>
              
              <a
                href={personalInfo.socials.email}
                className="group flex items-center justify-center w-10 h-10 rounded-xl bg-[#140b29] hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400/60 text-slate-300 hover:text-purple-200 transition-all duration-200 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                title="Email Amrik Singh (as8469004@gmail.com)"
                aria-label="Email Amrik Singh"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-xl bg-[#140b29] hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400/60 text-slate-300 hover:text-purple-200 transition-all duration-200 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                title="GitHub Profile"
                aria-label="Amrik Singh GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-xl bg-[#140b29] hover:bg-purple-600/30 border border-purple-500/20 hover:border-purple-400/60 text-slate-300 hover:text-purple-200 transition-all duration-200 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                title="LinkedIn Profile"
                aria-label="Amrik Singh LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-purple-300/80 font-mono">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                <span>MERN &bull; React &bull; Firebase</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Decorative Code Window (No Personal Photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Surrounding Neon Violet Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/30 via-fuchsia-600/20 to-indigo-600/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Code Window Container */}
              <div className="relative rounded-2xl bg-[#0d071d]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Mac-Style Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#130b29]/95 border-b border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                  </div>

                  {/* Window Tabs */}
                  <div className="flex items-center gap-1 bg-[#090514] p-1 rounded-lg border border-purple-500/15">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === 'profile'
                          ? 'bg-purple-900/60 text-purple-200 border border-purple-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Amrik.js
                    </button>
                    <button
                      onClick={() => setActiveTab('techstack')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === 'techstack'
                          ? 'bg-purple-900/60 text-purple-200 border border-purple-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      stack.json
                    </button>
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === 'terminal'
                          ? 'bg-purple-900/60 text-purple-200 border border-purple-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      bash
                    </button>
                  </div>

                  {/* Actions: Copy & Run */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 rounded-md text-slate-400 hover:text-purple-300 hover:bg-purple-900/30 transition-colors"
                      title="Copy Code"
                      aria-label="Copy code to clipboard"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-purple-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={handleRunCode}
                      className="p-1.5 rounded-md text-slate-400 hover:text-purple-300 hover:bg-purple-900/30 transition-colors"
                      title="Simulate Execution"
                      aria-label="Run script"
                    >
                      <Play className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto max-h-[380px]">
                  <pre className="whitespace-pre">
                    {activeTab === 'profile' && (
                      <code>
                        <span className="text-purple-400">// Amrik Singh — Profile Definition</span>{'\n'}
                        <span className="text-pink-400">import</span> &#123; Developer &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">'@amrik/core'</span>;{'\n\n'}
                        <span className="text-indigo-400">class</span> <span className="text-yellow-300">FullStackEngineer</span> <span className="text-indigo-400">extends</span> <span className="text-yellow-300">Developer</span> &#123;{'\n'}
                        {'  '}<span className="text-indigo-400">constructor</span>() &#123;{'\n'}
                        {'    '}<span className="text-pink-400">super</span>();{'\n'}
                        {'    '}<span className="text-purple-300">this</span>.name = <span className="text-emerald-300">"Amrik Singh"</span>;{'\n'}
                        {'    '}<span className="text-purple-300">this</span>.role = <span className="text-emerald-300">"Full-Stack &amp; MERN Specialist"</span>;{'\n'}
                        {'    '}<span className="text-purple-300">this</span>.university = <span className="text-emerald-300">"DAV University, Jalandhar"</span>;{'\n'}
                        {'    '}<span className="text-purple-300">this</span>.stack = [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Node"</span>, <span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"MongoDB"</span>];{'\n'}
                        {'  '}&#125;{'\n\n'}
                        {'  '}<span className="text-yellow-300">buildModernApp</span>() &#123;{'\n'}
                        {'    '}<span className="text-pink-400">return</span> &#123;{'\n'}
                        {'      '}responsiveness: <span className="text-cyan-400">true</span>,{'\n'}
                        {'      '}cleanArchitecture: <span className="text-cyan-400">true</span>,{'\n'}
                        {'      '}realtimeSync: <span className="text-cyan-400">true</span>{'\n'}
                        {'    '}&#125;;{'\n'}
                        {'  '}&#125;{'\n'}
                        &#125;{'\n\n'}
                        <span className="text-pink-400">export default new</span> <span className="text-yellow-300">FullStackEngineer</span>();
                      </code>
                    )}

                    {activeTab === 'techstack' && (
                      <code>
                        <span className="text-purple-400">&#123;</span>{'\n'}
                        {'  '}<span className="text-pink-400">"engineer"</span>: <span className="text-emerald-300">"Amrik Singh"</span>,{'\n'}
                        {'  '}<span className="text-pink-400">"coreStack"</span>: &#123;{'\n'}
                        {'    '}<span className="text-cyan-300">"frontend"</span>: [<span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>],{'\n'}
                        {'    '}<span className="text-cyan-300">"backend"</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express.js"</span>, <span className="text-emerald-300">"REST APIs"</span>],{'\n'}
                        {'    '}<span className="text-cyan-300">"database"</span>: [<span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"Firebase Firestore"</span>],{'\n'}
                        {'    '}<span className="text-cyan-300">"languages"</span>: [<span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"C++"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"C"</span>]{'\n'}
                        {'  '}&#125;,{'\n'}
                        {'  '}<span className="text-pink-400">"availability"</span>: <span className="text-emerald-300">"Open for Roles &amp; Projects"</span>{'\n'}
                        <span className="text-purple-400">&#125;</span>
                      </code>
                    )}

                    {activeTab === 'terminal' && (
                      <code className="text-slate-300">
                        <span className="text-purple-400">$</span> node --version{'\n'}
                        v22.20.0{'\n'}
                        <span className="text-purple-400">$</span> npm run build:portfolio{'\n'}
                        <span className="text-emerald-400">&#10003; 3 Flagship Projects bundled</span>{'\n'}
                        <span className="text-emerald-400">&#10003; MERN + Firebase services configured</span>{'\n'}
                        <span className="text-cyan-400">&#8594; Ready to deliver impact at scale!</span>
                      </code>
                    )}
                  </pre>

                  {/* Pulsing Cursor */}
                  <span className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-0.5 align-middle" />
                </div>

                {/* Simulated Terminal Drawer (Runs when Play button is pressed) */}
                {terminalOutput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-3 bg-[#080312] border-t border-purple-500/20 font-mono text-[11px] text-purple-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Console: Amrik's runtime active &bull; Build status: 100%</span>
                    </div>
                    <button
                      onClick={() => setTerminalOutput(false)}
                      className="text-slate-400 hover:text-white text-[10px] px-1.5 py-0.5 rounded bg-purple-900/30"
                    >
                      Clear
                    </button>
                  </motion.div>
                )}

                {/* Code Window Footer Info Bar */}
                <div className="px-4 py-2.5 bg-[#0a0516] border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>UTF-8</span>
                    <span>&bull;</span>
                    <span>JavaScript (React)</span>
                  </div>
                  <div className="text-purple-300/80">
                    DAV University &bull; CSE
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
