import { useParams } from "react-router-dom";
import useProduct from "../utils/hooks/useProduct";
import { AiFillStar } from "react-icons/ai";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ProductDetailShimmer from "./ProductDetailShimmer";
import ProductCardShimmer from "./ProductCardShimmer";

import { useSelector } from "react-redux";
import { useMemo } from "react";
import ProductCardDetails from "./ProductCardDetails";


function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const Product = useProduct(id);
  // destructing object

  const { title, price, rating, description, image, category } = Product;
  const AllProduct=useSelector(store=>store.products.Products)



  const ProductsByCategory=useMemo(()=>{
      let fileteredProducts=AllProduct.filter((product)=>{
        return product.category===category
      })
      return fileteredProducts
  },[category])


  if (Object.keys(Product).length === 0) {
    return <ProductDetailShimmer />;
  }

  return (
    <div className="w-full h-max p-2 flex flex-col items-center justify-center">
    <main className="flex gap-10 p-4 flex-wrap  h-full items-center w-full justify-center"> 
      <img src={image} alt={title} className="w-96  h-max border-2 p-4" />
      <div className="xl:w-1/2 2xl:w-1/2 lg:w-full md:w-full sm:w-full  h-max">
        <h1 className="h-20 font-bold my-4  text-xl">{title}</h1>
        <p className="h-40 xl:w-2/3 2xl:w-2/3 lg:w-full md:w-full sm:w-full  font-thin">
          {description}
        </p>
        <p className="my-8">{category?.toUpperCase()}</p>
        <span>
          <div className="flex w-max gap-20 my-10 items-center">
            {" "}
            <h1>Price: ${price}</h1>
            <p className="flex  items-center">
              {rating?.rate}
              <AiFillStar />
            </p>
          </div>
          <button
            onClick={() => dispatch(addItem({ id, ...Product }))}
            className="px-20 text-white bg-black py-1 my-10 transition-all hover:bg-white border-2 hover:border-2 hover:border-black hover:text-black"
          >
            Add to Cart
          </button>
        </span>
      </div>
      </main>
      <h1 className="font-semibold text-xl my-10">You May Also Look For</h1>
      <span className="w-11/12 flex justify-center flex-wrap gap-4">
      
        {
          ProductsByCategory?.length===0?(new Array(6).fill(0).map((_,index)=>{
            return (<div key={index}><ProductCardShimmer /></div>)
          })):(ProductsByCategory?.map((Product)=>{
            return <ProductCardDetails key={Product.id}  {...Product}/>
          }))
        }
      </span>
    </div>
  );
}

export default Product;
