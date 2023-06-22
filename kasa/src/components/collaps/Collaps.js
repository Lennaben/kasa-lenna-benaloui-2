import { useState } from "react"
import './Collaps.css'


const Collaps = (props) => {
  const [open, setOPen] = useState(false)

  const toggle = () => {
    setOPen(!open)
  }

  return (
    <div className="container-collaps">
      <button className="btn-collaps" onClick={toggle}>{props.label}</button>
    
      {open && (
        <div className="toggle">
          <h4>{props.children}</h4>
        </div>
      )}
    </div>
  )
}

export default Collaps
