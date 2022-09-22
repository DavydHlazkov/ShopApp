import React from "react";
import "./smallCardBoard.css"
import SmallCard from "../SmallCardComponent/SmallCard";

function SmallCardBoard({sortedList}) {
    
    return (
        <div className="small-card-board-container">
            {sortedList.length ?  sortedList.map((product,index) =>{
            return (
                <SmallCard  product={product} key={index} />
            )
        }) : <div className="empty">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>}
       
    </div>
    )
}

export default SmallCardBoard;