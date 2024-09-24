import Headers from "../components/Headers";
import BarChart from "../components/BarChart";

function Bar() {
  return (
    <div className="h-screen">
      <Headers title={"BAR CHART"} subtitle={"Simple Bar Chart"} />
      <div className="h-4/6 w-4/5 m-auto">
        <BarChart />
      </div>
    </div>
  );
}

export default Bar;
