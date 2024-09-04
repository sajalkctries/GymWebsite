import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type userInfoType = {
  userName: string;
  userEmail: string;
  userPassword: string;
};

function Login({ isLogin }: { isLogin: boolean }) {
  const navigate = useNavigate();
  const [textType, setTextType] = useState<string>("password");
  const [userInfo, setUserInfo] = useState<userInfoType>({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  function handleLoginSignup() {
    if (!isLogin) {
      console.log("Sign up Page");
      if (!/[A-Za-z]/.test(userInfo.userName.trim())) {
        window.alert("Invalid Username. It must only contain alphabet");
        return;
      } else if (userInfo.userPassword.length < 8) {
        window.alert(
          "Please use stronger passwor dit must be atleast 8 characters long"
        );
        return;
      }
      alert("successfully signed up");
      localStorage.setItem("info", JSON.stringify(userInfo));
      setUserInfo({
        userName: "",
        userEmail: "",
        userPassword: "",
      });
    } else {
      const logInInfo = localStorage.getItem("info");
      if (logInInfo) {
        const storedInfo = JSON.parse(logInInfo) as userInfoType;

        if (userInfo.userName !== storedInfo.userName) {
          window.alert("Username does not match.");
          return;
        } else if (userInfo.userPassword !== storedInfo.userPassword) {
          window.alert("Password does not match.");
          return;
        }
        window.alert("Successfully logged in");
        localStorage.setItem("token", "logintoken");
        navigate("/home");
      } else {
        window.alert("No user info found. Please sign up first.");
      }
    }
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-black via-[#5d5d5d] to-black">
      <Helmet>
        <title>Login/Register</title>
      </Helmet>
      <div className="h-4/5 border-2 border-solid border-black flex flex-col gap-4 p-6 bg-black text-white rounded-3xl w-[17rem]">
        <span className="text-center">{isLogin ? `Login` : `Signup`}</span>
        <div>
          <label htmlFor="userName">Username</label>
          <div className="flex items-center border-b-2 border-gray-400 py-2 text-white">
            <span>
              {" "}
              <FontAwesomeIcon icon={faUser} className="text-gray-300 mr-2" />
            </span>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              className="focus:outline-none focus:border-blue-500 bg-black"
              onChange={(e) => {
                setUserInfo((prev) => ({
                  ...prev,
                  userName: e.target.value,
                }));
                console.log(userInfo);
              }}
              required
            />
          </div>
        </div>

        {!isLogin && (
          <div>
            <label htmlFor="userEmail">Email</label>
            <div className="flex items-center border-b-2 border-gray-400 py-2 text-white">
              <span>
                {" "}
                <FontAwesomeIcon icon={faUser} className="text-gray-300 mr-2" />
              </span>
              <input
                type="email"
                id="userEmail"
                placeholder="Enter your Email"
                className="focus:outline-none focus:border-blue-500 bg-black"
                onChange={(e) => {
                  setUserInfo((prevState) => ({
                    ...prevState,
                    userEmail: e.target.value,
                  }));
                  console.log(userInfo);
                }}
                required
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="userPassword">Password</label>
          <div className="flex items-center border-b-2 border-gray-400 py-2">
            <span
              onClick={() =>
                setTextType(textType === "password" ? "text" : "password")
              }
            >
              {textType === "password" ? (
                <FontAwesomeIcon icon={faEye} className="text-gray-300 mr-2" />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="text-gray-300 mr-2"
                />
              )}
            </span>

            <input
              type={textType}
              id="userPassword"
              placeholder="Password"
              className="focus:outline-none focus:border-blue-500 bg-black"
              onChange={(e) => {
                setUserInfo((prev) => ({
                  ...prev,
                  userPassword: e.target.value,
                }));
                console.log(userInfo);
              }}
              required
            />
          </div>
        </div>
        <button
          className="bg-gradient-to-r from-black via-[#8a8989] to-black py-1 rounded-3xl text-white hover:text-gray-400 transition-colors duration-500 ease-in-out"
          onClick={handleLoginSignup}
        >
          {isLogin ? `LOGIN` : `SIGNUP`}
        </button>
        {isLogin && (
          <Link
            to={"/register"}
            className="text-xs text-center text-gray-300 hover:text-blue-900 hover:underline cursor-pointer transition-all duration-200 ease-in-out"
          >
            Don't have account? sign up now
          </Link>
        )}
        {!isLogin && (
          <Link
            to={"/login"}
            className="text-xs text-center text-gray-300 hover:text-blue-900 hover:underline cursor-pointer transition-all duration-200 ease-in-out"
          >
            Go back to login
          </Link>
        )}
        {isLogin && (
          <div className="flex gap-2 flex-col items-center">
            <span className="text-gray-300">or sign up using</span>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faFacebook} className="cursor-pointer" />
              <FontAwesomeIcon icon={faGoogle} className="cursor-pointer" />
              <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
