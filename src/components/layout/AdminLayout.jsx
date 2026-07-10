import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
const AdminLayout = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Menu", path: "/manage-menu" },
    { name: "Orders", path: "/manage-order" },
    { name: "Analytics", path: "/analytics" },
  ];

  return (
    <div
      className={`min-h-screen flex ${
        theme === "dark" ? "bg-[#03081F]" : "bg-gray-100"
      }`}
    >
      {/* Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
    fixed top-0 left-0
    h-screen
    w-72
    bg-[#03081F]
    text-white
    shadow-2xl
    transform
    transition-transform
    duration-300
    z-40

    lg:hidden

    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">
            Admin <span className="text-orange-500">Panel</span>
          </h1>

          <p className="text-gray-400 text-sm mt-1">Food Ordering Dashboard</p>
        </div>

        <div className="p-5 space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl transition

            ${
              location.pathname === item.path
                ? "bg-orange-500 text-white"
                : "hover:bg-white/10"
            }
          `}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center gap-2 py-3 pr-2 rounded-lg border transition
  ${
    theme === "dark"
      ? "bg-[#0F172A] text-white border-gray-600"
      : "bg-gray-100 text-[#03081F] border-gray-300"
  }`}
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="absolute bottom-6 left-5 right-5 lg:hidden">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}

      <div className="flex-1 flex flex-col">
        {/* Header */}

        <header
          className={`sticky top-0 z-20 h-16 px-6 flex items-center justify-around shadow-md
  ${theme === "dark" ? "bg-[#0B1020] text-white" : "bg-white text-gray-900"}`}
        >
          {/* Left */}

          <div className="flex items-center gap-4">
            {/* Mobile Hamburger */}

            <button
              className="lg:hidden text-3xl"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>

            <h2 className="font-bold text-xl">Admin Dashboard</h2>

            {/* Desktop Navigation */}

            <div className="hidden lg:flex items-center gap-2 ml-10">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`px-4 py-2 rounded-full transition

          ${
            location.pathname === item.path
              ? "bg-orange-500 text-white"
              : theme === "dark"
                ? "hover:bg-white/10"
                : "hover:bg-gray-100"
          }
        `}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="flex items-center gap-6">
            {/* Theme */}

            <button
              onClick={toggleTheme}
              className={` hidden lg:block flex items-center justify-center text-sm gap-2 py-2 pr-2 rounded-lg border transition hover:bg-gray-200
  ${
    theme === "dark"
      ? "bg-[#0F172A] text-white border-gray-600"
      : "bg-gray-100 text-[#03081F] border-gray-300"
  }`}
            >
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

            {/* Logout */}

            <button
              onClick={handleLogout}
              className="hidden bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full lg:block"
            >
              Logout
            </button>
          </div>
        </header>
        {/* Content */}

        <main className="flex-1 p-5 md:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
