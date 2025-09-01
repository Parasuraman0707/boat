import React from 'react'
import "./propscard.css"

import { FaArrowCircleRight } from "react-icons/fa";
const Propscard = () => {
  return (
  <div>
      <h3>sale is li<span style={{borderBottom:"5px solid red", width: "30px"}}>ve</span></h3>
        {/* <h2 style={{  }}>
          na
        </h2> */}
        <h3 className="view" style={{ marginLeft:"1200px",fontSize:"medium"}}>
          View All
          <FaArrowCircleRight  className="icccc2"/>
        </h3>
  </div>
  )
}

export default Propscard