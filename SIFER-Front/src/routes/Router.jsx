import {Route, Routes } from "react-router-dom"
import SinginPage from "../auth/SinginPage.jsx"
import Cart from "../pages/customer/Cart.jsx"
import Home from "../pages/customer/Home.jsx"
import Orders from "../pages/Employee/Orders.jsx";
import Profile from "../pages/admin/Profile.jsx";
import Products from "../pages/Employee/Products.jsx";
import Employees from "../pages/admin/Employees.jsx";


const Routers = () => {
    return(
        <Routes>

            {/* Ruta pal inicio */}
            <Route path="/" element={<SinginPage />} />
            
            {/* Ruta pa pedidos */}
            <Route path="/orders" element={<Orders />} />
            
            {/* Ruta pal perfil */}
            <Route path="/profile" element={<Profile />} />

            {/* Ruta pa los productikis */}
            <Route path="/products" element={<Products />} />

            {/* Ruta para el inicio y ver los productos */}
            <Route  path="/home" element={<Home />} />
            
            {/* Ruta para ir a los productos apartados */}
            <Route  path="/cart" element={<Cart />} />

            <Route path="/employees" element = {<Employees/>}/>
            
        </Routes>
    );
};

export default Routers;