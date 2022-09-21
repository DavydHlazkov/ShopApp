import React from "react";
import {Link} from "react-router-dom"
import "./categoryList.css"

function CategoryList (){

    return (
        <div>
            <h1>CategoryList</h1>
            <Link to={'/'} style={{textDecoration:"none", color: "inherit"}} >
                <div className="category">
                    <p>all</p>
                </div>
            </Link>
            <Link to={'/lipstick'} style={{textDecoration:"none", color: "inherit"}} >
                <div className="category">
                    <p>lipstick</p>
                </div>
               
            </Link>
            <Link to={'/pencil'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                    <p>pencil</p>
                </div>
            </Link>
            <Link to={'/powder'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                    <p>powder</p>
                </div>    
            </Link>
            <Link to={'/lip-gloss'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                    <p>lip-gloss</p>
                </div>  
            </Link>
            <Link to={'/others'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                    <p>others</p>
                </div>
            </Link>
            <Link to={'/cream'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                    <p>cream</p>
                </div>
            </Link>
            <Link to={'/palette'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                    <p>palette</p>
                </div>
            </Link>
            <Link to={'/concealer'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                    <p>concealer</p>
                </div>
            </Link>
        </div>
    )
}

export default CategoryList;