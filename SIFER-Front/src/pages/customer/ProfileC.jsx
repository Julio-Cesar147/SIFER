import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../../assets/img/logo.png'
import Letras from '../../assets/img/nombre.png'
import Lupa from '../../assets/img/buscar.png'
const blue = "#282C37";
const primary = '#04478D'
const greenwhite = "#3FDA2B";
import React, { useEffect } from 'react';
const orange = '#F75409';

export const ProfileC = () => {

    return(
        <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="#"> 
                        <img src={Letras} style={{width: 250, height: 50}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <a class= "nav-link text-white fs-4" href="/Home">  Herramientas </a>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <div class="d-flex position-absolute end-0 translate-middle me-3 rounded-pill border border-dark-subtle bg-white">
                            <input style={{width: 450}} class="bg-transparent border-0 rounded-pill text-dark" type="search" placeholder="Buscar"/>
                            <img src={Lupa} style={{width:25, height:27}} className='me-2'/>
                        </div>
                    </ul>
                        <button href="/Home" className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center" style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }}>
                            Salir
                        </button>
                    </div>
                </div>
            </nav>

            <div className="">
                <div className="p-3 positon-absolute text-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="" />
                </div>

                <div className="border-black border-bottom text-center fs-4 fw-bolder">Información Personal</div>

                <div className="">
                    <div className="">
                        <p className='fw-bolder m-2 fs-5 '>Nombre:</p>
                        
                    </div>
                    
                    <button className='border text-white rounded-pill m-2' style={{backgroundColor: primary, width:200, height: 37}}>Cambiar Contraseña</button>
                </div>


            </div>
        </>
    )
}

export default ProfileC;