import React from "react"
import imgAbout from "../../assets/banner-about.svg"
import Collaps from "../../components/collaps/Collaps"
import "./About.css"
// import "./Collaps.css"

const About = () => {
  return (
    <div className="container-banner">  
        <div className="background">
        <img className="img-banner" src={imgAbout} alt="banner" />
    </div>

      <div className="container-collaps">
        <Collaps>Respect</Collaps>
        <Collaps>Sécurité</Collaps>
        <Collaps>Service</Collaps>
      </div>

     
    </div>
  )
}

export default About
