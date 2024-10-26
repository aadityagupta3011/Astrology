import React, { useState } from "react";
import { Link } from "react-router-dom";
import navItems from "../data/navItems";
import { PiListBold } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState([]); // Tracks open submenus by their IDs

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Optionally, close all submenus when main menu is toggled
    // setOpenSubMenus([]);
  };

  const toggleSubMenu = (id) => {
    if (openSubMenus.includes(id)) {
      setOpenSubMenus(openSubMenus.filter((menuId) => menuId !== id));
    } else {
      setOpenSubMenus([...openSubMenus, id]);
    }
  };

  return (
    <header className="text-white  bg-[#a66330]">
      {/* Desktop Navbar */}
      <div className="hidden custom-md:block">
        {/* Top Row */}
        <div className="flex justify-end p-1 pt-2 text-sm">
          <nav className="space-x-4 mr-5">
            <Link
              className="hover:bg-gray-400 p-1 transition-all delay-50  rounded-md "
              to="/Profile">
              Profile
            </Link>
            <Link
              className="hover:bg-gray-400 p-1 transition-all delay-50  rounded-md "
              to="/Counseling">
              Counseling
            </Link>
            <Link
              className="hover:bg-gray-400 p-1 transition-all delay-50  rounded-md "
              to="/Who-is-Astrologer-Nikhil-Sharma">
              Why Nikhil Ji
            </Link>
          </nav>
        </div>

        {/* Logo and Contact Row */}
        <div className="flex items-center justify-between p-2 ">
          <Link to="https://astrologernikhilsharma.in/">
            <div className="flex items-center space-x-2 mb-5">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <div>
                <h1 className="text-xl font-semibold">
                  Astrologer Nikhil Sharma
                </h1>
                <p className="text-sm">Best Astrology & Vashikaran Services</p>
              </div>
            </div>
          </Link>

          <div className="text-right pr-2">
            <p>📞 +91-95091-68369 | +97 1527912616</p>
            <p>📧 info@AstrologerNikhilSharma.com</p>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-red-600 py-3">
          <ul className="flex justify-center space-x-4 text-sm">
            {navItems.map((items) => (
              <li key={items.id} className="group z-10">
                <Link
                  to={items.path}
                  className="hover:bg-gray-400 p-1 transition-all delay-50 rounded-md">
                  {items.title}
                </Link>
                {items.subTopics && (
                  <ul className="pt-2 absolute hidden group-hover:block">
                    <ul className=" bg-[#683a17]  p-2 rounded-md">
                      {items.subTopics.map((subItems, index) => (
                        <li key={index}>
                          <Link
                            to={subItems.path}
                            className="hover:bg-slate-300 hover:text-black p-0.5 mt-1 rounded-sm">
                            {subItems.subTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Mobile Navbar */}
      <div className="block custom-md:hidden">
        <nav className="bg-red-800 p-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <h1 className="text-white font-bold">Astrologer Nikhil Sharma</h1>
            {/* Menu button */}
            <button
              className="text-white font-bold text-lg flex items-center"
              onClick={toggleMenu}>
              <span className={`${isMenuOpen ? "hidden" : "block"}`}>
                <PiListBold />
              </span>
              <span className={`${isMenuOpen ? "block" : "hidden"}`}>
                <FaTimes />
              </span>
            </button>
          </div>

          {/* Menu Items */}
          <div className={`mt-4 ${isMenuOpen ? "block" : "hidden"}`}>
            {/* Top Navigation Links */}
            <div className="justify-end p-2 text-sm">
              <nav className="space-x-4 mr-5">
                <Link
                  className="hover:bg-gray-400 p-1 transition-all delay-50 rounded-md"
                  to="/Profile">
                  Profile
                </Link>
                <Link
                  className="hover:bg-gray-400 p-1 transition-all delay-50 rounded-md"
                  to="/Counseling">
                  Counseling
                </Link>
                <Link
                  className="hover:bg-gray-400 p-1 transition-all delay-50 rounded-md"
                  to="/Who-is-Astrologer-Nikhil-Sharma">
                  Why Nikhil Ji
                </Link>
                <Link
                  to={"/Yantra"}
                  className="hover:bg-gray-400 p-1 transition-all delay-50 rounded-md">
                  Yantras
                </Link>
              </nav>
            </div>

            {/* Main Navigation Links with Submenus */}
            <ul className="space-y-2 transition-all duration-300">
              {navItems.map((item) => (
                <li key={item.id} className="text-white border-b-2">
                  <div className="flex items-center justify-between px-2 py-1">
                    <Link to={item.path} className="hover:text-yellow-300">
                      {item.title}
                    </Link>
                    {item.subTopics && (
                      <button
                        onClick={() => toggleSubMenu(item.id)}
                        className="text-white focus:outline-none">
                        <IoMdArrowDropdown
                          className={`transform transition-transform duration-200 ${
                            openSubMenus.includes(item.id)
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.subTopics && openSubMenus.includes(item.id) && (
                    <ul className="pl-4 pb-2 space-y-1">
                      {item.subTopics.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className="block text-gray-300 hover:text-yellow-300">
                            {subItem.subTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
