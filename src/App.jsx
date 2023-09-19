import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Container from "./components/Container.jsx";
import Signin from "./components/Signin.jsx";
import Cart from "./components/Cart.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

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
    <div className="">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;