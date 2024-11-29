import {Route, Routes } from "react-router-dom"
import SinginPage from "../auth/SinginPage.jsx"
import Cart from "../pages/customer/Cart.jsx"
import Home from "../pages/customer/Home.jsx"
import Orders from "../pages/Employee/Orders.jsx";
import Profile from "../pages/admin/Profile.jsx";
import Products from "../pages/Employee/Products.jsx";
import Employees from "../pages/admin/Employees.jsx";
import Inventory from "../pages/admin/Inventory.jsx";
import History from "../pages/admin/History.jsx";
import Register from "../auth/Register.jsx";
import Tools from "../pages/customer/Tools.jsx";
import Sales from "../pages/Employee/Sales.jsx";
import Product from "../pages/customer/Product.jsx";
import ProductSing from "../pages/customer/ProductSing.jsx";

export const Router = () => {
  return (
    <>
        <Routes>
            {/* Ruta pal inicio */}
            <Route path="/" element={<Home />} />

            {/* Ruta pal catalogo */}
            <Route path="/cart" element={<Cart />} />

            {/* Ruta pal inicio */}
            <Route path="/login" element={<SinginPage />} />

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

            {/* Ruta pa las ventas */}
            <Route path="/sales" element={<Sales />} />

            <Route path="/employees" element = {<Employees/>}/>

            <Route path="/inventory" element = {<Inventory/>}/>

            <Route path="/history" element = {<History/>}/>

            <Route path="/profile" element={<Profile/>}/>

            <Route path="/register" element= {<Register/>}/>

            <Route path="/tools" element={<Tools/>}/>

            <Route path="/product" element={<Product/>}/>

            <Route path="/productsing" element= {<ProductSing/>}/>
            
        </Routes>
    </>
    );
};
