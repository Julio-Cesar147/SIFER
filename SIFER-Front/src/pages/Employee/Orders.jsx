import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderDetails from './OrderDetails';
import NavBarEmployee from './NavBarEmployee';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([
    { numero: '3301', cliente: 'Ana Franco', productos: 1, total: '200.00', estado: 'En Almacén' },
    { numero: '3302', cliente: 'Rogelio Guzman', productos: 1, total: '700.00', estado: 'En Almacén' },
    { numero: '3303', cliente: 'Cecilia Rojas', productos: 1, total: '500.00', estado: 'En Almacén' },
    { numero: '3304', cliente: 'Alejandra Ortiz', productos: 1, total: '30.00', estado: 'En Almacén' },
    { numero: '3305', cliente: 'Minerva Duran', productos: 1, total: '15.00', estado: 'En Almacén' },
    { numero: '3300', cliente: 'Emiliano Mendoza', productos: 12, total: '1500.00', estado: 'Entregado' },
  ]);

  // Filtrar órdenes
  const filteredOrders = orders.filter(
    (order) =>
      order.numero.includes(searchTerm) ||
      order.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función para eliminar una orden con SweetAlert
  const handleDelete = (orderNumber) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setOrders(orders.filter(order => order.numero !== orderNumber));
        Swal.fire({
          icon: "success",
          title: "Elimiado",
          text: "La orden ha sido eliminada!",
          showConfirmButton: false,
          timer: 1500
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'La orden no ha sido eliminada.',
          'error'
        );
      }
    });
  };

  return (
    <>
      {/* NavBar para empleados */}
      <NavBarEmployee />

      <div className="container mt-5">
        <h2 className="text-dark mx-auto text-center">Pedidos</h2>

        {/* Buscador */}
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Buscar cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="input-group-text bg-white border-0">
            <i className="bi bi-search"></i>
          </span>
        </div>

        {/* comienzo de tabla */}
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">Número de orden</th>
              <th scope="col">Cliente</th>
              <th scope="col">Cantidad productos</th>
              <th scope="col">Total</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr
                  key={index}
                  className={order.estado === 'Entregado' ? 'table-success' : ''}
                  onClick={() => setSelectedOrder(order)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>{order.numero}</td>
                  <td>{order.cliente}</td>
                  <td>{order.productos}</td>
                  <td>${order.total}</td>
                  <td>{order.estado}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => {
                        e.stopPropagation(); // Evitar que se ejecute el evento de selección
                        handleDelete(order.numero);
                      }}
                    >
                      <i className="bi bi-x-circle"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No se encontraron resultados
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Mostrar detalles de la orden seleccionada */}
        {selectedOrder && (
          <OrderDetails
            selectedOrder={selectedOrder}
            onClose={() => setSelectedOrder(null)}
          />
        )}
      </div>
    </>
  );
};

export default Orders;
