"use client";

import React from "react";

export default function CTA() {
  const stores = [
    {
      id: 1,
      title: "STORE 1",
      address: "Carrer de Mallorca, 123, 08036 Barcelona, Spain",
      phone: "+34 123 456 789",
      email: "info@minimalist.com",
      img: "/images/store1.png", // placeholder, replace with your actual line-art building image
    },
    {
      id: 2,
      title: "STORE 2",
      address: "123 Oxford Street, London W1D 1LU, United Kingdom",
      phone: "+44 20 1234 5678",
      email: "info@minimalist.co.uk",
      img: "/images/store2.png", // placeholder
    },
  ];

  return (
    <section className="relative bg-white text-black py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-[12px] tracking-[0.22em] text-orange-600 mb-3">
          [ WHERE TO BUY? ]
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Buy our products <br className="hidden sm:block" />
          in stores
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white border border-neutral-200 rounded-lg p-8 text-center shadow-sm"
          >
            {/* Store illustration */}
            <div className="mb-6">
              <img
                src={store.img}
                alt={store.title}
                className="mx-auto h-28 object-contain opacity-70"
              />
            </div>

            <p className="text-[12px] tracking-[0.22em] text-orange-600 mb-3">
              [ {store.title} ]
            </p>
            <p className="text-[15px] leading-7 text-neutral-800 mb-3">
              {store.address}
            </p>
            <p className="text-sm text-neutral-600">{store.phone}</p>
            <p className="text-sm text-neutral-600">{store.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
