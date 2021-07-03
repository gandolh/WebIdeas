import React from "react";
import "./BlogCategories.css";
const BlogCategories = (props) => {
  // console.log(props);
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

    </div>
  );
};

export default BlogCategories;
