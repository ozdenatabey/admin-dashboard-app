import Headers from "../components/Headers";
import GeographyChart from "../components/GeographyChart";

function Geography() {
  return (
    <div className="h-screen">
      <Headers title={"GEOGRAPHY CHART"} subtitle={"Simple Geography Chart"} />
      <div className="h-4/6 w-4/5 m-auto mt-6 border rounded-xl shadow-lg">
        <GeographyChart />
      </div>
    </div>
  );
}

export default Geography;
