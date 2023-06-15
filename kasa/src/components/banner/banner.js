import React from "react"
import imgBanner from "../../assets/banner-image.svg"
import "./banner.css"

const Banner = () => {
  return (
    <div className="container-banner">
      <div className="background">
        <img className="img-banner" src={imgBanner} alt="banner" />
        <div class="texte">Chez vous, partout et ailleurs </div>
      </div>
    </div>
  )
}

export default Banner
