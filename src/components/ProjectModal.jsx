import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, isOpen, onClose, onNotify }) {
  if (!isOpen || !project) return null;

  const handlePlaceholderClick = (type) => {
    if (onNotify) {
      onNotify({
        type: 'info',
        title: `${type === 'demo' ? 'Live Demo Preview' : 'Repository Access'}`,
        message: `This is a showcase demonstration for "${project.title}". Repository and deployment links are ready for configured production environments.`,
      });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#05020a]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#0f0822] border border-purple-500/30 shadow-2xl shadow-purple-950/70 overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#140b2e] border-b border-purple-500/20">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-purple-300">
                {project.title.toLowerCase()}.overview
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/40 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
            
            {/* Title & Tag */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  &bull; {project.tag}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-purple-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <div className="text-sm text-slate-300 leading-relaxed space-y-3 bg-[#0a0517] p-5 rounded-xl border border-purple-500/15">
              <p>{project.longDescription}</p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Key Architectural Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#130b29]/60 border border-purple-500/15 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-900/30 text-purple-200 border border-purple-500/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer Notice regarding placeholders */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200">
              <AlertCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Project Deployment Notice:</strong> As required by portfolio standards, links point to demonstration mode placeholders to avoid broken or unverified links. Source code and live demos can be demonstrated during technical discussions.
              </span>
            </div>

            {/* Action Buttons in Modal */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-purple-500/20">
              <button
                onClick={() => handlePlaceholderClick('github')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-[#160d33] hover:bg-purple-900/40 border border-purple-500/30 transition-all hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </button>
              <button
                onClick={() => handlePlaceholderClick('demo')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/50 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Preview</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
