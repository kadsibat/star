import React from "react";
import logo from "../assets/logo.png";
import stars from "../assets/stars-5.svg";


const Card = () => {
  return (
    <div>
      <div className="card" >
        <div className="card-first">
           
          <img src={logo} alt="logo" width="17px"
 />
          <h6 style={{margin:"auto 0"}}>Trustpilot</h6>
        </div>
        <img src={stars} alt="stars"  width="100px" />
        <p style={{fontSize:"9px"}}> <span style={{fontWeight:"100",opacity:"0.8"}}> TrustScore </span><span style={{fontWeight:"700"}}> 4.8 </span>|<span style={{textDecoration:"underline"}}> 267 reviews</span> </p>
        
      </div>
    </div>
  );
};

export default Card;
