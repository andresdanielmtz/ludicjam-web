import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InfoEvent from "./components/InfoEvent/InfoEvent";
import Phases from "./components/Phases/Phases";
function App() {
  return (
    <>
      <div id="root">
        <Header />
        <InfoEvent />

        <div className="white-bg">
          <Phases />
          <div className="mapComponent">
            <Map />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
