

// import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
// import StarComponent from "./components/StarComponent"


// const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
//   let styleClass = "star-rating-blank";
//   if ( rating >=starId) {
//     styleClass = "star-rating-filled";
//   }


//   return (
//     <div
//       className="star"
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       onClick={onClick}
//     >
//       <svg
    
//         height="25px"
//         width="25px"
//         className={styleClass}
//         viewBox="-2 0 25 23"
//         data-rating="1"
//       >
//         <polygon
//           strokeWidth="0"
//           points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
//         />
//       </svg>
//     </div>
//   );
// };

function App() {
  // const navigate=useNavigate()
  // const [rating, setRating] = useState(0);
  // const [hoverRating, setHoverRating] = useState(0);
//   // const stars = [1, 2, 3, 4, 5];
// console.log(rating)

  return (
    <div className="App">
      {/* <div className="header">
        <h1>Star Rating</h1>
        
      </div> */}
      {/* <div className="flex-container">
        {stars.map((star, i) => (
          <Star
         
            key={i+1}
            starId={i+1}
            rating={hoverRating || rating}
            onMouseEnter={() => setHoverRating(i+1)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(i+1)}
          />
        ))}
      </div> */}
    
    
      {/* <StarComponent /> */}
      <Card/>
    </div>
  );
}

export default App;




// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

// function App() {
//   return (
//     <Stack spacing={1}>
//       <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{backgroundColor:"red"}}/>
//       <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
//     </Stack>
//   );
// }
// export default  App