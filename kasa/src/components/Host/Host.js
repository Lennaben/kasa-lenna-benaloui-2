import React from "react"
import "./Host.css"

const Host = (props) => {
  const host = props.host
  return (
    <div className="hosts-container">
      <h2 className="nom">{host.name}</h2>
      <img className="pp" src={host.picture} alt="host picture" />
   
    </div>
  )
}


export default Host
