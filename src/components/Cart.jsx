import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { removeItem } from "../utils/cartSlice";

function Cart() {
  const Products = useSelector((store) => store.cart.items);
  const dispatch=useDispatch()

  return (
    <div className="flex flex-wrap  justify-around ">
      <main>
        {Products?.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-wrap   h-max p-2 border-2 w-max my-2  items-center gap-8"
            >
              <img
                src={product.image}
                alt={product?.title}
                className="w-40 h-32 "
              />
              <span className="flex flex-col items-center gap-4 ">
                <h1 className="w-52">{product.title}</h1>
                <h2>$ {product.price}</h2>
                <span className=" flex items-center  text-xl  gap-2">
                  <button className="hover:bg-black hover:text-white   border border-black px-2  text-xl">
                    -
                  </button>
                  <h3>quantity: {product.quantity}</h3>
                  <button className="hover:bg-black hover:text-white  border border-black px-2  text-xl">
                    +
                  </button>
                </span>
                <button onClick={()=>dispatch(removeItem(product))} className="px-2 border-2 flex border-black  hover:bg-black items-center h-8  w-max hover:text-white transition-all ">
                  Remove <BsTrash />
                </button>
              </span>

            </div>
          );
        })}
      </main>
      <span className="my-10">
        <h1>Total Items- {Products.length}</h1>
        <button className="px-4 border-2 hover:bg-black hover:text-white ">Checkout</button>
      </span>

    </div>
  );
}

export default Cart;
