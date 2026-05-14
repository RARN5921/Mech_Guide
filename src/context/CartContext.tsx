import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface Part {
  id: number;
  name: string;
  spec?: string;
  qty: number;
  price: number;
  supplier: string;
}

interface CartContextType {
  cartItems: Part[];
  addToCart: (part: Part) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Part[]>([
    { id: 1, name: '볼 베어링 6000', spec: '10x26x8', qty: 4, price: 1200, supplier: '한국미스미' },
    { id: 2, name: 'M8 육각 렌치 볼트', spec: 'M8 x 20', qty: 20, price: 150, supplier: '디바이스마트' },
    { id: 3, name: '플랜지 커플링', spec: 'D20-L30', qty: 2, price: 15000, supplier: '한국미스미' },
  ]);

  const addToCart = (part: Part) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === part.id || item.name === part.name);
      if (existing) {
        return prev.map(item =>
          item.id === existing.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...part, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
