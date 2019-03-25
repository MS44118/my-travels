import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <figure>
        <img  src={photo} alt={destination}/>
        <figcaption>
            <blockquote>{destination}</blockquote>
            <cite>{country}</cite>
            <p>{distance}</p>
        </figcaption>
    </figure>
);

export default Travel;