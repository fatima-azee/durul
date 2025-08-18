"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Composition() {
  const ingredients = [
    {
      name: "Maleic Acid",
      formula: "[C4H4O4]",
      function: "Repairing disulfide bonds in hair",
    },
    {
      name: "Transglutaminase",
      formula: "[C27H44O3H2O]",
      function: "Acts as a hair-strengthening adhesive",
    },
    {
      name: "Amino Acid",
      formula: "[H2NCH(R)COOH]",
      function: "Protect hair & fiber against heat-induced stress",
    },
    {
      name: "Argan Oil",
      formula: "[C18H34O2]",
      function: "Promotes healthier hair",
    },
  ];

  return (
    <section className="relative bg-white text-black py-24 px-4 md:px-8 overflow-hidden">
      {/* Big background title */}
      <h2
        aria-hidden="true"
        className="absolute inset-x-0 top-10 text-center text-[10vw] font-extrabold text-black/5 tracking-tight select-none"
      >
        What’s Inside?
      </h2>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Molecule Image */}
        <motion.img
          src="/images/mol.png"
          alt="Molecule structure"
          className="mx-auto mb-12 w-[420px] h-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        />

        {/* Table with vertical guide lines */}
        <div className="relative w-full">
          {/* Left guide line */}
          <div className="absolute top-0 bottom-0 left-2 w-px bg-neutral-200" />
          {/* Center guide line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-neutral-200" />
          {/* Right guide line */}
          <div className="absolute top-0 bottom-0 right-2 w-px bg-neutral-200" />

          <table className="w-full max-w-6xl mx-auto text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 text-sm text-neutral-500">
                <th className="py-4 pl-6 font-semibold">INGREDIENT</th>
                <th className="py-4 px-6 font-semibold">FORMULA</th>
                <th className="py-4 pr-6 font-semibold">FUNCTION</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-neutral-100 text-[15px] text-neutral-700"
                >
                  <td className="py-4 pl-6">{item.name}</td>
                  <td className="py-4 px-6 font-mono text-sm text-neutral-600">
                    {item.formula}
                  </td>
                  <td className="py-4 pr-6">{item.function}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
