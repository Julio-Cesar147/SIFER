import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../../assets/img/logo.png'
import Letras from '../../assets/img/nombre.png'
import Lupa from '../../assets/img/buscar.png'
const blue = "#282C37";
import React, { useEffect } from 'react';
const orange = '#F75409';

export const Home = () => {

    useEffect(() => {
        if (typeof window !== 'undefined' && window.bootstrap) {
            const carouselElement = document.getElementById('carouselExampleInterval');
                if (carouselElement) {
                    new window.bootstrap.Carousel(carouselElement, {
                        interval: 2,
                        ride: 'carousel',
                    });
                }
        }
    }, []);

    return(
        <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="/Home"> 
                        <img src={Letras} style={{width: 250, height: 50}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <a class= "nav-link text-white fs-4" href="/Home">  Catálogo </a>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <div class="d-flex position-absolute end-0 translate-middle me-3 rounded-pill border border-dark-subtle bg-white">
                            <input style={{width: 450}} class="bg-transparent border-0 rounded-pill text-dark" type="search" placeholder="Buscar"/>
                            <img src={Lupa} style={{width:25, height:27}} className='me-2'/>
                        </div>
                    </ul>
                        <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center" style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }}
                            onClick={() => (window.location.href = '/login')}>
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </nav>

            <div className="">

                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.venturaferreteria.com/wp-content/uploads/herramientas.jpg" className='w-100' style={{height: 500}} alt="foto1"/>
                        </div>
                        
                        <div class="carousel-item">
                            <img src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-04/funciones-del-jefe-de-compras-6.png" className='w-100' style={{height: 500}} alt="foto2"/>
                        </div>

                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/originals/bf/de/72/bfde722655276150519f5399cfd5d730.jpg" className='w-100' style={{height: 500}} alt="foto3"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <p className='fs-2 fw-semibold ms-2'>Herramientas</p>

                <div className="d-flex flex-row mb-4 m-2">
                    
                    <div class="card w-25 text-center">
                        <div className='h-50'>
                            <img src="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750179166059L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Martillo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn text-white" style={{backgroundColor: orange}}>Apartar Producto</a>
                        </div>
                    </div>
                    <div class="card w-25 ms-2 text-center">
                        <div className='h-50'>
                            <img src="https://th.bing.com/th/id/R.8319cc0f6cfd0a294296ad0479c76142?rik=BpNH5jV3JthONQ&pid=ImgRaw&r=0" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Martillo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn text-white" style={{backgroundColor: orange}}>Apartar Producto</a>
                        </div>
                    </div>
                    <div class="card w-25 ms-2 text-center">
                        <div className='h-50'>
                            <img src="https://th.bing.com/th/id/OIP.FEPudhIH1w0QekbfQ6DZMAHaHa?rs=1&pid=ImgDetMain" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Martillo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn text-white" style={{backgroundColor: orange}}>Apartar Producto</a>
                        </div>
                    </div>
                    <div class="card w-25 ms-2 text-center">
                        <div className='h-50'>
                            <img src="https://http2.mlstatic.com/lampara-de-mano-led-recargable-marca-truper-11-leds-D_NQ_NP_735849-MLM26254069990_102017-F.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Martillo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn text-white" style={{backgroundColor: orange}}>Apartar Producto</a>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row mb-4 m-2">
                    
                    <div class="card w-25 text-center">
                        <div className='h-50'>
                            <img src="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750179166059L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Martillo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn text-white" style={{backgroundColor: orange}}>Apartar Producto</a>
                        </div>
                    </div>
                    <div class="card w-25 ms-2 text-center">
                        <div className='h-50'>
                            <img src="https://th.bing.com/th/id/R.8319cc0f6cfd0a294296ad0479c76142?rik=BpNH5jV3JthONQ&pid=ImgRaw&r=0" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Martillo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn text-white" style={{backgroundColor: orange}}>Apartar Producto</a>
                        </div>
                    </div>
                    <div class="card w-25 ms-2 text-center">
                        <div className='h-50'>
                            <img src="https://th.bing.com/th/id/OIP.FEPudhIH1w0QekbfQ6DZMAHaHa?rs=1&pid=ImgDetMain" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Martillo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn text-white" style={{backgroundColor: orange}}>Apartar Producto</a>
                        </div>
                    </div>
                    <div class="card w-25 ms-2 text-center">
                        <div className='h-50'>
                            <img src="https://http2.mlstatic.com/lampara-de-mano-led-recargable-marca-truper-11-leds-D_NQ_NP_735849-MLM26254069990_102017-F.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Martillo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn text-white" style={{backgroundColor: orange}}>Apartar Producto</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;