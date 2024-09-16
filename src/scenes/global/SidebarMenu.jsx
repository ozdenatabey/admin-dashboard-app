import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SidebarMenu() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Sidebar
      backgroundColor="transparent"
      className="bg-transparent/10"
      collapsed={!isCollapsed}
    >
      <Menu
        menuItemStyles={{
          button: { ":hover": { background: "rgba(0,0,0,0.1)" } },
        }}
      >
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          icon={
            !isCollapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : undefined
          }
        >
          {isCollapsed && (
            <div className="flex justify-between">
              <h1 className="text-center">SIDEBAR</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </MenuItem>
        {isCollapsed && (
          <div className="mb-6">
            <div className="flex justify-center items-center">
              <img
                src={"src/assets/user-image.jpg"}
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
        <MenuItem>Ürünler</MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
