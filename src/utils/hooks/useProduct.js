import { useEffect, useState } from "react";
import { PRODUCTS_LINKS } from "../constants";

function useProduct(id){
    const [Product, setProduct]=useState({})

    useEffect(()=>{
        getProductData()
    },[id])

    async function getProductData(){
        try{
            const data=await fetch(PRODUCTS_LINKS+"/"+id)
            const Product=await data.json()
            setProduct(Product)
        }
        catch{
            console.error("Something Went Wrong !")
        }

    }

    return Product
    
}

export default useProduct;