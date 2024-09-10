import LudicWebLandingVideo from "./../../assets/LudicWebLandingVideo.mp4";

const Header = () => {
  return (
    <div className="header-container">
      <video className="background-video" autoPlay loop muted>
        <source src={LudicWebLandingVideo} type="video/mp4" />
      </video>

      <div className="header-text">
        <h1>Bienvenido al Game Jam más grande de Hermosillo.</h1>
      </div>
    </div>
  );
};

export default Header;
