import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { googleLogout } from "@react-oauth/google";
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
              onSuccess={(credentialResponse) => {
                const credentials = jwtDecode(credentialResponse.credential);
                dispatch(addUser(credentials));
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
            ;
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col gap-4 items-center justify-center ">
          <h1>Signed in as {user.email}</h1>
          <span className="flex ">
            <img
              src={user.picture}
              alt={user.name}
              className="rounded-full mx-4 w-6 h-6"
            />
            <h1>{user.name}</h1>
          </span>
          <button
            className="border-2 px-6 text-black "
            onClick={() => {
              googleLogout();
              dispatch(removeUser());
            }}
          >
            {" "}
            logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Signin;
