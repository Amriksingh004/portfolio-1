import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Server,
  Flame,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { stats } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: 'Full-Stack Development',
      description:
        'Architecting cohesive web systems from reactive frontend interfaces to modular server architectures and secure API endpoints.',
      icon: Layers,
      color: 'from-purple-500/20 to-indigo-500/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
    {
      title: 'MERN Stack Mastery',
      description:
        'Hands-on expertise spanning MongoDB, Express.js, React.js, and Node.js with production RESTful routing, schema validation, and state pipelines.',
      icon: Server,
      color: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
    },
    {
      title: 'Cloud & Real-Time Sync',
      description:
        'Specialized in Google Firebase ecosystem: Firebase Auth, Realtime Database listeners, Cloud Firestore collections, and automated Firebase Hosting.',
      icon: Flame,
      color: 'from-violet-500/20 to-fuchsia-500/20',
      borderColor: 'border-fuchsia-500/30',
      iconColor: 'text-fuchsia-400',
    },
    {
      title: 'Performance & Clean Code',
      description:
        'Obsessed with writing clean, modular components, rigorous error handling, lightning-fast rendering, and accessible user experiences.',
      icon: Cpu,
      color: 'from-cyan-500/20 to-purple-500/20',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#080512]/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>DISCOVER MY BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300">Me</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Computer Science and Engineering student at <strong className="text-purple-300 font-semibold">DAV University</strong> with real-world experience building scalable, accessible, and high-impact web products.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Story Card (Left 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-br from-[#130b29]/90 via-[#0e071e]/90 to-[#0a0516]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl shadow-purple-950/20"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Engineering Foundation &amp; Full-Stack Focus
                  </h3>
                  <p className="text-xs font-mono text-purple-400">
                    B.Tech CSE &bull; DAV University, Jalandhar
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  I am currently pursuing my <strong>B.Tech in Computer Science and Engineering</strong> at DAV University. Throughout my academic journey, I have prioritized transforming theoretical computer science foundations into concrete, production-ready web software.
                </p>
                <p>
                  Having completed immersive internships at <strong>Coder Roots</strong> and <strong>ThinkNEXT</strong> in Mohali, I gained extensive practical hands-on experience developing full-cycle <strong>MERN (MongoDB, Express, React, Node.js)</strong> applications and building cloud-integrated platforms with <strong>Google Firebase</strong>.
                </p>
                <p>
                  I love writing clean code, architecting maintainable component hierarchies, and crafting digital experiences that feel intuitive, blazingly fast, and genuinely enjoyable for end users.
                </p>
              </div>

              {/* Core Attributes Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-purple-500/15">
                {[
                  'Hands-on React & Hooks Architecture',
                  'RESTful Endpoints & Middleware',
                  'Firebase Realtime & Cloud Firestore',
                  'MongoDB Data Modeling & Aggregation',
                  'Clean, Responsive Tailwind CSS UI',
                  'Version Control & Deployment Pipelines',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* University & Contact quick badge */}
            <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-purple-500/15 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-purple-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                DAV University Student
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-sans font-medium transition-colors"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Metrics / Stats & Pillars (Right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Quick Metrics Row */}
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-[#110924]/80 border border-purple-500/20 backdrop-blur-md hover:border-purple-400/40 transition-colors shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Strengths Cards */}
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`p-4 rounded-xl bg-[#0f0920]/80 border ${pillar.borderColor} backdrop-blur-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-white/[0.04] ${pillar.iconColor} flex-shrink-0 mt-0.5`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white tracking-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
