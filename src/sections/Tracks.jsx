// import React from 'react'
import "./Tracks.css"
// import { prizes } from "../constants";
import React, { useEffect } from 'react';

// const EachPrize = (props) => {
//   useEffect(() => {
//     const prizeicon = document.querySelector(`#id${props.i}`);
//     prizeicon.innerHTML = props.icon;
//   }, [props.i]);
  
//   return (
//     <div className="EachPrizes">
//       <div id={"id" + props.i} className="prize-icon"></div>
//       <h2>{props.type}</h2>
//       <p>{props.content}</p>
//     </div>
//   )
// }

const Tracks = () => {
  return (
    <div className="prizesection" id="prizes">
      <h1>Tracks</h1>
      <div className='prizes-grid-container'>
        {/* {prizes.map((s, i) => (
          <EachPrize key={i} i={i} icon={s.icon} type={s.type} content={s.content} />
        ))} */}

        <h1>Coming Soon...</h1>
      </div>
    </div>
  )
}


export default Tracks