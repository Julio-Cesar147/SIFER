import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarEmployee from "./NavBarEmployee";
import apiConnect from "../../utils/api.connection.js";

const Sales = () => {
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [montoRecibido, setMontoRecibido] = useState(0);
  const [Products, setProducts] = useState([]); 
  const [articles, setArticles] = useState([]);

  useEffect(() => {
        
    getAllProducts()
}, [])

const getAllProducts = async () => {
  try {
    const response = await apiConnect.get("api/products/");
    console.log("Productos recibidos desde la API:", response); 
    setProducts(response); // Asegúrate de acceder a los datos correctamente
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
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nombre del cliente"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="paterno" className="form-label">
                  Apellido Paterno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="paterno"
                  placeholder="Apellido paterno del cliente"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="materno" className="form-label">
                  Apellido Materno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="materno"
                  placeholder="Apellido materno del cliente"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="tel" className="form-label">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="tel"
                  placeholder="Teléfono"
                  pattern="[0-9]{10}"
                  title="Debe ser un número de 10 dígitos"
                  maxLength="10"
                  required
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
              <input
                type="text"
                className="form-control"
                placeholder="Buscar herramienta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            <ul className="list-group mt-2">
              {Products.filter((product) => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((product) => (
                <li
                  key={product.idProduct}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {product.name} - ${product.selling_price}
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleAddArticle(product)} // Agrega el producto al carrito
                  >
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
            <div className="row mt-4">
              <div className="col-md-8">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setStep(1)}
                >
                  Cancelar Venta
                </button>
                <button className="btn btn-success">
                  Realizar Venta
                </button>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-light border rounded">
                  <p>
                    <strong>Total de venta:</strong> $
                    
                  </p>
                  <div className="form-group mb-2">
                    <label htmlFor="montoRecibido" className="form-label">
                      Monto recibido:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="montoRecibido"
                      value={montoRecibido}
                      onChange={(e) =>
                        setMontoRecibido(parseFloat(e.target.value) || 0)
                      }
                    />
                  </div>
                  <p>
                    <strong>Cambio:</strong> $
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sales;
