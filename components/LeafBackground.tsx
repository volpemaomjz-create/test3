import React from 'react';
import { motion } from 'framer-motion';

export const LeafBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 z-0">
      <motion.svg
        viewBox="0 0 800 800"
        className="absolute -right-20 -top-20 w-[800px] h-[800px] text-brand-green fill-current"
        initial={{ rotate: 0 }}
        animate={{ rotate: 5 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      >
        <path d="M400 0 C600 0 800 200 800 400 C800 600 600 800 400 800 C200 800 0 600 0 400 C0 200 200 0 400 0 Z M400 0 L400 800" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M400 0 Q600 200 400 400 Q200 600 400 800" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M400 0 Q200 200 400 400 Q600 600 400 800" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Abstract leaf veins */}
        <path d="M400 100 L500 200 M400 200 L300 300 M400 300 L550 400 M400 500 L250 600" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
      </motion.svg>
    </div>
  );
};