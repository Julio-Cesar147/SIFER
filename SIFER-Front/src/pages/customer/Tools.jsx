import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png'
import Letras from '../../assets/img/nombre.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Lupa from '../../assets/img/buscar.png'
const blue = "#282C37";
const orange = '#F75409';

const Tools = () => {

    const [products, setProducts] = useState([
        { image:"https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750179166059L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",name: 'Martillo mazo duro', description: 'Util para clavar clavos', price: 200 , category: "Carpintería"},
        { image:'https://th.bing.com/th/id/R.8319cc0f6cfd0a294296ad0479c76142?rik=BpNH5jV3JthONQ&pid=ImgRaw&r=0',name: 'Pala podadora', description: 'Así recogeras mejor', price: 150 , category: "Volteo"},
        { image:'https://th.bing.com/th/id/OIP.FEPudhIH1w0QekbfQ6DZMAHaHa?rs=1&pid=ImgDetMain',name: 'Pico ', description: 'Sin pico no hay hoyos', price: 550 , category:"Jardinería"},
        { image:'https://http2.mlstatic.com/lampara-de-mano-led-recargable-marca-truper-11-leds-D_NQ_NP_735849-MLM26254069990_102017-F.jpg',name: 'Rastrillo', description: 'Mientras menos mejor', price: 100, category:"Jardinería" },
        { image:'https://th.bing.com/th/id/OIP.FEPudhIH1w0QekbfQ6DZMAHaHa?rs=1&pid=ImgDetMain',name: 'Arenera plastica', description: 'Lo mejor', price: 450 , category:"Cultivo"},
        { image:'https://th.bing.com/th/id/OIP.FEPudhIH1w0QekbfQ6DZMAHaHa?rs=1&pid=ImgDetMain',name: 'Costal de tierra', description: 'Para uqe las plantas crezcan', price: 1000 , category:"Cultivo"},
    ]);

    const [hoveredCard, setHoveredCard] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteProducts = products.filter(
        (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="/tools"> 
                        <img src={Letras} style={{width: 250, height: 50}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <a class= "nav-link text-white fs-4" href="/tools">  Herramientas </a>

                        <ul class="navbar-nav me-5 w-100 ">
                            <div className="input-group bg-transparent border-0 rounded-pill text-dark w-100 ms-5">
                                <input type="text" className="form-control rounded-pill" placeholder="Buscar" value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>
                        </ul>
                        <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center" style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }}
                            onClick={() => (window.location.href = '/')}>
                            Salir
                        </button>
                    </div>
                </div>
            </nav>

            {/* Carrusel */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src="https://www.venturaferreteria.com/wp-content/uploads/herramientas.jpg" className="w-100" style={{ height: 500 }} alt="foto1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-04/funciones-del-jefe-de-compras-6.png" className="w-100" style={{ height: 500 }} alt="foto2" />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="https://i.pinimg.com/originals/bf/de/72/bfde722655276150519f5399cfd5d730.jpg" className="w-100" style={{ height: 500 }} alt="foto3" />
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

            {/* Sección de Cards */}
            <div className="container my-4">
                <p className="fs-2 fw-semibold mb-0">Productos disponibles</p>
                <p className="p-0 mb-4">¡Lleva lo mejor y apártalo antes de que se agoten!</p>
                <div className="row">
                    {filteProducts.map((product, index) => (
                        <div className="col-md-4 mb-4 text-center" key={index}>
                            <div
                                className={`card h-100 border-secondary-subtle bg-body-tertiary ${hoveredCard === index ? 'shadow' : ''}`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <img src={product.image} className="card-img-top justify-content-center align-items-center h-50" alt={product.name} />
                                <div className="card-body justify-content-center mt-5 mb-0">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><strong>Precio: ${product.price}</strong></p>
                                    <p className="card-text">{product.category}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn w-100 text-white" style={{ backgroundColor: orange }}>Ver más</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            {filteProducts.length === 0 && ( <p className="text-center text-muted fs-4">No se encontraron productos.</p>)}
        </div>
        </>
    );
};

export default Tools;
