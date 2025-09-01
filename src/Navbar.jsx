import React from "react";
import img1 from "./assets/boathead.svg";
import "./Navbar.css"
import { IoSearch } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbe">

      <img className="begining" src={img1} alt="logo" />
      <div className="underline1">Parasuraman</div>
      <div className="underline2">boAt personalisation</div>
      <div className="underline3">corporate orders</div>
      <div className="underline">gifting store</div>
      <select name="more" id="" className="moree">
        <option value="more">More</option>
        <option value="daily deals">Daily deals</option>
        <option value="career">Career</option>
        <option value="blogs">Blogs</option>
      </select>
      <div className="iconsnav">
      <IoSearch className="editsearch"/>
      < input type="text" name="" id="" className="inpp" placeholder="search Earphones" />
      
      <FaUserShield size={25}className="icc"/>
      <IoBagOutline size={25}className="icc1"/>
      </div>
      {/* <h1>bedjd</h1> */}
    </nav>
  );
};

export default Navbar;
