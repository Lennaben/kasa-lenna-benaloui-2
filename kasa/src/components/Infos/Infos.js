import React from 'react'
import './Infos.css'
import Tags from '../tags/Tags';

const Infos = ({item}) => {

   console.log('console.log de item' ,item); 

   console.log('item tags', item.tags)
  

   
  return (
    <section className='infos-container'>

       <div className="infos-generic">
        {/* titre */}
        <h1 className='infos-title'>{item.title}</h1>
        
        {/* localisation */}
        <h3 className='infos-location'>{item.location}</h3>
        {/* tag ( component a map) */}
        <Tags tags={item.tags} />  
       </div>

       <div className="infos-alt">
        {/* div avec nom + photo de profil */}
        {/* <h2 className='nom'>{item.host}</h2> */}
        {/* <Host host={item.host}/> */}
      
        
        {/* vote */}
       </div>
    </section>
  )
}
 
export default Infos