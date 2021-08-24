import React from "react"
import BlogData from "./BlogData"


function BlogList() {
    const BlogComponents = BlogData.map(info=> <BlogList key={info.title} allInfo= {info}/> )
    return (
        <div>
            {BlogComponents}
        </div>
    )
}
export default BlogList