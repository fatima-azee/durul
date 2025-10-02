"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Search, User, ShoppingBag, ChevronDown, Star } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/order-now" },
  { title: "About", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Promo bar */}
      <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-2">
          <Star className="h-3.5 w-3.5" aria-hidden />
          <p className="tracking-wide">Unlock Your Hair&apos;s VITALIST Beauty.</p>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={[
          "transition-colors duration-300",
          "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70",
          isScrolled ? "shadow-sm" : "shadow-none",
        ].join(" ")}
        role="navigation"
        aria-label="Main"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 -ml-2 rounded-md hover:bg-slate-100"
                aria-label="Open menu"
                onClick={() => setDrawerOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>

              <Link href="/" className="inline-flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-auto w-40 object-contain"
                  priority
                />
                <span className="sr-only">Go to homepage</span>
              </Link>
            </div>

            {/* Center: Links */}
            <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-700 hover:text-slate-900">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <button aria-label="Search" className="p-2 rounded-md hover:bg-slate-100">
                <Search className="h-5 w-5" />
              </button>
          
              <Link href="/cart" aria-label="Cart" className="p-2 rounded-md hover:bg-slate-100">
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* subtle divider like the inspiration */}
        <div className="mx-auto max-w-5xl h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
      </nav>

      {/* Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85%] bg-white shadow-2xl border-r border-slate-200 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-semibold">Menu</span>
              <button className="p-2 rounded-md hover:bg-slate-100" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-50"
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="/shop"
                className="mt-2 inline-flex items-center justify-center w-full rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:opacity-90"
                onClick={() => setDrawerOpen(false)}
              >
                Buy Now
              </Link>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
