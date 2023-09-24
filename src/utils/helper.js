export function filterSearch(
  searchKey,
  FilteredProducts,
  setFilteredProducts,
  AllProducts,
  Category
) {
  if (Category === "All") {
    setFilteredProducts(AllProducts);
  } else {
    if (!Category) {
      if (searchKey.length === 0) {
        setFilteredProducts(AllProducts);
      } else {
        if (Category === "All") {
          let tempAll = AllProducts;
          let smallCaseSearchKey = searchKey.toLowerCase();
          let filteredProducts = tempAll.filter((Product) => {
            return Product.title.toLowerCase().includes(smallCaseSearchKey);
          });
          setFilteredProducts(filteredProducts);
        } else {
          let smallCaseSearchKey = searchKey.toLowerCase();
          let filteredProducts = FilteredProducts.filter((Product) => {
            return Product.title.toLowerCase().includes(smallCaseSearchKey);
          });
          setFilteredProducts(filteredProducts);
        }
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


export const handleSubmit = (e,status,setStatus,emailjs,formRef) => {
  e.preventDefault();
  setStatus("Wait")
  // Perform form submission logic here
  emailjs.sendForm(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEID, formRef.current, import.meta.env.VITE_PUBLICKEY)
  .then((result) => {
        formRef.current.reset()
        setStatus(result.text);
    }, (error) => {
        console.log(error.text);
    });
};