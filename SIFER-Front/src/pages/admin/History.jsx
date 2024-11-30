import Navbar from '../admin/NavBar.jsx';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const bluee = "#04478D";

const SalesHistory = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [history, setHistory] = useState([
        { employee: 'Ana Franco', code: 'P001', quantity: 3, total: 150, datetime: '2024-11-29 10:00' },
        { employee: 'Rogelio Guzman', code: 'P002', quantity: 5, total: 250, datetime: '2024-11-28 15:30' },
        { employee: 'Cecilia Rojas', code: 'P003', quantity: 2, total: 100, datetime: '2024-11-27 12:45' },
        { employee: 'Alejandra Ortiz', code: 'P004', quantity: 4, total: 200, datetime: '2024-11-26 09:20' },
        { employee: 'Minerva Duran', code: 'P005', quantity: 1, total: 50, datetime: '2024-11-25 11:10' },
    ]);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const filteredHistory = history.filter(item => {
        const date = new Date(item.datetime);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;
        
        if (start && date < start) return false;
        if (end && date > end) return false;

        return item.employee.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const totalSales = filteredHistory.reduce((total, item) => total + item.total, 0);

    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <h2 className="text-dark mx-auto text-center mb-4">Historial de Ventas</h2>

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
                <h3 className="text-dark mt-5 mb-5">aqui podemos poner el dia traido dinamicamente o no c</h3>
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
                                <tr key={index}>
                                    <td>{sale.employee}</td>
                                    <td>{sale.code}</td>
                                    <td>{sale.quantity}</td>
                                    <td>{sale.total}</td>
                                    <td>{sale.datetime}</td>
                                </tr>
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
                <div className="text-center mt-5 mb-5">
                    <h4>Total de ventas: ${totalSales}</h4>
                </div>
            </div>
        </>
    );
};

export default SalesHistory;
