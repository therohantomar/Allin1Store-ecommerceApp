import { useEffect, useState } from "react";
import { PRODUCTS_LINKS } from "../constants";

function useProducts(){
    const [AllProducts,setAllProducts]=useState([])
    const [FilteredProducts,setFilteredProducts]=useState([])


    useEffect(()=>{
        getproducts()
    },[])

    async function getproducts(){
        const data=await fetch(PRODUCTS_LINKS)
        const products=await data.json()
        setAllProducts(products)
        setFilteredProducts(products)
      }

      return {FilteredProducts, setFilteredProducts,AllProducts}

}

export default useProducts;
