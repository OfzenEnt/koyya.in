import React, { useState, useEffect, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import Dropdown from "react-multilevel-dropdown";
const navLinks = [
  { name: "Home", to: "/" },
  {
    name: "About Koyya",
    to: "/aboutus",
    hasDropdown: true,
    dropdownItems: [
      { name: "Organization", to: "/aboutus#top" },
      { name: "Mascots", to: "/aboutus#mascots" },
      { name: "Leadership", to: "/aboutus#leadership" },
    ],
  },
  {
    name: "Product & Services",
    to: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Technology for Businesses",
        dropdownItems: [
          { name: "Corporate Training", to: "/services/corporate-training" },
          {
            name: "Software Development",
            to: "/services/software-development",
          },
          { name: "Consulting", to: "/services/consulting" },
        ],
      },
      {
        name: "Technology for Education",
        dropdownItems: [
          { name: "Academic Workshops", to: "/services/academic-workshops" },
          { name: "GRIP", to: "/services/grip" },
          { name: "Glarimy Wiz", to: "/services/glarimy-wiz" },
        ],
      },
      {
        name: "Technology for Agriculture",
        dropdownItems: [
          { name: "Krissaco Sleek", to: "/services/krissaco-sleek" },
          { name: "Krissaco Drip", to: "/services/krissaco-drip" },
          { name: "Digital Marketing", to: "/services/digital-marketing" },
        ],
      },
      {
        name: "Agri Business",
        dropdownItems: [
          { name: "Agri Business", to: "/services/agri-business" },
          { name: "Krissaco Urban Brews Coffee", to: "/services/urban-brews" },
        ],
      },
    ],
  },
  { name: "ContactUs", to: "/contact", isButton: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownIndex, setMobileDropdownIndex] = useState(null);
  const menuRef = useRef();

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const NavItem = ({ name, to, isButton, hasDropdown, dropdownItems }) => {
    if (hasDropdown) {
      return (
        <Dropdown title={name}>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>
            Item 2
            <Dropdown.Submenu>
              <Dropdown.Item>Subitem 1</Dropdown.Item>
              <Dropdown.Item>Subitem 1</Dropdown.Item>
              <Dropdown.Item>Subitem 1</Dropdown.Item>
            </Dropdown.Submenu>
          </Dropdown.Item>
        </Dropdown>
      );
    }

    return (
      <Link
        to={to}
        className={`text-base font-medium flex items-center ${isButton
            ? "text-blue-500 hover:text-white hover:bg-blue-700 border border-blue-500 rounded-md px-3 py-1"
            : "text-gray-600 hover:text-black"
          }`}
      >
        {name}
      </Link>
    );
  };

  const MobileDropdownItem = ({ item, idx, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div key={idx} className={`${level > 0 ? "ml-4" : ""}`}>
        {item.dropdownItems ? (
          <>
            <div
              className="flex items-center justify-between py-2 text-gray-700 font-medium cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{item.name}</span>
              <FiChevronDown
                className={`transform transition-transform ${isOpen ? "rotate-180" : ""
                  }`}
              />
            </div>
            {isOpen && (
              <div className="ml-2">
                {item.dropdownItems.map((subItem, subIdx) => (
                  <MobileDropdownItem
                    key={subIdx}
                    item={subItem}
                    idx={subIdx}
                    level={level + 1}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            to={item.to}
            className="block py-2 text-sm text-gray-600 hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="px-4 md:mx-8 lg:mx-20 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/koyya_logo.png" alt="Koyya Logo" className="md:h-10 h-8" />
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
        <div className="fixed inset-0 bg-transparent z-40">
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
              {navLinks.map((link, idx) => {
                if (link.hasDropdown) {
                  return (
                    <li key={idx}>
                      {/* Dropdown Toggle in Mobile */}
                      <div
                        className="flex items-center justify-between text-gray-700 font-medium cursor-pointer"
                        onClick={() =>
                          setMobileDropdownIndex((prev) =>
                            prev === idx ? null : idx
                          )
                        }
                      >
                        <span>{link.name}</span>
                        <FiChevronDown
                          className={`transform transition-transform ${mobileDropdownIndex === idx ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                      {/* Show dropdown items if active */}
                      {mobileDropdownIndex === idx && (
                        <div className="mt-2 ml-2 space-y-2">
                          {link.dropdownItems.map((item, subIdx) => (
                            <MobileDropdownItem
                              key={subIdx}
                              item={item}
                              idx={subIdx}
                            />
                          ))}
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className={`block font-medium text-gray-700 ${link.isButton
                          ? "text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-700 hover:text-white"
                          : "hover:text-black"
                        }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
