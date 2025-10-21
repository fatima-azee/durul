"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Ccta() {
  return (
    <>
      {/* Desktop (right center) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="hidden md:flex md:fixed md:top-1/2 md:right-6 md:-translate-y-1/2 md:z-50 md:w-[320px]"
      >
        <div className="relative backdrop-blur-[2px] bg-white/80 border border-[#e6ddcf] rounded-2xl p-5 md:p-6 w-full shadow-sm overflow-hidden">
          {/* Animated golden shimmer */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none">
            <div className="animate-shimmer h-full w-[200%] bg-gradient-to-r from-transparent via-[#c9973f80] to-transparent" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-4 relative z-10">
            <h2 className="text-base font-semibold leading-snug text-[#1c1c1c]">
              Durul Hair Oil
            </h2>
            <Link
              href="/order-now"
              className="shrink-0 inline-flex items-center justify-center rounded-full border border-[#d6cbbd] px-4 py-2 text-sm font-semibold hover:bg-[#d6cbbd] hover:text-white transition"
            >
              Buy Now
            </Link>
          </div>

          {/* Features */}
          <ul className="grid grid-cols-3 gap-3 text-[12px] text-[#6b6154] relative z-10">
            <li className="flex items-center gap-2 whitespace-nowrap">
              <span className="inline-block h-4 w-4 rounded-full border border-[#c4b7a5]" />
              Sulfate free
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap">
              <span className="inline-block h-4 w-4 rounded-full border border-[#c4b7a5]" />
              Paraben free
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap">
              <span className="inline-block h-4 w-4 rounded-full border border-[#c4b7a5]" />
              Silicone free
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Mobile (bottom bar) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 border-t border-[#e6ddcf] p-4 shadow-t md:hidden overflow-hidden"
      >
        {/* Animated golden shimmer */}
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-[#c9973f80] to-transparent" />

        <div className="flex items-center justify-between relative z-10">
          <span className="font-semibold text-sm text-[#1c1c1c]">
            Durul Hair Oil
          </span>
          <Link
            href="/order-now"
            className="inline-flex items-center justify-center rounded-full border border-[#d6cbbd] px-4 py-2 text-sm font-semibold hover:bg-[#d6cbbd] hover:text-white transition"
          >
            Buy Now
          </Link>
        </div>
      </motion.div>

      {/* Embedded shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3.5s linear infinite;
        }
      `}</style>
    </>
  );
}
