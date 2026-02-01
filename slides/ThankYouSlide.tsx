import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Quote } from 'lucide-react';
import { SlideContainer } from '../components/UIComponents';

export const ThankYouSlide: React.FC = () => {
  return (
    <SlideContainer className="justify-center items-center text-center">
      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 1, bounce: 0.5 }}
        className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-10 shadow-sm"
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-6xl font-serif font-bold text-brand-green mb-4"
      >
        特别感谢
      </motion.h1>
      
      {/* Subtitle */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-3 mb-16"
      >
        <span className="h-[1px] w-12 bg-gray-300"></span>
        <h2 className="text-3xl text-gray-500 font-light tracking-wider uppercase">
          WayToAGI 社区
        </h2>
        <span className="h-[1px] w-12 bg-gray-300"></span>
      </motion.div>

      {/* Insight Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white p-10 rounded-2xl shadow-xl border border-brand-accent max-w-3xl relative mx-4"
      >
        {/* Decorative Badge */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-green text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg z-10">
            <Sparkles size={16} /> AI 学习体会
        </div>

        {/* Quote Icon Background */}
        <div className="absolute top-6 left-6 text-brand-green/5">
           <Quote size={80} />
        </div>

        {/* Content */}
        <p className="text-2xl text-gray-700 leading-relaxed font-serif relative z-0">
          “选择适合的模型，<br/>
          尽量提供足够信息减少反复修改。”
        </p>
      </motion.div>

      {/* Footer decorative line */}
      <motion.div 
         initial={{ width: 0 }}
         animate={{ width: 200 }}
         transition={{ delay: 0.8, duration: 1 }}
         className="h-1 bg-gradient-to-r from-transparent via-brand-green/30 to-transparent mt-16"
      />
    </SlideContainer>
  );
};