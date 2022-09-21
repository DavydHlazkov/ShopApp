import React from "react";
import CategoryList from "../CategoryListComponent/CategoryList";

function Others({cardList}) {
    
    const sortedList = cardList.filter(c => c.category === "liquid")

    return(
        <div>Lipstik
            <CategoryList/>
            {sortedList.map((product,index) =>{
                return (
                    <div className="product-card" key={index}>
                <h4>{product.name}</h4>
                <img alt={product.name}  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; 
                    currentTarget.src="https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg?q=60";
                }} src={product.image_link}></img>
                <p>{product.image_link}</p>
                <h4>{index}</h4>
                <p>{product.price}</p>
            </div>
                )
            })}
        </div>
    )
}
export default Others;