import React from "react";
import BestOffers from "./components/BestOffers/BestOffers";
import Footer from "./components/Footer/Footer";
import { FreeShipping } from "./components/HeroSection/FreeShipping";
import Home from "./components/HeroSection/Home";
import News from "./components/News/News";
import Offer from "./components/OfferSection/Offer";
import ServiceSection from "./components/ServiceSection/ServiceSection";
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
      <ServiceSection />
      <Offer />
      <News />
      <Footer />
    </div>
  );
}

export default App;
