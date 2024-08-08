import Solution_areas from "components/Solution_Areas/solution_areas.js";
import Companies from "./components/CompaniesImgs/companies.js";
import EloomiVideo from "./components/EloomiVideo/eloomiVideo.js";
import Intro from "./components/Intro/intro";
import Nav from "./components/Nav/nav";
import Product from "./components/Product/product.js";

function App() {
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
}

export default App;
