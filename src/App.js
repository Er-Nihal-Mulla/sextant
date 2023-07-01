import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="Im an Exhibit"></Exhibit>
      <Exhibit name="Im also an Exhibit"></Exhibit>
      <Exhibit name="Dont forget about me... Im an Exhibit Tool!!!"></Exhibit>
    </div>
  );
}

export default App;
