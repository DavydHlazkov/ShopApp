import React from "react";
import  "./cardBoard.css"
import BigCard from "../BigCardComponent/BigCard";

function CardBoard({sortedList}) {

    return (

        <div className="card-board-container">

            {sortedList.length ? sortedList.map((product,index) =>{
                return (
                    <BigCard product={product} key={index}/>
                )
            }) : <div className="empty">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>}
        </div>
    )
}

export default CardBoard;