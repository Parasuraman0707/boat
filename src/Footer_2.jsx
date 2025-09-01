import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer_2 = () => {
  return (
    <div className="lastfooter">
      <h1 className="lastfooter_text">Let's get social
        <FaFacebookF />
        <RiTwitterXLine />
        <BsInstagram />
        <FaYoutube />
        <FaLinkedinIn />
      </h1>
      <h3 className="lastfooter_text1">
        privacy policy . Terms of use . warranty policy
      </h3>

      <h3 className="lastfooter_text12">
        2025 imagine marketing Limited. All Rights Reserved.
      </h3>
      {/* <br /> */}
      <h3 className="lastfooter_text13">
        For queries contact us: Manager, Imagine Marketing Limited Unit no. 204
        & 205, 2nd floor, D-wing & E-wing,
      </h3>
      <h3 className="lastfooter_text14">
        Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai,
        Maharashtra-400093, India
      </h3>
    </div>
  );
};

export default Footer_2;
