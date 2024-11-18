import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import SinginPage from './auth/SinginPage.jsx'
import Pedidos from './pages/Employee/Orders.jsx'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SinginPage/>
    <Pedidos/>
  </StrictMode>
)
