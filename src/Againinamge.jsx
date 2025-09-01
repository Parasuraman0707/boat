import React from 'react'
import "./imageset.css";
import { IoRocket } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { airdopess } from './Imageset_2';
import { useNavigate } from 'react-router-dom';
const Againinamge = (Imageset_2) => {
  const naviga = useNavigate()
  return (
    <div className='againimage2'>
      {airdopess.map((airdop) => (
        <div className='card'>
          <div onDoubleClick={() => (naviga(`/headphone/${airdop.id}`))}>
            <div className="adjust">
              <div
                className="bg_img"
                style={{
                  backgroundImage: `url(${airdop.image1})`,
                  backgroundSize: "cover",
                  justifyContent: "space-evenly",
                }}
              >
                <h4 className="img_topic"><IoRocket size={10} className='iconcon' />bestseller</h4>
              </div>
              {/* <img src={heade.image} className="editimage" /> */}
              <div className="img_under">
                <span>{airdop.play}</span>
                <span className="white"> <FaStar className="iconcc" />4.0
                </span>

                {/* <ul></ul>
                    <ul className="white"></ul> */}
              </div>
            </div>
            <h3>{airdop.title}</h3>
             <span className="pricee">₹{
         airdop.price1- Math.round(  airdop.price1 *( airdop.discount1 /100))
            }</span><br />
          <del className="green">₹{airdop.price1}</del>
           
          <span className="red">{airdop.discount1}%off</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Againinamge