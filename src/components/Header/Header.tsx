import LudicWebLandingVideo from "./../../assets/LudicWebLandingVideo.mp4";
import "./Header.css";
import LudicLogo from "../../assets/images/ludiclogo.png";

const Header = () => {
  return (
    <div className="header-container">
      <video className="background-video" autoPlay loop muted>
        <source src={LudicWebLandingVideo} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="header-text">
        <img src={LudicLogo} alt="Ludic Logo" className="ludic-logo" />
        <h3 id="ludic-date"> 20 al 21 de Septiembre, 2024</h3>
        <h1>
          ¿Listo para el <b>Game Jam</b> más grande de{" "}
          <span id="hmo">Hermosillo </span>?
        </h1>
      </div>
    </div>
  );
};

export default Header;
