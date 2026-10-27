import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  ShoppingBag,
  GraduationCap,
  Store,
  Flame,
  Play,
  ShoppingCart,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ onNotify }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleActionClick = (e, project, type) => {
    e.preventDefault();
    if (type === 'modal') {
      setSelectedProject(project);
    } else {
      if (onNotify) {
        onNotify({
          type: 'info',
          title: type === 'demo' ? `${project.title} Demo` : `${project.title} Repository`,
          message: `Demonstration placeholder active for ${project.title}. Full architecture and code inspection available in the details modal.`,
        });
      }
      setSelectedProject(project);
    }
  };

  /* Render Visual Mockup for UNI-Demands */
  const renderMarketplaceMock = () => (
    <div className="w-full h-48 sm:h-52 bg-[#0c061a] rounded-xl p-3 sm:p-4 border border-purple-500/20 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] group-hover:border-purple-400/40 transition-colors">
      {/* Top simulated browser bar */}
      <div className="flex items-center justify-between pb-2 border-b border-purple-500/15">
        <div className="flex items-center gap-1.5">
          <Store className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-white font-semibold tracking-tight">UNI-Demands Portal</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-purple-300">RBAC: Dept Admin</span>
        </div>
      </div>

      {/* Mock Items Grid */}
      <div className="grid grid-cols-2 gap-2 my-2">
        <div className="p-2 rounded-lg bg-[#150c2e] border border-purple-500/15">
          <div className="text-[10px] text-slate-400">Department Order</div>
          <div className="text-white font-semibold text-xs truncate">Robotics Lab Kit</div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-[9px] text-purple-300 font-bold">Qty: 25</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-sans">
              Approved
            </span>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-[#150c2e] border border-purple-500/15">
          <div className="text-[10px] text-slate-400">Campus Requisition</div>
          <div className="text-white font-semibold text-xs truncate">Embedded Systems Core</div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-[9px] text-purple-300 font-bold">Qty: 10</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-sans">
              Processing
            </span>
          </div>
        </div>
      </div>

      {/* Bottom status strip */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-purple-500/15">
        <span className="flex items-center gap-1 text-purple-300">
          <ShieldCheck className="w-3 h-3 text-cyan-400" />
          Role-Based Access
        </span>
        <span className="text-slate-500">MERN Architecture</span>
      </div>
    </div>
  );

  /* Render Visual Mockup for PrepMate */
  const renderElearningMock = () => (
    <div className="w-full h-48 sm:h-52 bg-[#0c061a] rounded-xl p-3 sm:p-4 border border-purple-500/20 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] group-hover:border-purple-400/40 transition-colors">
      {/* Top simulated browser bar */}
      <div className="flex items-center justify-between pb-2 border-b border-purple-500/15">
        <div className="flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5 text-fuchsia-400" />
          <span className="text-white font-semibold tracking-tight">PrepMate Classroom</span>
        </div>
        <div className="flex items-center gap-1">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[10px] text-amber-300">Firebase Synced</span>
        </div>
      </div>

      {/* Simulated video playback screen */}
      <div className="relative rounded-lg bg-[#160d33] border border-fuchsia-500/20 p-2.5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0 shadow-md">
          <Play className="w-4 h-4 text-white fill-white ml-0.5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] text-fuchsia-300 font-sans font-medium">Lecture 08 &bull; In Progress</div>
          <div className="text-white font-semibold text-xs truncate">State Management &amp; Firestore Listeners</div>
          <div className="w-full h-1 bg-[#26154d] rounded-full mt-1.5 overflow-hidden">
            <div className="w-3/5 h-full bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Modules strip */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-purple-500/15">
        <span className="text-fuchsia-300 font-medium">12 Video Chapters</span>
        <span className="text-slate-400">PDF Notes Sync</span>
      </div>
    </div>
  );

  /* Render Visual Mockup for ShopZone */
  const renderEcommerceMock = () => (
    <div className="w-full h-48 sm:h-52 bg-[#0c061a] rounded-xl p-3 sm:p-4 border border-purple-500/20 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] group-hover:border-purple-400/40 transition-colors">
      {/* Top simulated browser bar */}
      <div className="flex items-center justify-between pb-2 border-b border-purple-500/15">
        <div className="flex items-center gap-1.5">
          <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-white font-semibold tracking-tight">ShopZone Store</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-900/40 text-[10px] text-purple-300 border border-purple-500/20">
          <ShoppingCart className="w-3 h-3 text-cyan-400" />
          <span>Cart: 3</span>
        </div>
      </div>

      {/* Product Grid Mock */}
      <div className="grid grid-cols-2 gap-2 my-2">
        <div className="p-2 rounded-lg bg-[#140c2e] border border-purple-500/15">
          <div className="text-[10px] text-slate-400 truncate">Mechanical Pro</div>
          <div className="text-emerald-400 font-bold text-xs mt-0.5">$89.99</div>
          <div className="text-[9px] text-purple-300 mt-1">In Stock: 14</div>
        </div>
        <div className="p-2 rounded-lg bg-[#140c2e] border border-purple-500/15">
          <div className="text-[10px] text-slate-400 truncate">Noise Shield ANC</div>
          <div className="text-emerald-400 font-bold text-xs mt-0.5">$129.50</div>
          <div className="text-[9px] text-purple-300 mt-1">In Stock: 8</div>
        </div>
      </div>

      {/* Admin Panel ticker */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-purple-500/15">
        <span className="text-cyan-300 font-medium">Admin Product CRUD</span>
        <span className="text-slate-500 font-mono">REST: 200 OK</span>
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative py-24 bg-[#080512]/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-800/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300">Projects</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Real-world full-stack web applications built with the MERN stack and Firebase cloud infrastructure.
          </p>
        </div>

        {/* 3 Premium Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#130b29]/90 via-[#0e071e]/90 to-[#090514]/95 border border-purple-500/20 hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_15px_35px_-5px_rgba(168,85,247,0.35)] hover:-translate-y-1.5 p-6"
            >
              <div>
                {/* Visual Preview Header */}
                <div className="mb-5 relative">
                  {project.mockType === 'marketplace' && renderMarketplaceMock()}
                  {project.mockType === 'elearning' && renderElearningMock()}
                  {project.mockType === 'ecommerce' && renderEcommerceMock()}

                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-950/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <div className="mb-3">
                  <span className="text-xs font-mono font-medium text-purple-400">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors mt-0.5">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-1.5 mb-5 bg-[#0a0516]/60 p-3 rounded-xl border border-purple-500/10">
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <span className="text-purple-400 font-bold mt-0.5">&#8226;</span>
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-950/50 text-purple-200 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Demo, GitHub, and Details */}
              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between gap-2">
                <button
                  onClick={(e) => handleActionClick(e, project, 'modal')}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-2.5 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  <span>Inspect</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleActionClick(e, project, 'github')}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-200 bg-[#160d33] hover:bg-purple-900/40 border border-purple-500/25 transition-all hover:text-white"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </button>

                  <button
                    onClick={(e) => handleActionClick(e, project, 'demo')}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-900/40 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    title="Launch Live Demo"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Project Modal for Deep Architecture Review */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          onNotify={onNotify}
        />

      </div>
    </section>
  );
}
