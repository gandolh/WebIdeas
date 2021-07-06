import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BlogCategMobile.css'
const BlogCategMobile = (props) => {
  var settings = {
    accessibility:false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    afterChange : async (ind)=>{
      props.onChangeActiveCategory(ind+1);
    },
    initialSlide: props.blogCateg.find(el => el.active===true).id -1
  };

  return (
    <Slider {...settings}>
      {props.blogCateg.map((category) => (
        <div
          className={'tabMobile'}
          key={category.id}
        >
         <p> {category.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default BlogCategMobile;
