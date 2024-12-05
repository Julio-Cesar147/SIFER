import React, { useState } from 'react';
import Swal from 'sweetalert2';
import apiConnect from '../../utils/api.connection';
import Sales from './Sales';

const OrderDetails = ({ selectedOrder, onClose }) => {
  const [payment, setPayment] = useState("");

  // Calcular el total de la venta
  const totalVenta = selectedOrder.ReservationDetails.reduce(
    (acc, detail) => acc + (detail.reserved_quantity * parseFloat(detail.Product.selling_price)),
    0
  );

  // Manejar el cálculo del cambio
  const handleSale = async () => {
    try {
      const changeAmount = parseFloat(payment) - totalVenta;
      if (changeAmount >= 0) {
        Swal.fire({
          title: 'Venta realizada',
          text: `El cambio es: $${changeAmount.toFixed(2)}`,
          icon: 'success',
          showConfirmButton: true,
        });

        const idUser = localStorage.getItem("id")
        const sales = totalVenta
        const products = selectedOrder.ReservationDetails.map(detail => ({
          sku: detail.Product.sku,
          sales_quantity: detail.reserved_quantity,
          //price: parseFloat(detail.Product.selling_price)
        }))
        const code = selectedOrder.code

        const payload = {idUser, sales, products, code}

        const response = await apiConnect.post('api/reserved/collection', payload)

        window.location.reload()
      } else {
        Swal.fire({
          title: 'Monto insuficiente',
          text: 'El dinero recibido no es suficiente para cubrir la venta.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card p-4 shadow my-4">
      <h4>Detalles de la Orden {selectedOrder.cliente}</h4>
      <ul className="list-group mb-4">
        {selectedOrder.ReservationDetails.map((detail, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {detail.Product.name} (x{detail.reserved_quantity}) 
            <span>${(detail.reserved_quantity * parseFloat(detail.Product.selling_price)).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h5>Total: ${totalVenta.toFixed(2)}</h5>

      <div className="input-group mt-3">
        <input
          type="number"
          className="form-control"
          placeholder="Dinero recibido"
          value={payment}
          min={1}
          onChange={(e) => setPayment(e.target.value)}
        />
        <button className="btn btn-success ms-2" onClick={handleSale}>
          Realizar Venta
        </button>
      </div>

      <button className="btn btn-secondary mt-4" onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
};

export default OrderDetails;
