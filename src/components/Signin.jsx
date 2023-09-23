import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from 'jwt-decode'
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser} from "../utils/userSlice";
import { googleLogout } from "@react-oauth/google";
function Signin() {
  
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user.info)
  return (
    <div className="">
    {Object.keys(user).length===0?
    
      <div className="flex flex-col items-center justify-center min-h-screen -mt-40 w-full  bg-white">
        <div className="max-w-md  w-full">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <p className="mb-4">Please sign in using your Google account:</p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentials=jwtDecode(credentialResponse.credential) 
              dispatch(addUser(credentials))

            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
          ;
        </div>
      </div>:
      <div>
      <img src={user.picture} alt={user.name} className="rounded-full w-40 h-40"/>
        <h1>{user.name}</h1>
        <button onClick={()=>{googleLogout()
        dispatch(removeUser())
        
        }}>{user.email} logout</button>

      </div>}
    </div>
  );
}

export default Signin;
