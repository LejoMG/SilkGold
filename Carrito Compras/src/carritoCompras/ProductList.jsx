import React from 'react';
import jordan from '../assets/jordan.jpeg'
import tn from '../assets/tn.jpg'
import yezzy from '../assets/yezzy.jpg'
import lv from '../assets/lv.jpeg'
import fila from '../assets/fila.jpeg'

const products = [
  { id: 1, image: jordan ,  name: 'Jordan 11 Retro Low Legend Blue', price: 205 },
  { id: 2, image: tn , name: 'Nike Air Max Plus Drift', price: 180 },
  { id: 3, image: yezzy ,name: 'Yeezy Boost 350 V2', price: 240 },
  { id: 4, image: lv , name: 'LV Trainer Maxi', price: 1850 },
  { id: 5, image: fila ,name: 'Fila Dereverse Basketball', price: 65 },
];

function ProductList({ addToCart }) {
  return (
    <div>
    <h2>Catalogo de Zapatos</h2>
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
            Añadir al carro
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default ProductList;