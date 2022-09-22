import React from "react";
import {Link} from "react-router-dom"
import "./categoryList.css"

function CategoryList ({nav}){

    return (
        <div className="category-container">
            <Link to={'/'} style={{textDecoration:"none", color: "inherit"}} >
                <div className="category">
                    {nav === "all" ? <p><b>All products</b></p> : <p>All products</p> }
                </div>
            </Link>
            <Link to={'/concealer'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                    {nav === "concealer" ? <p><b>Concealer</b></p> : <p>Concealer</p> }
                </div>
            </Link>
            <Link to={'/cream'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                {nav === "cream" ? <p><b>Cream</b></p> : <p>Cream</p> }
                </div>
            </Link>
            <Link to={'/lip-gloss'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                    {nav === "lipgloss" ? <p><b>Lip gloss</b></p> : <p>Lip gloss</p>}
                </div>  
            </Link>
            <Link to={'/lipstick'} style={{textDecoration:"none", color: "inherit"}} >
                <div className="category">
                {nav === "lipstick" ? <p><b>Lipstick</b></p> : <p>Lipstick</p>}
                </div>
            </Link>
            <Link to={'/palette'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                {nav === "palette" ? <p><b>Palette</b></p> : <p>Palette</p>}
                </div>
            </Link>
            <Link to={'/pencil'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                {nav === "pencil" ? <p><b>Pencil</b></p> : <p>Pencil</p>}
                </div>
            </Link>
            <Link to={'/powder'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                {nav === "powder" ? <p><b>Powder</b></p> : <p>Powder</p>}
                </div>    
            </Link>
            <Link to={'/others'} style={{textDecoration:"none", color: "inherit"}}>
                <div className="category">
                {nav === "others" ? <p><b>Others products</b></p> : <p>Others products</p>}
                </div>
            </Link>



        </div>
    )
}

export default CategoryList;