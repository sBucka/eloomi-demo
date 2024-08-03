import Companies from "./components/CompaniesImgs/companies.js";
import EloomiVideo from "./components/EloomiVideo/eloomiVideo.js";
import Intro from "./components/Intro/intro";
import Nav from "./components/Nav/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Companies />
      <EloomiVideo />
    </div>
  );
}

export default App;
