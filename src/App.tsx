import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartClick={handleCartClick} />
        <main>
          <ProductList />
        </main>
        <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      </div>
    </CartProvider>
  );
}

export default App;