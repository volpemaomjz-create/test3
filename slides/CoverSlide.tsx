import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Brain } from 'lucide-react';
import { SlideContainer } from '../components/UIComponents';

export const CoverSlide: React.FC = () => {
  return (
    <SlideContainer className="justify-center items-start pl-20">
      <motion.div 
        initial={{ scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        className="w-24 h-2 bg-brand-green mb-8 origin-left"
      />
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl text-gray-500 tracking-[0.2em] uppercase mb-4"
      >
        Life Compass
      </motion.p>

      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-9xl font-serif font-bold text-brand-green mb-12"
      >
        人生罗盘
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-4xl text-gray-600 font-light mb-20"
      >
        AI赋能的个人成长与职业测评工具
      </motion.h2>

      <div className="flex gap-12">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center text-white">
            <Compass size={32} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Vision</p>
            <p className="text-brand-green font-bold text-lg">找到方向 · 成就自我</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-brand-green/60 flex items-center justify-center text-white">
            <Brain size={32} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Technology</p>
            <p className="text-brand-green font-bold text-lg">AI驱动 · 科学测评</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-20 text-gray-500 text-sm flex gap-4"
      >
        <span>AI Coding训练营</span>
        <span>·</span>
        <span>学员：慧</span>
        <span className="ml-auto">2026年2月</span>
      </motion.div>
    </SlideContainer>
  );
};