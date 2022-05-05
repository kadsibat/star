import React from "react";
import ReactStars from "react-rating-stars-component";

const StarComponent = () => {
  return (
    <div className="starcom">
      <h1>Star Rating</h1>
      {/* <a href="https://www.trustpilot.com/?utm_medium=trustboxfallback/" target="_blank"> */}
      <ReactStars
          count={5}
          size={16}
          activeColor="green"
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
        />
      {/* </a> */}
       
      
    </div>
  );
};

export default StarComponent;
