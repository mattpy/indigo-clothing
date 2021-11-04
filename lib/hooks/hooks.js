import { useEffect, useState } from 'react';

export function useRecentlyViewed() {
  const key = 'indigo-recent';

  const [storedItems, setStoredItems] = useState(JSON.stringify([]));

  useEffect(() => {
    setStoredItems(localStorage.getItem(key) ?? JSON.stringify([]));
  }, []);

  const handleSetProducts = item => {
    let items = JSON.parse(storedItems);
    const itemLocation = items.map(item => item._id).indexOf(item._id);

    if (itemLocation !== -1) {
      items.splice(itemLocation, 1);
    }

    items.unshift(item);
    items = items.slice(0, 4);

    items = JSON.stringify(items);
    setStoredItems(items);
    localStorage.setItem(key, items);
  };
  return [JSON.parse(storedItems), handleSetProducts];
}

export function useCart() {
  const key = 'indigo-cart';
  const [localCart, setCart] = useState(null);

  useEffect(() => {
    const local = localStorage.getItem(key);
    if (!local) {
      localStorage.setItem(key, '[]');
      setCart(JSON.stringify([]));
    } else {
      setCart(localStorage.getItem(key));
    }
  }, []);

  const addToCart = (item, quantity) => {
    let cart = JSON.parse(localCart);
    const itemLocation = cart.map(item => item.product).indexOf(item);

    if (itemLocation !== -1) {
      cart.splice(itemLocation, 1);
    }

    if (quantity > 0) {
      cart.unshift({ product: item, quantity });
    }

    cart = JSON.stringify(cart);
    setCart(cart);
    localStorage.setItem(key, cart);
  };
  return [JSON.parse(localCart), addToCart];
}
