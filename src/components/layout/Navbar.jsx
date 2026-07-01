import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import logo1 from "../../assets/logos/LOGO 1.png";
import maleuser from "../../assets/icons/Male User.png";

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Menu", path: "/menu" },
    { name: "Special Offers", path: "/offers" },
    { name: "Restaurants", path: "/restaurants" },
    { name: "Track Order", path: "/track-order" },
  ];

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <img src={logo1} alt="Logo" className="w-24 md:w-28 lg:w-36 md:mr-2" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2 md:px-3 lg:px-5 py-2 text-[13px] lg:text-base rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-[#FC8A06] text-white"
                        : "text-black hover:text-[#FC8A06]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Login Button */}
            <button
              onClick={() => navigate("/login")}
              className="hidden md:flex items-center gap-2 md:gap-0 bg-black text-white lg:px-3 py-2 lg:py-3 md:pl-1 md:pr-2 md:py-1 rounded-full text-xs md:text-xs lg:text-base hover:bg-gray-800 transition cursor-pointer"
            >
              <img src={maleuser} alt="User" className="w-8 h-auto" />

              <span>Login / Signup</span>
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t">
            <div className="flex flex-col px-5 py-4 gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-medium transition ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "hover:bg-orange-100"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg mt-2"
              >
                <img src={maleuser} alt="User" className="w-5 h-5" />
                Login / Signup
              </button>
            </div>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
}
