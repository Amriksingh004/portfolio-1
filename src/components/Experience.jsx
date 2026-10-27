import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Flame,
  Server
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#07040d] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>PRACTICAL INDUSTRY WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300">Experience</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Hands-on professional software development internships in Mohali, Punjab delivering production web applications and APIs.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-900/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#130b29] border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.6)] z-10">
                    {exp.id === 'coder-roots' ? (
                      <Flame className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Server className="w-4 h-4 text-purple-300" />
                    )}
                  </div>

                  {/* Spacer for half side on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Container */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="group p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#130b29]/90 via-[#0e071e]/90 to-[#0a0516]/90 border border-purple-500/20 hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_30px_-5px_rgba(168,85,247,0.3)]">
                      
                      {/* Top Badges Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                          {exp.role}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Company Name & Location */}
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        <span>{exp.location}</span>
                        <span>&bull;</span>
                        <span className="text-purple-300 font-medium">{exp.type}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Bullet Responsibilities */}
                      <div className="space-y-2 mb-5">
                        {exp.responsibilities.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-500/15">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-[#1c113b] text-purple-200 border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
