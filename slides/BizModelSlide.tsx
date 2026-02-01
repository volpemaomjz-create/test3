import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Repeat, ArrowRight } from 'lucide-react';
import { SlideContainer, Header, Card } from '../components/UIComponents';

export const BizModelSlide: React.FC = () => {
  return (
    <SlideContainer>
      <Header title="B端+C端双轮驱动商业模式" subtitle="Business Model" />

      <div className="flex gap-0 h-3/5 mb-8">
        {/* C-Side */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-1/2 bg-brand-green text-white p-10 rounded-l-2xl flex flex-col"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <User size={32} />
            </div>
            <h3 className="text-3xl font-bold">C端业务</h3>
          </div>
          <div className="space-y-6">
             <div>
                <h4 className="font-bold text-brand-accent mb-2">◎ 核心价值主张</h4>
                <p className="text-sm opacity-80">低价高精准的测评服务 + 24小时AI情绪陪伴</p>
             </div>
             <div>
                <h4 className="font-bold text-brand-accent mb-2">💰 盈利模式</h4>
                <ul className="text-sm opacity-80 space-y-1 list-disc list-inside">
                  <li>测评付费：9.9元/29.9元</li>
                  <li>增值服务：专家咨询</li>
                  <li>会员订阅：AI顾问包</li>
                </ul>
             </div>
             <div className="bg-white/10 p-4 rounded mt-auto">
               <h4 className="font-bold mb-1 flex items-center gap-2"><TrendingUpIcon size={16}/> 增长飞轮</h4>
               <p className="text-xs opacity-75">数据驱动 → 算法优化 → 粘性增强 → 口碑裂变</p>
             </div>
          </div>
        </motion.div>

        {/* B-Side */}
        <motion.div 
           initial={{ x: 50, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="w-1/2 bg-[#5D5745] text-white p-10 rounded-r-2xl flex flex-col"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <Building2 size={32} />
            </div>
            <h3 className="text-3xl font-bold">B端业务</h3>
          </div>
           <div className="space-y-6">
             <div>
                <h4 className="font-bold text-brand-accent mb-2">◎ 核心价值主张</h4>
                <p className="text-sm opacity-80">高效匹配人才 + 精准培养员工</p>
             </div>
             <div>
                <h4 className="font-bold text-brand-accent mb-2">💰 盈利模式</h4>
                <ul className="text-sm opacity-80 space-y-1 list-disc list-inside">
                  <li>批量测评服务</li>
                  <li>人才库对接费</li>
                  <li>定制化培训方案</li>
                </ul>
             </div>
             <div className="bg-white/10 p-4 rounded mt-auto">
               <h4 className="font-bold mb-1 flex items-center gap-2"><Repeat size={16}/> B2B2C 联动</h4>
               <p className="text-xs opacity-75">企业采购 → 员工免费领报告 → 引流C端</p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Flywheel Effect */}
      <div className="mt-4">
        <h4 className="flex items-center gap-2 font-bold text-brand-green mb-6">
          <Repeat /> 双轮驱动协同效应
        </h4>
        <div className="flex justify-between items-center text-center">
            <FlywheelNode label="C端积累数据" />
            <ArrowRight className="text-brand-green/50" />
            <FlywheelNode label="AI算法优化" />
            <ArrowRight className="text-brand-green/50" />
            <FlywheelNode label="B端增值服务" />
            <ArrowRight className="text-brand-green/50" />
            <FlywheelNode label="引流C端用户" />
        </div>
      </div>
    </SlideContainer>
  );
};

const FlywheelNode = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center shadow-lg">
      <Repeat size={20} />
    </div>
    <span className="font-bold text-gray-700 text-sm">{label}</span>
  </div>
);

const TrendingUpIcon = ({size}:{size:number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
)
