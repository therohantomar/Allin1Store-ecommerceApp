import { useSelector } from "react-redux"

function Cart() {
  const Product=useSelector(store=>store.cart.items)


  return (
    <div>
      
    </div>
  )
}

export default Cart
