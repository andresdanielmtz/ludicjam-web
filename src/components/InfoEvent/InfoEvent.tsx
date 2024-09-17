import React from "react";
import "./InfoEvent.css";
import PeopleWorking from "../../assets/people_working.png";

const InfoEvent = () => {


  return (
    <div style={styles.container}>


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
    fontSize: "1.8rem",
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
