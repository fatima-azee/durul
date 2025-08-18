"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Special() {
  return (
    <section className="relative bg-white text-black py-24 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* LEFT: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="md:col-span-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            What makes <br /> it special
          </h2>
          <p className="mt-8 text-[12px] uppercase tracking-[0.22em] text-orange-600 font-medium">
            [ IN-VITRO STUDIES ]
          </p>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative md:col-span-8"
        >
          {/* Faint background percentage */}
          <span className="absolute -top-12 left-0 text-[9vw] font-extrabold text-black/5 select-none pointer-events-none">
            22.9%
          </span>

          {/* Title + description */}
          <h3 className="text-xl md:text-2xl font-semibold mt-30 mb-3 relative">
            Revolutionary Patent Pending Blend
          </h3>
          <p className="text-neutral-600 mb-8 max-w-xl relative">
            Our serum delivers a remarkable 22.9% increase in the tensile
            strength of hair fibers after just one wash, surpassing competitors’
            results.
          </p>

          {/* Comparison Bars */}
          <div className="space-y-4 relative">
            {/* Usual Serum */}
            <div className="flex items-center justify-between text-sm text-neutral-500 mb-1">
              <span>Usual Serum</span>
            </div>
            <div className="w-full h-5 bg-neutral-100 rounded-sm" />

            {/* Minimalist Serum */}
            <div className="flex items-center justify-between text-sm text-neutral-500 mb-1">
              <span>Minimalist Serum</span>
              <span className="text-orange-600 font-medium">+22.9%</span>
            </div>
            <div className="relative w-full h-5 bg-neutral-100 rounded-sm">
              <div className="absolute left-0 top-0 h-5 bg-orange-600 rounded-sm w-[90%]" />
              {/* dashed line marker */}
              <div className="absolute right-[10%] top-0 bottom-0 w-px border-r border-dashed border-neutral-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
