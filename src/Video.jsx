import React from 'react'
import "./video.css"
// import { vid } from './videos_headset'
const Video = ({vide,playback}) => {
  return (
    <div className='cart' style={{height:"200px"}}>
        <video autoPlay muted loop controls style={{display:"flex"}}>
            <source src=
            {vide} type="video/mp4"/>
        </video>
    <h3 className='text' style={{textAlign:"center"}}>{playback}</h3>

    </div>
  )
}

export default Video
