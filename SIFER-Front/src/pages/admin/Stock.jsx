import React, { useState } from "react";
import Swal from 'sweetalert2'
import Navbar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FileUploadModal from "./FileUploadModal";

const productsData = [
  {
    id: "P01",
    title: "Manguera",
    description: "Mangueras armadas 3 capas, conexiones plásticas, Pretul",
    price: 25.0,
    stock: 10,
    image: "https://via.placeholder.com/150",
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
  {
    id: "P03",
    title: "Taladro",
    description: "Taladro de 500W, con broquero metálico y cable de 1.5m",
    price: 120.0,
    stock: 7,
    image: "https://via.placeholder.com/150",
    category: "Eléctricos",
  },
];

const Stock = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editableProduct, setEditableProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setEditableProduct({ ...product });
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`laapi${editableProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editableProduct), 
      });
      
      if (response.ok) {
        Swal.fire({
          title: "Cambios guardados exitosamente",
          icon: "success",
        });
        setSelectedProduct(editableProduct); 
      } else {
        Swal.fire({
          title: "Error al guardar cambios",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error de conexión",
        text: error.message,
        icon: "error",
      });
    }
  };
  

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {/* Lista de Productos */}
          <div className="col-md-6">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Productos</h3>
              <button className="btn btn-primary" onClick={handleAddProduct}>
                Agregar
              </button>
            </div>
            {/* Input de búsqueda */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Lista de productos */}
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
                      style={{ width: "100px", marginRight: "10px" }}
                    />
                    <strong>{product.title}</strong> - $
                    {product.price.toFixed(2)}
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

          {/* Modal para agregar producto */}
          <FileUploadModal
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />

          {/* Detalle del Producto */}
          <div className="col-md-6">
            {editableProduct ? (
              <div className="card">
                <img
                  src={editableProduct.image}
                  alt={editableProduct.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <input
                      type="text"
                      value={editableProduct.title}
                      onChange={(e) =>
                        setEditableProduct({
                          ...editableProduct,
                          title: e.target.value,
                        })
                      }
                      className="form-control"
                    />
                  </h5>
                  <textarea
                    value={editableProduct.description}
                    onChange={(e) =>
                      setEditableProduct({
                        ...editableProduct,
                        description: e.target.value,
                      })
                    }
                    className="form-control"
                    rows="3"
                  ></textarea>
                  <p>
                    <strong>Precio:</strong>{" "}
                    <input
                      type="number"
                      value={editableProduct.price}
                      onChange={(e) =>
                        setEditableProduct({
                          ...editableProduct,
                          price: parseFloat(e.target.value),
                        })
                      }
                      className="form-control"
                    />
                  </p>
                  <p>
                    <strong>Categoría:</strong>{" "}
                    <input
                      type="text"
                      value={editableProduct.category}
                      onChange={(e) =>
                        setEditableProduct({
                          ...editableProduct,
                          category: e.target.value,
                        })
                      }
                      className="form-control"
                    />
                  </p>
                  <p>
                    <strong>Stock:</strong>{" "}
                    <input
                      type="number"
                      value={editableProduct.stock}
                      onChange={(e) =>
                        setEditableProduct({
                          ...editableProduct,
                          stock: parseInt(e.target.value),
                        })
                      }
                      className="form-control"
                    />
                  </p>
                  <button
                    className="btn btn-warning float-end mb-2 me-2"
                    onClick={handleSaveChanges}
                  >Modificar
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center mt-5">
                <p>Selecciona un producto para editarlo...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stock;