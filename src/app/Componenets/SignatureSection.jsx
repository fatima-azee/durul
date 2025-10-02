"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function SignatureSection() {
  return (
    <section className="relative bg-white text-slate-900 py-20 md:py-24 overflow-hidden">
      {/* soft top fade */}
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-slate-100 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* header copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-slate-600/80">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300">🌿</span>
            Unveiling the Power of Natural & Organic Ingredients
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">
            VITALIST's Signature: DURUL Hair Oil A Natural Excellence
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-600">
            Experience the pinnacle of natural hair care with VITALIST's Revitalizing Oil, meticulously crafted to
            nourish, strengthen, and revitalize, unlocking your hair's inherent beauty.
          </p>
        </motion.div>

        {/* content row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* left image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="md:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200/70">
            <Image
              src="/images/ethical-model.png"
              alt="Self-care routine at home"
              width={900}
              height={650}
              className="w-full h-auto scale-110"
              />
          </div>

          </motion.div>

          {/* right copy + bullets + ctas */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="md:col-span-7"
          >
            <h3 className="text-2xl sm:text-[28px] font-semibold text-slate-800">Potent Botanical Fusion :</h3>
            <p className="mt-3 text-slate-600 text-[15px] leading-7 max-w-2xl">
              Our Revitalizing Hair Oil combines Rosemary, Castor, Biotin, and other natural oils, each chosen for its proven
              ability to nourish, strengthen, and revitalize hair from the root, promoting overall hair health.
            </p>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>Deeply nourishes and strengthens hair follicles for reduced breakage.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>Stimulates scalp circulation, supporting healthy hair growth and thickness.</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/order-now" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90">Buy Now</a>
              <a href="/contact-us" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
