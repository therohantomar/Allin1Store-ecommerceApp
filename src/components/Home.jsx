import { BsSearch } from "react-icons/bs";
import ProductCard from "./ProductCard";
import useProducts from "../utils/hooks/useProducts";
import ProductCardShimmer from "./ProductCardShimmer";
import {  useState } from "react";
import { filterSearch } from "../utils/helper";
import { Link } from "react-router-dom";

function Home() {
  const { FilteredProducts, setFilteredProducts, AllProducts, Categories } =useProducts();
  const [searchKey, setSearchKey] = useState("");
  const [Category, setCategory] = useState("All");
  
  

  //early return
  if (AllProducts.length === 0) {
    return (
      <main className="flex flex-wrap w-full gap-8 justify-center">
        {new Array(20).fill(0).map((_, index) => {
          return <ProductCardShimmer key={index} />;
        })}
      </main>
    );
  }

     

  return (
    <div className="flex h-full flex-col justify-around bg-white  items-center  w-full">
      <span className="flex w-3/4 justify-center mt-10">
        <input
          type="text"
          value={searchKey}
          placeholder="Search Product"
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              return filterSearch(
                searchKey,
                FilteredProducts,
                setFilteredProducts,
                AllProducts
              );
            }
          }}
          className=" px-2 outline-none focus:border-black transition-all h-10 border-2 sm:w-full md:w-full lg:w-3/5 xl:w-3/5 2xl:w-3/5 rounded-tl-sm rounded-bl-sm"
        />
        <button
          onClick={() =>filterSearch(searchKey,FilteredProducts,setFilteredProducts,AllProducts)}
          className="p-2 h-10 bg-black"
        >
          <BsSearch className="text-white " />
        </button>
      </span>
      <span className="flex border-2  transition-all focus-within:border-black items-center w-5/6 flex-wrap justify-center my-2 gap-2">
        {" "}
        {Categories.length === 0 ? (
          <h1>loading....</h1>
        ) : (
          Categories?.map((category, index) => (
            <div key={index} className="flex items-center my-4 ">
              {Category === category ? (
                <input
                  type="radio"
                  value={category}
                  className="checkbox mx-2 appearance-none  focus:opacity-100 ring-2  ring-gray-600 focus:ring-4 focus:bg-black focus:ring-offset-2 focus:ring-black focus:outline-black w-2 h-2   outline-black  border-gray-800  cursor-pointer checked:ring-black checked:ring-4 checked:outline-black checked:ring-offset-2 checked:bg-black  "
                  name="category"
                  onFocus={() => setCategory(category)}
                  onClick={() => {
                    filterSearch(
                      searchKey,
                      FilteredProducts,
                      setFilteredProducts,
                      AllProducts,
                      Category
                    );
                  }}
                  checked
                />
              ) : (
                <input
                  type="radio"
                  value={category}
                  className="checkbox mx-2 appearance-none  focus:opacity-100 ring-2  ring-gray-600 focus:ring-4 focus:bg-black focus:ring-offset-2 focus:ring-black focus:outline-black w-2 h-2   outline-black  border-gray-800  cursor-pointer checked:ring-black checked:ring-4 checked:outline-black checked:ring-offset-2 checked:bg-black  "
                  name="category"
                  onFocus={() => setCategory(category)}
                  onClick={() => {
                    filterSearch(
                      searchKey,
                      FilteredProducts,
                      setFilteredProducts,
                      AllProducts,
                      Category
                    );
                  }}
                />
              )}
              <label className="text-sm font-semibold">
                {category?.toUpperCase()}
              </label>
            </div>
          ))
        )}
      </span>

      <main className="flex flex-wrap gap-10 my-10  justify-center w-full">
        {FilteredProducts.length!==0?FilteredProducts.map((product) => {
          return   <Link to={`product/${product.id}` } key={product.id}><ProductCard   {...product} /></Link>;
        }):<h1 className="font-bold text-xl uppercase">No Product Found .....</h1>}
      </main>
    </div>
  );
}

export default Home;
