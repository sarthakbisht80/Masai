import React ,{useState} from "react";
const productCard= ({product})=>{
    const[likes, setLikes]= useState(product.likes);
    return (
        <div className="product-card">
            <img src={product.image} alt ={product.name}/>
            <p>  {product.price}</p>
            <button onClick={()=>
                setLikes(likes + 1)}>Like ({likes})
                </button>
        </div>
    );
};
export default ProductCard;