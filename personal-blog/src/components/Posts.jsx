import React from 'react';
import Card from './Card';
import './Posts.css'
const Posts = (props) => {
    // console.log(props)
    return (
        <div className="posts">
        {
            props.articles.map((article)=>(<Card article={article} key={article.id}/>))
        }
    </div>  
    
    );
}
 
export default Posts;