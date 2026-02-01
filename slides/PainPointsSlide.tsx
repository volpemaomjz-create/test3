import React from 'react';
import { User, AlertTriangle, CheckCircle2, FileText, Settings, MessageSquare, Brain } from 'lucide-react';
import { SlideContainer, Header, Card } from '../components/UIComponents';

const scenarios = [
  {
    icon: <FileText size={32} />,
    title: "场景一",
    subtitle: "盖洛普优势识别测试",
    user: "有职业发展指导需求的求职者，渴望了解自身优势",
    pain: "价格动辄几百上千元，流程长达数小时，需准备简历、排队等待解读，且只能与导师沟通一次",
    need: "了解自己，找到合适的发展方向，获得随时在身边的解惑和陪伴",
    color: "bg-brand-green"
  },
  {
    icon: <Settings size={32} />,
    title: "场景二",
    subtitle: "遗留系统AI赋能",
    user: "公司内部维护遗留系统的技术人员",
    pain: "使用私有低代码平台，不支持AI协助生成，生产效率低；懂系统的人少，新人学习成本高",
    need: "提升开发和运维效率，新人快速上手，增强系统稳定性",
    color: "bg-brand-light"
  },
  {
    icon: <MessageSquare size={32} />,
    title: "场景三",
    subtitle: "项目沟通成本高",
    user: "项目经理及多方沟通协调的干系人",
    pain: "信息散落在各处，收集汇总繁琐易遗漏；信息过载、遗忘、传递衰减；计划和行动没有对齐",
    need: "基于最新最全知识汇总，即时对齐目标和行动事项，减少理解误差",
    color: "bg-stone-500"
  }
];

export const PainPointsSlide: React.FC = () => {
  return (
    <SlideContainer>
      <Header title="为什么我们在这里" subtitle="Pain Points Discovery" />
      <p className="text-xl text-gray-500 mb-8 -mt-6">从真实生活中发现的三个刚需场景</p>

      <div className="grid grid-cols-3 gap-6 h-full pb-20">
        {scenarios.map((s, i) => (
          <Card key={i} delay={i * 0.2} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className={`${s.color} w-16 h-16 rounded-full flex items-center justify-center text-white shrink-0 shadow-md`}>
                {s.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-green">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.subtitle}</p>
              </div>
            </div>

            <div className="space-y-6 text-sm flex-1">
              <div>
                <div className="flex items-center gap-2 font-bold text-gray-700 mb-2">
                  <User size={16} /> 用户画像
                </div>
                <p className="text-gray-600 leading-relaxed">{s.user}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 font-bold text-amber-600 mb-2">
                  <AlertTriangle size={16} /> 核心痛点
                </div>
                <p className="text-gray-600 leading-relaxed">{s.pain}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dashed border-gray-200 bg-brand-green/5 p-4 rounded-lg">
               <div className="flex items-center gap-2 font-bold text-brand-green mb-2">
                  <CheckCircle2 size={16} /> 真实需求
                </div>
                <p className="text-brand-dark font-medium leading-relaxed">{s.need}</p>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="absolute bottom-8 left-12 right-12 bg-stone-200/50 p-4 rounded-lg flex items-center gap-4 text-brand-dark">
         <div className="bg-brand-green text-white p-2 rounded-full"><Brain size={20}/></div>
         <p><strong>洞察：</strong>三个场景都指向同一核心需求 —— <span className="bg-brand-green/20 px-1">在降本增效的背景下，如何用AI技术提升效率、降低成本、优化体验</span></p>
      </div>
    </SlideContainer>
  );
};