import React, { useState } from 'react';
import Nav from './componentes/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Carrusel from './componentes/carrusel';
import Cards from './componentes/tarjetas';
import Footer from './componentes/footer';
import Cart from './componentes/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product.id
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
        return prevCart.filter((item) => item._id !== id);
      }
      return prevCart.map((item) =>
        item._id === id ? { ...item, quantity } : item
      );
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };



  return (
    <>
      <Nav cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
      <Carrusel />
      <Cards addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;
