export function filterSearch(
  searchKey,
  FilteredProducts,
  setFilteredProducts,
  AllProducts,
  Category, 
 
) {
  if(Category==="All") {

    setFilteredProducts(AllProducts)
    
  }
  else{
  if (!Category) {
    if (searchKey.length === 0) {
      
      setFilteredProducts(AllProducts);
    
    } else {
      let filteredProducts = FilteredProducts.filter((Product) => {
        return Product.title.toLowerCase().includes(searchKey);
      });
      setFilteredProducts(filteredProducts);
    }
  } else {
    if (FilteredProducts.length === 0) {
      setFilteredProducts(AllProducts);
      
    } else {
      if (Category === "All") {
        let tempAll = AllProducts;
        setFilteredProducts(tempAll);
      }
      let tempAll = AllProducts;
      let filteredProducts = tempAll.filter((Product) => {
        return Product.category.toLowerCase() === Category.toLowerCase();
      });
      setFilteredProducts(filteredProducts);
    }
  }
}
}
