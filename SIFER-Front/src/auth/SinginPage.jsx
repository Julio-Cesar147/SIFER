import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from '../assets/usuario.png'

const blue = "#282C37";
export const SinginPage = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="#"> Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <div class="bg-white rounded-pill border border-dark-subtle d-flex position-absolute start-50 translate-middle">
                            <li class="nav-item">
                            <a class="nav-link active px-4" aria-current="page" href="#"> <img src={Perfil} style={{width: 30, height: 30}} alt="usuarios"/></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active px-4" aria-current="page" href="#"> <img src={Perfil} style={{width: 30, height: 30}} alt="usuarios"/></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active px-4" aria-current="page" href="#"> <img src={Perfil} style={{width: 30, height: 30}} alt="usuarios"/></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active px-4" aria-current="page" href="#"> <img src={Perfil} style={{width: 30, height: 30}} alt="usuarios"/></a>
                            </li>
                        </div>
                        
                    </ul>
                        <button class="rounded-pill ">Salir</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SinginPage;