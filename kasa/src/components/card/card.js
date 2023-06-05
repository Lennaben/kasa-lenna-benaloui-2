import React from "react"
import "./card.css"

const Card = ({ title, imageSrc }) => {
  return (
    <div className="container-cards">
      <div className="cards">
        <img className="img-cards" src={imageSrc} alt={title} />
        <h3 className="text-overlay">{title}</h3>
      </div>
    </div>
  )
}

export default Card
