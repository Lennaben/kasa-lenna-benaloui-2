import React from "react"

const Host = (props) => {
  const host = props.host
  return (
    <div className="hosts-container">
      {/* pour chacun des tags on crée un tag */}
      {host.map((host, index) => (
        <div key={index} className="tag-container">
          <p className="host">{host}</p>
        </div>
      ))}
    </div>
  )
}


export default Host
