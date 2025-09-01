import React from 'react'
import { useParams } from 'react-router-dom'
import { headset } from './props';
import "./Big.css"
// import "./imageset.css"
const Params = () => {
   const p=useParams();
   console.log(p);
  return (
    <div className='backside1'>
    {headset.map((value)=>{
        if(value.id == p.id){
          return  <>
        <img src={value.image } style={{width:"450px",height:"450px"}}/> 
        <div className='backside'>
        <h2 className='title_params'>{value.title}</h2>
        <h2 className='play_params'>{value.playba}</h2>
         <span className="pricee">₹{
         value.price- Math.round(  value.price *( value.discount /100))
            }</span><br />
          <del className="green">₹{value.price}</del>
          <span className="red">{value.discount}%off</span>
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

export default Params