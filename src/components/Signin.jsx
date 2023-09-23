import { GoogleLogin } from "@react-oauth/google";

function Signin() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center min-h-screen -mt-40 w-full  bg-white">
        <div className="max-w-md  w-full">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <p className="mb-4">Please sign in using your Google account:</p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
          ;
        </div>
      </div>
    </div>
  );
}

export default Signin;
