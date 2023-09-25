import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { googleLogout,GoogleLogin } from "@react-oauth/google";
function Signin() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.info);


  return (
    <div>
      {Object.keys(user).length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen -mt-40 w-full  bg-white">
          <div className="max-w-md  w-full">
            <h1 className="text-3xl font-bold mb-6">Sign In</h1>
            <p className="mb-4">Please sign in using your Google account:</p>
            <GoogleLogin
              cancel_on_tap_outside
              onSuccess={(credentialResponse) => {
                const credentials = jwtDecode(credentialResponse.credential);
                dispatch(addUser(credentials));
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
              theme="filled_black"
              text="continue_with"
              shape="circle"
            />
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col gap-4  justify-center  items-center  ">
          <div className="flex flex-col gap-8 w-60">
            <h1 className="text-xl font-bold my-4">
              Signed in as {user.email}
            </h1>
            <span className="flex  p-2 border-2 rounded-md">
              <img
                src={user?.picture}
                alt={user?.name}
                className="rounded-full  mx-4 w-6 h-6"
              />
              <h1 className="text-lg text-gray-500">{user?.name}</h1>
            </span>
            <button
              className="border-2 px-10 w-full  bg-red-700 rounded hover:bg-red-500  text-white font-semibold text-xl "
              onClick={() => {
                googleLogout();
                dispatch(removeUser());
              }}
            >
              {" "}
              logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signin;
