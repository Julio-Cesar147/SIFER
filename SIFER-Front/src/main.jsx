import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routers from '../src/routes/Router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </StrictMode>
);
