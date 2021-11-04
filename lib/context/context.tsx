import { createContext } from 'react';
import useSWR from 'swr';

import { CartItem } from '../../components/cart/cart';
import { Product } from '../../components/product/product/product';
import { useCart, useRecentlyViewed } from '../hooks/hooks';

interface StoreContextInterface {
  cart: CartItem[];
  setCart(item: string, quantity: string): void;
  items: string[];
  setRecentlyViewed(item: Product): void;
}

export const StoreContext = createContext<StoreContextInterface | null>(null);

export default function StoreProvider({
  children
}: {
  children: JSX.Element[] | JSX.Element;
}): JSX.Element {
  const [cart, setCart] = useCart();
  const [items, setRecentlyViewed] = useRecentlyViewed();

  return (
    <StoreContext.Provider value={{ cart, setCart, items, setRecentlyViewed }}>
      {children}
    </StoreContext.Provider>
  );
}
