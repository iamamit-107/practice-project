import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Need from "./components/Need/Need";
import News from "./components/News/News";
import Daily from "./components/Daily/Daily";
import Footer1 from "./components/Footer/Footer1/Footer1";
import Footer2 from "./components/Footer/Footer2/Footer2";
import Footer3 from "./components/Footer/Footer3/Footer3";
import BestSeller from "./components/BestSeller/BestSeller";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f3f3f3" }}>
      <Header />
      <Hero />
      <Need />
      <Products />
      <BestSeller />
      <News />
      <Daily />
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </div>
  );
}

export default App;
