import React from 'react';
import './Banner.css'
const Banner = () => {
    return ( <div className="banner">
        <div></div>
        <div className="bannerText">
        <p className="welcome">Welcome to</p>
        <h1 className="mainTitle">Random Casualtiess Blog</h1>
        </div>
        <img src="imgs/hello.svg" className="ilustration" alt="hello" draggable="false"></img>
        <div></div>
    </div> );
}
 
export default Banner;