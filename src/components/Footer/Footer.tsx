import EventForm from "../EventForms/EventForms";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2 id = "footer-phrase"> ¿Estás listo para el desafío? </h2>
        <EventForm />
      </div>
    </div>
  );
};

export default Footer;
