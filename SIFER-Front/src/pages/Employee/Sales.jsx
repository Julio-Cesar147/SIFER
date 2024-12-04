import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarEmployee from "./NavBarEmployee";
import apiConnect from "../../utils/api.connection.js";

const Sales = () => {
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [Products, setProducts] = useState([]); 
  const [articles, setArticles] = useState([]);
  const handleCloseModal = () => setShowModal(false);
  const [montoRecibido, setMontoRecibido] = useState(0);

  useEffect(() => {
        
    getAllProducts()
}, [])

const getAllProducts = async () => {
  try {
    const response = await apiConnect.get("api/products/");
    console.log("Productos recibidos desde la API:", response); 
    setProducts(response);
  } catch (error) {
    console.error(error);
  }
};

const handleAddArticle = (product) => {
  const existingProduct = articles.find((art) => art.idProduct === product.idProduct);
  if (existingProduct) {
    setArticles(
      articles.map((art) =>
        art.idProduct === product.idProduct
          ? { ...art, cantidad: art.cantidad + 1 }
          : art
      )
    );
  } else {
    setArticles([...articles, { ...product, cantidad: 1 }]);
  }
};

const calcularTotal = () => {
  return articles.reduce(
    (total, art) => total + art.selling_price * art.cantidad, 
      0
  );
};

const handleShowModal = () => {
  if (calcularTotal() > 0) {
    setShowModal(true);
  } else {
    Swal.fire({
      title: "Error",
      text: "No hay productos en la venta.",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
};

const calcularCambio = () => {
  const diferencia = montoRecibido - calcularTotal();
  if (diferencia < 0) {
    return "Falta dinero";
  }
  return `$${Number(diferencia).toFixed(2)}`;
};


const handleSuccess = () => {
  Swal.fire({
    title: "Venta Realizada",
    text: "La venta ha sido realizada perfectamente",
    icon: "success",
    showConfirmButton: false,
    timer: 900,
}).then(() =>{
    window.location.reload(); 
  })
};


  return (
    <>
      <NavBarEmployee />
      <div className="container mt-5">
        {step === 1 ? (
          <div className="p-4 bg-white shadow rounded" style={{ maxWidth: "600px", margin: "auto" }}>
            <h4 className="mb-4 text-primary">Información de comprador</h4>
            <hr />
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre (s)
                </label>
                <input type="text" className="form-control" id="name" placeholder="Nombre del cliente" required/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="paterno" className="form-label">
                  Apellido Paterno
                </label>
                <input type="text" className="form-control" id="paterno" placeholder="Apellido paterno del cliente" required/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="materno" className="form-label">
                  Apellido Materno
                </label>
                <input type="text" className="form-control" id="materno" placeholder="Apellido materno del cliente" required/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="tel" className="form-label">
                  Teléfono
                </label>
                <input type="tel" className="form-control" id="tel" placeholder="Teléfono" pattern="[0-9]{10}" title="Debe ser un número de 10 dígitos" maxLength="10"  required
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Siguiente
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <h4 className="mb-4 text-primary">Lista de artículos</h4>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Buscar herramienta..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <ul className="list-group mt-2">
              {Products.filter((product) => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((product) => (
                <li key={product.idProduct} className="list-group-item d-flex justify-content-between align-items-center">
                  {product.name} - ${product.selling_price}
                  <button className="btn btn-sm btn-primary" onClick={() => handleAddArticle(product)} >
                    Agregar
                  </button>
                </li>
              ))}
              {Products.filter((product) => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).length === 0 && (
                <li className="list-group-item">No hay productos disponibles</li>
              )}
            </ul>
            </div>
            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th>ID</th>
                  <th>Código</th>
                  <th>Nombre del Artículo</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {articles.filter((article) =>
                  article.name.toLowerCase().includes(searchTerm.toLowerCase())
                ).map((article) => (
                  <tr key={article.idProduct}>
                    <td>{article.idProduct}</td>
                    <td>{article.sku}</td>
                    <td>{article.name}</td>
                    <td>${Number(article.selling_price).toFixed(2)}</td>
                    <td>{article.cantidad}</td>
                    <td>${Number(article.selling_price * article.cantidad).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="row mt-4 justify-content-center text-center">
              <div className="col-md-8">
                <button className="btn btn-danger me-2" onClick={() => setStep(1)}>
                  Cancelar Venta
                </button>
                <button className="btn btn-success" onClick={handleShowModal}>
                  Realizar Venta
                </button>
              </div>
            </div>
            {showModal && (
              <div className="modal show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Resumen de Venta</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={handleCloseModal}
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>
                        <strong>Total de venta:</strong> ${Number(calcularTotal()).toFixed(2)}
                      </p>
                      <div className="form-group mb-2">
                        <label htmlFor="montoRecibido" className="form-label">
                          Monto recibido:
                        </label>
                        <input type="number" className="form-control" id="montoRecibido" value={montoRecibido} min={0} onChange={(e) =>
                            setMontoRecibido(parseFloat(e.target.value) || 0)
                          }
                        />
                      </div>
                      <p>
                        <strong>Cambio:</strong> {calcularCambio()}
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-success" 
                        onClick={() => {
                          if (montoRecibido < calcularTotal()) {
                            Swal.fire({
                              title: "Monto Insuficiente",
                              text: "El monto recibido no es suficiente para completar la venta.",
                              icon: "error",
                              confirmButtonText: "Aceptar",
                            });
                          } else {
                            handleCloseModal();
                            handleSuccess();
                          }
                        }}
                      >
                        Confirmar Venta
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Sales;
