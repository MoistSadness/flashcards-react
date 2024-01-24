import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MenuItems = [
  { name: "Home", path: "/home" },
  { name: "Public Cards", path: "/public" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
];

export default function Navbar() {
  const navItems = ["Item 1", "Item 2"];

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  function StandardNavbar() {
    return (
      <div>
        <nav className="flex flex-row justify-between items-center bg-bgSecondary py-3 px-2">
          <div className="flex flex-row items-center gap-2">
            <div 
            className="xs:hidden"
            onClick={() => setShowMobileMenu(true)}>
              <MenuIcon />
            </div>
            <Link to="/">
              <div className="text-xl">Flash Cards</div>
            </Link>
            <Link to="/public">
              <div className="text-sm text-textSecondary mt-1 hidden xs:block">Public Cards</div>
            </Link>
          </div>
          <div className="flex gap-2">
            <Link to="/login">
              <button className="bg-colorPrimary px-2 py-1">Login</button>
            </Link>
            <Link to="/register">
              <button className="bg-colorPrimary px-2 py-1">Sign up</button>
            </Link>
          </div>
        </nav>
        <Outlet />
      </div>
    );
  }

  function MobileNavMenu() {
    return (
      <nav>
        <div
          className="absolute top-0 right-0 py-6 px-5"
          onClick={() => setShowMobileMenu(false)}
        >
          <CloseIcon fontSize="large" />
        </div>
        <div className="mt-20 px-6">Nav Items</div>
      </nav>
    );
  }

  return (
    <div>{showMobileMenu === true ? MobileNavMenu() : StandardNavbar()}</div>
  );
}
