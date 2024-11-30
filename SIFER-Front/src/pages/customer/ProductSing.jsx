import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importa useLocation
import Logo from '../../assets/img/logo.png';
import Letras from '../../assets/img/nombre.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lupa from '../../assets/img/buscar.png';
const bluee = "#04478D";
const blue = "#282C37";
const orange = '#F75409';
import Swal from 'sweetalert2';

const ProductSing = () => {
    const location = useLocation(); // Usa useLocation para obtener datos de la navegación
    const { selectedProduct } = location.state || {}; // Extrae selectedProduct desde el estado

    const [searchTerm, setSearchTerm] = useState('');

    if (!selectedProduct) {
        return <p>No se seleccionó ningún producto.</p>;
    }

    const [quantity, setQuantity] = useState(1);

    const handleProduct = () => {
        Swal.fire({
            title: "Error",
            text: "Tienes que iniciar sesión para poder apartar un producto",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar"
        });
    };

    return (
        <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="/tools"> 
                        <img src={Letras} style={{width: 250, height: 50}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <a class= "nav-link text-white fs-4" href="/">  Herramientas </a>

                        <ul class="navbar-nav me-5 w-100 ">
                            <div className="input-group bg-transparent border-0 rounded-pill text-dark w-100 ms-5">
                                <input type="text" className="form-control rounded-pill" placeholder="Buscar" value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>
                        </ul>
                        
                        <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center" style={{ backgroundColor: orange, fontSize: 17, width: 190, height: 35 }}
                            onClick={() => (window.location.href = '/login')}>
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </nav>
        
        <div className="container p-4">
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
                        <p className="fw-bold fs-2 text-dark">${selectedProduct.price}</p>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <p className="me-3 mb-0">Cantidad:</p>
                        <input id='num' type='number' min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control w-25"/>
                    </div>
                    <div>
                        <button className="btn btn-lg text-white" style={{ backgroundColor: orange }} onClick={handleProduct} >
                            Añadir a mis apartados
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductSing;
