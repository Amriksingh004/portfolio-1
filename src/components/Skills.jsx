import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Code2,
  FileCode,
  Braces,
  Layers,
  Palette,
  Atom,
  Server,
  Workflow,
  Network,
  Database,
  Table,
  Zap,
  Flame,
  GitBranch,
  Laptop,
  CloudUpload,
  Sparkles
} from 'lucide-react';
import { skills, skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-purple-400" />;
      case 'Braces':
        return <Braces className="w-5 h-5 text-yellow-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-orange-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-400" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-indigo-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-violet-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-green-400" />;
      case 'Table':
        return <Table className="w-5 h-5 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-orange-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-red-400" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-400" />;
      case 'CloudUpload':
        return <CloudUpload className="w-5 h-5 text-fuchsia-400" />;
      default:
        return <Code2 className="w-5 h-5 text-purple-400" />;
    }
  };

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#07040d] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300">Proficiencies</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            A comprehensive overview of programming languages, frontend and backend technologies, databases, and development tooling.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/50 scale-105'
                    : 'bg-[#120a24]/80 text-slate-400 hover:text-slate-200 border border-purple-500/15 hover:border-purple-500/30 hover:bg-[#1a0f33]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Responsive Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative p-5 rounded-2xl bg-gradient-to-br from-[#130b29]/80 via-[#0f071f]/80 to-[#0a0516]/90 border border-purple-500/20 hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_30px_-5px_rgba(168,85,247,0.3)] hover:-translate-y-1"
              >
                {/* Header row of card: Icon + Name + Category badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#1c113b] border border-purple-500/25 group-hover:scale-110 transition-transform duration-200">
                      {getIcon(skill.icon)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-purple-400/90 capitalize">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4 min-h-[36px]">
                  {skill.description}
                </p>

                {/* Proficiency Visual Bar */}
                <div className="space-y-1.5 pt-2 border-t border-purple-500/15">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>Proficiency</span>
                    <span className="text-purple-300 font-semibold">{skill.levelPercent}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#1b1236] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.levelPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-400"
                    />
                  </div>
                </div>

                {/* Subtle Neon hover glow on edge */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick Skills Summary Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-purple-950/40 border border-purple-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold text-white">
                Strong MERN &amp; Firebase Core Stack
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Full-cycle mastery from React interfaces and Firebase real-time sync to Node/Express REST APIs and MongoDB databases.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold text-purple-200 bg-purple-900/40 hover:bg-purple-800/50 border border-purple-500/30 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            See Practical Projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
