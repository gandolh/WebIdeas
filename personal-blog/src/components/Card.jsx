import React from "react";
import Tilt from 'react-parallax-tilt';
import "./Card.css";
const Card = (props) => {
  const { img, alt_img, category, title } = props.article;
  return (
    <Tilt     
    tiltReverse={true}
  >
    <div className="card">
      <img draggable="false" src={img} alt={alt_img} className="card_poster"></img>
      <p className="category">{category}</p>
      <h2 className="title">{title}</h2>
    </div>
    </Tilt>
  );
};

export default Card;
