import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "./Map.css";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  return (
    <div className="map">
      <div className="map__title"> Localisac</div>
      <MapContainer
        center={[29.169771, -110.911208]}
        zoom={17}
        style={{ height: "40vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[29.169771, -110.911208]}>
          <Popup >
            El evento es en el Auditorio del Edificio 3. <br /> También conocido como el Edificio de Negocios. 
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
