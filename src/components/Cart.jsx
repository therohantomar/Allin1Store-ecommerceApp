import { useSelector } from "react-redux"


function Cart() {
  const Products=useSelector(store=>store.cart.items)
  return (
    <div>
    <h1>You have {Products.length==0?0:Products.length} product in your cart</h1>
      {
        Products?.map(product=>{
         return (<div key={product.id} className="flex gap-8">
          <img src={product.image} alt={product?.title} className="w-40 h-32 "/>
           <span>
            <h1>{product.title}</h1>
            <h2>$ {product.price}</h2>
            <h3>quantity {product.quantity}</h3>
            <button className="px-2 border-2 border-black mt-2 hover:bg-black  hover:text-white transition-all ">Remove</button>
            </span>
          </div>)
        })
      }
    </div>
  )
}

export default Cart
