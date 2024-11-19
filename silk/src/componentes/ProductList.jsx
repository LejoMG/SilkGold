import React from 'react';
import patineta from '../assets/patineta.jpeg'
import camisa from '../assets/camisa.jpeg'
import pantalon from '../assets/pantalon.jpeg'

const products = [
  { id: 1,image: patineta ,  name: 'Patineta', price: 100 },
  { id: 2, image: camisa , name: 'Camisa', price: 200 },
  { id: 3, image: pantalon,name: 'Pantalon', price: 300 },
];

function ProductList({ addToCart }) {
  return (
    <div>
    <h2>Lista de Productos</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }}
          />
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>
            Añadir al carrito
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default ProductList;
