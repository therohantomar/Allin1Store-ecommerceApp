import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCartCard from "./subComponents/ProductCartCard";
import CartEmpty from "./CartEmpty";

function Cart() {
  const Products = useSelector((store) => store.cart.items);
  const [total,setTotal]=useState(0)
  console.log(total)
if(Products.length===0) return <CartEmpty/>
  return (
  <div className="flex flex-row min-h-screen font-ubuntu flex-wrap -mt-42 justify-around ">
      <main >
        {Products?.map((product) => {
          return (<ProductCartCard key={product.id} {...product}/>)
        })}
      </main>
      <span className="my-10">
        <h1>Total Items- {Products.length}</h1>
        

        <button className="px-4 border-2  hover:bg-black hover:text-white ">Checkout</button>
      </span>

    </div>
  );
}

export default Cart;
