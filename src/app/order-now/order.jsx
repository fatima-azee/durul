"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ChevronLeft, ChevronRight, Heart, X } from "lucide-react";

/** ------- Product data (replace with real data/CMS) ------- */
const PRODUCT = {
  title: "VITALIST's Natural Boost: Revitalizing Hair & Scalp Oil",
  price: 1750,         // first bottle price (includes one-time extra in logic only)
  extraFirst: 400,     // one-time extra (logic-only; not shown in UI)
  currency: "PKR",
  compareAt: 2000,
  short:
    "VITALIST's natural Boost is a 100% natural hair and scalp oil, enriched with Rosemary, Castor, Biotin, and other potent botanicals. Experience stronger, healthier hair with reduced breakage and enhanced shine.",
  gallery: ["/images/2.png", "/images/3.png", "/images/1.png"],
  category: { name: "Hair & Scalp Oil", href: "/order-now" },
  brand: { name: "VITALIST", href: "/" },
};

// Your WhatsApp number in international format (no + sign)
const WHATSAPP_NUMBER = "923290137325";

/* ---------- Helpers ---------- */
function currencyFmt(value, currency = "PKR") {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

// Rule in logic only: first bottle at PRODUCT.price (incl. 400 once),
// each additional bottle costs (price - extraFirst) = 1350
function calcTotal(qty, price, extraFirst) {
  const additionalUnit = Math.max(0, price - extraFirst); // 1750 - 400 = 1350
  if (qty <= 1) return price;
  return price + (qty - 1) * additionalUnit;
}

/* ---------- Price block (no rule shown) ---------- */
function Price({ base, compareAt, currency = "PKR" }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <span className="text-xl line-through text-gray-400">
          {currencyFmt(compareAt, currency)}
        </span>
        <span className="text-[#1a7b42] text-2xl font-semibold">
          {currencyFmt(base, currency)}
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

  // Modal/form state
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState(null); // "basket" | "whatsapp"
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    quantity: 1,
  });

  // Keep form.quantity synced when qty changes on product page
  useMemo(() => {
    setForm((f) => ({ ...f, quantity: qty }));
  }, [qty]);

  const total = calcTotal(qty, PRODUCT.price, PRODUCT.extraFirst);

  const openForm = (which) => {
    setIntent(which);
    setForm((f) => ({ ...f, quantity: qty }));
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
    setMsg("");
    setIntent(null);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const v = name === "quantity" ? Math.max(1, Number(value)) : value;
    setForm((f) => ({ ...f, [name]: v }));
  };

  const makeOrderSummary = () => {
    return [
      `New Order Request`,
      `---------------------`,
      `Product: ${PRODUCT.title}`,
      `Quantity: ${form.quantity}`,
      `Total: ${PRODUCT.currency} ${calcTotal(form.quantity, PRODUCT.price, PRODUCT.extraFirst)}`,
      ``,
      `Customer Details`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `WhatsApp: ${form.whatsapp}`,
      `Email: ${form.email || "—"}`,
      `Address: ${form.address}`,
    ].join("\n");
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!form.whatsapp.trim()) return "Please enter your WhatsApp number.";
    if (!form.address.trim()) return "Please enter your address.";
    if (!form.quantity || form.quantity < 1) return "Quantity must be at least 1.";
    return null;
  };

  const handleSendWhatsApp = () => {
    const error = validate();
    if (error) {
      setMsg(error);
      return;
    }
    const text = encodeURIComponent(makeOrderSummary());
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(waUrl, "_blank");
    setMsg("Opening WhatsApp…");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-10 mt-24 text-slate-900 bg-white">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: gallery */}
        <div className="lg:col-span-6">
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

          {/* Thumbnails */}
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

          <Price base={PRODUCT.price} compareAt={PRODUCT.compareAt} currency={PRODUCT.currency} />

          <p className="text-slate-700 leading-7">{PRODUCT.short}</p>

          {/* qty + total row, then buttons row */}
          <div className="flex flex-col gap-3 pt-2">
            {/* Row 1: qty + total */}
            <div className="flex flex-wrap items-center gap-4">
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
              <span className="text-sm sm:text-base text-slate-700">
                Total for {qty} {qty > 1 ? "bottles" : "bottle"}:{" "}
                <span className="font-semibold">{currencyFmt(total, PRODUCT.currency)}</span>
              </span>
            </div>

            {/* Row 2: buttons on the same line */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                className="inline-flex items-center gap-2 rounded-md bg-[#2d3e3f] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90"
                onClick={() => openForm("basket")}
              >
                <ShoppingCart className="h-4 w-4" /> Add to Basket
              </button>

              <button
                onClick={() => openForm("whatsapp")}
                className="inline-flex items-center justify-center rounded-md bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-95"
                aria-label="Order on WhatsApp"
              >
                WhatsApp Order
              </button>
            </div>
          </div>

          {/* wishlist */}
          <button
            onClick={() => setWish((w) => !w)}
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800"
          >
            <Heart className={`h-4 w-4 ${wish ? "fill-rose-500 stroke-rose-500" : ""}`} />
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

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <h3 className="text-base sm:text-lg font-semibold">
                {intent === "whatsapp" ? "WhatsApp Order" : "Add to Basket"}
              </h3>
              <button
                onClick={closeForm}
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Sticky summary with live total (no rule text) */}
            <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
              <div className="text-sm text-slate-700 flex flex-wrap gap-x-4 gap-y-1">
                <span className="font-medium">{PRODUCT.title}</span>
                <span>Qty: {form.quantity}</span>
                <span>
                  Total:{" "}
                  <strong>
                    {currencyFmt(
                      calcTotal(form.quantity, PRODUCT.price, PRODUCT.extraFirst),
                      PRODUCT.currency
                    )}
                  </strong>
                </span>
              </div>
            </div>

            {/* Scrollable body — SINGLE COLUMN */}
            <div className="px-5 py-4 max-h-[60vh] overflow-y-auto">
              <form className="grid grid-cols-1 gap-3">
                <div className="grid gap-1.5">
                  <label className="text-xs font-medium">Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label className="text-xs font-medium">Phone *</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="03xx xxxxxxx or +92…"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label className="text-xs font-medium">WhatsApp *</label>
                  <input
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={onChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="WhatsApp number"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label className="text-xs font-medium">Email (optional)</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label className="text-xs font-medium">Address *</label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={onChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
                    rows={3}
                    placeholder="House, street, area, city"
                  />
                </div>

                <div className="grid gap-1.5 w-36">
                  <label className="text-xs font-medium">Quantity *</label>
                  <input
                    name="quantity"
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={onChange}
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                {!!msg && (
                  <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-3 py-2">
                    {msg}
                  </p>
                )}
              </form>
            </div>

            {/* Footer (button always visible) */}
            <div className="px-5 py-4 border-t border-gray-200 bg-white">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full inline-flex items-center justify-center rounded-md bg-[#25D366] text-white px-5 py-3 text-sm font-semibold hover:opacity-95"
              >
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
