"use client";

import React, { useState } from "react";

export default function ProductDetailsTabs() {
  const [tab, setTab] = useState("desc");
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    orderId: "",
    rating: 5,
    message: "",
  });
  const [status, setStatus] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    // basic validation
    if (!form.name || !form.email || !form.city || !form.orderId || !form.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    // OPTIONAL: send to your API
    try {
      // await fetch("/api/reviews", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setReviews((r) => [{ ...form, id: Date.now() }, ...r]);
      setForm({ name: "", email: "", city: "", orderId: "", rating: 5, message: "" });
      setStatus("Thanks! Your review has been submitted.");
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className=" bg-[#f6f7f8] text-[#2d3e3f] rounded-none">
      {/* subtle top gradient like the screenshot */}
      <div className="h-6 w-full bg-gradient-to-b from-black/5 to-transparent" />

      {/* inner white sheet */}
      <div className="mx-auto max-w-5xl bg-white px-4 sm:px-6 pt-2 pb-10">
        {/* Tabs header centered */}
        <div className="flex items-center justify-center gap-10 border-b border-gray-200">
          {[
            { id: "desc", label: "DESCRIPTION" },
            { id: "reviews", label: `REVIEWS (${reviews.length})` },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative py-3 text-sm font-semibold tracking-wide ${
                tab === t.id ? "text-[#2d3e3f]" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t.label}
              {tab === t.id && (
                <span className="absolute left-0 right-0 -bottom-px mx-auto h-0.5 w-24 bg-[#2d3e3f]" />
              )}
            </button>
          ))}
          <div className="ml-auto hidden md:block text-xs text-gray-400 font-semibold py-3 select-none uppercase tracking-wide">
            
          </div>
        </div>

        {/* Tab content */}
        {tab === "desc" && (
          <div className="pt-6 space-y-6">
            <p className="text-sm text-gray-500">Description</p>

            <div>
              <h3 className="font-semibold text-[#2d3e3f]">
                Urban Eden Botanical Boost: Revitalizing Hair & Scalp Oil – Unleash Your Hair’s Natural Vitality
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Discover the transformative power of nature with Urban Eden’s Botanical Boost Revitalizing Hair & Scalp Oil. This meticulously crafted blend of 100% natural ingredients is your go-to solution for achieving healthier, stronger, and more radiant hair. Our lightweight, non-greasy formula deeply nourishes and revitalizes, addressing common hair concerns while promoting overall scalp health.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#2d3e3f]">Key Benefits:</h4>
              <ul className="mt-2 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span><span className="font-medium">Deep Nourishment & Strengthening:</span> Our unique blend penetrates deep into the hair shaft, providing essential nutrients that strengthen from the roots, reducing breakage and promoting robust hair growth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span><span className="font-medium">Reduced Breakage & Enhanced Growth:</span> Formulated with powerful ingredients like Castor Oil, known for its ability to fortify hair follicles, our oil minimizes breakage and encourages healthy growth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span><span className="font-medium">Intense Scalp Hydration & Dryness Relief:</span> Tea Tree and Lavender Oils work synergistically to hydrate and soothe the scalp, combating dryness and irritation for a balanced, healthy environment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span><span className="font-medium">Lightweight & Non-Greasy Formula:</span> Enjoy the benefits of rich, nourishing oils without the heavy, greasy feel. Our formula absorbs quickly, leaving your hair feeling soft, smooth, and revitalized.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span><span className="font-medium">100% Natural Ingredients:</span> Free from sulfates, mineral oils, and harsh chemicals, ensuring a pure and gentle experience.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#2d3e3f]">Powerful Ingredients for Maximum Results:</h4>
              <ul className="mt-2 space-y-3">
                {[
                  ["Rosemary Oil:", "Stimulates scalp circulation, promoting hair growth and thickness."],
                  ["Castor Oil:", "Deeply nourishes hair follicles, strengthening strands and reducing breakage."],
                  ["Tea Tree Oil:", "Maintains a healthy scalp by reducing dryness and irritation."],
                  ["Lavender Oil:", "Soothes the scalp and creates a balanced environment for hair growth."],
                  ["Biotin (Vitamin B7):", "Strengthens hair from the roots, promoting healthier, more resilient strands."],
                  ["Plus Other Botanical Oils:", "A complementary blend that works in harmony to deliver exceptional results."],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span><span className="font-medium">{k}</span> {v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#2d3e3f]">How to Use:</h4>
              <ul className="mt-2 space-y-3">
                {[
                  "Apply a small amount to clean, damp scalp and hair.",
                  "Massage gently in a circular motion, focusing on thinning or balding areas.",
                  "Use daily for optimal results, or leave in overnight for deeper hydration.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {tab === "reviews" && (
          <div className="pt-6">
            <h3 className="font-semibold text-[#2d3e3f] mb-2">Write a Review</h3>
            <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={onChange} placeholder="Full Name" className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3e3f]" />
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3e3f]" />
              <input name="city" value={form.city} onChange={onChange} placeholder="City" className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3e3f]" />
              <input name="orderId" value={form.orderId} onChange={onChange} placeholder="Order Number" className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3e3f]" />

              <div className="sm:col-span-2 flex items-center gap-3 text-sm">
                <label className="text-gray-600">Rating</label>
                <select name="rating" value={form.rating} onChange={onChange} className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#2d3e3f]">
                  {[5,4,3,2,1].map((r) => (
                    <option key={r} value={r}>{r} ★</option>
                  ))}
                </select>
              </div>

              <textarea name="message" value={form.message} onChange={onChange} placeholder="Your review" rows={5} className="sm:col-span-2 rounded-md border border-gray-300 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#2d3e3f]" />

              <div className="sm:col-span-2 flex items-center justify-between">
                <p className="text-xs text-gray-500">Your email & order number help us verify purchases.</p>
                <button type="submit" className="rounded-md bg-[#2d3e3f] text-white px-5 py-2 text-sm font-semibold hover:opacity-90">Submit Review</button>
              </div>
            </form>

            {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}

            {/* Reviews list */}
            <div className="mt-8 space-y-4">
              {reviews.length === 0 ? (
                <p className="text-gray-500 text-sm">No reviews yet. Be the first to review this product.</p>
              ) : (
                reviews.map((r) => (
                  <div key={r.id} className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <p className="font-medium">{r.name} — {r.city}</p>
                      <span className="text-gray-500">Order #{r.orderId} • {"★".repeat(r.rating)}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">{r.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* subtle bottom gradient like the screenshot */}
      <div className="h-10 w-full bg-gradient-to-t from-black/5 to-transparent" />
    </section>
  );
}
