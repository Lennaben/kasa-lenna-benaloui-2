import React from "react"
import imgBanner from "../../assets/banner-image.svg"

const Banner = () => {
  return (
    <div className="container-banner">
      <div className="banner">
        <div className="backgruond-banner">
          <img src={imgBanner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
