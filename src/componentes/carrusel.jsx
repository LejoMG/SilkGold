import React from 'react';

const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark"
      style={{ width: '100%', height: '60vh' }}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" style={{ height: '100%' }}>
        <div className="carousel-item active" data-bs-interval="100">
          <img
            src="./banner.png" // Cambia la ruta si es necesario
            className="d-block w-100"
            style={{ height: '100%', objectFit: 'cover' }}
            alt="Slide"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Carousel;
