import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import data from "../../assets/Data";
import {
  faDumbbell,
  faHotTubPerson,
  faPersonBiking,
  faPersonSwimming,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const icons = [
    faDumbbell,
    faPersonSwimming,
    faPersonWalking,
    faPersonBiking,
    faHotTubPerson,
  ];
  return (
    <main className="mb-10">
      <Helmet>
        <title>Services - Fitness World</title>
      </Helmet>
      <div className="bg-[url('/Images/Service.jpg')] bg-cover bg-center w-full relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6 py-36 max-w-4xl mx-auto">
          {data.map((item,index) => (
            <Link
              to={`/services/${item.id}`}
              className="bg-lime-500 flex flex-col items-center px-3 py-6 rounded-lg gap-4"
            >
              <span>
                <FontAwesomeIcon
                  icon={icons[index]}
                  className="text-3xl"
                  aria-label="Walking Icon"
                />
              </span>
              <span>{item.id}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Services;
