import React from "react"
import imgAbout from "../../assets/banner-about.svg"
import Collaps from "../../components/collaps/Collaps"

const About = () => {
  return (
    <div className="container-banner-about">
      <div className="background">
        <img className="banner-about" src={imgAbout} alt="banner" />
      </div>
      <Collaps> </Collaps>

      <div className="container-composant">
        <div className="composant">Fiabilité</div>
        <div className="composant">Rescpect</div>
        <div className="composant">Service</div>
        <div className="composant">Sécurité</div>
      </div>
    </div>
  )
}

export default About
