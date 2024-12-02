import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderDetails from './OrderDetails';
import NavBarEmployee from './NavBarEmployee';
import apiConnect from '../../utils/api.connection';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders()
  }, [])

  // Filtrar órdenes
  const filteredOrders = orders.filter(
    (order) =>
      order.code.includes(searchTerm) ||
      order.User.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAllOrders = async () => {
    try {
      const response = await apiConnect.get('api/reserved/')

      setOrders(response.reservations)
    } catch (error) {
      console(error)
    }
  }

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
                  <td>{order.code}</td>
                  <td>{order.User.name + ' ' + order.User.lastname + ' ' + order.User.surname}</td>
                  <td>{order.ReservationDetails.reduce((acc, detail) => acc + detail.reserved_quantity, 0)}</td>
                  <td>${order.ReservationDetails.reduce((acc, detail) => acc + (detail.reserved_quantity * parseFloat(detail.Product.selling_price)),0)}</td>
                  <td>{order.status}</td>
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
