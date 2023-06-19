import React from 'react'
import { useParams } from 'react-router-dom'
import * as  data from '../../data/logement.json'
import Caroussel from '../../components/Caroussel/caroussel'
import Infos from '../../components/Infos/Infos'


const Logement = () => {

   // on récupère l'id dans la barre d'adresse
   const {id} = useParams()
    // on récupère les données du logement avec l'id qu'on a passé en paramètre d'url
   const item = data.default.find((data) => data.id === id)


   console.log(item);

  return (
    <div>
        {/* component Caroussel */}
        <Caroussel item={item}/>
        {/* component Infos */}
        <Infos item={item}/>
        {/* component Collaps */}
    </div>
  )
}

export default Logement