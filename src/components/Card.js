import React from "react";
import logo from "../assets/logo.png";
import stars from "../assets/stars-5.svg";


const Card = () => {
  return (
    <div>
      <div className="card" >
        <div className="card-first">
           
          <img src={logo} alt="logo" width="25px"
 />
          <h6 style={{margin:"0 auto ",marginTop:"3px",fontSize:"15px"}}>Trustpilot</h6>
        </div>
        <img src={stars} alt="stars"  width="100px" />
        <p style={{fontSize:"9px",fontFamily:"'Roboto', sans-serif"}}> <span style={{fontWeight:"100",opacity:"0.8"}}> TrustScore </span><span style={{fontWeight:"900"}}> 4.8 </span>|<span style={{textDecoration:"underline"}}> 267 reviews</span> </p>
        
      </div>
    </div>
  );
};

export default Card;
