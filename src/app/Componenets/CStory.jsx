"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CStory() {
  const stories = [
    {
      img: "/images/client1.png",
      rating: "4.9",
      text:
        "I'm amazed at how quickly my skin improved after using these products! My complexion looks brighter, feels smoother, and I've received so many compliments. Definitely my new go-to skincare brand.",
      name: "Sarah H.",
      date: "May 2024",
    },
    {
      img: "/images/client2.png",
      rating: "5.0",
      text:
        "I've struggled with dry, sensitive skin for years, but since switching to these products, my skin feels hydrated, calm, and more balanced than ever. I can't thank this brand enough for creating such effective skincare solutions!",
      name: "Jane D.",
      date: "May 2024",
    },
    {
      img: "/images/client3.png",
      rating: "4.8",
      text:
        "I was skeptical at first, but within weeks I saw a significant difference—my skin looks youthful, feels firm, and I'm thrilled with the glow.",
      name: "Sarah H.",
      date: "May 2024",
    },
  ];

  return (
    <section className="relative bg-[#fffdf7] text-[#111] py-20 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Big background title */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-12 md:top-8 text-center text-[12vw] md:text-[10vw] font-extrabold tracking-tight text-black/5 select-none"
      >
        Client Stories
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* LEFT: Intro */}
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-4"
        >
          <p className="text-[12px] tracking-[0.22em] text-orange-600 mb-3">
            [ 20K HAPPY CLIENTS ]
          </p>
          <p className="text-[15px] leading-7 text-neutral-600 max-w-sm">
            Our products are not only scientifically proven but also
            customer-approved.
          </p>

          {/* Pagination */}
          <div className="mt-12 flex items-center gap-4 text-sm text-neutral-500">
            <span>01</span>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-neutral-300" />
              <span className="h-px w-6 bg-neutral-300" />
              <span className="h-px w-6 bg-neutral-300" />
              <span className="h-px w-6 bg-neutral-300" />
            </div>
            <span>04</span>
          </div>
        </motion.aside>

        {/* RIGHT: Cards */}
        <div className="md:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-30">
          {stories.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              className="bg-white rounded-xl border border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-3 right-3 text-[11px] font-medium text-orange-600 bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
                  [ {s.rating} ]
                </span>
              </div>

              {/* Body */}
              <div className="p-4">
                <p className="text-[14px] leading-6 text-neutral-700 line-clamp-6">
                  {s.text}
                </p>

                <div className="mt-5 flex items-end justify-between">
                  <div className="font-semibold text-[13px]">{s.name}</div>
                  <div className="text-[12px] text-neutral-500">{s.date}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
