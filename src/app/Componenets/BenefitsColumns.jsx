"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BenefitsColumns() {
  const left = [
    {
      title: "Deep Hydration &\nMoisture Lock",
      body:
        "Arnica, Jaborandi, and Phosphoric Acid work in harmony to deeply nourish the scalp, promoting smoother, stronger, and naturally lustrous hair free from frizz and dryness.",
    },
    {
      title: "Shiny & Soft Strands",
      body: "Homeopathic essences blended with nourishing oils restore vitality and deliver a natural, healthy shine, leaving your hair radiant and full of life.",
    },
    {
      title: "Healthy Scalp &\nDandruff Control",
      body:
        "Arnica, Jaborandi, and Phosphoric Acid gently purify and calm the scalp, restoring natural balance while refreshing and revitalizing from root to tip.",
    },
  ];

  const right = [
    {
      title: "Stronger, Thicker Hair",
      body:
        "Arnica, Jaborandi, and Phosphoric Acid synergize to stimulate healthy hair growth, strengthen roots, and reduce thinning and breakage for fuller, resilient hair.",
    },
    {
      title: "Ultimate Protection",
      body:
        "Enriched with homeopathic actives and natural antioxidants, VitalGlow protects hair from damage, strengthening each strand while preserving its natural shine and vitality.",
    },
    {
      title: "Aromatherapy & Relaxation",
      body:
        "Infused with soothing homeopathic botanicals, VITALIST offers a gentle, calming aroma while deeply nourishing the scalp and restoring your hair’s natural balance and softness.",
    },
  ];

  return (
    <section className="relative bg-[#f7f7f6] py-20 md:py-24 overflow-hidden">
      {/* headline + eyebrow */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-slate-600/80">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300">🌿</span>
          VITALIST Synergy for Ultimate Hair Health
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">
          Natural Hair Revival by DURUL Hair Oil
        </h2>
        <p className="mt-2 text-[15px] leading-7 text-slate-600">
          Experience the transformative power of nature with our blend of potent oils, designed to nourish,
          strengthen, and revitalize your hair, promoting lasting health and radiance.
        </p>
      </div>

      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left list */}
        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="md:col-span-4 space-y-8"
        >
          {left.map((item) => (
            <li key={item.title} className="pr-2">
              <h3 className="whitespace-pre-line text-2xl font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-[15px] leading-7">{item.body}</p>
            </li>
          ))}
        </motion.ul>

        {/* Center product card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-4 flex flex-col items-center gap-6"
        >
          <div className="w-full rounded-2xl shadow-sm">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/natural-hair.png"
                alt="Revitalizing hair oil bottle with dropper"
                width={900}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* CTAs under the card */}
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/order-now" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90">Buy Now</a>
            <a href="/contact-us" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">Contact Us</a>
          </div>
        </motion.div>

        {/* Right list */}
        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="md:col-span-4 space-y-8"
        >
          {right.map((item) => (
            <li key={item.title} className="pr-2">
              <h3 className="text-2xl font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-[15px] leading-7">{item.body}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
