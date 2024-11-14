import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from '../assets/img/perfil.png'
import Employees from '../assets/img/employees.png'
import Historial from '../assets/img/historial.png'
import Inventario from '../assets/img/inven.png'
import { useState } from 'react';
import Logo from '../assets/img/logo.png'
import Letras from '../assets/img/nombre.png'

const blue = "#282C37";
const orange = '#F75409';

export const SinginPage = () => {

    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);

    return(
        <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="#"> 
                        <img src={Letras} style={{width: 250, height: 50}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <a class= "nav-link active text-white fs-4" href="#">  Herramientas </a>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <div class="d-flex position-absolute start-50 translate-middle">
                            <input style={{width: 450}} class="form-control me-2 rounded-pill border border-dark-subtle" type="search" placeholder="Search" aria-label="Search"/>
                            <img src="" alt="" />
                        </div>
                        
                    </ul>
                        <button class=" btn rounded-pill fs-5" style={{backgroundColor: orange, width: 100, height: 37}}>Salir</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SinginPage;