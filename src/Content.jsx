import React from "react";
import "./Content.css";
import small1 from "./assets/jshf_2-01-final-01_small1.svg"
import small2 from "./assets/Group_334302_small2.svg"
import small3 from "./assets/Group_334303_small3.svg"
import small4 from "./assets/Group_334304_small4.svg"
const Content = () => {
  return (
    <div className="lefteyy">
      <h5>
      <img className="imagecontent11" src={small1} alt="" />
        <b>12+3months</b>
        <br />
        warranty
      </h5>
      <h5>
      <img className="imagecontent11" src={small2} alt="" />
        <b>GST</b>
        <br />
        billings
      </h5>
      <h5>
      <img className="imagecontent11" src={small3} alt="" />
        <b>free express</b>
        <br />
        delivery
      </h5>
      <h5>
      <img className="imagecontent11" src={small4} alt="" />

        <b>7-day</b>
        <br />
        replacement
      </h5>
    </div>
  );
};

export default Content;
