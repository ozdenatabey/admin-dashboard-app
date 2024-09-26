import Headers from "../components/Headers";
import ProgressCircle from "../components/ProgressCircle";
import {
  EnvelopeIcon,
  DocumentCurrencyDollarIcon,
  UserPlusIcon,
  CursorArrowRaysIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/16/solid";
import LineChart from "../components/LineChart";
import { mockTransactions } from "../data/mockData";
import BarChart from "../components/BarChart";
import GeographyChart from "../components/GeographyChart";

function Dashboard() {
  return (
    <div className="mx-4">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end">
        <Headers title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />
        <button className="btn btn-primary btn-outline ">
          Download Reports
        </button>
      </div>
      {/* MAIN COMPONENTS */}
      <div className="grid grid-cols-12 grid-rows-5 gap-4 mt-4">
        {/* FIRST ROW */}
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-3">
          <div className="flex justify-between items-center p-4">
            <div>
              <EnvelopeIcon className="size-8" fill="oklch(var(--p))" />
              <div className="text-lg mt-2 font-bold">17.852</div>
              <div className="text-primary">Emails Sent</div>
            </div>
            <div>
              <ProgressCircle size={4} progress={55} />
            </div>
          </div>
        </div>
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-3">
          <div className="flex justify-between items-center p-4">
            <div>
              <DocumentCurrencyDollarIcon
                className="size-8"
                fill="oklch(var(--p))"
              />
              <div className="text-lg mt-2 font-bold">254.874</div>
              <div className="text-primary">Sales Obtained</div>
            </div>
            <div>
              <ProgressCircle size={4} progress={72} />
            </div>
          </div>
        </div>
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-3">
          <div className="flex justify-between items-center p-4">
            <div>
              <UserPlusIcon className="size-8" fill="oklch(var(--p))" />
              <div className="text-lg mt-2 font-bold">3.498</div>
              <div className="text-primary">New Clients</div>
            </div>
            <div>
              <ProgressCircle size={4} progress={35} />
            </div>
          </div>
        </div>
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-3">
          <div className="flex justify-between items-center p-4">
            <div>
              <CursorArrowRaysIcon className="size-8" fill="oklch(var(--p))" />
              <div className="text-lg mt-2 font-bold">136.513</div>
              <div className="text-primary">Times Clicked</div>
            </div>
            <div>
              <ProgressCircle size={4} progress={83} />
            </div>
          </div>
        </div>
        {/* SECOND ROW */}
        {/* mini line chart */}
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-8 row-span-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="pt-4 pl-4">Revenue Generated</p>
              <p className="text-xl font-bold text-primary pl-4">$64,359.55</p>
            </div>
            <button className="pr-4">
              <ArrowDownTrayIcon className="size-8" fill="oklch(var(--p))" />
            </button>
          </div>
          <div className="h-52 w-full">
            <LineChart isDashboard />
          </div>
        </div>
        {/* transactions */}
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-4 row-span-2 overflow-hidden h-72 pb-16">
          <div className="bg-primary py-4 px-6 font-bold text-base-100 shadow-lg">
            Recent Transactions
          </div>
          <div className="overflow-scroll h-full">
            {mockTransactions.map((transaction) => (
              <div
                key={`${transaction.txId}`}
                className="flex justify-between m-4 p-4 items-center bg-info/15 rounded-lg shadow-md"
              >
                <div>
                  <p className="text-primary font-semibold">
                    {transaction.txId}
                  </p>
                  <p>{transaction.user}</p>
                </div>
                <p>{transaction.date}</p>
                <p className="bg-primary text-base-100 px-4 py-3 rounded-lg font-extrabold">
                  ${transaction.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* THIRD ROW */}
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-4 row-span-2">
          <p className="m-4 font-semibold">Total Profit</p>
          <div className="flex flex-col justify-center items-center">
            <ProgressCircle size={8} progress={75} />
            <p className="text-primary text-lg font-bold mt-4">$85.664,42</p>
            <p>As of the Beginning of This Year</p>
          </div>
        </div>
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-4 row-span-2">
          <p className="m-4 font-semibold">Sales Quantity</p>
          <div className="h-4/5">
            <BarChart isDashboard />
          </div>
        </div>
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-4 row-span-2">
          <p className="m-4 font-semibold">Geography Based Traffic</p>
          <div className="h-4/5">
            <GeographyChart isDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
