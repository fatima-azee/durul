"use client";

import React from "react";
import Link from "next/link";

export default function SHeroes() {
  const categories = [
    { name: "Skin", count: 24, active: true },
    { name: "Hair", count: 18 },
    { name: "Body", count: 6 },
    { name: "All Products", count: 52 },
  ];

  const products = [
    {
      id: 1,
      title: "Maleic Bond Repair Complex 5% Hair Serum",
      price: 34,
      src: "/images/set1.png",
    },
    {
      id: 2,
      title: "Frizz Control Complex SPF 30 Hair Serum",
      price: 36,
      src: "/images/set2.png",
    },
  ];

  return (
    <section className="relative bg-white text-black py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Meet Our
            <br /> Skincare Heroes
          </h2>

          <Link
            href="/shop"
            className="text-sm font-medium text-neutral-600 hover:text-black"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* LEFT: Categories */}
          <aside className="md:col-span-3">
            <ul className="space-y-3">
              {categories.map((c) => (
                <li key={c.name}>
                  <button
                    className={`group flex items-center gap-2 text-sm ${
                      c.active ? "text-black font-medium" : "text-neutral-500"
                    } hover:text-black`}
                  >
                    <span>{c.name}</span>
                    <span
                      className={`text-[12px] ${
                        c.active ? "text-orange-600" : "text-orange-500/60"
                      }`}
                    >
                      [{c.count}]
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* RIGHT: Products */}
          <div className="md:col-span-9">
            <div className="grid sm:grid-cols-2 gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="group bg-neutral-100 rounded-md p-4 md:p-5"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-200">
                    <img
                      src={p.src}
                      alt={p.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Title & price */}
                  <div className="mt-3 flex items-start justify-between">
                    <p className="text-[13px] leading-snug max-w-[80%]">
                      {p.title}
                    </p>
                    <span className="text-[13px] font-semibold text-orange-600">
                      ${p.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
