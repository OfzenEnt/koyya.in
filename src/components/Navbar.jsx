import React, { useState, useEffect, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Product & Services", to: "/services" },
  // { name: "Careers", to: "/careers" },
  { name: "ContactUs", to: "/contact", isButton: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  const NavItem = ({ name, to, isButton }) => (
    <Link
      to={to}
      className={`text-base flex items-center font-medium ${
        isButton
          ? "text-blue-500 hover:text-blue-700 border border-blue-500 place-content-center rounded-md px-3 py-1"
          : "text-gray-600 hover:text-black"
      }`}
    >
      {name}
    </Link>
  );

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="px-4 md:mx-8 lg:mx-20 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="koyya_logo.png" alt="Koyya Logo" className="md:h-10 h-8" />
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden block cursor-pointer">
          <CiMenuBurger className="size-6" onClick={() => setMenuOpen(true)} />
        </div>

        {/* Desktop Menu */}
        <div className="space-x-8 lg:flex hidden items-center">
          {navLinks.map((link, idx) => (
            <NavItem key={idx} {...link} />
          ))}
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-transparent  z-40">
          <div
            ref={menuRef}
            className="fixed top-0 right-0 w-64 bg-white shadow-lg h-full transition-transform duration-300 ease-in-out z-50"
          >
            <div className="flex items-center justify-between px-4 py-5 border-b">
              <span className="text-lg font-bold">Menu</span>
              <IoMdClose
                className="size-6"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <ul className="p-6 space-y-6">
              {navLinks.map((link, idx) => (
                <li key={idx} onClick={() => setMenuOpen(false)}>
                  <NavItem {...link} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
