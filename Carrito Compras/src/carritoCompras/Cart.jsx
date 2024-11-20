import React from 'react';

function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Carro de Compras</h2>
      {cart.length === 0 ? (
        <p>El carro está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }}
              />
              <div style={{ flex: 1 }}>
                <span>{item.name} - ${item.price}</span>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Math.max(0, parseInt(e.target.value, 10) || 0))
                    }
                    style={{ width: '50px', textAlign: 'center', margin: '0 10px' }}
                    min="0"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;