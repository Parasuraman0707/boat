import React from "react";
import "./imageset.css";
import { headset } from "./props.js";
import { FaStar } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { useNavigate } from "react-router-dom"
export function Imageset(Props) {
  const nav = useNavigate()
  return (

    <div className="img-par">
      {headset.map((heade) => (
        <div className="card">
        <div onDoubleClick={() => (nav(`/headset/${heade.id}`))}>
          <div className="adjust">
            <div
              className="bg_img"
              style={{
                backgroundImage: `url('${heade.image}')`,
                backgroundSize: "cover",
                justifyContent: "space-evenly",
              }}
            >
              <h4 className="img_topic" ><IoRocket size={10} className='iconcon' />bestseller</h4>
            </div>
            <div className="img_under">
            <span className="pppp">{heade.playba}</span>
            <span className="white">
              <FaStar className="iconcc" />
              4.0</span>
            {/* <ul></ul>
            <ul className="white"></ul> */}
          </div>
          </div>
          {/* <img src={heade.image} className="editimage" /> */}
          <h3>{heade.title}</h3>
          <span className="pricee">₹{
         heade.price- Math.round(  heade.price *( heade.discount /100))
            }</span><br />
          <del className="green">₹{heade.price}</del>
           
          <span className="red">{heade.discount}%off</span>
        </div>
        </div>
      ))}
    </div>
  );
}
export default Imageset;
