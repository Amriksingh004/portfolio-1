import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-[#07040d] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>CREDENTIALS &amp; COMPETITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Certifications &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300">Achievements</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Verified industrial training certifications, university hackathons, and technical workshops.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#130b29]/90 via-[#0e071e]/90 to-[#0a0516]/90 border border-purple-500/20 hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_30px_-5px_rgba(168,85,247,0.3)] hover:-translate-y-1"
            >
              <div>
                {/* Header row: Badge + Date */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${cert.badgeColor}`}>
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-medium text-purple-400 mt-1 mb-3">
                  Issued by: {cert.issuer}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Skills covered pills */}
              <div className="pt-3 border-t border-purple-500/15 flex flex-wrap gap-1.5">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/40 text-purple-300 border border-purple-500/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
