import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 w-full h-max border-t-2  flex flex-col">
      <span className="h-max p-4 flex flex-wrap border-b-2  mb-4  gap-20">
        <span className="flex flex-col mx-2   ">
          <h1 className="font-bold text-xl ">SITE LINKS</h1>

          <h2 className=" text-sm mx-2 font-semibold">
            <Link to="/">Home</Link>
          </h2>
          <h2 className=" text-sm mx-2 font-semibold">
            <Link to="/about">About</Link>
          </h2>
          <h2 className=" text-sm mx-2 font-semibold">
            <Link to="/contact">Contact</Link>
          </h2>
          <h2 className=" text-sm mx-2 font-semibold">
            <Link to="/signin">Signin</Link>
          </h2>
        </span>
        <span className="flex flex-col mx-2 my-5  border-l-2 ">
          <h2 className=" text-sm mx-2 font-semibold">
            Promotion
          </h2>
          <h2 className=" text-sm mx-2 font-semibold">Carriers</h2>
          <h2 className=" text-sm mx-2 font-semibold">Partners</h2>
          <h2 className=" text-sm mx-2 font-semibold">Faq</h2>
        </span>
        <span className="flex flex-col mx-2 my-5  border-l-2 ">
          <h2 className=" text-sm mx-2 font-semibold">
            Products Rating
          </h2>
          <h2 className=" text-sm mx-2 font-semibold">
            Exported Quality
          </h2>
          <h2 className=" text-sm mx-2 font-semibold">
            NAma ajak
          </h2>
          <h2 className=" text-sm mx-2 font-semibold">Faq</h2>
        </span>
        <span />
      </span>
     <a target="_blank" href="https://github.com/therohantomar/Allin1Store-ecommerceApp" ><h1 className=" flex items-center justify-center ">  Developed with ♥️ by therohantomar </h1></a>
    </footer>
  );
}

export default Footer;
