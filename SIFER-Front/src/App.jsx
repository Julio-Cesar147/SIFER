import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SinginPage from './auth/SinginPage.jsx';
import Orders from './pages/Employee/Orders.jsx'; 
import Profile from './pages/admin/Profile.jsx'; 
import Products from './pages/Employee/Products.jsx';

const App = () => {
  return (
    <Routes>
      {/* Ruta pal inicio */}
      <Route path="/" element={<SinginPage />} />
      
      {/* Ruta pa pedidos */}
      <Route path="/orders" element={<Orders />} />
      
      {/* Ruta pal perfil */}
      <Route path="/profile" element={<Profile />} />

      {/* Ruta pa los productikis */}
      <Route path="/products" element={<Products />} />


    </Routes>
  );
};

export default App;
