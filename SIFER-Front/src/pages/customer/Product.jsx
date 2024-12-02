import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Importa useLocation
import Logo from '../../assets/img/logo.png';
import Letras from '../../assets/img/nombre.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lupa from '../../assets/img/buscar.png';
const bluee = "#04478D";
const blue = "#282C37";
const orange = '#F75409';
import Swal from 'sweetalert2';
import apiConnect from '../../utils/api.connection';

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
                // Almacenar los productos en el localStorage (o en el estado global de tu app)
                const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
                apartados.push({
                    ...selectedProduct,
                    reserved: reserved,
                    totalPrice: selectedProduct.price * reserved,
                });
                localStorage.setItem('apartados', JSON.stringify(apartados));

        Swal.fire({
          title: "Producto apartado",
          text: "El producto solo será apartado 3 días",
          icon: "success",
        }).then(() => {
          // Redirige a la página de apartados
          navigate("/cart");
        });
      }
    });
  };

    return (
        <>
            <nav className="navbar navbar-expand-lg p-0 ">
                <div style={{ backgroundColor: blue }} className="container-fluid">
                    <a className="navbar-brand text-white" href="/tools">
                        <img src={Letras} style={{ width: 250, height: 50 }} />
                    </a>

                    <div className="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <ul className="navbar-nav me-5 w-50 ms-5">
                            <div className="input-group bg-transparent border-0 rounded-pill text-dark w-100">
                                <input
                                    type="text"
                                    className="form-control rounded-pill"
                                    placeholder="Buscar"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </ul>
                        <a className="nav-link text-white fs-5 me-5" href="/tools">Herramientas</a>
                        <a className="nav-link text-white fs-5 me-5" href="/cart">Apartados</a>
                        <button
                            className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
                            style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }}
                            onClick={() => (window.location.href = '/login')}
                        >
                            Salir
                        </button>
                    </div>
                </div>
            </nav>
        
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
