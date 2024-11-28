import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarEmployee from "./NavBarEmployee";

const Sales = () => {
  const [step, setStep] = useState(1); // Controla el flujo entre formulario y tabla
  const [articles, setArticles] = useState([
    { id: 1, codigo: "A001", nombre: "Martillo", precio: 50, cantidad: 1 },
    { id: 2, codigo: "A002", nombre: "Clavo", precio: 1, cantidad: 10 },
  ]); // Lista de productos
  const [montoRecibido, setMontoRecibido] = useState(0); // Monto recibido por el cliente

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(2); // Pasar a la tabla de artículos
  };

  const handleEliminar = (id) => {
    setArticles(articles.filter((art) => art.id !== id));
  };

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

  // Función para eliminar una orden con SweetAlert
  const handleDelete = (id) => {
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
        // Elimina el artículo del estado "articles"
        setArticles(articles.filter((art) => art.id !== id));
        Swal.fire("¡Eliminado!", "El artículo ha sido eliminado.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "El artículo no ha sido eliminado.", "error");
      }
    });
  };

  return (
    <>
      {/* Barra de navegación */}
      <NavBarEmployee />

      {/* Contenido principal */}
      <div className="container my-5">
        {step === 1 ? (
          <div className="d-flex justify-content-center">
            <div
              className="p-4 bg-white shadow rounded"
              style={{ maxWidth: "500px", width: "100%" }}
            >
              {/* Título del formulario */}
              <h4 className="mb-4 text-primary">Información de comprador</h4>
              <hr />

              <form onSubmit={handleSubmit}>
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
                    title="Debe ser un número de 10 dígitos" // aqui puse un  mensajito pa recordar que solo son 10 numeritos
                    maxLength="10" // esto hace que solo sean 10 digitos jiji
                    required
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Elimina letras y caracteres
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
          </div>
        ) : (
          <>
            <h4 className="mb-4 text-primary">Lista de artículos</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Código</th>
                  <th>Nombre del Artículo</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Eliminar</th>
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
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(art.id)}
                      >Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="row">
              {/* botones realizar/cancelar venta */}
              <div className="col-md-8 mt-5 mb-5">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setStep(1)}>Cancelar Venta</button>
                <button className="btn btn-success">Realizar Venta</button>
              </div>
              {/* fin botones realizar/cancelar venta */}

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
