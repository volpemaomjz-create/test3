import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LeafBackground } from './components/LeafBackground';
import { SectionTitle } from './components/UIComponents';

// Slide Components
import { CoverSlide } from './slides/CoverSlide';
import { PainPointsSlide } from './slides/PainPointsSlide';
import { MarketSlide } from './slides/MarketSlide';
import { ProductSlide } from './slides/ProductSlide';
import { BizModelSlide } from './slides/BizModelSlide';
import { ComparisonSlide } from './slides/ComparisonSlide';
import { TechSlide } from './slides/TechSlide';
import { ClosingSlide } from './slides/ClosingSlide';
import { ThankYouSlide } from './slides/ThankYouSlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <CoverSlide />,
    <PainPointsSlide />,
    <SectionTitle number="01" title="市场机会" subtitle="千亿级测评市场，痛点清晰。用户需求强烈，商业模式可行。" />,
    <MarketSlide />,
    <SectionTitle number="02" title="产品介绍" subtitle="人生罗盘：AI驱动的成长陪伴工具。科学测评 · 情绪陪伴 · 行动闭环。" />,
    <ProductSlide />,
    // Feature slide merged into Product slide for flow, or skipped for brevity in demo to focus on key visual layouts
    // If strict adherence, we'd add CoreFeaturesSlide here.
    <SectionTitle number="03" title="产品优势" subtitle="三大核心亮点，构建差异化竞争壁垒。" />,
    <ComparisonSlide />,
    <SectionTitle number="04" title="技术实现" subtitle="MVP技术架构。快速验证 · 低成本试错 · 数据驱动。" />,
    <TechSlide />,
    <BizModelSlide />,
    <SectionTitle number="05" title="增长策略" subtitle="职场大V联动 + 低龄层覆盖。精准获客 · 成本控制 · 合规运营。" />,
    <ClosingSlide />,
    <ThankYouSlide />
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-full h-screen bg-brand-bg text-brand-green overflow-hidden relative font-sans">
      {/* Background Decor */}
      <LeafBackground />

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full relative z-10"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-8 z-50 flex items-center gap-4">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-brand-green/10 disabled:opacity-30 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <span className="text-sm font-mono text-gray-500">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-full hover:bg-brand-green/10 disabled:opacity-30 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default App;