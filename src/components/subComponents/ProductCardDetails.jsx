import ProductCard from './ProductCard'
import { useDispatch } from 'react-redux'
import { addItem } from '../../utils/cartSlice'
import { Link } from 'react-router-dom'
const ProductCardDetails = (info) => {
  const dispatch=useDispatch()
  
  return (
    <span >
     <Link to={`/product/${info.id}`} ><ProductCard {...info}  /></Link>
      <button onClick={()=>dispatch(addItem(info))} className='mx-10 my-4 hover:bg-gray-800 hover:text-white px-2 bg-white text-gray-800  border-2 border-gray-800 '>Add to cart</button>
    </span>
  )
}

export default ProductCardDetails
