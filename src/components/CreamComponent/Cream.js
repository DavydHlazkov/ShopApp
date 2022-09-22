import React, {useState} from "react";
import CategoryList from "../CategoryListComponent/CategoryList";
import CardBoard from "../CardBoardComponent/CardBoard";
import {Route, Routes} from "react-router-dom"
import SmallCardBoard from "../SmallCardBoardComponent/SmallCardBoard";
import {Link} from "react-router-dom"
import card from "../../images/card.png"
import cardDisabled from "../../images/card-diabled.png"
import small from "../../images/small.png"
import smallDisabled from "../../images/small-disabled.png"

function Cream({cardList}) {
    
    const [bigCard, setBigCard] = useState(true)
    const sortedList = cardList.filter(c => c.category === "cream")
    const cardHandler =()=>{
        setBigCard(!bigCard)
    }
    const nav = "cream"


    return(
        <div className="main-block">
            <header>
                <Link to={'/'} style={{textDecoration:"none", color: "inherit"}} >
                    <h1 className="shopLogo">Shop</h1>
                </Link>
            </header>
        
        <div className="body-container">
            <CategoryList nav={nav}/>
            <div className="cards-container">
                <div className="view-links">
                    <Link to={'/cream'} style={{textDecoration:"none", color: "inherit"}} >
                        <div onClick={cardHandler}>
                           <img src={bigCard ? card : cardDisabled} alt="Card"/>
                        </div>
                    </Link>
                    <Link to={'/cream/small'} style={{textDecoration:"none", color: "inherit"}} >
                    <div onClick={cardHandler} >
                        <img src={bigCard ? smallDisabled : small} alt="smallDisabled"/>
                    </div>
                    </Link>
                </div>
            <Routes>
                <Route path="/"  element = {<CardBoard sortedList={sortedList}/>}/>
                <Route path="/small" element = {<SmallCardBoard sortedList={sortedList}/>} />
            </Routes>
            </div>
        </div>
        <footer>
            <h1 className="shopLogo">Shop</h1>
        </footer> 
    </div>
    )
}
export default Cream;