import React from "react";
import AboutBackground from "../Assets/about-background.png";
import aboutlock from "../Assets/aboutlock.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={aboutlock} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        À propos de nous
        </h1>
        <p className="primary-text">
          Nous avons conçu cet espace pour vous offrir une expérience simple et intuitive, que vous soyez un professionnel ou un particulier. Grâce à nos outils, vous pouvez stocker, organiser et partager vos documents en toute confiance.
        </p>
        <p className="primary-text">
          Notre mission est de rendre la gestion de vos fichiers aussi fluide que possible, en vous garantissant une sécurité optimale et une accessibilité constante.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">En lire plus</button>
          <button className="watch-video-button">
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
