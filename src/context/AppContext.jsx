import { createContext, useState, useEffect } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [purchaset, setPurchaset] = useState(false)

  // LocalStorage'dan yuklash
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Mahsulot qo‘shish yoki miqdorini yangilash
  const addToCart = (product, quantity = 1) => {
    setCount((prev) => (prev === 0 ? + 1 : prev));
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      let updatedCart;
      if (existingProduct) {
        updatedCart = prev.map((item) =>
          item.id === product.id ? { ...item, quantity } : item
        );
      } else {
        updatedCart = [...prev, { ...product, quantity }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });

  };

  // Mahsulotni o‘chirish
  const deleteFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
    setCount(0)
  };


  // Maxsulotni sotib olish

  const handleBuy = (productId) => {
    deleteFromCart(productId)
    setPurchaset(true)
  }

  return (
    <AppContext.Provider value={{ cart, count, purchaset, addToCart, deleteFromCart, handleBuy }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
