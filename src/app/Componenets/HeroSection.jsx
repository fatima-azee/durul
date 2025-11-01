// app/components/HeroSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative min-h-[92vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt="Leafy botanical background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-24 md:pt-28">
        {/* Desktop: 35% / 30% / 35% */}
        <div className="grid grid-cols-1 md:grid-cols-[35%_30%_35%] items-start md:gap-x-8 gap-y-10">
          
          {/* LEFT: arranged as SS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:self-start md:pr-4"
          >
            {/* small label */}
            <div className=" mt-4 md:mt-20 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-teal-800/80">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-teal-900/20">
                🌿
              </span>
              VITALIST's Natural Boost
            </div>

            {/* big 3-line headline like SS */}
            <h1 className="mt-3 font-extrabold text-slate-800 tracking-[-0.02em] leading-[1.04] text-5xl sm:text-6xl md:text-5xl">
              <span className="block">Transform Your Hair&apos;s Vitality</span>
            </h1>

            {/* compact paragraph width like SS */}
            <p className="mt-4 text-[15px] leading-7 text-slate-700 max-w-[36ch]">
              Nourish, strengthen, and revitalize with our ultimate hair oil.
              Crafted with potent botanicals, it delivers healthier, stronger
              hair from root to tip.
            </p>

            {/* buttons row (dark + amber) */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/order-now"
                className="inline-flex items-center justify-center rounded-lg bg-slate-700 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-900"
              >
                Buy Now
              </a>
              <a
                href="/order-now"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-green-700"
              >
                Buy On Whats App
              </a>
            </div>
          </motion.div>

          {/* CENTER: Product bottle (column = 30%) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="flex justify-center relative z-10"
          >
            <div className="relative mr-15">
              {/* Soft glow behind bottle */}
              <div aria-hidden className="absolute rounded-full" />
              <Image
                src="/images/hero-image-p.png"
                alt="Durul Hair Oil bottle"
                width={620}
                height={620}
                sizes="(min-width:1280px) 24rem, (min-width:1024px) 22rem, 60vw"
                priority
                className="relative drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </motion.div>

          {/* RIGHT: badge ABOVE the model image; left-aligned text (column = 35%) */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:self-start w-full"
          >
            {/* Badge on top (not overlay) + model image */}
            <div className="w-full">
              <div className="mx-auto md:mx-0 w-[90%] md:w-[92%]">
                <div className="flex justify-center">
                  <Image
                    src="/images/badge.png"
                    alt="100% Natural"
                    width={180}
                    height={180}
                    className="drop-shadow-md mb-2"
                    priority
                  />
                </div>

              <Image
  src="/images/model-h.webp"
  alt="Healthy, voluminous hair"
  width={1200}
  height={900}
  sizes="(min-width:1280px) 22rem, (min-width:1024px) 20rem, 70vw"
  className="w-[20rem] md:w-[20rem] lg:w-[22rem] h-auto rounded-2xl border border-slate-200 shadow-sm mx-auto md:mx-0"
  priority
/>

              </div>
            </div>

            {/* Text below the image */}
            <div className="mt-5 md:text-left">
              <h3 className="text-[22px] sm:text-2xl font-semibold tracking-tight text-slate-800">
                Nature&apos;s Essence
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Durul Hair Oil by VITALIST blends pure botanicals, crafting hair
                wellness rooted in natural, ethical care.
              </p>

              <a
                href="/order-now"
                className="mt-2 inline-flex text-sm font-semibold text-slate-800 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-800 mb-10"
              >
                View Details
              </a>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/70 to-transparent z-10" />
    </section>
  );
}
