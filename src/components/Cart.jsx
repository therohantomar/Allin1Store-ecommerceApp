import { useSelector } from "react-redux"

function Cart() {
  const Products=useSelector(store=>store.cart.items)
  console.log(Products)

  return (
    <div>
      
    </div>
  )
}

export default Cart
