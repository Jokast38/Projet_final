import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Sécurité des fichiers",
      text: "Tous les fichiers sont protégés, et seules les personnes autorisées peuvent y accéder.",
    },
    {
      image: ChooseMeals,
      title: "Simplicité et intuitivité",
      text: "Les utilisateurs peuvent facilement s’inscrire, télécharger, visualiser et organiser leurs documents",
    },
    {
      image: DeliveryMeals,
      title: "Optimisation de l’espace de stockage",
      text: "La plateforme offre ainsi une grande flexibilité en fonction des besoins de chaque utilisateur.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Fonctionnalités</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
