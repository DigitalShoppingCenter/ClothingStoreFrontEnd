import { BrowserRouterRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home'
import Product_Register from './Pages/Product_Register';
import logo from '../src/Assets/logo.png';
import Log from './Pages/Log';
import Register from './Pages/Register';
import Forgot_password from './Pages/Forgot_password';
import ClothesBin from './Pages/ClothesBin';
import Juli from './Pages/Juli';
import Shops from './Pages/Shops'




export default function App() {

  
  

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product_register" element={<Product_Register />} />
          <Route path="/login" element={<Log />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<Forgot_password />} />
          <Route path="/clothesbin" element={<ClothesBin />} />
          <Route path="/juli" element={<Juli />} />
          <Route path="/shops" element={<Shops />} />
         
         

          </Routes>
        
      </BrowserRouter>
      {}

    </div>
  );
}
