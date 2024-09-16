import { Routes, Route, BrowserRouter } from "react-router-dom";

import Topbar from "./components/Topbar";
import SidebarMenu from "./components/SidebarMenu";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Invoices from "./pages/Invoices";
import Contacts from "./pages/Contacts";
import Bar from "./pages/Bar";
import Form from "./pages/Form";
import Line from "./pages/Line";
import Pie from "./pages/Pie";
import FAQ from "./pages/Faq";
import Geography from "./pages/Geography";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex relative">
        <SidebarMenu />
        <main className="h-full w-full">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/form" element={<Form />} />
            <Route path="/line" element={<Line />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
