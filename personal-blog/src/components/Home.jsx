import React from "react";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import BlogCategories from "./BlogCategories";
import BlogCategMobile from "./BlogCategMobile";
import Posts from "./Posts";
const Home = ({ blogCateg, articles, onChangeActiveCategory }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  const breakpoint = 750;
  return (
    <>
      <Banner />
      {width > breakpoint ? (
        <BlogCategories
          blogCateg={blogCateg}
          onChangeActiveCategory={onChangeActiveCategory}
        />
      ) : (
        <BlogCategMobile
          blogCateg={blogCateg}
          onChangeActiveCategory={onChangeActiveCategory}
        />
      )}
      <Posts articles={articles} />
    </>
  );
};

export default Home;
