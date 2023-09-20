import { Link } from "react-router-dom";

function ProductCard(info) {
  const { id, title, price, category, rating, image } = info;
  
  return (
    <div className="flex flex-col bg-white border cursor-pointer hover:scale-100 p-4 w-72 h-max gap-2">
      <Link to={`product/${id}`}>
        <img
          src={image}
          className="w-full   p-4 hover:p-0 transition-all h-52"
          alt={title}
        />
        <h1 className="h-10 font-semibold  truncate">{title}</h1>
        <p className="font-thin">{category?.toUpperCase()}</p>
      </Link>

      <h1>$ {price}</h1>
      <h2 className="px-2 w-max text-white bg-black rounded-md">
        {rating?.rate} ★
      </h2>

      {/* <button className="px-2 text-sm mx-20   w-max bg-black rounded-md text-white ">Add To Cart</button> */}
    </div>
  );
}

export default ProductCard;
