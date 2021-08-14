import React from "react";
import BestOffers from "./components/BestOffers/BestOffers";
import { FreeShipping } from "./components/HeroSection/FreeShipping";
import Home from "./components/HeroSection/Home";
import Shopby from "./components/ShopbySection/Shopby";
import Showcase from "./components/Showcase/Showcase";

function App() {
  return (
    <div>
      <FreeShipping />
      <Home />
      <Shopby />
      <Showcase />
      <BestOffers />
    </div>
  );
}

export default App;
