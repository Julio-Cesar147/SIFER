import { Route, Routes, Navigate } from "react-router-dom";
import Employees from "../pages/admin/Employees.jsx";
import History from "../pages/admin/History.jsx";
import Profile from "../pages/admin/Profile.jsx";
import Stock from "../pages/admin/Stock.jsx";
import Cart from "../pages/customer/Cart.jsx"
import Home from "../pages/customer/Home.jsx"
import Orders from "../pages/Employee/Orders.jsx";
import Products from "../pages/Employee/Products.jsx";
import Sales from "../pages/Employee/Sales.jsx";
import Register from "../auth/Register.jsx";
import SinginPage from "../auth/SinginPage.jsx";
import Product from "../pages/customer/Product.jsx";
import ProductSing from "../pages/customer/ProductSing.jsx";

export const Router = () => {
  // Obtener el rol del usuario desde localStorage
  const userRole = localStorage.getItem("role"); // Asumimos que guardas el rol del usuario en localStorage

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SinginPage />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas protegidas por roles */}
      {userRole && (
        <>
          {/* Rutas para el rol "admin" */}
          {userRole === "Administrador" && (
            <>
              <Route path="/employees" element={<Employees />} />
              <Route path="/history" element={<History />} />
              <Route path="/stock" element={<Stock />} />
            </>
          )}

          {/* Rutas para el rol "empleado" */}
          {userRole === "Empleado" && (
            <>
              <Route path="/sales" element={<Sales />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />} />
            </>
          )}

          {/* Rutas para el rol "cliente" */}
          {userRole === "cliente" && (
            <>
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
              {/*<Route path="/productsing" element={<ProductSing />} />*/}
            </>
          )}

          {/* Ruta común para todos los roles */}
          <Route path="/profile" element={<Profile />} />
        </>
      )}

      {/* Si no hay rol, redirigir a login */}
      {!userRole && <Route path="*" element={<Navigate to="/login" />} />}
    </Routes>
  );
};
