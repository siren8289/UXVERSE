import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GroupPurchase from "./pages/GroupPurchase";
import GroupPurchaseDetail from "./pages/GroupPurchaseDetail";
import Rental from "./pages/Rental";
import RentalDetail from "./pages/RentalDetail";
import Community from "./pages/Community";
import Reviews from "./pages/Reviews";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group-purchase" element={<GroupPurchase />} />
        <Route path="/group-purchase/:id" element={<GroupPurchaseDetail />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/rental/:id" element={<RentalDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
