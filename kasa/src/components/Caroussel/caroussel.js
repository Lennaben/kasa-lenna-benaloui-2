import React, { useState } from "react"
import './Caroussel.css'

const Caroussel = ({ item }) => {
  const [index, setIndex] = useState(0)

  const images = item.pictures

//   image précédente
  const previousImage = () => {
    setIndex(index - 1 < 0 ? images.length - 1 : index - 1)
  }


//  image suivante
  const nextImage = () => {
    setIndex(index + 1 > images.length - 1 ? 0 : index + 1)
  }

  console.log(images)

  return (
    <section className="slider-container">
      <img className="slider-image" src={images[index]} alt="logement" />

      {/* si il  n'y a qu'une image on n'affiche pas les flèches */}
      {images.length <= 1 ? null : (
        <>
          {/* groupe de flèches */}
          <div className="sliderArrows">
            {/* flèche de gauche */}
            <div className="arrowLeftContainer arrow" onClick={previousImage}>
              <img className="arrow-left" src="/images/avant.png" alt="left arrow" />
            </div>
            {/* flèche de droite */}
            <div className="arrowRightContainer arrow" onClick={nextImage}>
              <img className="arrow-right" src="/images/apres.png" alt="right arrow" />
            </div>
          </div>
          <span className="counter">
            {index + 1} / {images.length}
          </span>
        </>
      )}
    </section>
  )
}

export default Caroussel
