//src/Travel.js
import React from "react";

import Travels from "./Travels";
import './Travel.css';

const Travel = () => ( //ES6 format for anonymous function
  <div className="Travels">
    {Travels.map( (TravelsObj, index) => (
      <figure key={index}>
        <img  src={TravelsObj.photo} alt={TravelsObj.destination}/>
        <figcaption>
          <blockquote>{TravelsObj.destination}</blockquote>
          <cite>{TravelsObj.country}</cite>
          <p>{TravelsObj.distance}</p>
        </figcaption>
      </figure>
    ))}
  </div>
);


// const Travel = ({ destination, country, photo, distance }) => (
//     <figure>
//         <img  src={Travels.photo} alt={Travels.destination}/>
//         <blockquote>{Travels.destination}</blockquote>
//         <cite>{Travels.country}</cite>
//         <p>{Travels.distance}</p>
//     </figure>
// );

export default Travel;