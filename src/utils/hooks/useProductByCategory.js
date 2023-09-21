import { useEffect, useState } from "react";
import { PRODUCTS_LINKS } from "../constants";

function useProuctByCategory(category) {
  const [Products, SetProducts] = useState([]);


  useEffect(() => {
    getByCategory();
  }, []);

  async function getByCategory() {
    const data = await fetch(PRODUCTS_LINKS + `/category/${category}`);

    const Product = await data.json();
    SetProducts(Product);
    
  }
  return Products
}

export default useProuctByCategory;
