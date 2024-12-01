import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FileUploadModal from "./FileUploadModal";
import apiConnect from "../../utils/api.connection";

const Stock = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editableProduct, setEditableProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
  }, [])

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
      const response = await fetch(`http://localhost:3000/api/products/${editableProduct.idProduct}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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

  const getAllProducts = async () => {
    try {
      const response = await apiConnect.get('api/products/')
      const productsData = response

      setProducts(productsData )
    } catch (error) {
      console.error(error);
      
    }
  }

  /*const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );*/

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
              {products.map((product) => (
                <li
                  key={product.idProduct}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelectProduct(product)}
                >
                  <div>
                    <img
                      src={product.image}
                      //alt={product.title}
                      style={{ width: "100px", marginRight: "10px" }}
                    />
                    <strong>{product.description}</strong> - $
                    {parseFloat(product.selling_price).toFixed(2)}
                    <p>Disponible: {product.availableStock} Apartado: {product.reserved} Total: {product.stock}</p> 
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

          <FileUploadModal showModal={showModal} handleCloseModal={handleCloseModal}/>

          {/* Detalle del Producto */}
          <div className="col-md-6">
            {editableProduct ? (
              <div className="card">
                <img src={editableProduct.image} alt={editableProduct.name} style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "10px",}}/>
                <div className="card-body">
                  <h5 className="card-title">
                    <input
                      type="text"
                      value={editableProduct.name}
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
                      value={editableProduct.selling_price}
                      onChange={(e) =>
                        setEditableProduct({
                          ...editableProduct,
                          price: parseFloat(e.target.value),
                        })
                      }
                      className="form-control"
                    />
                  </p>
                  <p> <strong>Categoría:</strong>{" "}
                    <input type="text"value={editableProduct.category} onChange={(e) => setEditableProduct({ ...editableProduct, category: e.target.value, }) } className="form-control"/>
                  </p>
                  <p> <strong>Stock:</strong>{" "}
                    <input type="number" value={editableProduct.stock} onChange={(e) => setEditableProduct({ ...editableProduct, stock: parseInt(e.target.value), })} className="form-control"/>
                  </p>
                  <button className="btn btn-warning float-end mb-2 me-2" onClick={handleSaveChanges}>
                    Modificar
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center mt-5">
                <p>Selecciona un producto para editarlo...</p>
                <div className="d-flex justify-content-center mt-3">
                  <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stock;
