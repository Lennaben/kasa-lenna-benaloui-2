import React from "react"
import "./Rating.css"

const Rating = (props) => {
  const rating = props.rating
  console.log(rating)
  

// etoile full / empty
  const fullstar = <img className="full-star" src="/images/fullstar.svg" alt="" />
  const emptystar = <img  className="empty-star" src="/images/emptystar.svg" alt="" />

  const stars = []
// affichage des etoiles en fonction de si elle sont full ou empty
  for (let i = 0; i < rating; i++) {
    stars.push(fullstar)
  }

  for (let i = 0; i < 5 - rating; i++) {
    stars.push(emptystar)
  }

  return (
    <div className="stars-groupe">
      {stars.map((star) => (
        <div>{star}</div>
      ))}
    </div>
  )
}

export default Rating
