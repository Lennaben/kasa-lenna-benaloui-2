import React from "react"
import "./Logement.css"
import { useParams } from "react-router-dom"
import * as data from "../../data/logement.json"
import Caroussel from "../../components/Caroussel/caroussel"
// import Infos from "../../components/Infos/Infos"
import Tags from "../../components/tags/Tags"
import Collaps from "../../components/collaps/Collaps"

const Logement = () => {
  // on récupère l'id dans la barre d'adresse
  const { id } = useParams()
  // on récupère les données du logement avec l'id qu'on a passé en paramètre d'url
  const item = data.default.find((data) => data.id === id)

  console.log(item)
  console.log(item.description)
  // console.log(item.host.name)
  // console.log(item.equipments[1])

  return (
    <div>
      {/* component Caroussel */}
      <Caroussel item={item} />
      {/* component Infos */}
      <section className="infos-container">
        <div className="infos-generic">
          {/* titre */}
          <h1 className="infos-title">{item.title}</h1>

          {/* localisation */}
          <h3 className="infos-location">{item.location}</h3>
          {/* tag ( component a map) */}
          <Tags tags={item.tags} />
        </div>

        <div className="infos-alt">
        
            
          {/* </div> */}
          {/* <div>{item.rating}</div> */}
          {/* faire une boucle  */}
          {/* div avec nom + photo de profil */}
          {/* <h2 className='nom'>{item.host}</h2> */}
          {/* <Host host={item.host}/> */}.{/* vote */}
        </div>
      </section>
      {/* <Infos item={item} /> */}
      {/* composant tag */}

      {/* component Collaps */}
      <div className="container">
        <Collaps label="Descrpitions">
          {/* Afficher les description de item */}
          <p>{item.description}</p>
        </Collaps>

        <Collaps label="Equipements">
          {/* Afficher les equiement de item */}
          {/* <h1>introduction</h1>
          <p>
            The collapsible component puts long sections of the information
            under a block enabling users to expand or collapse to access its
            details.
          </p> */}
        </Collaps>
      </div>
    </div>
  )
}

export default Logement
