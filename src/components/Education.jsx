import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-purple-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-indigo-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-cyan-400" />;
      default:
        return <GraduationCap className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="education" className="relative py-24 bg-[#080512]/60 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300">Credentials</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Consistent academic excellence spanning engineering foundations and school distinctions.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-gradient-to-br from-[#130b29]/90 via-[#0e071e]/90 to-[#0a0516]/90 border border-purple-500/20 hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_32px_-5px_rgba(168,85,247,0.3)] hover:-translate-y-1.5"
            >
              <div>
                {/* Icon & Grade Badge Header */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-[#1c113b] border border-purple-500/25 group-hover:scale-110 transition-transform duration-200">
                    {getIcon(item.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-200 border border-purple-400/40 shadow-sm">
                    {item.grade}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5">
                  {item.degree}
                </h3>

                {/* Institution & Location */}
                <div className="text-sm font-medium text-purple-400 mb-1">
                  {item.institution}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-purple-400/80" />
                  <span>{item.location}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-purple-500/15 space-y-1.5">
                {item.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Glowing hover accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
