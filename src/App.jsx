import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="">
          <Sidebar>
            <SidebarItem
              icon={<LayoutDashboard />}
              text="Dashboard"
              active
              alert
              to="/"
            />
            <SidebarItem icon={<Boxes />} text="Project" to="/project" />
            <SidebarItem icon={<Package />} text="Orders" to="/orders" />
            <SidebarItem
              icon={<UserCircle />}
              text="Customers"
              to="/customers"
            />
            <SidebarItem icon={<BarChart3 />} text="Reports" to="/reports" />
            <SidebarItem icon={<Receipt />} text="Billing" to="/billing" />
            <hr className="my-3" />
            <SidebarItem icon={<Settings />} text="Settings" to="/settings" />
            <SidebarItem icon={<LifeBuoy />} text="Help" to="/help" />
          </Sidebar>
        </div>
        <div className="">
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
