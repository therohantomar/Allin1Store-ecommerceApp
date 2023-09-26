import { BiUser } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import useLocation from "../utils/hooks/useCurrentLocation";
import logo from "../assets/Images/Frame.svg";

function Header() {
  const user = useSelector((store) => store.user.info);
  const items= useSelector(store=>store.cart.items)
  const [searchParams, setsearchParams] = useSearchParams();
  const { location } = useLocation();
  const params = searchParams.get("v");
  return (
    <header className="w-full font-ubuntu  h-max sticky top-0 left-0 bg-white transition-all py-4 right-0 z-20 border-b-2  text-gray-800 flex justify-around ">
      <Link to={"/"}>
        <span  className="font-bold  text-lg  flex flex-col  items-center cursor-pointer">
          <img  src={logo} alt="logo" className="w-20 h-max" />
          <h1 className="text-sm text-gray-900 font-thin">
            {location?.address?.county === undefined
              ? location?.address?.city
              : location?.address?.county}
          </h1>
        </span>
      </Link>
      <span className="flex">
        <ul className="flex justify-around items-center w-max">
          <li
            className={`mx-2 hover:text-gray-400 ${
              params === null ? "border-b-4 border-black" : ""
            } font-semibold text-md cursor-pointer `}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`mx-2 hover:text-gray-400 ${
              params === "about" ? "border-b-4 border-black" : ""
            } font-semibold text-md cursor-pointer `}
          >
            <Link to="about?v=about">About</Link>
          </li>
          <li
            className={`mx-2 hover:text-gray-400 ${
              params === "contact" ? "border-b-4 border-black" : ""
            } font-semibold text-md cursor-pointer `}
          >
            <Link to="contact?v=contact">Contact</Link>
          </li>
        </ul>
        <ul className="mx-2  flex items-center ">
          <li
            className={`mx-2 hover:text-gray-400 ${
              params === "signin" ? "text-gray-400" : ""
            } font-semibold text-md cursor-pointer `}
          >
            <Link to="signin?v=signin">
              <>
                {user.picture ? (
                  <>
                    <img
                      src={user.picture}
                      className="w-6 h-6 border-2 border-black rounded-full"
                      alt={user.name}
                    />
                  </>
                ) : (
                  <BiUser className="text-xl  hover:text-gray-400" />
                )}
              </>
            </Link>
          </li>
          <li
            className={`mx-2 hover:text-gray-400 ${
              params === "cart" ? "text-gray-400" : ""
            } font-semibold text-md cursor-pointer relative `}
          >
            {items.length !== 0 ? (
              <span class="relative top-2 left-4 flex h-2 w-2">
                <span class="animate-ping absolute  inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
            ) : null}
            <Link to="cart?v=cart">
              <BiCartAlt className="text-2xl hover:text-gray-400" />
            </Link>
          </li>
        </ul>
      </span>
    </header>
  );
}

export default Header;
