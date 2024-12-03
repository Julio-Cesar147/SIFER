import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Importa useLocation
import 'bootstrap/dist/css/bootstrap.min.css';
const bluee = "#04478D";
const blue = "#282C37";
const orange = '#F75409';
import Swal from 'sweetalert2';
import apiConnect from '../../utils/api.connection';
import NavBar from "../../pages/admin/NavBar.jsx";

const Product = () => {
    const navigate = useNavigate()
    const location = useLocation(); // Usa useLocation para obtener datos de la navegación
    const { selectedProduct } = location.state || {}; // Extrae selectedProduct desde el estado
    const [reserved, setReserved] = useState(1)

    const [searchTerm, setSearchTerm] = useState(1);

    if (!selectedProduct) {
        return <p>No se seleccionó ningún producto.</p>;
    }

    const handleApartProduct = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: `Apartarás ${reserved} piezas del producto ${selectedProduct.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Aceptar"
        }).then((result) => {
            if (result.isConfirmed) {
                const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
                const newProduct = {
                    ...selectedProduct,
                    reserved: reserved,
                    totalPrice: selectedProduct.selling_price * reserved,
                };
                console.log('Producto agregado:', newProduct); // Agrega esto para verificar
                apartados.push(newProduct);
                localStorage.setItem('apartados', JSON.stringify(apartados));
    
                Swal.fire({
                    title: "Producto apartado",
                    text: "El producto solo será apartado 3 días",
                    icon: "success",
                }).then(() => {
                    navigate("/cart");
                });
            }
        });
    };
    
      

    return (
        <>
            <NavBar role="admin" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <div className="container" style={{marginTop: 100}}>
            <div className="btn rounded-pill d-flex justify-content-center align-items-center text-center position-absolute shadow " 
                    style={{ backgroundColor: 'gray', top: "90px",  left: "15px", zIndex: 2,}} onClick={() => (window.location.href = '/profile')}>
                    <img src='https://cdn-icons-png.flaticon.com/128/6676/6676016.png' style={{ width: 37, height: 35 }} className="bg-white border shadow rounded-circle me-2"/>
                    <p className="fs-5 fw-bolder text-center text-white m-0">Luz Elena</p>
            </div>
        <p className='fs-3 fw-semibold mt-5 mb-4'>{selectedProduct.category}</p>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginRight: 50}}>
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-100 img-fluid rounded shadow-sm" style={{ maxWidth: '100%', height: 'auto' }}/>
                </div>
                <div className="col-md-8 w-auto ms-5">
                    <div className="mb-4">
                        <p className="fs-4 fw-semibold">{selectedProduct.name}</p>
                        <p className="text-success fw-medium">{selectedProduct.status}</p>
                        <p className="text-muted">{selectedProduct.description}</p>
                        <p className="fw-bold fs-2 text-dark">${selectedProduct.selling_price}</p>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <p className="me-3 mb-0">Cantidad:</p>
                        <input id='num' type='number' min={1} value={reserved} onChange={(e) => setReserved(e.target.value)} className="form-control w-25"/>
                    </div>
                    <div>
                        <button className="btn btn-lg text-white" style={{ backgroundColor: orange }} onClick={handleApartProduct} >
                            Añadir a mis apartados
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Product;
