import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center  justify-center w-full h-full ">
      <span className="flex flex-col items-center mt-32">
        <h1 className="text-3xl font-bold ">{error?.status}</h1>
        <h2 className="font-thin text-xl text-gray-500">{error?.statusText}</h2>

        <h1 className="font-thin text-xl text-gray-500">{error?.data}</h1>
        <p className="text-blue-300 uppercase cursor-pointer font-bold"><Link to={"/"}>continue Shopping</Link></p>
      </span>
    </div>
  );
};

export default Error;
