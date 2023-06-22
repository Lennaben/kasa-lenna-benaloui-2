import React from "react"
import './Logement.css'
import { useParams } from "react-router-dom"
import * as data from "../../data/logement.json"
import Caroussel from "../../components/Caroussel/caroussel"
import Infos from "../../components/Infos/Infos"
import Tag from "../../components/tags/Tags"
import Collaps from "../../components/collaps/Collaps"


const Logement = () => {
  // on récupère l'id dans la barre d'adresse
  const { id } = useParams()
  // on récupère les données du logement avec l'id qu'on a passé en paramètre d'url
  const item = data.default.find((data) => data.id === id)

  console.log(item)

  return (
    <div>
      {/* component Caroussel */}
      <Caroussel item={item} />
      {/* component Infos */}
      <Infos item={item} />
      {/* composant tag */}

      {/* component Collaps */}
      <div className="container">
        <Collaps label="Descrpitions">
          <h1 className="h1-intro"> introduction</h1>
          <p>
            The collapsible component puts long sections of the information
            under a block enabling users to expand or collapse to access its
            details.
          </p>
        </Collaps>
        <hr />
        <Collaps label="Equipements">
          <h1>introduction</h1>
          <p>
            The collapsible component puts long sections of the information
            under a block enabling users to expand or collapse to access its
            details.
          </p>
        </Collaps>
        <hr />
        {/* <Collaps label="Goals ">
        <h1>introduction</h1>
        <p>
          The collapsible component puts long sections of the information under
          a block enabling users to expand or collapse to access its details.
        </p>
      </Collaps> */}
        <hr />
      </div>
    </div>
  )
}

export default Logement
