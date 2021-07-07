import React from 'react';
import Tilt from 'react-parallax-tilt';

const FirstPageRC = () => {
    return (      <div className="ShowCaseInfoRC">
    <h1> RandomCasualtiess </h1>
    <p>
      This is my Canvas animations study. It took 1 year and it is mostly
      coded in p5.js
    </p>
    <Tilt     
tiltReverse={true} className="RCPoster"  perspective="1000"
>
    <img src="./imgs/poster1.jpg" draggable="false" className="RCPosterImg" alt="poster"/>
    </Tilt>
  </div>  );
}
 
export default FirstPageRC;
