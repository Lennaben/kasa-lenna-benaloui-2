import { useState } from "react"
import "./Collaps.css"
import ImgArrow from "../../assets/arrow.svg"

const Collaps = (props) => {
  const [open, setOPen] = useState(false)

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
