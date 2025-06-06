<<<<<<< HEAD
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import GroupPurchase from "./pages/GroupPurchase";
// import GroupPurchaseDetail from "./pages/GroupPurchaseDetail";
// import Rental from "./pages/Rental";
// import RentalDetail from "./pages/RentalDetail";
// import Community from "./pages/Community";
// import Reviews from "./pages/Reviews";
import "./App.css";
=======
import './App.css';
import React from "react";

//import './global.css'; // ✅ 여기에 추가!

import Header0 from './components/Header0/Header0';
import Header1 from './components/Header1/Header1';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import Button0 from './components/Button0/Button0';
import Button1 from  './components/Button1/Button1';

>>>>>>> main

import Header0 from './components/Header0/Header0';
import Header1 from './components/Header1/Header1';
import Button0 from './components/Button0/Button0';
import Button1 from './components/Button1/Button1';
import Search from './components/Search/Search';

function App() {
  return (
<<<<<<< HEAD
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/group-purchase" element={<GroupPurchase />} />
    //     <Route path="/group-purchase/:id" element={<GroupPurchaseDetail />} />
    //     <Route path="/rental" element={<Rental />} />
    //     <Route path="/rental/:id" element={<RentalDetail />} />
    //     <Route path="/community" element={<Community />} />
    //     <Route path="/reviews" element={<Reviews />} />
    //   </Routes>
    // </Router>
    <div style={{ paddingBottom: '64px'}}>
      {/* <Header0 />
      <Header1 />
      <Button0 />
      <Button1 /> */}
      <Search />
    </div>

=======
    <div style={{ paddingBottom: '64px' }}>
      <Header0 />
      <Header1 />
      
      {/* 메인 콘텐츠 자리에 Search, Buttons 넣기 */}
      <Search />
      
      <Button0 />
      <Button1 />

      <Footer />
      {/* <Header0 />
      <Header1 /> */}

      {/* 메인 콘텐츠가 들어올 수 있음*/}

      {/* <Footer /> */}
      {/* <Search /> */}
    </div>
>>>>>>> main
  );
}

export default App;
