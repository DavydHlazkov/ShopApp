import React from "react";
import  "./cardBoard.css"

function CardBoard({sortedList}) {
    
    return (
        <div className="card-board-container">
            {sortedList.map((product,index) =>{
                return (
                    <div className="product-card" key={index}>
                
                <img alt={product.name}  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; 
                    currentTarget.src="https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg?q=60";
                }} src={product.image_link}></img>
                <div className="product-info">
                    <div id="title-heart">
                    <h4>{product.name}</h4>
                    <span id="heart">&#9825;</span>
                    {/* &#9829; */}
                    </div>
                    <p>{product.price ? product.price : "5.0" } usd</p>
                </div>
            </div>
                )
            })}
        </div>
    )
}

export default CardBoard;