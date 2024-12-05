import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null, // Cambié a null para manejar el archivo
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Manejar el cambio de valores en los campos
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0], // Guardamos el archivo seleccionado
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(); // Usamos FormData para enviar archivos
    data.append("name", formData.name);
    data.append("price", formData.price);
    if (formData.image) {
      data.append("image", formData.image); // Añadimos la imagen al FormData
    }

    fetch("http://localhost:3001", {
      method: "POST",
      body: data, // Enviamos FormData en lugar de JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al registrar el usuario");
        }
        return response.json();
      })
      .then((data) => {
        setResponseMessage("Usuario registrado correctamente.");
        setFormData({ name: "", price: "", image: null }); // Resetear el formulario
      })
      .catch((error) => {
        setResponseMessage("Error al registrar el usuario. Inténtalo de nuevo.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center">Registro de Usuarios</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Imagen:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
      {responseMessage && <p className="mt-3">{responseMessage}</p>}
    </div>
  );
};

export default RegisterForm;
