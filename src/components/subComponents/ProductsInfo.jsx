import { IoIosArrowDropdown } from "react-icons/io";
const ProductsInfo = (control) => {
  const { About, setAbout } = control;

  return (
    <div className="p-2 ">
      <div className="container mx-auto p-4">
        <div className="flex items-center border-b-2  gap-10">
          <h1 className="text-4xl font-bold w-full mb-4">About Products</h1>
          <button
            onClick={() => {
              About === "Products" ? setAbout("Company") : setAbout("Products");
            }}
            className={`text-4xl -mt-6 transition-all px-2 ${
              About != "Products" ? "rotate-0" : "rotate-180 text-red-600"
            }   cursor-pointer  `}
          >
            <IoIosArrowDropdown />
          </button>
        </div>

        {About === "Products" ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">About Us</h2>
              <p className="text-lg">
                Allin1Store is your one-stop shop for a wide range of products.
                We are committed to providing quality products and excellent
                customer service to meet all your shopping needs.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Product Categories</h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="text-lg border border-gray-300 rounded p-4">
                  <h3 className="text-xl font-bold mb-2">Electronics</h3>
                  <p className="text-base">
                    Discover the latest electronic gadgets, including
                    smartphones, laptops, tablets, and more.
                  </p>
                </li>
                <li className="text-lg border border-gray-300 rounded p-4">
                  <h3 className="text-xl font-bold mb-2">Home Appliances</h3>
                  <p className="text-base">
                    Find a wide selection of home appliances, including
                    refrigerators, washing machines, air conditioners, and
                    kitchen appliances.
                  </p>
                </li>
                <li className="text-lg border border-gray-300 rounded p-4">
                  <h3 className="text-xl font-bold mb-2">Fashion</h3>
                  <p className="text-base">
                    Stay trendy with our fashionable clothing, footwear, and
                    accessories for men, women, and kids.
                  </p>
                </li>
                <li className="text-lg border border-gray-300 rounded p-4">
                  <h3 className="text-xl font-bold mb-2">Health & Beauty</h3>
                  <p className="text-base">
                    Enhance your well-being with our range of health and beauty
                    products, including skincare, cosmetics, and personal care
                    items.
                  </p>
                </li>
                <li className="text-lg border border-gray-300 rounded p-4">
                  <h3 className="text-xl font-bold mb-2">Home & Furniture</h3>
                  <p className="text-base">
                    Create a comfortable and stylish living space with our
                    furniture and home decor items.
                  </p>
                </li>
                <li className="text-lg border border-gray-300 rounded p-4">
                  <h3 className="text-xl font-bold mb-2">Sports & Fitness</h3>
                  <p className="text-base">
                    Stay active and fit with our sports equipment, fitness gear,
                    and accessories.
                  </p>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
              <ul className="list-disc list-inside">
                <li className="text-lg">
                  Wide Selection: We offer a vast range of products across
                  multiple categories to cater to diverse customer needs.
                </li>
                <li className="text-lg">
                  Quality Assurance: Our products are sourced from reputable
                  brands and undergo stringent quality checks.
                </li>
                <li className="text-lg">
                  Competitive Prices: Enjoy competitive pricing on all our
                  products.
                </li>
                <li className="text-lg">
                  Convenient Shopping: Quick, easy, and hassle-free shopping
                  experience.
                </li>
                <li className="text-lg">
                  Fast Shipping: We strive to deliver your orders swiftly and
                  efficiently.
                </li>
                <li className="text-lg">
                  Excellent Customer Service: Our dedicated customer support
                  team is ready to assist you.
                </li>
              </ul>
            </div>

            <div></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsInfo;
