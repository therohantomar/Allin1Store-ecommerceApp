import ProductCard from './ProductCard'
import { useDispatch } from 'react-redux'
import { addItem } from '../../utils/cartSlice'
import { Link } from 'react-router-dom'
const ProductCardDetails = (info) => {
  const dispatch=useDispatch()
  
  return (
    <span >
     <Link to={`/product/${info.id}`} ><ProductCard {...info}  /></Link>
      <button onClick={()=>dispatch(addItem(info))} className='mx-10 my-4 hover:bg-black hover:text-white px-2 bg-white text-black  border-2 border-black '>Add to cart</button>
    </span>
  )
}

export default ProductCardDetails
