import ProductCard from './ProductCard'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
const ProductCardDetails = (info) => {
  const dispatch=useDispatch()
  return (
    <span >
      <ProductCard {...info}  />
      <button onClick={()=>dispatch(addItem(info))} className='mx-10 my-4 hover:bg-black hover:text-white px-2 bg-white text-black   border-2 border-black '>Add to cart</button>
    </span>
  )
}

export default ProductCardDetails
