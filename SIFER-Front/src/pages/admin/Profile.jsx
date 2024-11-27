import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from '../../assets/img/perfil.png'
import Employees from '../../assets/img/employees.png'
import Historial from '../../assets/img/historial.png'
import Inventario from '../../assets/img/inven.png'
import { useState } from 'react';
import Logo from '../../assets/img/logo.png'
import Navbar from './NavBar';

const blue = "#282C37";
const orange = '#F75409';

export const Profile = () => {

    return(
        <>
            <Navbar/>

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

export default Profile;