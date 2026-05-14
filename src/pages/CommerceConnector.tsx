import React, { useState } from 'react';
import { ExternalLink, Package, ArrowRight, Search } from 'lucide-react';

const CommerceConnector: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const cartItems = [
    { id: 1, name: '볼 베어링 6000', spec: '10x26x8', qty: 4, price: 1200, supplier: '한국미스미' },
    { id: 2, name: 'M8 육각 렌치 볼트', spec: 'M8 x 20', qty: 20, price: 150, supplier: '디바이스마트' },
    { id: 3, name: '플랜지 커플링', spec: 'D20-L30', qty: 2, price: 15000, supplier: '한국미스미' },
  ];

  const allParts = [
    ...cartItems,
    { id: 4, name: 'LM 가이드', spec: 'HSR15A', qty: 1, price: 45000, supplier: '삼익THK' },
    { id: 5, name: '타이밍 벨트', spec: '2GT-200', qty: 1, price: 3500, supplier: '메카솔루션' },
    { id: 6, name: '서보 모터', spec: '400W', qty: 1, price: 210000, supplier: 'LS일렉트릭' },
  ];

  const filteredParts = allParts.filter(part =>
    part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    part.spec.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">스마트 커머스 커넥터 (Commerce Connector)</h2>
        <p className="text-slate-500">확정된 부품 리스트를 기반으로 최적의 구매 경로를 안내합니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center">
                <Package className="mr-2 text-blue-600" size={18} /> 확정 부품 리스트
              </h3>
              <span className="text-sm text-slate-500">{cartItems.length}개 품목</span>
            </div>

            <div className="divide-y divide-slate-100">
              {cartItems.map(item => (
                <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                      <Package size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.spec} | {item.supplier}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">₩{(item.price * item.qty).toLocaleString()}</p>
                    <p className="text-xs text-slate-400">수량: {item.qty}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">예상 합계 (VAT 별도)</p>
                <p className="text-2xl font-black text-slate-900">₩{total.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <Search className="mr-2 text-indigo-600" size={18} /> 부품 가격 및 구매처 검색
            </h3>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="부품명 또는 규격을 검색하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
            </div>
            {searchQuery && (
              <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
                {filteredParts.length > 0 ? (
                  filteredParts.map(part => (
                    <div key={part.id} className="py-3 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{part.name}</p>
                        <p className="text-xs text-slate-500">{part.spec}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-indigo-600">₩{part.price.toLocaleString()}</p>
                        <p className="text-xs text-slate-500">{part.supplier}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500 py-4 text-center">검색 결과가 없습니다.</p>
                )}
              </div>
            )}
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
