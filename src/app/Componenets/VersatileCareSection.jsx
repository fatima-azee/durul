"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function VersatileCareSection() {
  return (
    <section className="relative bg-white text-slate-900 py-20 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-5"
        >
          <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200/70">
            <Image
              src="/images/couple-model.png"
              alt="Happy couple with healthy hair"
              width={900}
              height={650}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Right copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="md:col-span-7"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Versatile & Effective Care:
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-600 max-w-2xl">
            Designed for all hair types, our lightweight, non-greasy oil can be used daily or as an intensive overnight treatment. It hydrates the scalp, reduces frizz, and enhances shine, providing comprehensive hair revitalization.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>Adapts to various hair needs, offering flexible and personalized care.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>Delivers noticeable improvements in hair texture, strength, and overall appearance.</span>
            </li>
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/order-now" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90">Buy Now</a>
            <a href="/contact-us" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
