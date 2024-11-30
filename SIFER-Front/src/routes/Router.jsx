import {Route, Routes } from "react-router-dom"
import Employees from "../pages/admin/Employees.jsx";
import History from "../pages/admin/History.jsx";
import Profile from "../pages/admin/Profile.jsx";
import Stock from "../pages/admin/Stock.jsx";
import Cart from "../pages/customer/Cart.jsx"
import Home from "../pages/customer/Home.jsx"
import Tools from "../pages/customer/Tools.jsx";
import Orders from "../pages/Employee/Orders.jsx";
import Products from "../pages/Employee/Products.jsx";
import Sales from "../pages/Employee/Sales.jsx";
import Register from "../auth/Register.jsx";
import SinginPage from "../auth/SinginPage.jsx"
import Product from "../pages/customer/Product.jsx";
import ProductSing from "../pages/customer/ProductSing.jsx"


export const Router = () => {
  return (
    <>
        <Routes>
            {/* General */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SinginPage />} />
            <Route path="/register" element= {<Register/>}/>
            <Route path="/tools" element={<Tools/>}/>

            {/* Admin */}
            <Route path="/employees" element = {<Employees/>}/>
            <Route path="/history" element = {<History/>}/>
            <Route path="/stock" element = {<Stock/>}/>


            {/* Empleados */}
            <Route path="/sales" element={<Sales />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />

            {/* Clientes */}
            <Route path="/products" element={<Products/>} />
            <Route  path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product/>}/>
            <Route path="/tools" element={<Tools/>}/>
            <Route  path="/productsing" element={<ProductSing />} />

        </Routes>
    </>
    );
};
