import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import BlogCategories from "./components/BlogCategories";
import Posts from "./components/Posts";
import "./App.css";
const App = () => {
    const [NavLinks,setNavLinks] = useState(
        [
            {id:1,name:"Home",anchor:"/",active:true},
            {id:2,name:"Projects",anchor:"/projects",active:false},
            {id:3,name:"Contact",anchor:"/contact",active:false},
            {id:4,name:"About me",anchor:"/about",active:false}
        ]);
        //Change active Link

    const changeActive =(id)=>{
        let navLinksCopy=NavLinks.map((link)=>id==link.id?{...link,active:true}:{...link,active:false})
        setNavLinks(navLinksCopy)
    }
  return (
      <Router>
    <div className="container">
        <NavBar navlinks={NavLinks} onChangeActive={changeActive}/>
        <Route path="/" exact component={ (props)=>{
           return ( 
               <>
            <Banner />
            <BlogCategories />
            <Posts />
            </>
            )
        }}

        />
    </div>
      </Router>
  );
};

export default App;
