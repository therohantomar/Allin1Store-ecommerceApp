function ProductCard(info) {
  const { title, price, category, rating, image } = info;

  return (
    <div className="flex font-nunito flex-col bg-white text-black cursor-pointer hover:scale-100 p-4 w-72 h-max gap-2">
      <img
        src={image}
        className="w-full    p-4 hover:p-0 transition-all h-52"
        alt={title}
      />
      <h1 className="h-10 font-bold truncate font-nunito ">{title}</h1>
      <p className="font-thin">{category?.toUpperCase()}</p>

      <h1>$ {price}</h1>
      <h2 className="px-2 w-max text-white bg-gray-800 rounded-md">
        {rating?.rate} ★
      </h2>
    </div>
  );
}

export default ProductCard;
