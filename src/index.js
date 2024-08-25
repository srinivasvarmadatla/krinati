import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from "react-use-cart";

import Header from './components/NavBar/Navbar.jsx';
import BodyScroll from './components/BodyScroll/BodyScroll.jsx';
import Login from './Pages/LoginPage/Login.jsx'; 
import Heading from "./Pages/HeadingTop/Heading.jsx";
import Mens from "./Pages/Mens/Mens.jsx";
import Women from './Pages/Women/Women.jsx';
import Cart from "./Pages/Cart/Cart.jsx";
import Kids from "./Pages/Kids/Kids.jsx";
import Shop  from './Pages/Shop/Shop.jsx';

import b1 from './Assets/body1.jpg';
import b2 from './Assets/body2.jpg';
import b3 from './Assets/body3.jpg';
import b4 from './Assets/body4.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/krinati" element={
            <>
              <Heading />
              <div className='Bodyscroll'>
                <div className='scroll-content'>
                  <BodyScroll image={b1} alt="image1-offer" />
                  <BodyScroll image={b2} alt="image2-offer" />
                  <BodyScroll image={b3} alt="image3-offer" />
                  <BodyScroll image={b4} alt="image4-offer" />
                </div>
              </div>
            </>
          } />
          <Route path='/Login' element={<Login />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path='/Mens' element={<Mens category="Mens" />} />
          <Route path='/Women' element={<Women category="Women" />} />
          <Route path='/Kids' element={<Kids category="Kids" />} />
          <Route path='/Cart' element={<Cart category="Cart" />} />
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>
);
