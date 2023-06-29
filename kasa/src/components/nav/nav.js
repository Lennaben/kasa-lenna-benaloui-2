import React from "react"
import { Link } from "react-router-dom"
import "./nav.css"
// import ('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

const Nav = () => {
  return (
    <nav className="navContainer">
      <img className="logo" src="/images/logo.svg" alt=""></img>
      <ul className="navLinks">
        <li className="navLi">
          <Link className="link" to="/">
            Acceuil
          </Link>
        </li>

        <li className="navLi">
          <Link className="link" to="/about">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
