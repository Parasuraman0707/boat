import React from 'react'
import { useParams } from 'react-router-dom'
import { airdopess } from './Imageset_2';
import "./Big.css"
const Params_2 = () => {
  const p2 = useParams()
  console.log(p2);

  return (
    <div className='backside1'>
      {airdopess.map((value2) => {
        if (value2.id == p2.id) {
          return <>
            <img src={value2.image1} style={{ width: "450px", height: "450px" }} />
            <div className='backside'>
              <h2 className='title_params'>{value2.title}</h2>
              <h2  className='play_params'>{value2.play}</h2>
              <span className="pricee">₹{
                value2.price1 - Math.round(value2.price1 * (value2.discount1 / 100))
              }</span><br />
              <del className="green">₹{value2.price1}</del>
              <span className="red">{value2.discount1}%off</span>
              <br />
              {/* <h3>{value.}</h3> */}
              <button className='buy_now'>buy now</button>
              <button className='add_to_cart'>add to cart</button>
            </div>
          </>
        }
      })}
    </div>
  )
}

export default Params_2