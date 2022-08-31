import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import PizzaPage from "./Header/Pages/Pizza/PizzaPage";
import ActionPage from "./Header/Pages/Action/ActionPage";
import SaladsPage from "./Header/Pages/Salad/SaladsPage";
import DessertsPage from "./Header/Pages/Dessert/DessertsPage";
import DrinksPage from "./Header/Pages/Drinks/DrinksPage";
import Basket from "./Header/Pages/Basket/BasketPage";


import { AppProvider } from "./Context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<PizzaPage />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/pizza" element={<PizzaPage />} />
          <Route path="/salads" element={<SaladsPage />} />
          <Route path="/desserts" element={<DessertsPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
       
      </div>
    </AppProvider>
  );
}

export default App;
