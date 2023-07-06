import { useState } from "react"
import "./Collaps.css"

const Collaps = (props) => {
  const [open, setOPen] = useState(false)

  const toggle = () => {
    setOPen(!open)
  }

  return (
    <div className={`container-collaps ${props.about && "large-width"}`}>
    
      <button className="btn-collaps" onClick={toggle}>
        {props.label}
      </button>

      {open && <div className="toggle">{props.children}</div>}
    </div>
  )
}



export default Collaps
