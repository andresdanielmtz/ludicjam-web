import React, { useCallback } from "react";
import "./InfoEvent.css";
import PeopleWorking from "../../assets/people_working.png";
import Particles from "react-tsparticles";
import ParticleConfig from "../../config/particleConfig.json";
import ParticleConfigNoParticle from "../../config/particleConfig_noParticle.json";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const InfoEvent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <div style={styles.container}>
      <Particles
        id="tsparticles"
        url="http://foo.bar/particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />

      <div style={styles.textSection}>
        <h1 style={styles.title}>¿Qué es Ludic Jam?</h1>
        <p style={styles.description}>
          <strong>Ludic Jam</strong> es un <strong>evento de dos días</strong>{" "}
          enfocado en la creación, prototipado y desarrollo de videojuegos con
          un enfoque en el <strong>emprendimiento</strong>, la{" "}
          <strong>ciudadanía</strong> y el impacto de la{" "}
          <strong>tecnología</strong> en la sociedad.
        </p>
      </div>
      <div style={styles.imageSection}>
        <img
          src={PeopleWorking}
          className="hide-on-mobile" // Apply the class to hide on smaller screens
          alt="People working on Ludic Jam"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "row", // Layout elements in a row
    justifyContent: "space-between",
    backgroundColor: "#000",
    color: "#fff",
    height: "100vh",
    margin: 0,
  },
  textSection: {
    flex: 1, // Text section takes up available space
    padding: "20px", // Adjust padding for spacing
    alignContent: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
    textAlign: "justify",
  },
  imageSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // Align the image to the right
    flex: 0, // Prevents the section from growing
    padding: 0, // Removes any padding around the image section
  },
  image: {
    height: "100%", // Covers the full height of the container
    width: "auto", // Maintains aspect ratio
    margin: 0, // Removes any margin around the image
    padding: 0, // Ensures no padding is applied to the image
    objectFit: "cover", // Crops the image if necessary to fit
    borderRadius: 0,
    border: 0,
  },
};

export default InfoEvent;
