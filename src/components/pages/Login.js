import React from "react";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/createPost");
    });
  };

  return (
    <div className=" text-center py-7 text-xl">
      <p className=" py-4 bg-slate-500 tex">Sign In With Google to Continue</p>
      <button className=" bg-red-400 rounded-full m-5 py-4 px-8" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;