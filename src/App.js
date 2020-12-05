import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/heroIndex";
import Products from "./components/productsIndex";
import { productData, productDataTwo } from "./components/data";
import Feature from "./components/featureIndex";
import Footer from "./components/footerIndex";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Choose your beverage" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
