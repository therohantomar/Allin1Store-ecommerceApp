import { useParams } from "react-router-dom";
import useProduct from "../utils/hooks/useProduct";
import { AiFillStar } from "react-icons/ai";

function Product() {
  const { id } = useParams();
  const Product = useProduct(id);

  const { title, price, rating, description, image } = Product;

  if (Product.length === 0) return <h1>loading.......</h1>;

  return (
    <div className="flex gap-10 p-4 flex-wrap  h-full items-center w-full justify-center">
      <img src={image} alt={title} className="w-96  h-max border-2 p-4" />
      <div className="w-1/2  h-max">
        <h1 className="h-20 font-bold text-xl">{title}</h1>
        <p className="h-40 w-2/3 font-thin">{description}</p>
        <span>
          <div className="flex w-max gap-20 my-10 items-center">
            {" "}
            <h1>Price: ${price}</h1>
            <p className="flex  items-center">
              {rating?.rate}
              <AiFillStar />
            </p>
          </div>
          <button className="px-20 text-white bg-black py-1 my-10 transition-all hover:bg-white border-2 hover:border-2 hover:border-black hover:text-black">
            Add to Cart
          </button>
        </span>
      </div>
    </div>
  );
}

export default Product;
