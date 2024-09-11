import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Phases from "./components/Phases/Phases";
function App() {
  return (
    <>
      <div id="root">
        <Header />
        <Phases />
        <div className="mapComponent">
          <Map />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
