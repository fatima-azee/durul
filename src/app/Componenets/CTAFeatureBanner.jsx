"use client";

import React from "react";
import Image from "next/image";

export default function CTAFeatureBanner() {
  return (
    <section className="relative overflow-hidden mb-10">
      {/* panel background with subtle leaf pattern */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-8 rounded-3xl bg-[#4a6464] text-white p-6 md:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(100%_100%_at_0_0,black,transparent)]">
            <div className="absolute inset-0 bg-[url('/images/leaf-pattern.png')] bg-[length:360px_360px] bg-center" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* left copy */}
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.18em] mb-2 flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/40">🗓</span>
                Begin Your Transformation Today
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Embrace Natural Hair Vitality
              </h2>
              <p className="mt-3 text-white/85 text-[15px] leading-7 max-w-xl">
                Discover the power of botanical blends. Nourish, strengthen, and revitalize your hair with Durul hair oil. Start your journey to healthier, radiant hair now.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/order-now" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:opacity-90">Buy Now</a>
                <a href="/contact-us" className="inline-flex items-center justify-center rounded-md bg-[#c8965a] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-95">Contact Us</a>
              </div>
            </div>

            {/* right image card */}
            <div className="md:col-span-5">
              <div className="rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/embrace-vitality.png"
                  alt="Product on pedestal"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
