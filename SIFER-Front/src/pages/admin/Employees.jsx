import Navbar from '../admin/NavBar.jsx';
import React, { useState } from 'react';


const Employees = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setOrders] = useState([
    { numero: 'Ana', cliente: 'Franco', productos: 'anafranc@utez.edu.mx', total: '7774178402', estado: 'Activo' },
    { numero: 'Rogelio', cliente: 'Guzman', productos: 'rogeguz@gmail.com', total: '7778031475', estado: 'Activo' },
    { numero: 'Cecilia', cliente: 'Rojas', productos: 'cecirojas@gmail.com', total: '7770147321', estado: 'Inactivo' },
    { numero: 'Alejandra', cliente: 'Ortiz', productos: 'aleortiz@utez.edu.mx', total: '7774730849', estado: 'Inactivo' },
    { numero: 'Minerva', cliente: 'Duran', productos: 'minedu@gmail.com', total: '7770134781', estado: 'Activo' },
    { numero: 'Emiliano', cliente: 'Mendoza', productos: 'emimen@gmail.com', total: '7778407613', estado: 'Activo' },
    ]);

    // Filtrar órdenes
    const filteredOrders = orders.filter(
    (order) =>
        order.numero.includes(searchTerm) ||
        order.cliente.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
    <>
        <Navbar/>

        <div className="container mt-5">
        <h2 className="text-dark mx-auto text-center">Pedidos</h2>

        {/* Buscador */}
        <div className="input-group mb-4">
            <input type="text" className="form-control rounded-pill" placeholder="Buscar pedido..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="input-group-text bg-white border-0">
                <i className="bi bi-search"></i>
            </span>
        </div>

        {/* Tabla de órdenes */}
        <table className="table table-striped table-hover">
            <thead className="table-primary">
                <tr>
                    <th scope="col">Nombre(s)</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Correo Electrónico</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => (
                    <tr key={index} className={order.estado === 'Entregado' ? 'table-success' : ''} onClick={() => setSelectedOrder(order)}
                    style={{ cursor: 'pointer' }}>
                        <td>{order.numero}</td>
                        <td>{order.cliente}</td>
                        <td>{order.productos}</td>
                        <td>{order.total}</td>
                        <td>{order.estado}</td>
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

export default Employees;