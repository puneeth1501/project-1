// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ContactPage from './Pages/ContactPage';
// import Home from './Pages/Home';
// import ShopPage from './Pages/ShopPage';
// import ThreeDPrintingPage from './Pages/3DPrintingPage';

// import MaterialsPage from './Pages/MaterialsPage';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/booking" element={<div>Booking Page</div>} />
//         <Route path="/shop" element={<ShopPage />} />
//         <Route path="/3d-printing" element={<ThreeDPrintingPage />} />
//         <Route path="/materialsPage" element={<MaterialsPage />} />

     
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Home from './Pages/Home';
import ShopPage from './Pages/ShopPage';
import ContactPage from './Pages/ContactPage';
import ThreeDPrintingPage from './Pages/3DPrintingPage';
import Bookings from './Pages/Bookings';

import MaterialsPage from './Pages/MaterialsPage';
import LoginForm from './Components/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<Bookings/>} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/3d-printing" element={<ThreeDPrintingPage />} />
        <Route path="/materialsPage" element={<MaterialsPage />} />

     
      </Routes>
    </Router>
  );
}

export default App;
