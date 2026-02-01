import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitleProps } from '../types';

export const SlideContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`w-full h-screen px-12 py-12 flex flex-col relative overflow-hidden ${className}`}>
    {children}
  </div>
);

export const SectionTitle: React.FC<SectionTitleProps> = ({ number, title, subtitle }) => (
  <div className="flex flex-col justify-center h-full px-20">
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex items-center gap-6 mb-8"
    >
      <div className="w-24 h-24 rounded-full bg-brand-green flex items-center justify-center text-white text-4xl font-serif font-bold shadow-lg">
        {number}
      </div>
      <div className="h-[2px] w-24 bg-brand-green/50"></div>
    </motion.div>
    
    <motion.h1 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-8xl font-serif text-brand-green font-bold mb-8 tracking-tight"
    >
      {title}
    </motion.h1>
    
    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-3xl text-gray-500 font-light max-w-2xl leading-relaxed"
    >
      {subtitle}
    </motion.p>
  </div>
);

export const Header: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <motion.div 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="mb-10 border-l-4 border-brand-green pl-6"
  >
    {subtitle && <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">{subtitle}</p>}
    <h2 className="text-5xl font-serif text-brand-green font-bold">{title}</h2>
  </motion.div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  // Only apply bg-white if no background class is provided to avoid conflicts
  const hasBg = className.includes('bg-');
  const baseClasses = `p-6 rounded-xl shadow-sm border border-brand-accent ${hasBg ? '' : 'bg-white'}`;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};