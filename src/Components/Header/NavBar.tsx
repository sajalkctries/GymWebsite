import {
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar({ token }: { token: string }) {
  console.log(token);
  const [isLoggedin,setIsLoggedIn] = useState(!!token)

  const [displayMenu, setDisplayMenu] = useState(false);

  function handleLogOut(){
    localStorage.removeItem("token");
    setIsLoggedIn(false)
  }
  return (
    <nav className="flex justify-between items-center py-3 px-5">
      <div>
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-gray-300"
          }
        >
          <span className="text-lime-500">&lt;&gt;</span>
          <span>Fitness World</span>
        </NavLink>
      </div>
      <div className="flex gap-4">
        <ul className="flex gap-7 items-center">
          <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/facility"}
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Facility
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/merchandise"}
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Merchandise
            </NavLink>
          </li>
        </ul>
        {!isLoggedin ? (
          <button className="bg-lime-500 p-2 rounded-tl-2xl hover:text-black hover:bg-lime-700 transition-all duration-700 ease-in-out">
            <Link to={"/login"}>login</Link>
          </button>
        ) : (
          <div className="flex flex-col justify-center relative">
            <FontAwesomeIcon
              icon={faUser}
              onClick={() => setDisplayMenu(!displayMenu)}
            />
            {displayMenu && (
              <div className="absolute top-6 left-[-20px] bg-transparent border-b-2 border-black">
                <div className="flex gap-2 cursor-pointer" onClick={handleLogOut}>
                  <span>logout</span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
