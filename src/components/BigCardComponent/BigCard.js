import React, {useState} from "react";

function BigCard({product}) {

    const [isLiked, setIsLiked] = useState(false)
    const likeOnClickHandler = ()=>{
        setIsLiked(!isLiked)
    }


    return (
                    <div className="product-card">
                        <img alt={product.name}  onError={({ currentTarget }) => {
                            currentTarget.onerror = null; 
                            currentTarget.src="https://www.maybelline.co.uk/~/media/mny/uk/lip-make-up/lip-gloss/baby%20lips/maybelline_baby_lips_moisturising_lip_gloss_05_a_wink_of_pink_t2.jpg";
                            }} src={product.image_link}>
                        </img>
                        <div className="product-info">
                            <div id="title-heart">
                                <h4>{product.name} <br/><br/> {product.price && product.price > 0 ? `${product.price} usd` : "5.5 usd" }</h4>
                                {isLiked 
                                ? <span onClick={likeOnClickHandler} id="heart">&#9829;</span> 
                                :  <span onClick={likeOnClickHandler} id="heart">&#9825;</span> }
                            </div>
                        </div>
                    </div>
                )
            }


export default BigCard;