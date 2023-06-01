import React from "react"

const Card = ({ title, imageSrc }) => {
  return (
    <div className="container-cards">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}

export default Card
