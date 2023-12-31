import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCartCard from "./subComponents/ProductCartCard";
import CartEmpty from "./CartEmpty";
import React from 'react';
import useStripe from "../utils/hooks/useStripe";
import useScrollToTop from "../utils/hooks/useScrollToTop";



function Cart() {
  const Products = useSelector((store) => store.cart.items);
   useScrollToTop()
  
  const handlePayment=useStripe()


if(Products.length===0) return <CartEmpty/>
  return (
  <div className="flex flex-row min-h-screen font-ubuntu flex-wrap  justify-around ">
      <main >
        {Products?.map((product) => {
          return (<ProductCartCard key={product.id} {...product}/>)
        })}
      </main>
      <span className="my-10">
        <h1>Total Items- {Products.length}</h1>
        <h1>Total Price:{Products.reduce((acc,currentProduct)=>acc+currentProduct.price*currentProduct.quantity,0)}</h1>
        <button onClick={handlePayment} className="px-4 border-2  hover:bg-black hover:text-white ">Checkout</button>
      </span>

    </div>
  );
}

export default Cart;
