import React from "react"
import Navbar from "./Navbar"
import "./index.css"
function Header(props){
    return(
    <div className = "headerContainer">
        <div className = "opacityColor">
        <Navbar/>
        <h1 className="title1">Clean Blog</h1>
        <h3 className="title1">A Blog Theme by Start Bootstrap</h3>
        </div>
        
    </div>
    )}
export default Header