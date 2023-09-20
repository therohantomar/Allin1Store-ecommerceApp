import { useEffect, useState } from "react";
import { PRODUCTS_LINKS } from "../constants";

function useProducts(){
    const [AllProducts,setAllProducts]=useState([])
    const [FilteredProducts,setFilteredProducts]=useState([])
    const [Categories,setCategories]=useState([])


    useEffect(()=>{
        getproducts()
        getCategories()
    },[])

    async function getproducts(){
        const data=await fetch(PRODUCTS_LINKS)
        const products=await data.json()
        setAllProducts(products)
        setFilteredProducts(products)
      }
    async function getCategories(){
        const data=await fetch(PRODUCTS_LINKS+`/categories`)
        const Categories=await data.json()
        let newCateGories=["All",...Categories]
        setCategories(newCateGories)
    }
      return {FilteredProducts, setFilteredProducts, AllProducts, Categories}

}

export default useProducts;
