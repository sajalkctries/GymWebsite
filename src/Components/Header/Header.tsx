import NavBar from "./NavBar";

function Header() {
  const token = localStorage.getItem("token") as string;
  return (
    <header className="text-white bg-black bg-[url('/Images/Gym.jpg')] bg-cover bg-center h-96">
      <NavBar token={token}/>
      <div className="bg-black w-[28rem] h-80 mix-blend-screen flex flex-col justify-between px-4 py-3">
        <div className="text-7xl gap-6 flex flex-col">
          <span>Unlesh Your</span>
          <span>Inner Athlete</span>
        </div>
        <div className="flex flex-col">
          <span>We are dedicated to helping you transform your</span>
          <span>body and mind through the power of fitness</span>
        </div>
        <div className="flex justify-around">
            <span><button className="bg-lime-500 px-2 py-1 rounded-tl-2xl text-black">Join Now</button><span className="bg-lime-900 py-1 text-lime-300 px-2">49/month</span></span>
            <button className="bg-[#151515] py-1 px-3">Join Free Trial</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
