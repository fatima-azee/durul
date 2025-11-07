"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const company = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/order-now" },
    { label: "About", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#234a4b] text-white">
      {/* soft texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(30rem_20rem_at_20%_30%,#ffffff,transparent_60%),radial-gradient(30rem_20rem_at_80%_70%,#ffffff,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20">
        {/* top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Brand + blurb */}
          <div className="md:col-span-7 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="/images/logo.png"
                alt="VITALIST logo"
                width={48}
                height={48}
                className="h-12 w-auto"
                priority
              />
              <span className="text-xl font-extrabold tracking-wide">
                VITALIST
              </span>
            </div>

            <p className="mt-4 text-base leading-7 text-white/85 max-w-xl mx-auto md:mx-0">
              Explore VIATLIST’s homeopathic hair revitalizing oil — a unique blend of Arnica, Jaborandi, and Phosphoric Acid. This gentle, nature-inspired formula restores strength, enhances shine, and revives your hair’s natural vitality.
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-5 text-center md:text-left md:pl-4">
            <h3 className="text-[12px] font-semibold tracking-[0.18em] text-white/90">
              COMPANY
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] text-white/85">
              {company.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* divider */}
        <div className="mt-12 border-t border-white/15" />

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between text-white/70 text-xs">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()} VITALIST. All rights reserved.
          </p>

          <div className="order-1 md:order-2 w-full md:w-auto flex flex-wrap items-center justify-start md:justify-end gap-x-6 gap-y-2">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
