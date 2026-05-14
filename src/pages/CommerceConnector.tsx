import React, { useState } from 'react';
import { ExternalLink, Package, ArrowRight, Truck, CreditCard, Search } from 'lucide-react';

const CommerceConnector: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allParts = [
    { id: 1, name: '볼 베어링 6000', spec: '10x26x8', price: 1200, supplier: '한국미스미' },
    { id: 2, name: 'M8 육각 렌치 볼트', spec: 'M8 x 20', price: 150, supplier: '디바이스마트' },
    { id: 3, name: '플랜지 커플링', spec: 'D20-L30', price: 15000, supplier: '한국미스미' },
    { id: 4, name: '헬리컬 기어 1.5M', spec: 'Z20-A20', price: 25000, supplier: '메카솔루션' },
    { id: 5, name: '리니어 부쉬', spec: 'LM12UU', price: 4500, supplier: '아이마켓' },
    { id: 6, name: '타이밍 풀리 GT2', spec: 'W6-Z20', price: 800, supplier: '디바이스마트' },
  ];

  const filteredParts = allParts.filter(p => p.name.includes(searchTerm) || p.supplier.includes(searchTerm));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">스마트 커머스 커넥터 (Commerce Connector)</h2>
        <p className="text-slate-500">확정된 부품 리스트를 기반으로 최적의 구매 경로를 안내합니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-4 flex-wrap">
              <h3 className="font-bold text-slate-800 flex items-center">
                <Package className="mr-2 text-blue-600" size={18} /> 부품 가격 및 구매처 검색
              </h3>
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="부품명 또는 구매처 검색..."
                  className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="divide-y divide-slate-100 flex-1 overflow-y-auto max-h-[600px]">
              {filteredParts.length > 0 ? filteredParts.map(item => (
                <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                      <Package size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.spec} | <span className="font-medium text-blue-600">{item.supplier}</span></p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">₩{item.price.toLocaleString()}</p>
                    <button className="mt-1 text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 font-medium transition-colors">
                      해당 구매처로 이동
                    </button>
                  </div>
                </div>
              )) : (
                <div className="p-12 text-center text-slate-500">
                  <p>검색 결과가 없습니다.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg shadow-blue-200">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <ExternalLink className="mr-2" size={20} /> 주요 연동 쇼핑몰
            </h3>
            <div className="space-y-3">
              {[
                { name: '한국미스미 (MISUMI)', url: 'https://kr.misumi-ec.com/' },
                { name: '디바이스마트', url: 'https://www.devicemart.co.kr/' },
                { name: '메카솔루션', url: 'https://mechasolution.com/' },
                { name: '아이마켓', url: 'https://www.imarket.co.kr/' }
              ].map((mall, i) => (
                <a
                  key={i}
                  href={mall.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{mall.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center text-sm text-amber-600">
               ⚠️ 구매 주의사항
            </h3>
            <ul className="text-xs space-y-3 text-slate-600 list-disc list-inside">
              <li>실제 재고 상태는 판매처에 따라 실시간으로 변동될 수 있습니다.</li>
              <li>대량 주문 시 별도의 유선 견적이 유리할 수 있습니다.</li>
              <li>도면 데이터와 실제 제품 사양의 일치 여부를 최종 확인하세요.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommerceConnector;
