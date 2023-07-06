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
      label: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme..",
    },
    {
      label: "Service",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      label: "Sécurité",
      content:
        " La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
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
