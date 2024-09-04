import { useParams } from "react-router-dom";
import data from "../../assets/Data";

function ServiceDetail() {
  const { id } = useParams();
  const filteredData = data.filter((item)=>item.id ===id);

  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-center">Service: {id}</h1>
      <p className="text-center">{filteredData[0].description}</p>
    </div>
  );
}

export default ServiceDetail;
