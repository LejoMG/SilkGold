import React, { useState, useEffect } from "react";

const Cards = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  // Consumir la API al cargar el componente
  useEffect(() => {
    fetch("http://localhost:3001") // Cambia la URL según tu API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al consumir la API");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{ background: "black", paddingBottom: "50px" }}>
      <h1 className="text-center" style={{ color: "#9B59B6" }}>
        Ropa
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          {products.map((product) => (
            <div key={product._id} className="col-md-4 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.image}
                  style={{ height: "300px" }}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Precio: ${product.price}</p>
                  <button
                    onClick={() => addToCart(product)} // Agregar al carrito
                    className="btn"
                    style={{ background: "#9B59B6", color: "white" }}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
