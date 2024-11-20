import React from 'react';

import RealMadrid from '../assets/Realmadrid.jpeg';
import FcBarcelona from '../assets/Fcbarcelona.jpeg';
import Juventus from '../assets/juventus.jpeg';
import ManchesterUnited from '../assets/manchester.jpeg';


const products = [
  { id: 1, image: RealMadrid, name: 'Real Madrid', price: 200000 },
  { id: 2, image: FcBarcelona, name: 'FC Barcelona', price: 20000 },
  { id: 3, image: Juventus, name: 'Juventus', price: 100000 },
  { id: 4, image: ManchesterUnited, name: 'Manchester United', price: 120000 },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <header>
        <h1>Carrito de compra</h1>
      </header>
      <h2>Lista de camisas</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Imagen del producto */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '50px',
                height: '50px',
                marginRight: '15px',
                borderRadius: '8px',
              }}
            />
            
            <span style={{ flexGrow: 1 }}>
              {product.name} - ${product.price}
            </span>
            <button
              onClick={() => addToCart(product)}
              style={{
                marginLeft: '10px',
                padding: '5px 10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
