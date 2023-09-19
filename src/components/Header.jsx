import { BiUser } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full p-2 h-20 bg-white flex justify-around ">
      <span>logo</span>
      <span className="flex">
        <ul className="flex justify-around items-center w-max">
          <li className="mx-4 cursor-pointer ">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 cursor-pointer ">
            <Link to="about">About</Link>
          </li>
          <li className="mx-4 cursor-pointer ">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <ul className="mx-2  flex items-center ">
          <li className="mx-2 cursor-pointer">
          <Link to="signin"><BiUser /></Link>  
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="cart" ><BiCartAlt /></Link>
          </li>
        </ul>
      </span>
    </header>
  );
}

export default Header;
