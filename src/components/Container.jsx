import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import useOnline from "../utils/hooks/useOnline";
import {FiWifiOff} from "react-icons/fi"


function Container() {
  const online=useOnline()
  
  return (
    <>
   {online===false?<div className="w-full h-8  bg-gray-500  flex items-center justify-center font-bold  text-white"><p className="animate-pulse mx-2 "> OFFLINE</p><FiWifiOff/></div>:null} 
    <Provider store={Store} >
      <Header />
      <Outlet />
      <Footer />
    </Provider>
    </>
  );
}

export default Container;
