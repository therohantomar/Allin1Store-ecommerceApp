import { BiUser } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full p-2 h-20 sticky top-0 left-0 right-0 z-20 bg-white flex justify-around ">
      <span className="font-bold text-lg my-4">@llin1</span>
      <span className="flex">
        <ul className="flex justify-around items-center w-max">
          <li className="mx-4 hover:text-gray-400 text-lg cursor-pointer ">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 hover:text-gray-400 text-lg  cursor-pointer ">
            <Link to="about">About</Link>
          </li>
          <li className="mx-4 hover:text-gray-400 text-lg cursor-pointer ">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <ul className="mx-2  flex items-center ">
          <li className="mx-2 cursor-pointer">
          <Link to="signin"><BiUser className="text-xl hover:text-gray-400" /></Link>  
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="cart" ><BiCartAlt className="text-2xl hover:text-gray-400"/></Link>
          </li>
        </ul>
      </span>
    </header>
  );
}

export default Header;
