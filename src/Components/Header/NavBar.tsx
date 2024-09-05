import {
  faArrowRightFromBracket,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar({ token }: { token: string }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleLogOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return (
    <nav className="flex justify-between items-center py-3 px-5">
      <div>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-gray-300"
          }
        >
          <span className="text-lime-500">&lt;&gt;</span>
          <span>Fitness World</span>
        </NavLink>
      </div>
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <FontAwesomeIcon icon={faBars} className="block sm:hidden" />
      </button>
      <div
        className={`sm:flex flex-col sm:flex-row gap-4 absolute sm:static bg-transparent right-0 top-9 z-10 ${
          mobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col sm:flex-row gap-7 items-center">
          <li className="">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative after:absolute after:left-0 after:bottom-[-0.5rem] 
                  after:scale-x-0 hover:after:scale-x-100 after:h-[1px] after:w-full 
                 after:bg-lime-500 after:transition-transform after:duration-300 after:ease-in-out 
                 ${isActive ? "text-blue-500" : ""}`
              }            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative after:absolute after:left-0 after:bottom-[-0.5rem] 
                  after:scale-x-0 hover:after:scale-x-100 after:h-[1px] after:w-full 
                 after:bg-lime-500 after:transition-transform after:duration-300 after:ease-in-out 
                 ${isActive ? "text-blue-500" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/merchandise"
              className={({ isActive }) =>
                `relative after:absolute after:left-0 after:bottom-[-0.5rem] 
                  after:scale-0 hover:after:scale-100 after:h-[1px] after:w-full 
                 after:bg-lime-500 after:transition-transform after:duration-300 after:ease-in-out 
                 ${isActive ? "text-blue-500" : ""}`
              }            >
              Merchandise
            </NavLink>
          </li>
        </ul>
        {!isLoggedIn ? (
          <button className="bg-lime-500 p-2 rounded-tl-2xl hover:text-black hover:bg-lime-700 transition-all duration-700 ease-in-out">
            <Link to="/login">Login</Link>
          </button>
        ) : (
          <div className="flex flex-col justify-center relative z-10 cursor-pointer">
            <button onClick={() => setDisplayMenu(!displayMenu)}>
              <FontAwesomeIcon icon={faUser} />
            </button>
            {displayMenu && (
              <div className="absolute top-6 left-[10px] sm:left-[-20px] border-b-2 border-black">
                <button
                  className="flex gap-2 cursor-pointer items-center"
                  onClick={handleLogOut}
                >
                  <span>Logout</span>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
