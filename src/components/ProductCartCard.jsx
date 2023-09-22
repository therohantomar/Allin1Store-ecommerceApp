import {
  quantityIncrement,
  removeItem,
  quantityDecrement,
} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";

const ProductCartCard = (info) => {
  const dispatch = useDispatch();
  const { id, title, image, quantity, price } = info;

  return (
    <div
      key={id}
      className="flex flex-wrap   h-max p-2 hover:shadow-md w-max my-2  items-center gap-8"
    >
      <img src={image} alt={title} className="w-40 h-32 " />
      <span className="flex flex-col items-center gap-4 ">
        <h1 className="w-72 font-semibold text-lg ">{title}</h1>
        <h2 className="text-gray-500 self-start">$ {price * quantity}</h2>
        <span className=" flex items-center self-start  text-xl  gap-2">
          <button
            onClick={() => dispatch(quantityDecrement(info))}
            className="hover:bg-black hover:text-white   border border-black px-2  text-xl"
          >
            -
          </button>
          <h3>quantity: {quantity}</h3>
          <button
            onClick={() => dispatch(quantityIncrement(info))}
            className="hover:bg-black hover:text-white  border border-black px-2  text-xl"
          >
            +
          </button>
        </span>
        <button
          onClick={() => dispatch(removeItem(info))}
          className="px-2 border-2 self-start flex border-black  hover:bg-black items-center h-8  w-max hover:text-white transition-all "
        >
          Remove <BsTrash />
        </button>
      </span>
    </div>
  );
};

export default ProductCartCard;
