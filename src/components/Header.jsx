import { BiUser } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLocation from "../utils/hooks/useCurrentLocation";

function Header() {
  const user=useSelector(store=>store.user.info)
  const {location}=useLocation()

  return (
    <header className="w-full  h-max sticky top-0 left-0 bg-white right-0 z-20 border-b-2  text-gray-800 flex justify-around ">
      <Link to={"/"}><span className="font-bold text-lg my-4 flex items-center cursor-pointer">@llin1- <h1 className="text-sm text-gray-900 font-thin">{location?.address?.county===undefined?location?.address?.city:location?.address?.county}</h1></span></Link>
      <span className="flex">
        <ul className="flex justify-around items-center w-max">
          <li className="mx-4 hover:text-gray-400 font-semibold text-md cursor-pointer ">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 hover:text-gray-400 text-md font-semibold  cursor-pointer ">
            <Link to="about">About</Link>
          </li>
          <li className="mx-4 hover:text-gray-400 text-md font-semibold cursor-pointer ">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <ul className="mx-2  flex items-center ">
          <li className="mx-2 cursor-pointer">
          <Link to="signin"><>{user.picture?<><img src={user.picture} className="w-6 h-6 border-2 border-black rounded-full" alt={user.name} /></>:<BiUser className="text-xl  hover:text-gray-400" />}</></Link>  
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
