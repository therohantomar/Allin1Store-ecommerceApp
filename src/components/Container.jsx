import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Provider } from "react-redux";
import Store from "../utils/store";


function Container() {
  return (
    <>
    <Provider store={Store} >
      <Header />
      <Outlet />
      <Footer />
    </Provider>
    </>
  );
}

export default Container;
