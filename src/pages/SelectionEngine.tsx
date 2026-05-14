import React, { useState, useEffect } from 'react';
import { Settings2, Calculator, Save, RefreshCw, Info } from 'lucide-react';

const SelectionEngine: React.FC = () => {
  const [inputs, setInputs] = useState({
    load: 50,
    safetyFactor: 2.0,
    motionRange: 100,
    environment: 'standard'
  });

  const [results, setResults] = useState<any>(null);

  const calculate = () => {
    const totalLoad = inputs.load * inputs.safetyFactor;
    let boltSize = 'M4';
    if (totalLoad > 200) boltSize = 'M10';
    else if (totalLoad > 100) boltSize = 'M8';
    else if (totalLoad > 50) boltSize = 'M6';

    let gearRatio = (inputs.motionRange / 10).toFixed(1);

    setResults({
      boltSize,
      gearRatio,
      bearingType: totalLoad > 150 ? '원통 롤러 베어링' : '심구 볼 베어링',
      estimatedLife: (10000 / (inputs.load / 10)).toFixed(0) + ' 시간'
    });
  };

  useEffect(() => {
    calculate();
  }, [inputs]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">규격 추천 엔진 (Selection Engine)</h2>
        <p className="text-slate-500">하중 및 운동 조건을 기반으로 최적의 부품 규격을 산출합니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-800 flex items-center">
              <Calculator className="mr-2 text-blue-600" size={18} /> 설계 파라미터 입력
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  예상 하중 (kgf)
                </label>
                <input
                  type="range" min="1" max="500" value={inputs.load}
                  onChange={(e) => setInputs({...inputs, load: parseInt(e.target.value)})}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1kgf</span>
                  <span className="font-bold text-blue-600">{inputs.load} kgf</span>
                  <span>500kgf</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1">
                  안전율 (Safety Factor)
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="number" step="0.1" value={inputs.safetyFactor}
                    onChange={(e) => setInputs({...inputs, safetyFactor: parseFloat(e.target.value) || 0})}
                    className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <select
                  value={inputs.safetyFactor}
                  onChange={(e) => setInputs({...inputs, safetyFactor: parseFloat(e.target.value)})}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500"
                >
                  <option value="1.2">권장: 1.2 (정하중)</option>
                  <option value="2.0">권장: 2.0 (변동하중)</option>
                  <option value="3.0">권장: 3.0 (충격하중)</option>
                  <option value="5.0">권장: 5.0 (극한환경)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1">
                  운동 범위 (mm)
                </label>
                <input
                  type="number" value={inputs.motionRange}
                  onChange={(e) => setInputs({...inputs, motionRange: parseInt(e.target.value)})}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  사용 환경
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['standard', 'corrosive', 'high-temp', 'clean-room'].map(env => (
                    <button
                      key={env}
                      onClick={() => setInputs({...inputs, environment: env})}
                      className={`p-2 text-xs rounded-lg border transition-colors ${
                        inputs.environment === env
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      {env === 'standard' && '일반'}
                      {env === 'corrosive' && '부식성'}
                      {env === 'high-temp' && '고온'}
                      {env === 'clean-room' && '클린룸'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center">
              <RefreshCw size={16} className="mr-2" /> 규격 다시 계산
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center">
              <Save className="mr-2 text-emerald-600" size={18} /> 산출된 권장 규격
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: '볼트 직경 (M-규격)', value: results?.boltSize, desc: 'ISO 표준 미터나사 기준' },
                { label: '권장 기어비', value: results?.gearRatio + ':1', desc: '입력된 운동 범위 최적화' },
                { label: '베어링 종류', value: results?.bearingType, desc: '하중 지지 방식 선정' },
                { label: '예상 수명 (B10)', value: results?.estimatedLife, desc: '정격 하중 기반 계산' }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-1">{item.label}</p>
                    <p className="text-xl font-extrabold text-slate-900">{item.value}</p>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2 flex items-center">
                    <Info size={10} className="mr-1" /> {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-900 text-white rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold mb-2">엔지니어링 코멘트</h4>
                <p className="text-sm text-blue-100 leading-relaxed">
                  선택하신 안전율 {inputs.safetyFactor}는 {inputs.safetyFactor >= 3 ? '충분히 보수적인' : '경제적인'} 설계 범위에 해당합니다.
                  {inputs.load > 100 ? ' 하중이 100kgf 이상이므로 체결부 강성 확보를 위해 고장력 볼트 사용을 권장합니다.' : ' 일반적인 설계 사양으로 표준 부품 적용이 용이합니다.'}
                </p>
              </div>
              <Settings2 className="absolute -right-4 -bottom-4 text-blue-800 opacity-30" size={120} />
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">CAD 라이브러리에서 찾기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionEngine;
