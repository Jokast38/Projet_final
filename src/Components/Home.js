import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import homelock from "../Assets/homelock.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Stockage cloud qui privilégie la confidentialité
          </h1>
          <p className="primary-text">
          Économisez de l'espace sur votre appareil <br />
          Protégez vos fichiers avec un cryptage de bout en bout <br />
          Accédez et partagez vos fichiers sur n'importe quel appareil
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={homelock} alt="" style ={{ width : '1000px' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
