import "./Ready.css";

const ReadySection = () => {
  return (
    <div id="ready-section">
      <h1 id="ready-text"> Y tú, ¿Estás listo? </h1>
      <button
        className="btn-donate"
        onClick={() => window.open("https://forms.gle/nHCzup98r1LrazKb7")}
      >
        Regístrate
      </button>
    </div>
  );
};

export default ReadySection;
