import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Container from "./components/Container.jsx";
import Signin from "./components/Signin.jsx";
import Cart from "./components/Cart.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Error from "./components/Error.jsx";
// eslint-disable-next-line react-refresh/only-export-components
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <Error/>,
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
  )
}

export default App;
