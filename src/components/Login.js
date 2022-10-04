import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/userLogin/userLoginSlice";
import { userData } from "../userData";
const Login = () => {
  const userLogged = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPassowrdInput] = useState("");
  const [error, setError] = useState(false);

  const userValid = userData.find(
    (user) => user.username === usernameInput && user.password === passwordInput
  );

  const handleLogin = (e) => {
    e.preventDefault();
    if (userValid) {
      dispatch(login(userValid));
      localStorage.setItem("userLogged", JSON.stringify(userValid));
    } else {
      setError(true);
    }

    console.log("localstorage", localStorage.getItem("userLogged"));
  };
  return (
    <div className="bg-[#fafafa] dark:bg-black dark:text-white w-screen text-center min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col justify-center dark:bg-[#1A1A1A] w-[400px] bg-white border-2 border-[#1A1A1A]">
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt=""
          className="object-contain h-[51px] my-8"
        />
        <form onSubmit={handleLogin}>
          <div className="flex flex-col items-center gap-2">
            <input
              onChange={(e) => setUsernameInput(e.target.value)}
              value={usernameInput}
              type="text"
              placeholder="Phone number, username or email"
              className="border-[1px] dark:text-black border-gray-300 focus:outline-gray-400 bg-[#fafafa] py-1 px-2 text-sm rounded-sm w-3/4"
            />
            <input
              onChange={(e) => setPassowrdInput(e.target.value)}
              value={passwordInput}
              type="text"
              className="border-[1px] dark:text-black border-gray-300 focus:outline-gray-400 bg-[#fafafa] py-1 px-2 text-sm rounded-sm w-3/4"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-3/4 py-1 mt-4 text-white bg-blue-500 disabled:bg-blue-300"
            disabled={!usernameInput || !passwordInput}
          >
            Log In
          </button>
        </form>
        <div className="relative flex justify-center py-4">
          <p className="z-10 px-4 bg-white dark:bg-[#1A1A1A]">OR</p>
          <hr className="absolute w-3/4 h-[1px] bottom-1/2 bg-red-400" />
        </div>
        <div>
          <img src="" alt="" />
          <h4 className="flex items-center justify-center gap-2 font-semibold text-md">
            <RiFacebookBoxFill className="text-2xl text-blue-700" />
            Log in with Facebook
          </h4>
          {error && (
            <p className="mx-8 mt-2 text-center text-red-500">
              The username you entered doesn't belong to an account. Please
              check your username and try again.
            </p>
          )}
        </div>
        <p className="py-4 text-sm">forgot Password?</p>
      </div>
      <div className="bg-white  dark:bg-[#1A1A1A] border-2 border-[#1A1A1A]  w-[400px] mt-4">
        <h4 className="py-4 text-sm">
          Don't have an account?
          <a className="font-semibold text-blue-500"> Sign Up</a>
        </h4>
      </div>

      <p className="my-4">Get the app.</p>
      <div className="flex justify-center w-[400px] gap-4">
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
          alt=""
          className="object-contain w-[150px]"
        />
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
          alt=""
          className="object-contain w-[150px]"
        />
      </div>
    </div>
  );
};

export default Login;
