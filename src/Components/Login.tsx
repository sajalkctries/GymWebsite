import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-amber-700 via-yellow-100 to-purple-500">
      <div className="h-4/5 border-2 border-solid border-black bg-white flex flex-col gap-4 p-6">
        <span className="text-center">Login</span>
        <div>
          <label htmlFor="userName">Username</label>
          <div className="flex items-center border-b-2 border-gray-400 py-2">
           <span> <FontAwesomeIcon icon={faUser} className="text-gray-300 mr-2" /></span>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              className="focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="userPassword">Password</label>
          <div className="flex items-center border-b-2 border-gray-400 py-2">
            <span><FontAwesomeIcon icon={faLock} className="text-gray-300 mr-2" /></span>
            <input
              type="password"
              id="userPassword"
              placeholder="Password"
              className="focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <button className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 py-1 rounded-3xl">LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
