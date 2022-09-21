import React from "react";
import CategoryList from "../CategoryListComponent/CategoryList";
import CardBoard from "../CardBoardComponent/CardBoard";
import {Route, Routes} from "react-router-dom"
import SmallCardBoard from "../SmallCardBoardComponent/SmallCardBoard";
import {Link} from "react-router-dom"


function Concealer({cardList}) {
    
    const sortedList = cardList.filter(c => c.category === "concealer")

    return(
        <div>
            <header>
                <h1>Shop</h1>
            </header>
            <div className="body-container">
                <CategoryList/>
                <div className="cards-container">
                    <div className="view-links">
                        <Link to={'/concealer'} style={{textDecoration:"none", color: "inherit"}} >
                               <div className="two-img">
                               <svg>
                                    <rect width="9" height="20" style={{fill:"none", stroke: "black"}} />
                                </svg>
                                <svg>
                                    <rect width="9" height="20" style={{fill:"none", stroke: "black"}} />
                                </svg>
                            </div>
                        </Link>
                        <Link to={'/concealer/small'} style={{textDecoration:"none", color: "inherit"}} >
                        <div className="four-img">
                               <svg>
                                    <rect width="9" height="9" style={{fill:"none", stroke: "#8B8B8B", strokeWidth:"1px"}}/>
                                </svg>
                                <svg>
                                    <rect width="9" height="9" style={{fill:"none", stroke: "#8B8B8B", strokeWidth:"1px"}} />
                                </svg>
                                <svg>
                                    <rect width="9" height="9" style={{fill:"none", stroke: "#8B8B8B", strokeWidth:"1px"}} />
                                </svg>
                                <svg>
                                    <rect width="9" height="9" style={{fill:"none", stroke: "#8B8B8B", strokeWidth:"1px"}} />
                                </svg>
                            </div>
                        </Link>
                    </div>
                <Routes>
                    <Route path="/"  element = {<CardBoard sortedList={sortedList}/>}/>
                    <Route path="/small" element = {<SmallCardBoard sortedList={sortedList}/>} />
                </Routes>
                </div>
            </div>
            
           
                
        </div>
    )
}
export default Concealer;