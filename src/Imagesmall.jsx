import React from 'react'
import { smallhead } from './smallimage.js'
import "./imageset.css"
import { useNavigate } from 'react-router-dom'

export const Imagesmall = (smallimage) => {
  const smallnav=useNavigate()
  return (
  <div className='smallimg'>
    <div className='smallimage'>
{
    smallhead.map((small)=>(
      <div onClick={()=>(smallnav(`/products/${small.id}`))}>
<img src={small.mixed} />
</div>
    ))
}
</div>
<div className='text_smallimage'>
  <h3>true wireless earbuds</h3>
  <h3>neckbands</h3>
  <h3>smart watches</h3>
  <h3>nirvana</h3>
  <h3>wireless headphones</h3>
  <h3>wireless speakers</h3>
  <h3>wired headpones</h3>
  <h3>wired headpones</h3>
  <h3>soundbars</h3>
  <h3>gaming headphone</h3>
</div>
    
    </div>
  )
}

export default Imagesmall