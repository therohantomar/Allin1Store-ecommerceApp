import { BsSearch } from "react-icons/bs";
import FilterList from "./FilterList";
import ProductCard from "./ProductCard";
import useProducts from "../utils/hooks/useProducts";
import ProductCardShimmer from "./ProductCardShimmer";


function Home() {
  const Products=useProducts()
 
  //early return
  if(Products.length===0){
    return (<main className="flex flex-wrap w-full gap-8 justify-center">
    {new Array(20).fill(0).map((_,index)=>{
    return <ProductCardShimmer key={index}/>
    })}
     </main>
    )
  }
  
  return (
    <div className="flex flex-col justify-around bg-white items-center  w-full">
      <span className="flex mt-10">
        <input
          type="text"
          placeholder="Search Product...."
          className="w-96 px-2 outline-none h-8 border-2 rounded-tl-sm rounded-bl-sm"
        />
        <button className="p-2 h-8 bg-black">
          <BsSearch className="text-white " />
        </button>
      </span>
      <FilterList />
      <main className="flex flex-wrap gap-10 my-10  justify-center w-full">
      {
        Products.map(product=>{
          return(<ProductCard key={product.id} {...product}/>)
        })
      }


     </main>
    </div>
  );
}

export default Home;
