import {BiCartDownload} from "react-icons/bi"
import { Link } from "react-router-dom"
import {BsCartFill} from "react-icons/bs"

const CartEmpty = () => {
  return (
    <div className="w-full mb-40">
    <span className="flex flex-col justify-center items-center mt-32">
      <BiCartDownload className=" text-8xl text-gray-500 mt-20 "  />
      <h1 className="text-2xl text-gray-500 font-bold">Try filling it</h1>
      <p className="px-4 text-xl flex gap-2 items-center hover:bg-gray-500 mt-4 cursor-pointer text-gray-500  bg-white border-2 hover:text-white font-bold w-max "><Link className="flex items-center" to={"/"}>fill it !<BsCartFill/> </Link></p>
      </span>
    </div>
  )
}

export default CartEmpty
