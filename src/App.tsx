import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InfoEvent from "./components/InfoEvent/InfoEvent";
import Phases from "./components/Phases/Phases";
import ReadySection from "./components/Ready/Ready";

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
        <ReadySection />

        <Footer />
      </div>
    </>
  );
}

export default App;
