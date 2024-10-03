import "./Phases.css";
import BulletPoint1 from "../../assets/images/BulletPoint1.png";
import BulletPoint2 from "../../assets/images/BulletPoint2.png";
import BulletPoint3 from "../../assets/images/BulletPoint3.png";

const Phases = () => {
  return (
    <div className="phases-container">
      <div className="phases-content">
        <div className="phases-title-subtitle">
          <p className="phases-title">Fases del Evento</p>
          <p className="phases-subtitle">
            El evento consta de tres fases, las cuales son de{" "}
            <strong>preparación</strong>,<strong> ejecución</strong> y
            finalmente <strong>exposición</strong> al público.
          </p>
        </div>
        <div className="phases-phases">
          <div className="phase">
            <img className="bullet-point" src={BulletPoint1} alt="" />
            <div className="phase-text">
              <p id="phase-title">Preparación</p>
              <p className="phase-desc">
                Prepárate a través de los diferentes talleres que habrán dentro
                del campus durante la semana del
                <strong> 16 al 20 de Septiembre.</strong>
              </p>
            </div>
          </div>
          <div className="phase">
            <img className="bullet-point" src={BulletPoint2} alt="" />
            <div className="phase-text">
              <p id="phase-title">Ejecución</p>
              <p className="phase-desc">
                Del <strong>día 20 al 21 de Septiembre</strong>, prepárate para
                desarrollar tu aplicación.
              </p>
            </div>
          </div>
          <div className="phase">
            <img className="bullet-point" src={BulletPoint3} alt="" />
            <div className="phase-text">
              <p id="phase-title">Exposición</p>
              <p className="phase-desc">
                Finalmente, el <strong>día 2 de Octubre</strong> habrá un
                showcase especial en el <span id="ruina">Parque La Ruina</span>,
                ¡No te lo pierdas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phases;
