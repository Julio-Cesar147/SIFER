import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png'
import Letras from '../../assets/img/nombre.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Lupa from '../../assets/img/buscar.png'
import Product from './Product';
import { useNavigate } from 'react-router-dom';
const blue = "#282C37";
const orange = '#F75409';
const gray = "#A1A1A1";

const Tools = () => {

    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([
        { id: 1,image:"https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750179166059L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",name: 'Martillo mazo duro', description: 'Util para clavar clavos', price: 200 , category: "Carpintería", status: "Disponible"},
        { id: 2,image:'https://th.bing.com/th/id/R.8319cc0f6cfd0a294296ad0479c76142?rik=BpNH5jV3JthONQ&pid=ImgRaw&r=0',name: 'Pala podadora', description: 'Así recogeras mejor', price: 150 , category: "Volteo", status: "Disponible"},
        { id: 3,image:'https://th.bing.com/th/id/OIP.vJCerOPy2qEt3loG13fKGwAAAA?w=180&h=180&c=7&r=0&o=5&pid=1.7',name: 'Pico ', description: 'Sin pico no hay hoyos', price: 550 , category:"Jardinería", status: "Disponible"},
        { id: 4,image:'data:image/jpeg;base64,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',name: 'Rastrillo', description: 'Mientras menos mejor', price: 100, category:"Jardinería" , status: "Disponible"},
        { id: 5,image:'https://th.bing.com/th/id/OIP.FEPudhIH1w0QekbfQ6DZMAHaHa?rs=1&pid=ImgDetMain',name: 'Arenera plastica', description: 'Lo mejor', price: 450 , category:"Cultivo", status: "Disponible"},
        { id: 6,image:'https://th.bing.com/th/id/OIP.FEPudhIH1w0QekbfQ6DZMAHaHa?rs=1&pid=ImgDetMain',name: 'Costal de tierra', description: 'Para uqe las plantas crezcan', price: 1000 , category:"Cultivo", status: "Disponible"},
    ]);

    const [hoveredCard, setHoveredCard] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
    };

    const filteProducts = products.filter(
        (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <nav className="navbar navbar-expand-lg p-0 position-fixed w-100" style={{ top: 0, left: 0, zIndex: 1030 }}>
            <div style={{ backgroundColor: blue }} className="container-fluid">
                <a className="navbar-brand text-white" href="/tools">
                    <img src={Letras} style={{ width: 250, height: 50 }} />
                </a>
                <div className="collapse navbar-collapse p-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-5 w-50 ms-5">
                        <div className="input-group bg-transparent border-0 rounded-pill text-dark w-100">
                            <input type="text" className="form-control rounded-pill" placeholder="Buscar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        </div>
                    </ul>
                    <a className="nav-link text-white fs-5 me-5" href="/tools"> Herramientas </a>
                    <a className="nav-link text-white fs-5 me-5" href="/cart">Apartados</a>
                    <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }} onClick={() => (window.location.href = '/login')} >
                        Salir
                    </button>
                </div>
            </div>
        </nav>
            
            <div id="carouselExampleInterval" className="carousel slide position-relative" style={{marginTop: 85}} data-bs-ride="carousel">
                <div className="btn rounded-pill d-flex justify-content-center align-items-center text-center position-absolute shadow " 
                    style={{ backgroundColor: 'gray', top: "5px",  left: "15px", zIndex: 2,}} onClick={() => (window.location.href = '/profile')}>
                    <img src='https://cdn-icons-png.flaticon.com/128/6676/6676016.png' style={{ width: 37, height: 35 }} className="bg-white border shadow rounded-circle me-2"/>
                    <p className="fs-5 fw-bolder text-center text-white m-0">Luz Elena</p>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img  src="https://www.venturaferreteria.com/wp-content/uploads/herramientas.jpg" className="w-100" style={{ height: 500 }} alt="foto1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-04/funciones-del-jefe-de-compras-6.png" className="w-100" style={{ height: 500 }} alt="foto2" />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img  src="https://i.pinimg.com/originals/bf/de/72/bfde722655276150519f5399cfd5d730.jpg" className="w-100" style={{ height: 500 }} alt="foto3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="container my-4">
                <p className="fs-2 fw-semibold mb-0">Productos disponibles</p>
                <p className="p-0 mb-4">¡Lleva lo mejor y apártalo antes de que se agoten!</p>
                <div className="row">
                    {filteProducts.map((product, index) => (
                        <div className="col-md-4 mb-4 text-center" key={index} onClick={() => navigate('/product', { state: { selectedProduct: product } })}>
                            <div className={`card h-100 border-secondary-subtle bg-body-tertiary ${hoveredCard === index ? 'shadow' : ''}`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}>
                                <img src={product.image}  className="card-img-top h-50 w-50 d-block mx-auto" alt={product.name}/>
                                <div className="card-body justify-content-center mt-5 mb-0">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text fs-4"> <strong>${product.price}</strong></p>
                                    <p className='card-text'>{product.category}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn w-100 text-white" style={{ backgroundColor: orange }}
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevenir que el evento se propague
                                            navigate('/product', { state: { selectedProduct: product } });
                                        }}>
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tools;
