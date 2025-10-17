"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function CleanEthicalSection() {
  return (
    <section className="relative overflow-hidden">
      {/* angled top edge (subtle) */}
      <div className="absolute -top-8 left-0 right-0 h-10 rotate-1 bg-gradient-to-b from-slate-100 to-transparent" />

      {/* panel */}
      <div className="relative bg-[linear-gradient(120deg,#274643_0%,#2f5a56_100%)] text-white py-16 md:py-20">
        {/* soft noise/pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(30rem_20rem_at_20%_10%,#ffffff_0%,transparent_60%),radial-gradient(30rem_20rem_at_80%_90%,#ffffff_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Clean & Ethical Formulation:
            </h2>
            <p className="mt-3 text-white/90 text-[15px] leading-7 max-w-2xl">
              Crafted with 100% natural ingredients, our formula is free from sulfates, mineral oils, and harsh chemicals. We are committed to cruelty-free and vegan-friendly practices, respecting both your hair and the environment.
            </p>

            <ul className="mt-6 space-y-3 text-white/95">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>Free from harmful additives, ensuring a gentle, yet effective hair care experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>Ethically sourced ingredients, reflecting our dedication to sustainable and responsible beauty.</span>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/order-now" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:opacity-90">Buy Now</a>
              <a href="/contact-us" className="inline-flex items-center justify-center rounded-md border border-white/70 bg-transparent px-5 py-2.5 text-sm font-semibold hover:bg-white/10">Contact Us</a>
            </div>
          </motion.div>

          {/* Right: image in rounded card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="md:col-span-5"
          >
            <div className="md:ml-6 rounded-2xl backdrop-blur p-2 shadow-[0_20px_40px_rgba(0,0,0,0.25)">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/curly-hair.png"
                  alt="Radiant curly hair model"
                  width={900}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* angled bottom edge (subtle) */}
      <div className="absolute -bottom-8 left-0 right-0 h-10 -rotate-1 bg-gradient-to-t from-slate-100 to-transparent" />
    </section>
  );
}
