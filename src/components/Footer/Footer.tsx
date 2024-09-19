import "./Footer.css";
import EmprLogo from "../../assets/images/EmprLogo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-phrase">
          <p>
            2024, Hecho por Andrés Martínez, Daniel Fernández, Bruno Gaxiola y
            Andrés Sandoval
          </p>
        </div>
        <div className="footer-image">
          <img src={EmprLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
