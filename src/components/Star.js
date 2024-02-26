import React from 'react'
import emptyStar from "../empty_star.png"
import filledStar from "../filled_star.png"

function Star(props) {
    let starIcon=props.icon ? filledStar : emptyStar;
  return (
    <img src={starIcon} alt="" onClick={props.handleClick } className="favourite-icon" />
  )
}

export default Star