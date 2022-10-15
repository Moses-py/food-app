import React from "react";
import "./App.css";
import ExploreFoods from "./pages/ExploreFoods";
import FoodDetails from "./pages/FoodDetails";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="food_details" element={<FoodDetails />} />
        <Route path="explore" element={<ExploreFoods />} />
        <Route path="*" element={null} />
      </Routes>
    </Router>
  );
}

export default App;
