import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarEmployee from "./NavBarEmployee";

const Sales = () => {
  const [step, setStep] = useState(1);
  const [articles, setArticles] = useState([
    { id: 1, codigo: "A001", nombre: "Martillo", precio: 50, cantidad: 1 },
    { id: 2, codigo: "A002", nombre: "Clavo", precio: 1, cantidad: 10 },
  ]);
  const [stock, setStock] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [montoRecibido, setMontoRecibido] = useState(0);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await fetch("/api/stock");
        const data = await response.json();
        setStock(data);
      } catch (error) {
        console.error("Error al cargar el stock:", error);
      }
    };

    fetchStock();
  }, []);

  const calcularTotal = () => {
    return articles.reduce(
      (total, art) => total + art.precio * art.cantidad,
      0
    );
  };

  const calcularCambio = () => {
    const total = calcularTotal();
    return montoRecibido - total >= 0 ? montoRecibido - total : 0;
  };

  const handleAddArticle = (article) => {
    const existingArticle = articles.find((art) => art.id === article.id);
    if (existingArticle) {
      setArticles(
        articles.map((art) =>
          art.id === article.id ? { ...art, cantidad: art.cantidad + 1 } : art
        )
      );
    } else {
      setArticles([...articles, { ...article, cantidad: 1 }]);
    }
    Swal.fire({
      title: "Artículo agregado",
      text: `${article.nombre} se agregó a la lista.`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const filteredStock = stock.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSale = () => {
    const total = calcularTotal();
    const changeAmount = parseFloat(montoRecibido) - total;
    if (changeAmount >= 0) {
      Swal.fire({
        title: "Venta realizada",
        text: `El cambio es: $${changeAmount.toFixed(2)}`,
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
      });
      setStep(1); // volver al paso 1 después de realizar la venta
      setArticles([]); // limpiar la lista de artículos
      setMontoRecibido(0); // limpiar el monto
    } else {
      Swal.fire({
        title: "Monto insuficiente",
        text: "El dinero recibido no es suficiente para cubrir la venta.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <>
      <NavBarEmployee />
      <div className="container mt-5">
        {step === 1 ? (
          <div
            className="p-4 bg-white shadow rounded"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            <h4 className="mb-4 text-primary">Información de comprador</h4>
            <hr />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
            >
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
                {filteredStock.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.nombre} - ${item.precio.toFixed(2)}
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleAddArticle(item)}
                    >
                      Agregar
                    </button>
                  </li>
                ))}
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
                {articles.map((art) => (
                  <tr key={art.id}>
                    <td>{art.id}</td>
                    <td>{art.codigo}</td>
                    <td>{art.nombre}</td>
                    <td>${art.precio.toFixed(2)}</td>
                    <td>{art.cantidad}</td>
                    <td>${(art.precio * art.cantidad).toFixed(2)}</td>
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
                <button className="btn btn-success" onClick={handleSale}>
                  Realizar Venta
                </button>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-light border rounded">
                  <p>
                    <strong>Total de venta:</strong> $
                    {calcularTotal().toFixed(2)}
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
                    <strong>Cambio:</strong> ${calcularCambio().toFixed(2)}
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
