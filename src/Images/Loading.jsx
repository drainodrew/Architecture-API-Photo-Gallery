import { useState } from "react"


const Loading = (props) => {
  
  return (
    <aside>
      <div className="Loading-bar">
        <label htmlFor="images-loaded">Loading the wander...</label>
        <progress
          id="images-loaded"
          max="100"
          value={props.calculatedWidth}>
          </progress>
      </div>
    </aside>

  )
}

export default Loading