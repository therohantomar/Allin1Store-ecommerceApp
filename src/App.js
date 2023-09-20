import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Container from "./components/Container.js";
import Signin from "./components/Signin.js";
import Cart from "./components/Cart.js";
import ProductDetail from "./components/ProductDetail.js";

// eslint-disable-next-line react-refresh/only-export-components
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <h1>error</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "about", element: <About /> },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
