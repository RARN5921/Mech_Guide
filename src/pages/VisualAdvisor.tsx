import React, { useState } from 'react';
import { Upload, Image as ImageIcon, CheckCircle2, AlertCircle, Loader2, Cpu } from 'lucide-react';

const VisualAdvisor: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
        startAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = () => {
    setIsUploading(true);
    setAnalysis(null);

    // Simulate AI Analysis
    setTimeout(() => {
      setIsUploading(false);
      setAnalysis({
        features: [
          { type: '회전축 (Rotating Shaft)', confidence: '98%', recommended: '볼 베어링 6000 시리즈' },
          { type: '고정점 (Anchor Point)', confidence: '92%', recommended: 'M8 렌치 볼트 (고장력)' },
          { type: '연결부 (Joint)', confidence: '85%', recommended: '플랜지 커플링' }
        ],
        suggestion: '분석 결과, 고하중 회전 운동이 예상되는 구조입니다. 내구성이 확보된 크롬강 소재의 베어링과 체결 부품 사용을 권장합니다.'
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">설계 어드바이저 (Visual Advisor)</h2>
          <p className="text-slate-500">스케치, CAD 도면 또는 메커니즘 이미지를 분석합니다.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div
            className={`border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center transition-colors ${
              preview ? 'border-blue-400 bg-blue-50/30' : 'border-slate-300 bg-white hover:border-blue-400 hover:bg-slate-50'
            }`}
          >
            {preview ? (
              <div className="relative w-full aspect-video">
                <img src={preview} alt="Preview" className="w-full h-full object-contain rounded-lg" />
                <button
                  onClick={() => {setPreview(null); setAnalysis(null);}}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600"
                >
                  <AlertCircle size={20} />
                </button>
              </div>
            ) : (
              <label className="cursor-pointer flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Upload size={32} />
                </div>
                <span className="text-lg font-semibold text-slate-700">이미지 업로드</span>
                <span className="text-sm text-slate-400 mt-1">PNG, JPG 또는 PDF (최대 10MB)</span>
                <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
              </label>
            )}
          </div>

          <div className="bg-slate-800 text-white p-6 rounded-2xl">
            <h3 className="font-bold flex items-center mb-3 text-blue-400">
              <ImageIcon className="mr-2" size={18} /> 사용 팁
            </h3>
            <ul className="text-sm space-y-2 text-slate-300 list-disc list-inside">
              <li>주요 부하가 걸리는 지점이 잘 보이도록 촬영하세요.</li>
              <li>복잡한 도면보다는 단순화된 스케치가 분석 정확도가 높습니다.</li>
              <li>회전 부위와 고정 부위를 명확히 구분하여 표시해 주세요.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl h-full min-h-[400px] flex flex-col overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <h3 className="font-bold text-slate-800">AI 분석 결과</h3>
              {isUploading && <div className="flex items-center text-blue-600 text-sm"><Loader2 className="animate-spin mr-1" size={16} /> 분석 중...</div>}
            </div>

            <div className="flex-1 p-6">
              {!preview && !isUploading && (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center">
                  <Cpu size={48} className="mb-4 opacity-20" />
                  <p>이미지를 업로드하면 <br/>AI가 구조를 분석합니다.</p>
                </div>
              )}

              {isUploading && (
                <div className="h-full flex flex-col items-center justify-center space-y-4">
                  <div className="w-full max-w-xs bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-2/3 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-slate-500">기구학적 특징 추출 중...</p>
                </div>
              )}

              {analysis && (
                <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-500">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">인식된 구조적 특징</h4>
                    {analysis.features.map((f: any, i: number) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{f.type}</p>
                          <p className="text-xs text-blue-600 font-semibold">신뢰도 {f.confidence}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-400">추천 부품</p>
                          <p className="text-sm font-medium text-slate-700">{f.recommended}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                    <h4 className="flex items-center text-blue-800 font-bold text-sm mb-2">
                      <CheckCircle2 size={16} className="mr-1" /> AI 어드바이저 제안
                    </h4>
                    <p className="text-sm text-blue-700 leading-relaxed">
                      {analysis.suggestion}
                    </p>
                  </div>

                  <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
                    상세 설계 최적화로 이동
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualAdvisor;
