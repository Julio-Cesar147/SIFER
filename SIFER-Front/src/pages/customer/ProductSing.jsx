import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import NavBar from "../admin/NavBar";
const orange = "#F75409";


const ProductSing = () => {
  const location = useLocation(); // Usa useLocation para obtener datos de la navegación
  const { selectedProduct } = location.state || {}; // Extrae selectedProduct desde el estado

  const [searchTerm, setSearchTerm] = useState("");

  if (!selectedProduct) {
    return <p>No se seleccionó ningún producto.</p>;
  }

  const [quantity, setQuantity] = useState(1);

  const handleProduct = () => {
    Swal.fire({
      title: "Error",
      text: "Tienes que iniciar sesión para poder apartar un producto",
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <>
      <NavBar />

      <div className="container p-4">
        <p className="fs-3 fw-semibold mt-5 mb-4">{selectedProduct.category}</p>
        <div className="row">
          <div
            className="col-md-4 d-flex justify-content-center align-items-center"
            style={{ marginRight: 50 }}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-100 img-fluid rounded shadow-sm"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-8 w-auto ms-5">
            <div className="mb-4">
              <p className="fs-4 fw-semibold">{selectedProduct.name}</p>
              <p className="text-success fw-medium">{selectedProduct.status}</p>
              <p className="text-muted">{selectedProduct.description}</p>
              <p className="fw-bold fs-2 text-dark">${selectedProduct.price}</p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <p className="me-3 mb-0">Cantidad:</p>
              <input
                id="num"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-control w-25"
              />
            </div>
            <div>
              <button
                className="btn btn-lg text-white"
                style={{ backgroundColor: orange }}
                onClick={handleProduct}
              >
                Añadir a mis apartados
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSing;
