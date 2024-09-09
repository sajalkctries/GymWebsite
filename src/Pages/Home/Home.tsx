import { Helmet } from "react-helmet-async";
import Card from "./Card";

function Home() {
  type dataType = {
    id: number;
    tittle: string;
    description: string;
  };
  const data: dataType[] = [
    {
      id: 1,
      tittle: "Legacy",
      description:
        "Over the last 46 years, our iconic gym brand has set the standard for all others to follow. Legends have been made here since 1976. Now it’s your turn.",
    },
    {
      id: 2,
      tittle: "Environment",
      description:
        "We provide a safe, secure and comfortable environment to train in no matter what your experience or fitness level is. We boast a strong community of like-minded people supporting and encouraging one another to achieve legendary greatness.",
    },
    {
      id: 3,
      tittle: "Results",
      description:
        "Remarkable customer service, a safe, clean, comfortable environment and the best training floor around await you at your local World Gym.",
    },
    {
      id: 4,
      tittle: "Experience",
      description:
        "Remarkable customer service, a safe, clean, comfortable environment and the best training floor around await you at your local World Gym.",
    },
  ];
  return (
    <main>
      <div className="text-white bg-[url('/Images/Gym.jpg')] bg-cover bg-[center_center] h-96">
        <div className="bg-black w-[28rem] h-80 mix-blend-screen flex flex-col justify-between px-4 py-3">
          <div className="sm:text-7xl text-5xl gap-6 flex flex-col">
            <span>Unlesh Your</span>
            <span>Inner Athlete</span>
          </div>
          <div className="flex flex-col text-md md:2xl">
            <span>We are dedicated to helping you transform your</span>
            <span>body and mind through the power of fitness</span>
          </div>
          <div className="flex justify-around flex-col sm:flex-row gap-4">
            <span>
              <button className="bg-lime-500 px-2 py-1 rounded-tl-2xl text-black">
                Join Now
              </button>
              <span className="bg-lime-900 py-1 text-lime-300 px-2">
                49/month
              </span>
            </span>
            <button className="bg-[#151515] py-1 px-3 w-32">
              Join Free Trial
            </button>
          </div>
        </div>
      </div>
      <Helmet>
              <title>Home - Fitness World</title>
      </Helmet>
      <div className="text-center text-3xl p-5">Why us?</div>
      <section className="py-10 flex justify-around flex-wrap gap-5">
        {data.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            title={item.tittle}
            description={item.description}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
