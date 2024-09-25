import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  IdentificationIcon,
  DocumentTextIcon,
  UserIcon,
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function SidebarMenu() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Sidebar
      backgroundColor="transparent"
      className="bg-transparent/10"
      collapsed={!isCollapsed}
      rootStyles={{ border: "none" }}
    >
      <Menu
        menuItemStyles={{
          button: {
            ":hover": { background: "none", color: "oklch(var(--p))" },
          },
        }}
      >
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          icon={!isCollapsed ? <Bars3Icon className="size-6" /> : undefined}
        >
          {isCollapsed && (
            <div className="flex justify-between">
              <h1 className="text-center">SIDEBAR</h1>
              <XMarkIcon className="size-6" />
            </div>
          )}
        </MenuItem>
        {isCollapsed && (
          <div className="mb-6">
            <div className="flex justify-center items-center">
              <img
                src={"public/user-image.jpg"}
                alt="user"
                width={100}
                height={100}
                className="rounded-full cursor-pointer"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">Özden Atabey</h2>
              <h3 className="text-primary">Manager</h3>
            </div>
          </div>
        )}

        {/* MENU ITEMS */}
        <div>
          <MenuItem
            component={<Link to={"/"} />}
            icon={<HomeIcon className="size-6" />}
          >
            Dashboard
          </MenuItem>
          <h2 className="text-sm text-secondary mt-5 text-center ">Data</h2>
          <MenuItem
            component={<Link to={"/team"} />}
            icon={<UsersIcon className="size-6" />}
          >
            Manage Team
          </MenuItem>
          <MenuItem
            component={<Link to={"/contacts"} />}
            icon={<IdentificationIcon className="size-6" />}
          >
            Contacts Information
          </MenuItem>
          <MenuItem
            component={<Link to={"/invoices"} />}
            icon={<DocumentTextIcon className="size-6" />}
          >
            Invoices Balances
          </MenuItem>
          <h2 className="text-sm text-secondary mt-5 text-center ">Pages</h2>
          <MenuItem
            component={<Link to={"/form"} />}
            icon={<UserIcon className="size-6" />}
          >
            Profile Form
          </MenuItem>
          <MenuItem
            component={<Link to={"/calendar"} />}
            icon={<CalendarDaysIcon className="size-6" />}
          >
            Calendar
          </MenuItem>
          <MenuItem
            component={<Link to={"/faq"} />}
            icon={<QuestionMarkCircleIcon className="size-6" />}
          >
            FAQ Page
          </MenuItem>
          <h2 className="text-sm text-secondary mt-5 text-center ">Charts</h2>
          <MenuItem
            component={<Link to={"/bar"} />}
            icon={<ChartBarIcon className="size-6" />}
          >
            Bar Chart
          </MenuItem>
          <MenuItem
            component={<Link to={"/pie"} />}
            icon={<ChartPieIcon className="size-6" />}
          >
            Pie Chart
          </MenuItem>
          <MenuItem
            component={<Link to={"/line"} />}
            icon={<PresentationChartLineIcon className="size-6" />}
          >
            Line Chart
          </MenuItem>
          <MenuItem
            component={<Link to={"/geography"} />}
            icon={<GlobeAltIcon className="size-6" />}
          >
            Geography Chart
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
