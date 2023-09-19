export function filterSearch(
  searchKey,
  FilteredProducts,
  setFilteredProducts,
  AllProducts
) {
  if (searchKey.length === 0) {
    setFilteredProducts(AllProducts);
  } else {
    let filteredProducts = FilteredProducts.filter((Product) => {
      return Product.title.toLowerCase().includes(searchKey);
    });
    setFilteredProducts(filteredProducts);
  }
}
