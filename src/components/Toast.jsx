import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 max-w-md"
      >
        <div
          className={`flex items-start gap-3 p-4 rounded-xl border backdrop-blur-xl shadow-2xl ${
            isSuccess
              ? 'bg-[#130b29]/95 border-purple-500/40 text-purple-100 shadow-purple-950/50'
              : isError
              ? 'bg-[#250917]/95 border-red-500/40 text-red-100 shadow-red-950/50'
              : 'bg-[#0f1124]/95 border-indigo-500/40 text-indigo-100 shadow-indigo-950/50'
          }`}
        >
          <div className="mt-0.5 flex-shrink-0">
            {isSuccess && <CheckCircle2 className="w-5 h-5 text-purple-400" />}
            {isError && <AlertCircle className="w-5 h-5 text-red-400" />}
            {!isSuccess && !isError && <Info className="w-5 h-5 text-indigo-400" />}
          </div>

          <div className="flex-1 pr-2">
            {toast.title && <h4 className="text-sm font-semibold text-white">{toast.title}</h4>}
            <p className="text-xs text-slate-300 leading-relaxed mt-0.5">{toast.message}</p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 -mr-1 -mt-1 rounded-md"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
