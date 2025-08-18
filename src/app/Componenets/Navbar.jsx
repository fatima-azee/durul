"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaWhatsapp,
} from "react-icons/fa";

const navItems = [
  { title: "About Us", path: "/about-us" },
  

  { title: "Case Studies", path: "/" },
  { title: "Blog", path: "/" },
  { title: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight || 500;
      setScrolledPastHero(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (title) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  const iconColor = scrolledPastHero ? "text-black" : "text-white";

  return (
    <>
      {/* --- TOP BAR (WhatsApp) --- */}
{/* --- TOP BAR (WhatsApp) --- */}
<div className="fixed top-0 left-0 w-full z-[60] bg-transparent">
  <div className="mx-auto max-w-7xl px-4 sm:px-6">
    <div className="h-9 flex items-center justify-end text-sm">
      <a
        href="https://wa.me/923290137325?text=Hi%20DURUL%20HAIR%20OIL%20—%20I%20Want%20to%20order."
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 font-medium ${
          scrolledPastHero ? "text-gray-800" : "text-black"
        } hover:text-green-600 transition`}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-green-600 text-lg" />
        <span>+92 329 0137325</span>
      </a>
    </div>
  </div>
</div>


      {/* --- NAVBAR (offset by top bar height) --- */}
      <nav
        className={`fixed top-9 left-0 w-full z-50 transition-colors duration-300 ${
          scrolledPastHero ? "bg-white text-black shadow-md" : "text-white"
        }`}
        role="navigation"
        aria-label="Main"
      >
        {/* Main row */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative flex items-center justify-between h-10">
            {/* Left: Hamburger */}
            <div className="flex items-center">
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className={`p-2 ${iconColor}`}
              >
                <FaBars className="text-2xl text-black" />
              </button>
            </div>

            {/* Center: Logo */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              aria-label="Go to homepage"
            >
              <Image
                src={scrolledPastHero ? "/images/logo.png" : "/images/logo.png"}
                alt="Logo"
                width={64}
                height={64}
                className="h-12 w-12 sm:h-40 sm:w-40 object-contain transition duration-300"
                priority
              />
            </Link>

            {/* Right: Icons */}
            <div className="ml-auto flex items-center gap-6">
              <button aria-label="Search" className={`p-2 ${iconColor}`}>
                <FaSearch className="text-xl text-black" />
              </button>
              <Link href="/account" aria-label="Sign in" className={`p-2 ${iconColor}`}>
                <FaUser className="text-xl text-black" />
              </Link>
              <Link href="/cart" aria-label="Cart" className={`p-2 ${iconColor}`}>
                <FaShoppingBag className="text-xl text-black" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[70%] mx-auto h-[0.5px] bg-gradient-to-r from-transparent via-[#bcbcbc] to-transparent opacity-70" />

        {/* Mobile/Side Drawer Menu */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-[60]"
              onClick={() => setMenuOpen(false)}
            />
            <aside className="fixed inset-y-0 left-0 z-[70] w-80 max-w-[85%] bg-white text-black shadow-2xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-black"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <nav className="space-y-3">
                {navItems.map((item, idx) => (
                  <div key={idx}>
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className="w-full flex justify-between items-center font-medium text-left hover:text-red-600"
                          aria-expanded={activeDropdown === item.title}
                        >
                          {item.title}
                          <FaChevronDown
                            className={`text-xs transition-transform ${
                              activeDropdown === item.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeDropdown === item.title && (
                          <div className="ml-3 mt-2 space-y-2">
                            {item.subItems.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.path}
                                className="block text-sm hover:text-red-600"
                                onClick={() => setMenuOpen(false)}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="block font-medium hover:text-red-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}

                <Link
                  href="/get-started"
                  className="inline-block mt-2 bg-[#7D090F] text-white px-5 py-2 rounded-full font-semibold tracking-wide transition hover:opacity-90"
                  onClick={() => setMenuOpen(false)}
                >
                  BUY NOW
                </Link>
              </nav>
            </aside>
          </>
        )}
      </nav>
    </>
  );
}
