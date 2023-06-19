import React from 'react'
import './Infos.css'

const Infos = ({item}) => {

   console.log('console.log de item' ,item); 

  return (
    <section className='infos-container'>

       <div className="infos-generic">
        {/* titre */}
        <h1 className='infos-title'>{item.title}</h1>
        
        {/* localisation */}
        <h3 className='infos-location'>{item.location}</h3>


        {/* tag ( component a map) */}
       </div>

       <div className="infos-alt">
        {/* div avec nom + photo de profil */}
        {/* vote */}
       </div>
    </section>
  )
}

export default Infos