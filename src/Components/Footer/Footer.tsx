import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto">
      <section className="bg-[#2b2b2ba4] relative flex flex-col justify-around px-3 py-8">
        <div className="flex gap-8 absolute top-[-23px] left-[50%] translate-x-[-50%]">
          <span>
            <FontAwesomeIcon
              icon={faGoogle}
              className="border-[5px] border-lime-500 rounded-full p-3 text-xl cursor-pointer"
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faTwitter}
              className="border-[5px] border-lime-500 rounded-full p-3 text-xl cursor-pointer"
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faFacebook}
              className="border-[5px] border-lime-500 rounded-full p-3 text-xl cursor-pointer"
            />
          </span>
        </div>
        <div className="text-4xl text-center">
          {" "}
          <span className="text-lime-500">&lt;&gt;</span>
          <span>Fitness World</span>
        </div>
        <div className="flex md:flex-col gap-7 justify-around mt-6">
          <ul className="flex flex-col md:flex-row  md:justify-around gap-4">
            <Link to={"#"}>
              <li>Gyms</li>
            </Link>
            <Link to={"#"}>
              <li>Gyms</li>
            </Link>
            <Link to={"#"}>
              {" "}
              <li>Careers</li>
            </Link>
          </ul>
          <ul className="flex flex-col md:flex-row justify-around gap-4">
            <Link to={"#"}>
              {" "}
              <li>Shop</li>
            </Link>
            <Link to={"#"}>
              <li>Contact</li>
            </Link>
            <Link to={"#"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-8 lg:justify-around text-gray-300 lg:py-7 bg-[#0e0e0e]">
        <div className="flex flex-col items-center gap-4">
          <span>
            Every Fitness World Branch is independently owned and operated,
          </span>
          <span>
            <span className="underline cursor-pointer">Click Here </span>to
            learn more about becoming Fitness world owner
          </span>
        </div>
        <div className="flex flex-col gap-3 items-center ">
          <span>&copy; {currentYear} All Rights Reserved.</span>
          <ul className="flex gap-2">
            <Link to={"#"}>
              {" "}
              <li className="underline">Site Map</li>
            </Link>
            <Link to={"#"}>
              <li className="underline">Accessibility</li>
            </Link>
            <Link to={"#"}>
              <li className="underline">Privay Policy</li>
            </Link>
            <Link to={"#"}>
              <li className="underline">Site search</li>
            </Link>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
