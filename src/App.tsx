import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <div id="root">
        <Header />
        <div className="mapComponent">
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
