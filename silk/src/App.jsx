/* import Header from './componentes/header'

function App (){
  return (
    <div>
      <Header />
    </div>
  )
}

export default App */// App.js
import React, { useState } from 'react';
import ProductList from './componentes/ProductList';
import Cart from './componentes/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar si el carrito está abierto

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== id);
      }
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="product-list">
        <ProductList addToCart={addToCart} />
      </div>
      <button 
        className="toggle-cart-button" 
        onClick={() => setIsCartOpen(!isCartOpen)}
        style={{
          marginTop: '10px',
          backgroundColor: '#6200ea',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        {isCartOpen ? 'Cerrar Carrito' : 'Abrir Carrito'}
      </button>
      {isCartOpen && ( // Mostrar u ocultar el carrito basado en el estado
        <div className="cart">
          <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        </div>
      )}
    </div>
  );
}

export default App;


