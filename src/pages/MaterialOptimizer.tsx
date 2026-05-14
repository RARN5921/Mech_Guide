import React, { useState } from 'react';
import { Thermometer, ShieldAlert, Zap, Droplets, CheckCircle2 } from 'lucide-react';

const MaterialOptimizer: React.FC = () => {
  const [conditions, setConditions] = useState({
    temp: 20,
    corrosion: 'none',
    loadType: 'static'
  });

  const getRecommendation = () => {
    if (conditions.corrosion === 'high') {
      return {
        material: '스테인리스강 (SUS316)',
        reason: '우수한 내식성과 화학적 안정성을 제공합니다.',
        properties: ['비자성', '고내식성', '중등도 강도']
      };
    }
    if (conditions.temp > 100) {
      return {
        material: '합금강 (SCM440)',
        reason: '고온에서도 높은 인장 강도와 내마모성을 유지합니다.',
        properties: ['고온강도', '열처리 가능', '내구력 우수']
      };
    }
    if (conditions.loadType === 'dynamic') {
      return {
        material: '탄소강 (S45C)',
        reason: '기계 구조용으로 널리 쓰이며 열처리를 통해 강도 조절이 용이합니다.',
        properties: ['가공성 우수', '비용 효율적', '강도 우수']
      };
    }
    return {
      material: '알루미늄 합금 (AL6061)',
      reason: '가볍고 가공성이 뛰어나며 일반적인 환경에서 충분한 내식성을 가집니다.',
      properties: ['경량성', '열전도율 높음', '아노다이징 가능']
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">재질 및 스펙 최적화 (Material Optimizer)</h2>
        <p className="text-slate-500">사용 환경에 맞는 최적의 소재와 표면 처리를 제안합니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800 flex items-center">
              <Thermometer className="mr-2 text-orange-500" size={18} /> 사용 환경 조건 설정
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                  사용 온도 (°C) <span className="ml-auto text-orange-600 font-bold">{conditions.temp}°C</span>
                </label>
                <input
                  type="range" min="-50" max="300" value={conditions.temp}
                  onChange={(e) => setConditions({...conditions, temp: parseInt(e.target.value)})}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">부식 환경 수준</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'none', label: '일반(건조)', icon: <Zap size={14} /> },
                    { id: 'mid', label: '습기/실외', icon: <Droplets size={14} /> },
                    { id: 'high', label: '화학/해안', icon: <ShieldAlert size={14} /> }
                  ].map(c => (
                    <button
                      key={c.id}
                      onClick={() => setConditions({...conditions, corrosion: c.id})}
                      className={`p-3 text-xs rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        conditions.corrosion === c.id
                        ? 'bg-orange-50 border-orange-200 text-orange-700'
                        : 'bg-white border-slate-100 text-slate-500 hover:border-orange-100'
                      }`}
                    >
                      {c.icon}
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">주요 하중 특성</label>
                <select
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  value={conditions.loadType}
                  onChange={(e) => setConditions({...conditions, loadType: e.target.value})}
                >
                  <option value="static">정하중 (Static Load)</option>
                  <option value="dynamic">동하중/반복하중 (Dynamic Load)</option>
                  <option value="impact">충격하중 (Impact Load)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-4 inline-block">
                RECOMMENDED MATERIAL
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{recommendation.material}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {recommendation.reason}
              </p>

              <div className="space-y-3 mb-8">
                {recommendation.properties.map((prop, i) => (
                  <div key={i} className="flex items-center text-slate-700">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-3" />
                    <span className="font-medium">{prop}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">권장 표면 처리</h4>
                <p className="text-sm font-bold text-slate-800">
                  {conditions.corrosion === 'high' ? '전해 연마 (Electropolishing)' : '백색 아연 도금 (Trivalent Chromate)'}
                </p>
              </div>
            </div>

            <Thermometer size={180} className="absolute -right-12 -bottom-12 text-orange-50 opacity-10 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialOptimizer;
