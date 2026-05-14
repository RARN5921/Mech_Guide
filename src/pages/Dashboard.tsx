import React from 'react';
import {
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
  Target,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const features = [
    {
      title: '이미지 인식 AI 기반 설계 분석',
      description: '스케치나 도면을 AI가 분석하여 구조적 특징을 자동으로 인식합니다.',
      icon: <Cpu className="text-blue-500" />,
      to: '/visual-advisor'
    },
    {
      title: '데이터 기반 최적 규격 산출',
      description: '하중, 속도 등 조건에 따라 볼트, 기어 등 핵심 요소를 정량적으로 계산합니다.',
      icon: <Target className="text-emerald-500" />,
      to: '/selection-engine'
    },
    {
      title: '통합 CAD/구매 생태계',
      description: '설계부터 3D 확인, 그리고 실제 구매까지 하나의 플랫폼에서 해결합니다.',
      icon: <Database className="text-purple-500" />,
      to: '/cad-library'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-10 text-white shadow-xl overflow-hidden relative">
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold mb-4">기계 설계의 새로운 표준, <br/><span className="text-blue-300">MECH-GUIDE</span></h1>
          <p className="text-lg text-blue-100 max-w-2xl mb-8">
            엔지니어와 학생들을 위한 AI 기반 통합 설계 어시스턴트 플랫폼입니다.
            검색 시간은 줄이고, 설계의 정확도는 높이세요.
          </p>
          <div className="flex space-x-4">
            <Link to="/visual-advisor" className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center">
              시작하기 <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Settings2 size={400} />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-500 mb-4">{feature.description}</p>
            <Link to={feature.to} className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              자세히 보기 <ArrowRight className="ml-1" size={14} />
            </Link>
          </div>
        ))}
      </div>

      <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
        <div className="flex items-center mb-6">
          <Zap className="text-amber-500 mr-2" size={24} />
          <h2 className="text-xl font-bold text-slate-900">핵심 가치</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            '엔지니어링 프로세스 효율화 (설계-검증-구매)',
            '초보 설계자의 오류 방지 및 진입 장벽 완화',
            '실제 구매 가능한 부품 기반의 설계 정합성 확보',
            '3D 뷰어를 통한 직관적인 형상 확인'
          ].map((text, i) => (
            <div key={i} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle2 className="text-emerald-500 mt-0.5" size={18} />
              <span className="text-slate-700 font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Import missing icon for background
import { Settings2 } from 'lucide-react';

export default Dashboard;
