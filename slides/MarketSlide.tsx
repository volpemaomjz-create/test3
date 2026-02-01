import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Frown, UserPlus, Heart, Target } from 'lucide-react';
import { SlideContainer, Header, Card } from '../components/UIComponents';

export const MarketSlide: React.FC = () => {
  return (
    <SlideContainer>
      <Header title="千亿级测评市场，痛点清晰" subtitle="Market Opportunity" />

      <div className="grid grid-cols-12 gap-8 h-full">
        {/* Left Column: Market Size & Users */}
        <div className="col-span-5 flex flex-col gap-6">
          <Card className="bg-white">
            <h3 className="flex items-center gap-2 text-xl font-bold text-brand-green mb-4">
              <TrendingUp /> 巨大市场规模与趋势
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0"></span>
                <span>全球累计服务超千万人次，老牌公司收费达<strong className="bg-stone-200 px-1 mx-1">千元级</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0"></span>
                <span>社会不确定性加剧，人们对优化选择的需求持续上升</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0"></span>
                <span>个人数据化程度提升，个性化需求增长</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-brand-green text-white flex-1 relative overflow-hidden">
            <h3 className="flex items-center gap-2 text-xl font-bold mb-6 relative z-10">
              <Users /> 核心用户群体
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div>
                <h4 className="font-bold text-lg text-brand-accent mb-1">C端用户</h4>
                <p className="text-white/80 text-sm mb-2">含16-22岁学生/职场新人，面临方向决策</p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-white/20 px-2 py-1 rounded">低价找到方向</span>
                  <span className="bg-white/20 px-2 py-1 rounded">情绪陪伴</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                <h4 className="font-bold text-lg text-brand-accent mb-1">B端用户</h4>
                <p className="text-white/80 text-sm mb-2">企业招聘负责人、HR</p>
                <div className="flex gap-2 text-xs">
                   <span className="bg-white/20 px-2 py-1 rounded">高效匹配人才</span>
                   <span className="bg-white/20 px-2 py-1 rounded">精准培养</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10">
               <Users size={200} />
            </div>
          </Card>
        </div>

        {/* Right Column: Pain Points */}
        <div className="col-span-7 grid grid-cols-1 gap-4 content-start">
           <h3 className="text-xl font-bold text-gray-700 flex items-center gap-2">
             <Frown className="text-red-400"/> 现有产品痛点
           </h3>
           
           {[
             { title: "专业测评价格高昂", desc: "盖洛普等测评+解读动辄几百上千元，形成高门槛", icon: <DollarSign size={18}/> },
             { title: "现有测评维度单一", desc: "主流MBTI仅覆盖人格单一维度，指导价值有限", icon: <Target size={18}/> },
             { title: "情绪困境无人陪伴", desc: "职场/人生迷茫时缺乏即时倾听，易陷入内耗", icon: <Heart size={18}/> },
             { title: "企业决策效率低下", desc: "缺乏多维度数据支撑，匹配精准度低、内耗严重", icon: <UserPlus size={18}/> },
           ].map((p, i) => (
             <Card key={i} delay={0.3 + (i * 0.1)} className="border-l-4 border-l-red-400 flex flex-col justify-center py-4">
               <h4 className="font-bold text-brand-dark text-lg mb-1 flex items-center gap-2">
                 <span className="bg-red-100 p-1 rounded text-red-500">{p.icon}</span> 
                 {p.title}
               </h4>
               <p className="text-gray-500 text-sm ml-9">{p.desc}</p>
             </Card>
           ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 bg-stone-200 p-4 rounded-lg text-center text-brand-dark"
      >
        🚀 机会窗口：用AI技术重塑评测流程，提供 <strong>高性价比、多维度、即时陪伴</strong> 的解决方案
      </motion.div>
    </SlideContainer>
  );
};