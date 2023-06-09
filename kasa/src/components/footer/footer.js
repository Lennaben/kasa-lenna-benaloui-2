import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="container-footer">
      <img
        className="logo-kasa-footer"
        src="/images/fLogo.svg"
        alt="logo"
      ></img>
      <h3 className="text-kasa">@2020 Kasa. All right reserved</h3>
    </div>
  )
}

export default Footer