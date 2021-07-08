import React from 'react';
import RandomCasualtiess from './RandomCasualtiess';
const Projects = () => {
    return ( <>
    <RandomCasualtiess/>
    <button className="GoNextProject" onClick={(e)=>{
        e.preventDefault();
        window.scrollBy({
            top: window.innerHeight -20 , //recalculeaza sa scazi si navbarul
            behavior: 'smooth'
          });
    }}><h3>Go next project</h3></button>
    <RandomCasualtiess/>
    <RandomCasualtiess/>
    </> );
}
 
export default Projects;