import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from '../assets/img/perfil.png'
import Employees from '../assets/img/employees.png'
import Historial from '../assets/img/historial.png'
import Inventario from '../assets/img/inven.png'
import { useState } from 'react';
import Logo from '../assets/img/logo.png'

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
                        <img src={Logo} style={{width: 100, height: 70}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <div class="bg-white rounded-pill border border-dark-subtle d-flex position-absolute start-50 translate-middle">
                            
                            <a class="nav-link active px-5" aria-current="page" href="#"  onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)}style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}> 
                            <img src={Perfil} style={{width: 41, height: 41, transform: hovered1 ? 'scale(1.1)' : 'scale(1)',filter: hovered1 ? 'brightness(1.2)' : 'brightness(1)',}} alt="usuarios"/></a>
            
                            <a class="nav-link active px-5" aria-current="page" href="#"  onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}> 
                                <img src={Employees} style={{width: 41, height: 41, transform: hovered2 ? 'scale(1.1)' : 'scale(1)',filter: hovered2 ? 'brightness(1.2)' : 'brightness(1)',}} alt="usuarios"/>
                            </a>
                    
                            <a class="nav-link active px-5" aria-current="page" href="#"  onMouseEnter={() => setHovered3(true)} onMouseLeave={() => setHovered3(false)}style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}> 
                                <img src={Historial} style={{width: 41, height: 41, transform: hovered3 ? 'scale(1.1)' : 'scale(1)',filter: hovered3 ? 'brightness(1.2)' : 'brightness(1)',}} alt="usuarios"/>
                            </a>
                            
                            <a class="nav-link active px-5" aria-current="page" href="#"  onMouseEnter={() => setHovered4(true)} onMouseLeave={() => setHovered4(false)}style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}> 
                                <img src={Inventario} style={{width: 41, height: 41, transform: hovered4 ? 'scale(1.1)' : 'scale(1)',filter: hovered4 ? 'brightness(1.2)' : 'brightness(1)',}} alt="usuarios"/>
                            </a>
                
                        </div>
                        
                    </ul>
                        <button class=" btn rounded-pill fs-5" style={{backgroundColor: orange, width: 80, height: 37}}>Salir</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SinginPage;