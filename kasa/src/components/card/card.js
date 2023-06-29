import React from "react"
import "./card.css"
import { Link } from "react-router-dom"

const Card = ({ id, title, imageSrc }) => {
  return (
    <Link to={"/logement/" + id} className="cards-link">
      {/* <div className="container-cards"> */}
      <div className="cards">
        {/* <div class="degrade-horizontal"></div> */}
        <img className="img-cards" src={imageSrc} alt={title} />
        <h3 className="text-overlay">{title}</h3>
      </div>
      {/* </div> */}
    </Link>
  )
}

export default Card
