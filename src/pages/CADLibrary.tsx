import React, { useState, Suspense } from 'react';
import { Search, Download, Box, Eye, Filter } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Box as ThreeBox } from '@react-three/drei';
import { useCart } from '../context/CartContext';

const ModelViewer = ({ color = '#3b82f6' }) => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <ThreeBox args={[1, 1, 1]} castShadow receiveShadow>
            <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
          </ThreeBox>
        </Stage>
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
};

const CADLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPart, setSelectedPart] = useState<any>(null);
  const { addToCart } = useCart();

  const parts = [
    { id: 1, name: '볼 베어링 6000', category: '베어링', size: '10x26x8', color: '#3b82f6' },
    { id: 2, name: 'M8 육각 렌치 볼트', category: '볼트/너트', size: 'M8 x 20', color: '#64748b' },
    { id: 3, name: '플랜지 커플링', category: '커플링', size: 'D20-L30', color: '#10b981' },
    { id: 4, name: '헬리컬 기어 1.5M', category: '기어', size: 'Z20-A20', color: '#f59e0b' },
    { id: 5, name: '리니어 부쉬', category: '가이드', size: 'LM12UU', color: '#ec4899' },
    { id: 6, name: '타이밍 풀리 GT2', category: '벨트/풀리', size: 'W6-Z20', color: '#8b5cf6' },
    { id: 7, name: 'M2 육각 렌치 볼트', category: '볼트/너트', size: 'M2 x 10', color: '#64748b' },
    { id: 8, name: 'M2.5 육각 렌치 볼트', category: '볼트/너트', size: 'M2.5 x 10', color: '#64748b' },
    { id: 9, name: 'M3 육각 렌치 볼트', category: '볼트/너트', size: 'M3 x 10', color: '#64748b' },
    { id: 10, name: 'M4 육각 렌치 볼트', category: '볼트/너트', size: 'M4 x 10', color: '#64748b' },
    { id: 11, name: 'M5 육각 렌치 볼트', category: '볼트/너트', size: 'M5 x 10', color: '#64748b' },
    { id: 12, name: 'M6 육각 렌치 볼트', category: '볼트/너트', size: 'M6 x 10', color: '#64748b' },
    { id: 13, name: 'M10 육각 렌치 볼트', category: '볼트/너트', size: 'M10 x 20', color: '#64748b' },
    { id: 14, name: '롤러 베어링', category: '베어링', size: '표준', color: '#3b82f6' },
    { id: 15, name: '부싱', category: '베어링', size: '표준', color: '#3b82f6' },
    { id: 16, name: '오일리스 베어링', category: '베어링', size: '표준', color: '#3b82f6' },
    { id: 17, name: '리니어 베어링', category: '베어링', size: '표준', color: '#3b82f6' },
    { id: 18, name: '볼 부쉬', category: '베어링', size: '표준', color: '#3b82f6' },
    { id: 19, name: '슬리브/머프 커플링', category: '커플링', size: '표준', color: '#10b981' },
    { id: 20, name: '클램프 커플링', category: '커플링', size: '표준', color: '#10b981' },
    { id: 21, name: '조 커플링', category: '커플링', size: '표준', color: '#10b981' },
    { id: 22, name: '그리드 커플링', category: '커플링', size: '표준', color: '#10b981' },
    { id: 23, name: '기어 커플링', category: '커플링', size: '표준', color: '#10b981' },
    { id: 24, name: '디스크 커플링', category: '커플링', size: '표준', color: '#10b981' },
    { id: 25, name: '체인 커플링', category: '커플링', size: '표준', color: '#10b981' },
    { id: 26, name: '유니버셜 조인트', category: '커플링', size: '표준', color: '#10b981' },
    { id: 27, name: '올덤 커플링', category: '커플링', size: '표준', color: '#10b981' },
    { id: 28, name: '벨로우즈 커플링', category: '커플링', size: '표준', color: '#10b981' },
    { id: 29, name: '평기어', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 30, name: '내기어', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 31, name: '랙과 피니언', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 32, name: '베벨 기어', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 33, name: '마이터 기어', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 34, name: '웜과 웜 기어', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 35, name: '하이포이드 기어', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 36, name: '나사 기어', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 37, name: '제네바 기어', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 38, name: '래칫', category: '기어', size: '표준', color: '#f59e0b' },
    { id: 39, name: 'Lm 가이드', category: '가이드', size: '표준', color: '#ec4899' },
    { id: 40, name: '리니어 롤러 가이드', category: '가이드', size: '표준', color: '#ec4899' },
    { id: 41, name: '볼 스플라인', category: '가이드', size: '표준', color: '#ec4899' },
    { id: 42, name: '슬라이드 부쉬', category: '가이드', size: '표준', color: '#ec4899' },
    { id: 43, name: '올일리스 슬라이드', category: '가이드', size: '표준', color: '#ec4899' },
    { id: 44, name: '도브테일 가이드', category: '가이드', size: '표준', color: '#ec4899' },
    { id: 45, name: '크로스 롤러 가이드', category: '가이드', size: '표준', color: '#ec4899' },
    { id: 46, name: '롤러 팔로워', category: '가이드', size: '표준', color: '#ec4899' },
    { id: 47, name: '캠 팔로워', category: '가이드', size: '표준', color: '#ec4899' },
    { id: 48, name: 'V벨트 및 풀리', category: '벨트/풀리', size: '표준', color: '#8b5cf6' },
    { id: 49, name: '평벨트', category: '벨트/풀리', size: '표준', color: '#8b5cf6' },
    { id: 50, name: '리브드 벨트', category: '벨트/풀리', size: '표준', color: '#8b5cf6' },
    { id: 51, name: '라운드 벨트', category: '벨트/풀리', size: '표준', color: '#8b5cf6' },
  ];

  const filteredParts = parts.filter(p => p.name.includes(searchTerm) || p.category.includes(searchTerm));

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">CAD 라이브러리 (CAD Library)</h2>
          <p className="text-slate-500">표준 부품의 3D 모델을 확인하고 데이터를 다운로드하세요.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="부품명 또는 카테고리 검색..."
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-hidden">
        <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm">
          <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center text-sm">
              <Filter className="mr-2" size={16} /> 부품 리스트
            </h3>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
              {filteredParts.length} items
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {filteredParts.map(part => (
              <button
                key={part.id}
                onClick={() => setSelectedPart(part)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center space-x-3 ${
                  selectedPart?.id === part.id ? 'bg-blue-50 border-blue-100 shadow-sm' : 'hover:bg-slate-50'
                }`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${part.color}20`, color: part.color }}>
                  <Box size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{part.name}</p>
                  <p className="text-[10px] text-slate-500">{part.category} • {part.size}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-slate-900 rounded-3xl overflow-hidden relative group border border-slate-800">
          {selectedPart ? (
            <>
              <div className="absolute inset-0 z-0">
                <ModelViewer color={selectedPart.color} />
              </div>
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
                  <h4 className="font-extrabold text-slate-900 text-lg">{selectedPart.name}</h4>
                  <div className="flex space-x-2 mt-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">CAD AVAILABLE</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-md">IN STOCK</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100/50">
                    <div className="flex justify-between items-center text-sm gap-4">
                      <span className="text-slate-500">카테고리</span>
                      <span className="font-bold text-slate-800">{selectedPart.category}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1 gap-4">
                      <span className="text-slate-500">규격</span>
                      <span className="font-bold text-slate-800">{selectedPart.size}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 left-6 z-10 flex justify-between items-end">
                <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white/80 border border-white/10">
                  마우스 드래그로 회전, 휠로 확대/축소 가능
                </div>
                <div className="flex space-x-2">
                  <button className="bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold flex items-center shadow-lg hover:bg-blue-50 transition-colors">
                    <Download size={16} className="mr-2" /> STEP 다운로드
                  </button>
                  <button className="bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold flex items-center shadow-lg hover:bg-blue-50 transition-colors">
                    <Download size={16} className="mr-2" /> STL 다운로드
                  </button>
                  <button
                    onClick={() => {
                      addToCart({
                        id: selectedPart.id,
                        name: selectedPart.name,
                        spec: selectedPart.size,
                        qty: 1,
                        price: 15000,
                        supplier: '한국미스미',
                      });
                      alert('부품 리스트에 추가되었습니다.');
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center shadow-lg hover:bg-blue-700 transition-colors"
                  >
                    구매하기
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-600">
              <Eye size={48} className="mb-4 opacity-20" />
              <p>부품을 선택하여 <br/>3D 모델을 미리보세요.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CADLibrary;
