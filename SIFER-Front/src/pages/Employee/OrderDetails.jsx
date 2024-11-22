import React, { useState } from 'react';
import Swal from 'sweetalert2';

const OrderDetails = ({ selectedOrder, onClose }) => {
  const [payment, setPayment] = useState('');

  // Productos de ejemplo para el cliente seleccionado
  const products = [
    { nombre: 'Martillo', cantidad: 1, precio: 50.0 },
    { nombre: 'Taladro', cantidad: 2, precio: 200.0 },
    { nombre: 'Llave inglesa', cantidad: 3, precio: 150.0 },
  ];

  // Calcular el total
  const total = products.reduce((acc, item) => acc + item.cantidad * item.precio, 0);

  // Manejar el cálculo del cambio
  const handleSale = () => {
    const changeAmount = parseFloat(payment) - total;
    if (changeAmount >= 0) {
      Swal.fire({
        title: 'Venta realizada',
        text: `El cambio es: $${changeAmount.toFixed(2)}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Monto insuficiente',
        text: 'El dinero recibido no es suficiente para cubrir la venta.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className="card p-4 shadow my-4">
      <h4>Detalles de la Orden - {selectedOrder.cliente}</h4>
      <ul className="list-group mb-4">
        {products.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {item.nombre} (x{item.cantidad}) <span>${item.cantidad * item.precio}</span>
          </li>
        ))}
      </ul>
      <h5>Total: ${total.toFixed(2)}</h5>

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
