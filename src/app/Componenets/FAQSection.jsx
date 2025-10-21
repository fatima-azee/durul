"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leftFaq = [
  {
    q: "How often should I use it?",
    a: "For optimal results, we recommend using our Revitalizing Hair Oil daily. This helps maintain consistent nourishment and hydration for healthier hair.",
  },
  {
    q: "Can I return or exchange the product if I'm not satisfied?",
    a: "Yes. If you're not happy with your purchase, contact our support within 30 days for a hassle‑free return or exchange.",
  },
  {
    q: "How should I store the product to maintain its effectiveness?",
    a: "Store in a cool, dry place away from direct sunlight. Keep the cap tightly closed after each use.",
  },
  { q: "Is this product suitable for all hair types?", a: "Absolutely. It's formulated to benefit straight, wavy, curly, and coily hair." },
  {
    q: "Are there any side effects or allergic reactions I should be aware of?",
    a: "Patch test before first use. Discontinue if irritation occurs and consult a professional.",
  },
];

const rightFaq = [
  {
    q: "Can I leave the oil in overnight?",
    a: "Yes. Leaving it overnight provides deeper hydration and nourishment. You can also use it as a daily treatment and rinse after a few hours if preferred.",
  },
  { q: "How long does shipping take?", a: "Orders usually ship within 24–48 hours and arrive in 3–5 business days, depending on your location." },
  { q: "Is the product cruelty‑free and vegan‑friendly?", a: "Yes, we are both cruelty‑free and vegan‑friendly." },
  { q: "Can I use this product on colored or chemically treated hair?", a: "Yes. It's color‑safe and helps reduce damage from treatments." },
  { q: "How long does a bottle typically last with daily use?", a: "On average 4–6 weeks, depending on hair length and frequency." },
];

function Item({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-3 rounded-lg bg-slate-700 text-white font-medium flex items-center justify-between"
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-4 pt-3 pb-4 text-slate-600 bg-white"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="relative bg-white py-20 md:py-24">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* left column */}
        <div className="space-y-4">
          {leftFaq.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
        {/* right column */}
        <div className="space-y-4">
          {rightFaq.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
