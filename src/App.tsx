import React, { useState, useEffect } from "react";
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
  const [user, setUser] = useState<IUser>({ cart: [], favourite: [] });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <FreeShipping />
      <Home />
      <Shopby />
      <Showcase />
      <BestOffers setCart={setUser} state={user} />
      <ServiceSection />
      <Offer setCart={setUser} state={user} />
      <News />
      <Footer />
    </div>
  );
}

export default App;

export type IUser = {
  cart: ICart[];
  favourite: string[];
};

interface ICart {
  idItem: string;
  countItem: number;
}
