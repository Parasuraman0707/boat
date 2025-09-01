import React from 'react'
import fullimage from "./assets/img.webp"
import "./Big.css"
import { GoDotFill } from "react-icons/go";



const Big = () => {
  return (
    <div>
    <img className='full' src={fullimage} alt="main" />
    {/* <br /> */}
      <div className='ready'>
    <h6>0% Emi on upi</h6>
    <GoDotFill />
    <h6>powered by <b>snap</b>mint</h6>
    <GoDotFill />
    <h6 className='to'>indusland bank</h6>
    <GoDotFill />
    <h6 className='too'>yes bank</h6>
    <GoDotFill />
    <h6>powered by TWD</h6>
        </div>
    </div>
  )
}

export default Big