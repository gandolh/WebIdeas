import React from "react";
import "./BlogCategories.css";
const BlogCategories = (props) => {
  console.log(props);
  return (
    <div className="blogCategories">
      {props.blogCateg.map((category) => (
          <div className={`tab ${category.active ? "active" : ""}`}
          key={category.id}
        onClick={()=>{
           props.onChangeActiveCategory(category.id);
        }}
        >
          {category.name}
        </div>
      ))}
      {/* <div className="tab active">Most recent</div>
    <div className="tab">Popular</div>
    <div className="tab">Animations</div>
    <div className="tab">Piece of my life</div> */}
    </div>
  );
};

export default BlogCategories;
