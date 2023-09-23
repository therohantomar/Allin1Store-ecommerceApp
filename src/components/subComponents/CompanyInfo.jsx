import {IoIosArrowDropdown} from "react-icons/io"

const CompanyInfo = (control) => {
    const {About,setAbout}=control
    
  return (
    <div className=" border-2 p-2 ">
      <div className="container mx-auto p-4">
      <div className="flex items-center  border-b-2 gap-20  ">
      <h1 className="text-4xl font-bold w-full mb-4">COMPANY</h1>
      
    <button onClick={()=>{About==="Company"?setAbout("Products"):setAbout("Company")}} className={`text-4xl -mt-6 transition-all px-2 ${About!="Company"?"rotate-0":"rotate-180 text-red-600"}   cursor-pointer  `}><IoIosArrowDropdown/></button>
      </div>{About==="Company"?(<><div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">About Us</h2>
        <p className="text-lg">Allin1Store is a leading company specializing in providing a wide range of products to meet all your needs. With our commitment to quality and customer satisfaction, we strive to be your one-stop shop for all your shopping requirements.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Product Categories</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg">Electronics: Browse our extensive collection of the latest electronic gadgets, including smartphones, laptops, tablets, and more.</li>
          <li className="text-lg">Home Appliances: Discover a wide selection of home appliances, such as refrigerators, washing machines, air conditioners, and kitchen appliances.</li>
          <li className="text-lg">Fashion: Stay trendy with our fashionable clothing, footwear, and accessories for men, women, and kids.</li>
          <li className="text-lg">Health & Beauty: Enhance your well-being with our range of health and beauty products, including skincare, cosmetics, and personal care items.</li>
          <li className="text-lg">Home & Furniture: Find the perfect furniture and home decor items to create a comfortable and stylish living space.</li>
          <li className="text-lg">Sports & Fitness: Explore our sports equipment, fitness gear, and accessories to stay active and fit.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg">Wide Selection: We offer a vast range of products across multiple categories to cater to diverse customer needs.</li>
          <li className="text-lg">Quality Assurance: Our products are sourced from reputable brands and undergo stringent quality checks to ensure durability and performance.</li>
          <li className="text-lg">Competitive Prices: Enjoy competitive pricing on all our products, making shopping at Allin1Store affordable and value for money.</li>
          <li className="text-lg">Convenient Shopping: With our user-friendly website and secure payment options, shopping with us is quick, easy, and hassle-free.</li>
          <li className="text-lg">Fast Shipping: We strive to deliver your orders swiftly and efficiently, ensuring a seamless shopping experience.</li>
          <li className="text-lg">Excellent Customer Service: Our dedicated customer support team is always ready to assist you and address any queries or concerns.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-lg mb-2">If you have any questions or need further assistance, please don&#39;t hesitate to reach out to our customer support team:</p>
        <p className="text-lg"><strong>Email:</strong> support@allin1store.com</p>
        <p className="text-lg"><strong>Phone:</strong> 123-456-7890</p>
      </div></>):""}
    </div>


    </div>
  )
}

export default CompanyInfo
