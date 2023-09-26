import { Link, useRouteError } from "react-router-dom";
import error from "../assets/Images/error.svg";

const Error = () => {
  const err = useRouteError()

  
  return (
    <div className="flex font-ubuntu flex-col items-center  justify-center w-full h-full ">
      <span className="flex flex-col items-center mt-32">
        <img src={error} alt="error" />
        <h1>{err?.statusText}</h1>
        <h1>{err?.data}</h1>

        <p className="text-gray-800 bg-white border-2 px-10 rounded-md uppercase cursor-pointer font-bold">
          <Link to={"/"}>continue Shopping</Link>
        </p>
      </span>
    </div>
  );
};

export default Error;
