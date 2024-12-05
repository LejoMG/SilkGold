import React, { useState } from 'react';
import Cart from './Cart'; // Componente del carrito
import RegisterForm from './Registro'; // Componente del formulario de registro
import { Modal } from 'react-bootstrap';

const Nav = ({ cart, addToCart, updateQuantity, removeFromCart }) => {
  const [isCartVisible, setIsCartVisible] = useState(false); // Controlar visibilidad del carrito
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false); // Controlar visibilidad del modal de registro

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const toggleRegisterModal = () => {
    setIsRegisterModalVisible(!isRegisterModalVisible);
  };

  return (
    <div style={{ background: '#3b3837' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Barra de navegación */}
        <ul className="nav nav-underline justify-content-center" style={{ flex: 1, justifyContent: 'center', margin: 0 }}>
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'white' }} href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'white' }} href="#">Link</a>
          </li>
          <div style={{ marginLeft: '10px' }}>
          <button
            className='nav-link' style={{ color: 'white' }}
            onClick={toggleRegisterModal}
          >
            Registrar Producto
          </button>
        </div>
          <li className="nav-item">
            <p className="" style={{ color: '#79706d', marginTop: '7px' }} aria-disabled="true">Silk & Gold</p>
          </li>
        </ul>

        {/* Botón de carrito */}
        <div style={{ marginLeft: 'auto', marginRight: '10px' }}>
          <button onClick={toggleCart}>
            <img src="./carrito.png" alt="Carrito" style={{ width: '24px', height: '24px' }} />
          </button>
        </div>

        {/* Botón para registrar producto */}
        
      </div>

      {/* Mostrar carrito si está visible */}
      {isCartVisible && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '10px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 100,
            maxWidth: '400px',
            overflowY: 'auto',
          }}
        >
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </div>
      )}

      {/* Modal para registrar producto */}
      <Modal show={isRegisterModalVisible} onHide={toggleRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Nav;
