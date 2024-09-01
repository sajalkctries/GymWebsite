import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type cardProps = {
  id : number,
  title:string,
  description : string
}
function Card({id,title,description}:cardProps) {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="relative">
        <div className="text-3xl p-6 border-[10px] border-lime-500 w-fit font-extrabold bg-transparent rounded-[50%]">
          0{id}
        </div>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-lime-500 text-5xl absolute top-24 left-8 shadow-lg"
        />
      </div>
      <div>{title}</div>
      <div className="w-[16rem] text-center">
        {description}
      </div>
    </div>
  );
}

export default Card;
