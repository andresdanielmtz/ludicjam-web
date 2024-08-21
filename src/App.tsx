import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div id="root">
        <Header />
        <div className="mapComponent">
          <Map />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
