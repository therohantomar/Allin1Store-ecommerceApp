import { useEffect, useState } from "react";
import { PRODUCTS_LINKS } from "../constants";

function useProduct(id){
    const [Product, setProduct]=useState({})

    useEffect(()=>{
        getProductData()
    },[])

    async function getProductData(){
        const data=await fetch(PRODUCTS_LINKS+"/"+id)
        const Product=await data.json()
        setProduct(Product)

    }

    return Product
    
}

export default useProduct;