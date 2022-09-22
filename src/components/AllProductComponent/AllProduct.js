import React, {useState} from "react";
import CategoryList from "../CategoryListComponent/CategoryList";
import {Link, Routes, Route} from "react-router-dom"
import card from "../../images/card.png"
import cardDisabled from "../../images/card-diabled.png"
import small from "../../images/small.png"
import smallDisabled from "../../images/small-disabled.png"
import CardBoard from "../CardBoardComponent/CardBoard";
import SmallCardBoard from "../SmallCardBoardComponent/SmallCardBoard";


function AllProduct({cardList}){

    const [bigCard, setBigCard] = useState(true)
    const cardHandler =()=>{
        setBigCard(!bigCard)
    }
    const nav = "all"

   return (<div className="main-block">
   <header>
            <Link to={'/'} style={{textDecoration:"none", color: "inherit"}} >
                <h1 className="shopLogo">Shop</h1>
            </Link>
   </header>
   
   <div className="body-container">
       <CategoryList nav={nav}/>
       <div className="cards-container">
           <div className="view-links">
               <Link to={'/'} style={{textDecoration:"none", color: "inherit"}} >
                   <div onClick={cardHandler}>
                      <img src={bigCard ? card : cardDisabled} alt="Card"/>
                   </div>
               </Link>
               <Link to={'/small'} style={{textDecoration:"none", color: "inherit"}} >
               <div onClick={cardHandler} >
                   <img src={bigCard ? smallDisabled : small} alt="smallDisabled"/>
               </div>
               </Link>
           </div>
       <Routes>
           <Route path="/"  element = {<CardBoard sortedList={cardList}/>}/>
           <Route path="/small" element = {<SmallCardBoard sortedList={cardList}/>} />
       </Routes>
       </div>
   </div>
   <footer>
       <h1 className="shopLogo">Shop</h1>
   </footer> 
</div>
   )
}

export default AllProduct;