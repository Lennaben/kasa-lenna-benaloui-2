import React from "react"
import imgAbout from "../../assets/banner-about.svg"
import Collaps from "../../components/collaps/Collaps"

const About = () => {
  return (
    <div className="container-banner">
      <div className="background">
        <img className="img-banner" src={imgAbout} alt="banner" />
      </div>
      <Collaps> </Collaps>

      <div className="container-composant">
 
      </div>
    </div>
  )
}

export default About
