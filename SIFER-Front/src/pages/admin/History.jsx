import Navbar from "../admin/NavBar.jsx";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import apiConnect from "../../utils/api.connection.js";

const bluee = "#04478D";

const SalesHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [history, setHistory] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    getHistory();
  }, []);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filteredHistory = history.filter((item) => {
    const date = new Date(item.sales_date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    // Filtro por rango de fechas
    if (start && date < start) return false;
    if (end && date > end) return false;

    // Construye el nombre completo del empleado
    const employeeFullName =
      `${item.User.name} ${item.User.lastname} ${item.User.surname}`.toLowerCase();

    // Filtro por nombre del empleado
    return employeeFullName.includes(searchTerm.toLowerCase());
  });

  const getHistory = async () => {
    try {
      const response = await apiConnect.get("api/reserved/history/h");

      setHistory(response.histories);
    } catch (error) {
      console.error(error);
    }
  };

  const handleHistory = async () => {
    try {
      const payload = { startDate, endDate };

      const response = await fetch(
        `http://localhost:3000/api/reserved/history/h/${startDate}/${endDate}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setStartDate("");
      setEndDate("");
    } catch (error) {
      console.error(error);
    }
  };

  const totalSales = filteredHistory.reduce(
    (total, item) => total + item.total,
    0
  );

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2 className="text-dark mx-auto text-center mb-4">
          Historial de Ventas
        </h2>

        {/* Filtros por fecha */}
        <div className="row mb-4">
          <div className="col">
            <label htmlFor="startDate">Fecha Inicio</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="col">
            <label htmlFor="endDate">Fecha Final</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
          <div className="col">
            <button
              className="btn text-white mt-3"
              style={{
                backgroundColor: bluee,
                borderRadius: "10px",
                fontWeight: "500",
              }}
              onClick={handleHistory}
            >
              Buscar
            </button>
          </div>
        </div>

        {/* Buscador de ventas por empleado */}
        <div className="pt-3 input-group w-75 align-items-center justify-content-center start-50 translate-middle">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Buscar por empleado"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="input-group-text bg-white border-0">
            <i className="bi bi-search"></i>
          </span>
        </div>

        {/* Tabla de historial de ventas */}
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">Empleado</th>
              <th scope="col">Código</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Total</th>
              <th scope="col">Fecha y Hora</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.length > 0 ? (
              filteredHistory.map((sale, index) => (
                <React.Fragment key={index}>
                  {sale.PurchaseDetails.map((detail, detailIndex) => (
                    <tr key={detailIndex}>
                      {/* Nombre del empleado, solo en la primera fila */}
                      {detailIndex === 0 && (
                        <td rowSpan={sale.PurchaseDetails.length}>
                          {sale.User.name +
                            " " +
                            sale.User.lastname +
                            " " +
                            sale.User.surname}
                        </td>
                      )}

                      {/* SKU del producto */}
                      <td>{detail.Product.sku}</td>

                      {/* Cantidad de producto vendido */}
                      <td>{detail.sales_quantity}</td>

                      {/* Precio total de la venta, solo en la primera fila */}
                      {detailIndex === 0 && (
                        <td rowSpan={sale.PurchaseDetails.length}>
                          {sale.total_sales}
                        </td>
                      )}

                      {/* Fecha y hora de la venta (formateada), solo en la primera fila */}
                      {detailIndex === 0 && (
                        <td rowSpan={sale.PurchaseDetails.length}>
                          {new Date(sale.sales_date).toLocaleString("es-ES", {
                            weekday: "long", // Día de la semana completo
                            year: "numeric", // Año completo
                            month: "long", // Mes completo
                            day: "numeric", // Día numérico
                            hour: "2-digit", // Hora en formato de 2 dígitos
                            minute: "2-digit", // Minuto en formato de 2 dígitos
                            second: "2-digit", // Segundo en formato de 2 dígitos
                            hour12: false, // Formato de 24 horas
                          })}
                        </td>
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No se encontraron resultados
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Total de ventas */}
        {/*<div className="text-center mt-5 mb-5">
                    <h4>Total de ventas: ${totalSales}</h4>
                </div>*/}
      </div>
    </>
  );
};

export default SalesHistory;
