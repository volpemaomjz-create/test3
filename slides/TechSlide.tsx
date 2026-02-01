import React from 'react';
import { Database, Server, Smartphone, Layout, Cloud } from 'lucide-react';
import { SlideContainer, Header, Card } from '../components/UIComponents';

export const TechSlide: React.FC = () => {
  return (
    <SlideContainer>
      <Header title="MVP技术架构与避坑策略" subtitle="Technical Architecture" />

      {/* Core Flow */}
      <div className="mb-10">
        <h3 className="text-brand-green font-bold mb-4 flex items-center gap-2"><Layout /> 核心链路</h3>
        <div className="bg-white p-6 rounded-xl border border-brand-accent shadow-sm flex items-center justify-between text-center">
            <div className="bg-gray-100 px-4 py-2 rounded text-gray-700">用户做评测题目</div>
            <div className="h-[2px] bg-brand-green flex-1 mx-4 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-brand-green bg-white px-2">大模型API直接出题评分</span>
            </div>
            <div className="bg-brand-green px-4 py-2 rounded text-white">即时输出评测报告</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 h-full">
        {/* Stack */}
        <div>
           <h3 className="text-brand-green font-bold mb-4 flex items-center gap-2"><Server /> 组件选择</h3>
           <div className="grid grid-cols-2 gap-4">
              <TechItem icon={<Smartphone />} title="触发" value="微信群链接" />
              <TechItem icon={<Cloud />} title="分发" value="Vercel部署" />
              <TechItem icon={<Layout />} title="形态" value="Web网页" />
              <TechItem icon={<Server />} title="服务" value="AI大模型API" />
              <TechItem icon={<Database />} title="数据" value="Supabase" />
              <TechItem icon={<Layout />} title="分析" value="Google Analytics" />
           </div>
           
           <div className="mt-8 bg-brand-dark text-white p-4 rounded-lg text-sm">
             <h4 className="font-bold mb-2">🚀 未来演进路径</h4>
             <div className="flex justify-between opacity-80">
                <span>积累反馈数据</span>
                <span>→</span>
                <span>优化系统能力</span>
                <span>→</span>
                <span>自动评判守护</span>
             </div>
           </div>
        </div>

        {/* Risks */}
        <div>
           <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">⚠️ 避坑指南</h3>
           <Card className="bg-amber-50 border-amber-200 mb-4">
             <h4 className="font-bold text-amber-800 mb-2">风险1：系统框架问题</h4>
             <p className="text-sm text-amber-900/70 mb-2">初期依赖大模型API缺乏结果校准手段。</p>
             <div className="bg-white/50 p-2 rounded text-xs text-amber-900 font-bold">对策：初期叠加玄学、趣味元素增加吸引力</div>
           </Card>
           
           <Card className="bg-amber-50 border-amber-200">
             <h4 className="font-bold text-amber-800 mb-2">风险2：数据质量问题</h4>
             <p className="text-sm text-amber-900/70 mb-2">短平快测试用户输入可能随意，数据较差。</p>
             <div className="bg-white/50 p-2 rounded text-xs text-amber-900 font-bold">对策：通过后续高频数据收集交叉比对校准</div>
           </Card>
        </div>
      </div>
    </SlideContainer>
  );
};

const TechItem = ({icon, title, value}: any) => (
  <div className="bg-white p-3 rounded border border-gray-100 flex items-center gap-3">
    <div className="text-brand-green">{icon}</div>
    <div>
      <div className="text-xs text-gray-400">{title}</div>
      <div className="font-bold text-gray-700">{value}</div>
    </div>
  </div>
)
