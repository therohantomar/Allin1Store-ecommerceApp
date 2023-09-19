import { useEffect, useState } from "react";
import { PRODUCTS_LINKS } from "../constants";

function useProducts(){
    const [AllProducts,setAllProducts]=useState([])

    useEffect(()=>{
        getproducts()
    },[])

    async function getproducts(){
        const data=await fetch(PRODUCTS_LINKS)
        const products=await data.json()
        setAllProducts(products)
      }

      return AllProducts

}

export default useProducts;
