"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] overflow-hidden"
    >
      {/* background image */}
      <Image
        src="/images/hero-bg.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-24 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-y-10">
          
          {/* Left card */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 w-full"
          >
            <div className="backdrop-blur-[2px] bg-white/80 border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm text-center">
              {/* Badge */}
              <Image
                src="/images/badge.png"
                alt="100% natural"
                width={72}
                height={72}
                className="mx-auto"
              />

              {/* Model image */}
              <div className="mt-4 overflow-hidden rounded-xl">
                <Image
                  src="/images/model.png"
                  alt="Healthy, voluminous hair"
                  width={640}
                  height={480}
                  className="w-full h-auto"
                />
              </div>

              {/* Heading */}
              <h3 className="mt-4 text-lg font-semibold text-slate-800">
                Nature's Essence
              </h3>

              {/* Paragraph */}
              <p className="mt-2 text-sm text-slate-600">
                Urban Eden blends pure botanicals, crafting hair wellness
                rooted in natural, ethical care.
              </p>

              {/* Link */}
              <a
                href="/order-now"
                className="mt-3 inline-flex text-sm font-semibold text-slate-800 hover:underline"
              >
                View Details
              </a>
            </div>
          </motion.aside>

          {/* Center product */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="md:col-span-4 flex justify-center md:justify-center relative z-10"
          >
            <div className="relative">
              <div className="absolute -inset-10 blur-3xl bg-amber-100/40 rounded-full" />
              <Image
                src="/images/oil.png"
                alt="Urban Eden hair oil bottle"
                width={560}
                height={560}
                priority
                className="relative drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </motion.div>

          {/* Right copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 md:col-start-8"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-teal-800/80">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-teal-900/20">
                🌿
              </span>
              Urban Eden Botanical Boost
            </div>

            <h1 className="mt-4 text-4xl/tight sm:text-5xl/tight font-extrabold tracking-tight text-slate-800">
              Transform Your Hair's Vitality
            </h1>

            <p className="mt-4 text-[15px] leading-7 text-slate-700 max-w-md">
              Nourish, strengthen, and revitalize with our ultimate hair oil.
              Crafted with potent botanicals, it delivers healthier, stronger
              hair from root to tip.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/order-now"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90"
              >
                Buy Now
              </a>
              <a
                href="/order-now"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent z-10" />
    </section>
  );
}
