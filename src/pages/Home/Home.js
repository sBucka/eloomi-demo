import Solution_areas from "../../components/SolutionAreas/SolutionAreas.js";
import Companies from "../../components/CompaniesImgs/companies.js";
import EloomiVideo from "../../components/EloomiVideo/eloomiVideo.js";
import Intro from "../../components/Intro/intro.js";
import Nav from "../../components/Nav/nav.js";
import Product from "../../components/Product/product.js";

import React from "react";

const Home = () => {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Companies />
      <EloomiVideo />
      <Product />
      <Solution_areas />
    </div>
  );
};

export default Home;
