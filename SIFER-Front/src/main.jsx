import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinginPage from './auth/SinginPage.jsx'
import Profile from './pages/admin/Profile.jsx'
import Home from './pages/customer/Home.jsx'
import Cart from './pages/customer/Cart.jsx'
import ProfileC from './pages/customer/ProfileC.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
