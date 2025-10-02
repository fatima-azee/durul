"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const company = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Hair Oil", href: "/order-now" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const informations = [
    { label: "Privacy Policy", href: "/" },
    { label: "Return and Refund Policy", href: "/" },
    { label: "Terms and Conditions", href: "/" },
    { label: "Wishlist", href: "/" },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#234a4b] text-white">
      {/* noise/texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(30rem_20rem_at_15%_20%,#ffffff,transparent_60%),radial-gradient(30rem_20rem_at_85%_80%,#ffffff,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand + blurb */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-lg font-semibold tracking-wide">VITALIST</span>
            </div>
            <p className="mt-4 text-sm text-white/80 max-w-sm">
              Discover VITALIST's natural hair revitalizing oil. Crafted with Biotin and botanical oils, our cruelty‑free formula strengthens shine and vitality.
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-white/90">COMPANY</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white/100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-white/90">INFORMATIONS</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {informations.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white/100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-white/90">STAY RADIANT</h3>
            <p className="mt-4 text-sm text-white/80">
              Join our VITALIST community! Subscribe for exclusive offers, hair care tips, and updates on our natural revitalizing products.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none ring-1 ring-inset ring-white/20 focus:ring-white/40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-white text-[#234a4b] px-4 py-2 text-sm font-semibold hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/15 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between text-white/70 text-xs">
          <p>© {new Date().getFullYear()} VITALIST. All rights reserved.</p>
          <div className="mt-3 md:mt-0 inline-flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
