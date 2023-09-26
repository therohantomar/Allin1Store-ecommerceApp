import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import useOnline from "../utils/hooks/useOnline";
import { FiWifiOff } from "react-icons/fi";
import { GoogleOAuthProvider } from "@react-oauth/google";


function Container() {
  const online = useOnline();

  return (
    <>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENTID}>
        {online === false ? (
          <div className="w-full h-8 transition-all delay-200  bg-gray-500  flex items-center justify-center font-bold  text-white">
            <p className="animate-pulse font-ubuntu mx-2 "> OFFLINE</p>
            <FiWifiOff />
          </div>
        ) : null}
        <Provider store={Store}>
          <Header />
          <Outlet />
          <Footer />
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default Container;
