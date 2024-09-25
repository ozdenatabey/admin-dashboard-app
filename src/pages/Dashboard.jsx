import Headers from "../components/Headers";
import ProgressCircle from "../components/ProgressCircle";
import {
  EnvelopeIcon,
  DocumentCurrencyDollarIcon,
  UserPlusIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/16/solid";

function Dashboard() {
  return (
    <main className="m-4">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end">
        <Headers title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />
        <button className="btn btn-primary btn-outline m-2">
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
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-8 row-span-2"></div>
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-4 row-span-2"></div>
        {/* THIRD ROW */}
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-4 row-span-2"></div>
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-4 row-span-2"></div>
        <div className="shadow-lg border border-transparent/50 bg-transparent/5 rounded-xl col-span-4 row-span-2"></div>
      </div>
    </main>
  );
}

export default Dashboard;
