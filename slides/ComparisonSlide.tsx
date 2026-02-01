import React from 'react';
import { Check, X } from 'lucide-react';
import { SlideContainer, Header, Card } from '../components/UIComponents';

export const ComparisonSlide: React.FC = () => {
  return (
    <SlideContainer>
      <Header title="与传统测评工具对比" subtitle="Competitive Analysis" />

      <div className="flex gap-6 mt-8">
        {/* Highlights */}
        <div className="w-1/4 space-y-4">
           {[
             { num: "01", title: "三大测评融合", desc: "平衡低成本与高精准" },
             { num: "02", title: "AI情绪陪伴", desc: "填补心理咨询师空白" },
             { num: "03", title: "企业端功能", desc: "降低招聘摩擦成本" }
           ].map((item, i) => (
             <Card key={i} className="bg-brand-green text-white">
                <div className="text-3xl font-bold opacity-30 mb-1">{item.num}</div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-xs opacity-80">{item.desc}</p>
             </Card>
           ))}
        </div>

        {/* Comparison Table */}
        <Card className="flex-1 p-0 overflow-hidden border-0 shadow-xl">
          <table className="w-full h-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-500 text-sm uppercase tracking-wider">
                <th className="p-6 font-medium">对比维度</th>
                <th className="p-6 font-medium">传统测评</th>
                <th className="p-6 font-bold text-white bg-brand-green">人生罗盘</th>
                <th className="p-6 font-medium bg-brand-light/10 text-brand-green">优势</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="p-6 font-bold">测评时长</td>
                <td className="p-6">1小时+</td>
                <td className="p-6 font-bold text-brand-green bg-brand-green/5">8-10分钟</td>
                <td className="p-6 text-brand-green">↓ 87.5%</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">价格</td>
                <td className="p-6">几百上千元</td>
                <td className="p-6 font-bold text-brand-green bg-brand-green/5">9.9元起</td>
                <td className="p-6 text-brand-green">↓ 90%+</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">测评维度</td>
                <td className="p-6">单一维度</td>
                <td className="p-6 font-bold text-brand-green bg-brand-green/5">三大维度融合</td>
                <td className="p-6 text-brand-green">↑ 3倍</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">情绪陪伴</td>
                <td className="p-6 text-red-400 flex items-center gap-2"><X size={16}/> 无</td>
                <td className="p-6 font-bold text-brand-green bg-brand-green/5 flex items-center gap-2"><Check size={16}/> 24小时AI</td>
                <td className="p-6 text-brand-green">创新功能</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">企业功能</td>
                <td className="p-6 text-red-400 flex items-center gap-2"><X size={16}/> 无</td>
                <td className="p-6 font-bold text-brand-green bg-brand-green/5 flex items-center gap-2"><Check size={16}/> 批量+匹配</td>
                <td className="p-6 text-brand-green">企业刚需</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </SlideContainer>
  );
};