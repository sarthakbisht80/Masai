import React,{useState, useEffect}
from "react";
import ProductCard from "./geekbuying.com/ProductCard";
const ProductList=()=>{
    const[products, setProducts]=useState([]);
    const[loading, setLoading]= useState(true);

    useEffect(()=>{
        fetch("./products.json")
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data);
            setLoading(false);
        });
    },[]);


    if(loading) return <p>Loading Products...</p>
 
    return (
        <div  className="product-list">
            {products.map((prod)=>(
                <ProductCard key={prod.id} product={prod}/>
            ))}
        </div>
    );
};
