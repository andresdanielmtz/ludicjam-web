import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InfoEvent from "./components/InfoEvent/InfoEvent";
function App() {
  return (
    <>
      <div id="root">
        <Header />
        <InfoEvent />
        <div className="mapComponent">
          <Map />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
