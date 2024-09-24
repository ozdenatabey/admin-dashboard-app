import Headers from "../components/Headers";
import PieChart from "../components/PieChart";

function Pie() {
  return (
    <div className="h-screen">
      <Headers title={"PIE CHART"} subtitle={"Simple Pie Chart"} />
      <div className="h-4/6 w-4/5 m-auto">
        <PieChart />
      </div>
    </div>
  );
}

export default Pie;
