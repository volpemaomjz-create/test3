import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, MessageCircleHeart, ListTodo, Users, ArrowRight } from 'lucide-react';
import { SlideContainer, Header, Card } from '../components/UIComponents';

export const ProductSlide: React.FC = () => {
  return (
    <SlideContainer>
      <Header title="人生罗盘：AI驱动的成长陪伴工具" subtitle="Product Concept" />

      <div className="flex gap-8 h-full">
        {/* Left Panel: Concept */}
        <div className="w-1/3 flex flex-col gap-6">
          <Card className="bg-brand-green text-white flex-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">💡 产品理念</h3>
            <p className="text-white/90 leading-relaxed mb-8">
              传统评测行业可以用 <strong>AI重做一遍</strong>，帮助用户明确目标，通过一系列高胜率选择（工作、生活、健康、情绪）去达成目标。
            </p>
            
            <h4 className="font-bold text-brand-accent mb-4">为用户带来的价值：</h4>
            <ul className="space-y-4">
              {["持续帮客户明确当前状态", "明确自己真正想要什么", "增加人生选择的胜率", "长期多次积累可见的收益"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <div className="bg-white/20 p-1 rounded-full"><ArrowRight size={12}/></div>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          
          <div className="bg-white p-6 rounded-xl border border-brand-accent">
            <h3 className="text-brand-green font-bold mb-4">⭐ 产品特点</h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="bg-brand-green text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs mr-2">1</span>
                <strong>科学 + 普惠 + 落地</strong>
              </div>
              <div>
                <span className="bg-brand-green text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs mr-2">2</span>
                <strong>数据驱动增长</strong>
              </div>
              <div>
                <span className="bg-brand-green text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs mr-2">3</span>
                <strong>B端 + C端双轮驱动</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: 4 Core Modules */}
        <div className="w-2/3">
            <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
               <span className="text-brand-green">♣</span> 四大核心模块
            </h3>
            <div className="grid grid-cols-2 gap-6 h-[80%]">
              <Card className="bg-stone-50 hover:bg-white transition-colors">
                <div className="bg-brand-dark w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                   <PieChart />
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">优势分析</h4>
                <p className="text-gray-500 text-sm">融合MBTI、盖洛普、霍兰德三大经典维度，提供多维度优势识别</p>
              </Card>

              <Card className="bg-stone-50 hover:bg-white transition-colors">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                   <MessageCircleHeart />
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">洞见与陪伴</h4>
                <p className="text-gray-500 text-sm">AI情绪顾问24小时响应，提供情绪疏导与困境破局建议</p>
              </Card>

              <Card className="bg-stone-50 hover:bg-white transition-colors">
                <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                   <ListTodo />
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">行动闭环</h4>
                <p className="text-gray-500 text-sm">基于科学评测结果，导出可行动路径，落实目标分解</p>
              </Card>

              <Card className="bg-stone-50 hover:bg-white transition-colors">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                   <Users />
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">社区共创</h4>
                <p className="text-gray-500 text-sm">游戏化交互界面，成就勋章、目标挑战赛，促进社交分享</p>
              </Card>
            </div>
            
            <div className="mt-4 bg-gray-100 p-3 rounded text-center text-gray-600 text-sm">
              → 实现 "从认知到行动" 的全链路服务
            </div>
        </div>
      </div>
    </SlideContainer>
  );
};