import React from "react";
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
    </div>
  );
}

export default App;
