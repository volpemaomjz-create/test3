import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { SlideContainer } from '../components/UIComponents';

export const ClosingSlide: React.FC = () => {
  return (
    <SlideContainer className="justify-center items-center text-center">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-32 h-32 bg-brand-dark rounded-full flex items-center justify-center text-white mb-12 shadow-2xl"
      >
        <Compass size={64} />
      </motion.div>

      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-7xl font-serif font-bold text-brand-green mb-6"
      >
        让每个人都能<br/>
        找到自己的方向
      </motion.h1>

      <motion.div 
         initial={{ width: 0 }}
         animate={{ width: 100 }}
         transition={{ delay: 0.8 }}
         className="h-2 bg-brand-green mb-12"
      />

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-2xl text-gray-500 max-w-4xl leading-relaxed mb-20"
      >
        打造高效、经济的性格与职业测评工具，以个性化洞见赋能用户<br/>
        助力其识别自身优势，发现破局路径
      </motion.p>

      <div className="flex gap-16 text-brand-green">
         <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">🧠</div>
            <span className="font-bold">科学测评</span>
         </div>
         <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">❤️</div>
            <span className="font-bold">AI陪伴</span>
         </div>
         <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">📝</div>
            <span className="font-bold">行动闭环</span>
         </div>
      </div>

       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 text-gray-400 text-sm"
      >
        期待与您共创未来
      </motion.div>
    </SlideContainer>
  );
};