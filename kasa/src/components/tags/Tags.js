import React from "react"
import './Tags.css'

const Tags = (props) => {
  const tags = props.tags
  return (
    <div className='tags-container'>
      {/* pour chacun des tags on crée un tag */}
      {tags.map((tag, index) => (
        <div key={index} className="tag-container" >
          <p className="tag">{tag}</p>
        </div>
      ))}
    </div>
  )
}

export default Tags

