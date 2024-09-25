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

import { useState } from "react";

function App() {
  const dark = "dim";
  const light = "light";
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };
  return (
    <BrowserRouter>
      <div className="flex relative">
        <SidebarMenu />
        <main className="h-4/5 w-full">
          <Topbar onClick={toggleTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team theme={theme} />} />
            <Route path="/invoices" element={<Invoices theme={theme} />} />
            <Route path="/contacts" element={<Contacts theme={theme} />} />
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
