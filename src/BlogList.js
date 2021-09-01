import React from "react"
import BlogData from "./BlogData"
import BlogPost from "./BlogPost"


function BlogList() {
	const BlogComponents = BlogData.map(info => {
		return <BlogPost key={info.title} allInfo={info} />
	})

	return <div>{BlogComponents}</div>
}
export default BlogList