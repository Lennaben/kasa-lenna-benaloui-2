import React from "react"
import imgAbout from "../../assets/banner-about.svg"
import Collaps from "../../components/collaps/Collaps"
import "./About.css"

const About = () => {
  const valeurs = [
    {
      label: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      label: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      label: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      label: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      label: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
  ]


  return (
    <div className="about-container-banner">
      <div className="background">
        <img className="img-banner" src={imgAbout} alt="banner" />
      </div>

      <div className="group-container-collaps">
        {
          valeurs.map((item)=>{
            return <Collaps about={true} label={item.label}> <p> {item.content} </p> </Collaps>
          })
        }
        {/* <Collaps about={true}>Respect</Collaps>
        <Collaps>Sécurité</Collaps>
        <Collaps>Service</Collaps> */}
      </div>
    </div>
  )
}

export default About
