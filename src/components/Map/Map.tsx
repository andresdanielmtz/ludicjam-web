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
    <div className="map_wrapper">
      <div className="map_title">Ubicaciones</div>
      <div className="map_description">
        Tanto los talleres como el evento como tal ocurrirán dentro del{" "}
        <div className="highlight">Campus</div>, mientras que el evento de
        exposición será en <div className="highlight">Parque La Ruina</div>.
      </div>
      <div className="map">
        <MapContainer
          center={[29.169771, -110.911208]}
          zoom={17}
          style={{ height: "55vh", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[29.169771, -110.911208]}>
            <Popup>
              El evento es en el Auditorio del Edificio 3. <br /> También
              conocido como el Edificio de Negocios.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="map_description">
        Tecnológico de Monterrey, Campus Sonora Norte.{" "}
        <b>Parque de Emprendimiento e Innovación, Piso 3 </b>
        <div className="map_subdescription">
          {" "}
          Blvr. Enrique Mazón López, Blvd. Enrique Mazón López 965, 83000
          Hermosillo, Son.{" "}
        </div>
      </div>
      <div className="map_subdescription"> Bruh </div>
      <div className="map">
        <MapContainer
          center={[29.097296611061033, -110.94689954907565]}
          zoom={17}
          style={{ height: "55vh", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[29.097296611061033, -110.94689954907565]}>
            <Popup>
              La presentación de los proyectos se llevará acabo en La Ruina.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="map_description">
        Parque La Ruina
        <div className="map_subdescription">
          {" "}
          Blvd. Fco. Eusebio Kino 9001, Cruz Gálvez, Centro, 83010 Hermosillo,
          Son.{" "}
        </div>
      </div>
    </div>
  );
};

export default Map;
