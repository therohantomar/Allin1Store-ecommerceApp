import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PRODUCTS_LINKS } from "../constants";
import { addProducts } from "../poductsSlice";


function useProducts(){
  const dispatch=useDispatch()

    const [AllProducts,setAllProducts]=useState([])
    const [FilteredProducts,setFilteredProducts]=useState([])
    const [Categories,setCategories]=useState([])


    useEffect(()=>{
        getproducts()
        getCategories()
    },[])

    async function getproducts(){
      try{
        const data=await fetch(PRODUCTS_LINKS)
        const products=await data.json()
        setAllProducts(products)
        setFilteredProducts(products)
        dispatch(addProducts(products))
      }
      catch{
        console.error("Something Went Wrong !")
      }

      }
    async function getCategories(){
      try{
        const data=await fetch(PRODUCTS_LINKS+`/categories`)
        const Categories=await data.json()
        let newCateGories=["All",...Categories]
        setCategories(newCateGories)
      }
      catch{
        console.error("Somethin Went Wrong !")
      }
        
    }

      return {FilteredProducts, setFilteredProducts, AllProducts, Categories}

}

export default useProducts;
