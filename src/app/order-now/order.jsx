"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ChevronLeft, ChevronRight, Heart } from "lucide-react";

// ------- Mock product data (swap with real data or CMS) -------
const PRODUCT = {
  title: "Urban Eden Botanical Boost: Revitalizing Hair & Scalp Oil",
  price: 1750,
  compareAt: 2000,
  currency: "PKR",
  short:
    "Urban Eden Botanical Boost is a 100% natural hair and scalp oil, enriched with Rosemary, Castor, Biotin, and other potent botanicals. Experience stronger, healthier hair with reduced breakage and enhanced shine.",
  gallery: [
    "/images/2.png",
    "/images/3.png",
    "/images/1.png",
  ],
  category: { name: "Hair & Scalp Oil", href: "/category/hair-oil" },
  brand: { name: "Urban Eden", href: "/brand/urban-eden" },
};

// replace with your WhatsApp number in international format, no plus sign
const WHATSAPP_NUMBER = "923001112222"; 
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi Urban Eden! I'd like to order the Botanical Boost hair & scalp oil."
);

function Price({ value, compareAt, currency = "PKR" }) {
  const fmt = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <span className="text-xl line-through text-gray-400">
          {fmt.format(compareAt)}
        </span>
        <span className="text-[#1a7b42] text-2xl font-semibold">
          {fmt.format(value)}
        </span>
      </div>
      <span className="text-sm text-emerald-700 font-medium">
        Limited time offer — Free Delivery
      </span>
    </div>
  );
}

export default function OrderPage() {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [wish, setWish] = useState(false);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-10 mt-24 text-slate-900 bg-white">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: gallery */}
        <div className="lg:col-span-6">
          {/* Match your image ratio: 1350x1080 = 5:4 */}
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <Image
              src={PRODUCT.gallery[active]}
              alt={`Product image ${active + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {PRODUCT.gallery.length > 1 && (
              <>
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center rounded-full border border-gray-300 bg-white/80 p-2 hover:bg-white"
                  onClick={() =>
                    setActive((active - 1 + PRODUCT.gallery.length) % PRODUCT.gallery.length)
                  }
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center rounded-full border border-gray-300 bg-white/80 p-2 hover:bg-white"
                  onClick={() => setActive((active + 1) % PRODUCT.gallery.length)}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbs (also 5:4 to avoid any crop mismatch) */}
          <div className="mt-4 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
            {PRODUCT.gallery.map((src, i) => (
              <button
                key={i}
                className={`relative aspect-[5/4] overflow-hidden rounded-lg border border-gray-200 ${
                  active === i ? "ring-2 ring-emerald-600" : ""
                }`}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: info */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-800">
            {PRODUCT.title}
          </h1>

          <Price
            value={PRODUCT.price}
            compareAt={PRODUCT.compareAt}
            currency={PRODUCT.currency}
          />

          <p className="text-slate-700 leading-7">{PRODUCT.short}</p>

          {/* quantity + buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center rounded-lg border border-gray-300">
              <button
                className="px-3 py-2"
                onClick={() => setQty(Math.max(1, qty - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center select-none">{qty}</span>
              <button
                className="px-3 py-2"
                onClick={() => setQty(qty + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button className="inline-flex items-center gap-2 rounded-md bg-[#2d3e3f] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90">
              <ShoppingCart className="h-4 w-4" /> Add to Basket
            </button>

            {/* WhatsApp order */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-95"
              aria-label="Order on WhatsApp"
            >
              WhatsApp Order
            </a>
          </div>

          {/* wishlist */}
          <button
            onClick={() => setWish((w) => !w)}
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800"
          >
            <Heart
              className={`h-4 w-4 ${wish ? "fill-rose-500 stroke-rose-500" : ""}`}
            />
            Add to Wishlist
          </button>

          {/* meta */}
          <dl className="mt-2 divide-y divide-gray-200 rounded-lg border border-gray-200">
            <div className="grid grid-cols-3 gap-2 px-4 py-2 text-sm">
              <dt className="text-slate-500">Category</dt>
              <dd className="col-span-2">
                <Link href={PRODUCT.category.href} className="hover:underline">
                  {PRODUCT.category.name}
                </Link>
              </dd>
            </div>
            <div className="grid grid-cols-3 gap-2 px-4 py-2 text-sm">
              <dt className="text-slate-500">Brand</dt>
              <dd className="col-span-2">
                <Link href={PRODUCT.brand.href} className="hover:underline">
                  {PRODUCT.brand.name}
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
