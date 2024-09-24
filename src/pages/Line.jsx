import LineChart from "../components/LineChart";
import Headers from "../components/Headers";

function Line() {
  return (
    <div className="h-screen">
      <Headers title={"LINE CHART"} subtitle={"Simple Line Chart"} />
      <div className="h-4/6 w-4/5 m-auto">
        <LineChart />
      </div>
    </div>
  );
}

export default Line;
