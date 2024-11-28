import React, { useState } from "react";
import Navbar from "./NavBar";
import Swal from "sweetalert2";

const productsData = [
  {
    id: "P01",
    title: "Manguera",
    description: "Mangueras armadas 3 capas, conexiones plásticas, Pretul",
    price: 25.0,
    stock: 10,
    image: "https://via.placeholder.com/150", // Imagen de ejemplo
    category: "Herramientas",
  },
  {
    id: "P02",
    title: "Manguera XL",
    description: "Mangueras reforzadas 5 capas, conexiones de metal, Pretul",
    price: 35.0,
    stock: 5,
    image: "https://via.placeholder.com/150",
    category: "Herramientas",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrarlossss
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const styles = {
    productImage: {
      width: "100px",
      marginRight: "10px",
    },
    productImageLarge: {
      width: "550px",
      height: "412px",
      objectFit: "cover", //este esta bonmito es pa adecuar la imagen
      display: "block",
      margin: "0 auto",
    },
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "25px",
    },
    productTitle: {
      marginLeft: "10px",
    },
  };

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "El producto ha sido eliminado!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "El producto no ha sido eliminado.", "error");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {/* Lista de Productos */}
          <div className="col-md-6">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Productos</h3>
              <button className="btn btn-primary">Agregar</button>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <ul className="list-group">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelectProduct(product)}
                >
                  <div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                      style={styles.productImage}
                    />
                    <strong style={styles.productTitle}>{product.title}</strong>{" "}
                    - ${product.price.toFixed(2)}
                  </div>
                  <span
                    className={`badge ${
                      product.stock > 0 ? "bg-success" : "bg-secondary"
                    }`}
                  >
                    {product.stock > 0 ? "Disponible" : "Agotado"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detalle del Producto */}
          <div className="col-md-6">
            {selectedProduct ? (
              <div className="card" style={styles.card}>
                {/* Imagen */}
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  style={styles.productImageLarge}
                />
                <div className="card-body">
                  <h5 className="card-title">{selectedProduct.title}</h5>
                  <p className="card-text">{selectedProduct.description}</p>
                  <p>
                    <strong>Precio:</strong> ${selectedProduct.price.toFixed(2)}
                  </p>
                  <p>
                    <strong>Código:</strong> {selectedProduct.id}
                  </p>
                  <p>
                    <strong>Categoría:</strong> {selectedProduct.category}
                  </p>
                  <p>
                    <strong>Stock:</strong> {selectedProduct.stock}
                  </p>
                  <button className="btn btn-warning me-2">Modificar</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteProduct(selectedProduct.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center mt-5">
                <p>En espera para que seleccione un producto...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
