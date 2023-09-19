

const ProductDetailShimmer = () => {
  return (
    <div className="flex gap-10 p-4 flex-wrap  h-full items-center w-full justify-center">
      <div  className="w-96  h-96 border-2 bg-gray-300 animate-pulse " ></div>
      <div className="xl:w-1/2 2xl:w-1/2 mt-4 lg:w-full md:w-full sm:w-full  h-max">
        <h1 className="h-20 w-30 bg-gray-300 mt-4 font-bold text-xl"></h1>
        <p className="h-40 xl:w-2/3 bg-gray-300 2xl:w-2/3 my-10 lg:w-full md:w-full sm:w-full  font-thin"></p>
        
        <span>
          <div className="flex w-max gap-20 my-10 items-center">
            {" "}
            <h1 className="w-20 h-10 bg-gray-300  my-2 animate-pulse"></h1>
            <p className="w-20 h-10 bg-gray-300 my-2 animate-pulse">
              
            </p>
          </div>
         
        </span>
      </div>
    </div>
  )
}

export default ProductDetailShimmer
