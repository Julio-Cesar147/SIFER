import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../../assets/img/logo.png'
import Letras from '../../assets/img/nombre.png'
import Lupa from '../../assets/img/buscar.png'
const blue = "#282C37";
const greenwhite = "#3FDA2B";
import React, { useEffect } from 'react';
const orange = '#F75409';

export const Cart = () => {

    return(
        <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="#"> 
                        <img src={Letras} style={{width: 250, height: 50}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <a class= "nav-link text-white fs-4" href="#">  Herramientas </a>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <div class="d-flex position-absolute end-0 translate-middle me-3 rounded-pill border border-dark-subtle bg-white">
                            <input style={{width: 450}} class="bg-transparent border-0 rounded-pill text-dark" type="search" placeholder="Buscar"/>
                            <img src={Lupa} style={{width:25, height:27}} className='me-2'/>
                        </div>
                    </ul>
                        <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center" style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }}>
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </nav>

            <div className="">
                
                <p className='fs-1 fw-bolder text-center pt-3'>Mis Apartados</p>
                <div className="border-black border-bottom"/>

                <div className="d-flex flex-row m-2 pt-5">

                    <div class="card mb-3">
                        <div class="row g-0">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" className='position-absolute end-0 m-2' style={{width:15, height:15}}/>
                            <div class="col-md-4">
                            <img src="https://www.venturaferreteria.com/wp-content/uploads/herramientas.jpg" class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Martillo</h5>
                                <p class="card-text m-0">This is a wider card with supporting text below.</p>
                                <p className='fw-bolder fs-4 m-0'>$200.00</p>
                                <p class="card-text"></p>
                                <div className="d-flex">
                                    <p className='fw-bolder '>Cantidad: </p><input className='ms-2 border shadow-sm bg-white rounded bg-secondary-subtle' type='number' min={1} style={{width:50, height:25}}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 ms-2">
                        <div class="row g-0">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" className='position-absolute end-0 m-2' style={{width:15, height:15}}/>
                            <div class="col-md-4">
                            <img src="https://www.venturaferreteria.com/wp-content/uploads/herramientas.jpg" class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Martillo</h5>
                                <p class="card-text m-0">This is a wider card with supporting text below.</p>
                                <p className='fw-bolder fs-4 m-0'>$200.00</p>
                                <p class="card-text"></p>
                                <div className="d-flex">
                                    <p className='fw-bolder '>Cantidad: </p><input className='ms-2 border shadow-sm bg-white rounded bg-secondary-subtle' type='number' min={1} style={{width:50, height:25}}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="d-flex flex-row m-2">

                <div class="card mb-3">
                        <div class="row g-0">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" className='position-absolute end-0 m-2' style={{width:15, height:15}}/>
                            <div class="col-md-4">
                            <img src="https://www.venturaferreteria.com/wp-content/uploads/herramientas.jpg" class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Martillo</h5>
                                <p class="card-text m-0">This is a wider card with supporting text below.</p>
                                <p className='fw-bolder fs-4 m-0'>$200.00</p>
                                <p class="card-text"></p>
                                <div className="d-flex">
                                    <p className='fw-bolder '>Cantidad: </p><input className='ms-2 border shadow-sm bg-white rounded bg-secondary-subtle' type='number' min={1} style={{width:50, height:25}}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 ms-2">
                        <div class="row g-0">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" className='position-absolute end-0 m-2' style={{width:15, height:15}}/>
                            <div class="col-md-4">
                            <img src="https://www.venturaferreteria.com/wp-content/uploads/herramientas.jpg" class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Martillo</h5>
                                <p class="card-text m-0">This is a wider card with supporting text below.</p>
                                <p className='fw-bolder fs-4 m-0'>$200.00</p>
                                <p class="card-text"></p>
                                <div className="d-flex">
                                    <p className='fw-bolder '>Cantidad: </p><input className='ms-2 border shadow-sm bg-white rounded bg-secondary-subtle' type='number' min={1} style={{width:50, height:25}}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-25 h-auto end-0  position-absolute" style={{backgroundColor: greenwhite}}>
                    <p className='fs-3 fw-bolder ms-2 text-center mt-2'>Total: $1400.00  </p>
                </div>

            </div>
        </>
    )
}

export default Cart;