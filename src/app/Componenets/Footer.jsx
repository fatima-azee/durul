"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const leftLinks = [
    { label: "ABOUT US", href: "/about-us" },
    { label: "SHOP", href: "/shop" },
    { label: "TECHNOLOGY", href: "/technology" },
  ];

  const rightLinks = [
    { label: "CONTACT US", href: "/contact" },
    { label: "INSTAGRAM", href: "https://instagram.com" },
    { label: "TWITTER/X", href: "https://twitter.com" },
    { label: "FACEBOOK", href: "https://facebook.com" },
  ];

  return (
    <footer className="relative bg-[#0f1418] text-white/90">
      {/* big background word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-start md:items-center"
      >
        <h2 className="w-full px-4 md:px-8 text-8xl md:text-8xl font-extrabold tracking-tight text-white/5 leading-none select-none">
          DURUL HAIR OIL
        </h2>
      </div>

      {/* content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* link columns */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-8 pr-0 md:pr-8">
              <ul className="space-y-4">
                {leftLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] tracking-wide text-white/85 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {rightLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] tracking-wide text-white/85 hover:text-white"
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* center divider */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-full w-px bg-white/10 mx-auto" />
          </div>

          {/* silhouettes panel */}
          <div className="md:col-span-5">
            <div className="h-44 md:h-56 w-full rounded-xl border border-white/10 bg-white/[0.02] relative overflow-hidden">
              {/* subtle grid edges */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl" />
              {/* minimalist product silhouettes (SVG) */}
              <svg
                viewBox="0 0 720 220"
                className="absolute inset-0 w-full h-full text-white/15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {/* tubes & bottles outlines */}
                <rect x="40" y="70" width="90" height="120" rx="6" />
                <rect x="160" y="40" width="120" height="150" rx="10" />
                <rect x="320" y="25" width="85" height="165" rx="10" />
                <rect x="430" y="50" width="120" height="140" rx="10" />
                <rect x="580" y="65" width="90" height="125" rx="10" />
                {/* droppers/shoulders */}
                <path d="M360 25 v-18 a10 10 0 0 1 10-10 h5 a10 10 0 0 1 10 10 v18" />
                {/* one bottle fill (brown) */}
                <path
                  d="M320 150 q42 18 85 0 v40 h-85z"
                  className="fill-[#7a4a27] opacity-80 stroke-none"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* bottom rule */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between text-white/60">
          <p className="text-[12px]">
            © {new Date().getFullYear()} All rights reserved
          </p>

          <nav className="mt-4 md:mt-0 flex items-center gap-6 text-[12px]">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of use
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
