"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Search, ShoppingBag, Star } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/order-now" },
  { title: "About", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const promo =
    "🔥 Big discount is started — 200 ml oil bottle and free gift in just Rs. 1,500 with free delivery 🔥";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Promo bar (Infinite Slow Ticker) */}
      <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm">
        <div className="relative overflow-hidden">
          <div className="ticker flex items-center whitespace-nowrap py-2 will-change-transform">
            {Array.from({ length: 20 }).map((_, i) => (
              <div className="flex items-center pr-16" key={i}>
                <Star className="h-3.5 w-3.5 mr-2 shrink-0" aria-hidden />
                <span className="tracking-wide">{promo}</span>
              </div>
            ))}
          </div>

          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-slate-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-900 to-transparent" />

          {/* ticker styles */}
          <style jsx>{`
            .ticker {
              display: inline-flex;
              animation: ticker-scroll 90s linear infinite; /* 👈 slowed down */
            }
            @keyframes ticker-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .ticker {
                animation: none;
              }
            }
          `}</style>
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
                  <Link
                    href={item.href}
                    className="text-slate-700 hover:text-slate-900"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              
            </div>
          </div>
        </div>

        {/* subtle divider */}
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
              <button
                className="p-2 rounded-md hover:bg-slate-100"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
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
                href="/order-now"
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
