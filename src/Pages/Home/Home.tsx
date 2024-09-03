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
