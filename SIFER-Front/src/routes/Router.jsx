import { Route, Routes } from "react-router-dom";
import Login from '../auth/Login.jsx';
import SinginPage from '../auth/SinginPage.jsx';
import Orders from '../pages/Employee/Orders.jsx'; 
import Profile from '../pages/admin/Profile.jsx'; 
import Products from '../pages/Employee/Products.jsx';
import Cart from'../pages/customer/Cart.jsx';
import Home from '../pages/customer/Home.jsx';
import NavBar from "../components/NavBar.jsx";

export const Router = () => {
  return (
    <>
      <div className="flex justify-around">
       
        <div className="mt-9 w-11/12 p-4 flex  overflow-hidden rounded-md border bg-white mb-3">
          <Routes>
            {/* Ruta pal inicio */}
            <Route path="/home" element={<Home />} />

            {/* Ruta pal  */}
            <Route path="/cart" element={<Cart />} />

            {/* Ruta pal inicio */}
            <Route path="/" element={<SinginPage />} />

            {/* Ruta pa pedidos */}
            <Route path="/orders" element={<Orders />} />

            {/* Ruta pal perfil */}
            <Route path="/profile" element={<Profile />} />

            {/* Ruta pa los productikis */}
            <Route path="/products" element={<Products />} />

            {/* Ruta pa los productikis */}
            <Route path="/login" element={<Login />} />

          </Routes>
        </div>
      </div>
    </>
  );
};
