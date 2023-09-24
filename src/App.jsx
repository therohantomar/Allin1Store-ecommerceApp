import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Container from "./components/Container.jsx";
import Signin from "./components/Signin.jsx";
import Cart from "./components/Cart.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Error from "./components/Error.jsx";
import { lazy, Suspense } from "react";


const About=lazy(()=>import("./components/Contact.jsx"))
const Contact=lazy(()=>import("./components/Contact.jsx"))
// eslint-disable-next-line react-refresh/only-export-components
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <Error/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "about", element:<Suspense fallback={()=><h1>loading....</h1>} ><About /></Suspense> },
      {
        path: "contact",
        element:<Suspense fallback={()=><h1>loading....</h1>} ><Contact /></Suspense>  ,
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
