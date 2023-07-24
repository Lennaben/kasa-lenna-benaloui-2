import { useState } from "react"
import "./Collaps.css"
import ImgArrow from "../../assets/arrow.svg"

// le collapse c'est un composant qui sert a afficher des données dans un container qui s'ouvre et se ferme
const Collaps = (props) => {
  const [open, setOPen] = useState(false)
  // permet de remplacer les composant class = cycle de vie 
// ouverture du collaps 
  const toggle = () => {
    setOPen(!open)
  }

  return (
    <div className={`container-collaps ${props.about && "large-width"}`}>
      <button className="btn-collaps" onClick={toggle}>
        {props.label}

        <img className={open && "arrow_close"} src={ImgArrow} alt="" />
      </button>

      {open && <div className="toggle">{props.children}</div>}
    </div>
  )
}

export default Collaps
