import React, { useState } from 'react';
import { ExternalLink, Package, ArrowRight, Search, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CommerceConnector: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();

  const allParts = [
    { id: 1, name: '볼 베어링 6000', spec: '10x26x8', qty: 4, price: 1200, supplier: '한국미스미' },
    { id: 2, name: 'M8 육각 렌치 볼트', spec: 'M8 x 20', qty: 20, price: 150, supplier: '디바이스마트' },
    { id: 3, name: '플랜지 커플링', spec: 'D20-L30', qty: 2, price: 15000, supplier: '한국미스미' },
    { id: 4, name: 'LM 가이드', spec: 'HSR15A', qty: 1, price: 45000, supplier: '삼익THK' },
    { id: 5, name: '타이밍 벨트', spec: '2GT-200', qty: 1, price: 3500, supplier: '메카솔루션' },
    { id: 6, name: '서보 모터', spec: '400W', qty: 1, price: 210000, supplier: 'LS일렉트릭' },
    { id: 7, name: 'M2 육각 렌치 볼트', spec: 'M2 x 10', qty: 1, price: 120, supplier: '한국미스미' },
    { id: 8, name: 'M2.5 육각 렌치 볼트', spec: 'M2.5 x 10', qty: 1, price: 150, supplier: '한국미스미' },
    { id: 9, name: 'M3 육각 렌치 볼트', spec: 'M3 x 10', qty: 1, price: 200, supplier: '한국미스미' },
    { id: 10, name: 'M4 육각 렌치 볼트', spec: 'M4 x 10', qty: 1, price: 250, supplier: '한국미스미' },
    { id: 11, name: 'M5 육각 렌치 볼트', spec: 'M5 x 10', qty: 1, price: 300, supplier: '한국미스미' },
    { id: 12, name: 'M6 육각 렌치 볼트', spec: 'M6 x 10', qty: 1, price: 400, supplier: '한국미스미' },
    { id: 13, name: 'M10 육각 렌치 볼트', spec: 'M10 x 20', qty: 1, price: 800, supplier: '한국미스미' },
    { id: 14, name: '롤러 베어링', spec: '표준', qty: 1, price: 4500, supplier: '한국미스미' },
    { id: 15, name: '부싱', spec: '표준', qty: 1, price: 2500, supplier: '한국미스미' },
    { id: 16, name: '오일리스 베어링', spec: '표준', qty: 1, price: 6000, supplier: '한국미스미' },
    { id: 17, name: '리니어 베어링', spec: '표준', qty: 1, price: 8500, supplier: '한국미스미' },
    { id: 18, name: '볼 부쉬', spec: '표준', qty: 1, price: 5500, supplier: '한국미스미' },
    { id: 19, name: '슬리브/머프 커플링', spec: '표준', qty: 1, price: 12000, supplier: '한국미스미' },
    { id: 20, name: '클램프 커플링', spec: '표준', qty: 1, price: 15000, supplier: '한국미스미' },
    { id: 21, name: '조 커플링', spec: '표준', qty: 1, price: 18000, supplier: '한국미스미' },
    { id: 22, name: '그리드 커플링', spec: '표준', qty: 1, price: 25000, supplier: '한국미스미' },
    { id: 23, name: '기어 커플링', spec: '표준', qty: 1, price: 35000, supplier: '한국미스미' },
    { id: 24, name: '디스크 커플링', spec: '표준', qty: 1, price: 28000, supplier: '한국미스미' },
    { id: 25, name: '체인 커플링', spec: '표준', qty: 1, price: 22000, supplier: '한국미스미' },
    { id: 26, name: '유니버셜 조인트', spec: '표준', qty: 1, price: 45000, supplier: '한국미스미' },
    { id: 27, name: '올덤 커플링', spec: '표준', qty: 1, price: 20000, supplier: '한국미스미' },
    { id: 28, name: '벨로우즈 커플링', spec: '표준', qty: 1, price: 30000, supplier: '한국미스미' },
    { id: 29, name: '평기어', spec: '표준', qty: 1, price: 15000, supplier: '한국미스미' },
    { id: 30, name: '내기어', spec: '표준', qty: 1, price: 25000, supplier: '한국미스미' },
    { id: 31, name: '랙과 피니언', spec: '표준', qty: 1, price: 35000, supplier: '한국미스미' },
    { id: 32, name: '베벨 기어', spec: '표준', qty: 1, price: 22000, supplier: '한국미스미' },
    { id: 33, name: '마이터 기어', spec: '표준', qty: 1, price: 18000, supplier: '한국미스미' },
    { id: 34, name: '웜과 웜 기어', spec: '표준', qty: 1, price: 48000, supplier: '한국미스미' },
    { id: 35, name: '하이포이드 기어', spec: '표준', qty: 1, price: 65000, supplier: '한국미스미' },
    { id: 36, name: '나사 기어', spec: '표준', qty: 1, price: 28000, supplier: '한국미스미' },
    { id: 37, name: '제네바 기어', spec: '표준', qty: 1, price: 42000, supplier: '한국미스미' },
    { id: 38, name: '래칫', spec: '표준', qty: 1, price: 18000, supplier: '한국미스미' },
    { id: 39, name: 'Lm 가이드', spec: '표준', qty: 1, price: 55000, supplier: '한국미스미' },
    { id: 40, name: '리니어 롤러 가이드', spec: '표준', qty: 1, price: 85000, supplier: '한국미스미' },
    { id: 41, name: '볼 스플라인', spec: '표준', qty: 1, price: 65000, supplier: '한국미스미' },
    { id: 42, name: '슬라이드 부쉬', spec: '표준', qty: 1, price: 15000, supplier: '한국미스미' },
    { id: 43, name: '올일리스 슬라이드', spec: '표준', qty: 1, price: 22000, supplier: '한국미스미' },
    { id: 44, name: '도브테일 가이드', spec: '표준', qty: 1, price: 45000, supplier: '한국미스미' },
    { id: 45, name: '크로스 롤러 가이드', spec: '표준', qty: 1, price: 75000, supplier: '한국미스미' },
    { id: 46, name: '롤러 팔로워', spec: '표준', qty: 1, price: 18000, supplier: '한국미스미' },
    { id: 47, name: '캠 팔로워', spec: '표준', qty: 1, price: 25000, supplier: '한국미스미' },
    { id: 48, name: 'V벨트 및 풀리', spec: '표준', qty: 1, price: 15000, supplier: '한국미스미' },
    { id: 49, name: '평벨트', spec: '표준', qty: 1, price: 8500, supplier: '한국미스미' },
    { id: 50, name: '리브드 벨트', spec: '표준', qty: 1, price: 12000, supplier: '한국미스미' },
    { id: 51, name: '라운드 벨트', spec: '표준', qty: 1, price: 9500, supplier: '한국미스미' },
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
        <p className="text-slate-500">부품 리스트를 기반으로 최적의 구매 경로를 안내합니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center">
                <Package className="mr-2 text-blue-600" size={18} /> 부품 리스트
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
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 mr-4 bg-slate-50 border border-slate-200 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                        className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors"
                        aria-label="감소"
                        disabled={item.qty <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center text-slate-900">{item.qty}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors"
                        aria-label="증가"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="text-right w-24">
                      <p className="text-sm font-bold text-slate-900">₩{(item.price * item.qty).toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      aria-label="삭제"
                    >
                      <Trash2 size={18} />
                    </button>
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
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
            </div>
            {searchQuery && (
              <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
                {filteredParts.length > 0 ? (
                  filteredParts.map(part => (
                    <button
                      key={part.id}
                      className="py-3 flex items-center justify-between hover:bg-slate-50 cursor-pointer w-full text-left px-2"
                      onClick={() => {
                        addToCart(part);
                        alert('부품 리스트에 추가되었습니다.');
                      }}
                    >
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{part.name}</p>
                        <p className="text-xs text-slate-500">{part.spec}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-indigo-600">₩{part.price.toLocaleString()}</p>
                        <p className="text-xs text-slate-500">{part.supplier}</p>
                      </div>
                    </button>
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
