import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  History,
  Wallet,
  Gift,
  HelpCircle,
  LogOut,
  User,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "home", label: "Home", icon: Home, path: "/dashboard/home" },
    {
      id: "recharge-history",
      label: "Recharge History",
      icon: History,
      path: "/dashboard/recharge-history",
    },
    {
      id: "wallet-history",
      label: "Wallet History",
      icon: Wallet,
      path: "/dashboard/wallet-history",
    },
    { id: "offers", label: "Offers", icon: Gift, path: "/dashboard/offers" },
    {
      id: "help",
      label: "Help and Support",
      icon: HelpCircle,
      path: "/dashboard/help",
    },
    { id: "logout", label: "Logout", icon: LogOut, path: "/" },
  ];

  const handleMenuClick = (item) => {
    if (item.id === "logout") {
      // Handle logout logic here
      const confirmLogout = window.confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        navigate("/");
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="w-64 bg-teal-800 text-white min-h-screen flex flex-col shadow-xl">
      {/* User Profile Section */}
      <div className="p-6 border-b border-teal-700">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <User className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <button className="text-white hover:text-teal-200 transition text-sm">
              ⋯
            </button>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            (item.id === "home" && location.pathname === "/dashboard");

          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center space-x-3 px-6 py-4 transition-all duration-200 ${
                isActive
                  ? "bg-teal-900 border-l-4 border-teal-400 text-white"
                  : "text-teal-100 hover:bg-teal-700 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
