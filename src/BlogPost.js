import React from "react"
import"./index.css"
function BlogPost(props){
     
    return (
        <div>
            <h1 className= "title">{props.allInfo.title}</h1>
            <h2>{props.allInfo.subTitle}</h2>
            <h3>{props.allInfo.author}</h3>
            <h4>{props.allInfo.date}</h4>
            <hr></hr>
        </div>
    )
}
export default BlogPost


