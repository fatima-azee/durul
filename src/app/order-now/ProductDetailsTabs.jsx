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
                Product-Specific Information
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Our product mainly includes plant essence like Arnica which is effective in managing hair loss owing to its antibacterial and fungicidal properties. This helps clear hidden dirt in the scalp and promotes the natural sebum secretion in the hair. Arnica oil also helps in improving the protein content in the hair follicles, thereby strengthening your hair. Jaborandi helps repair and rejuvenate the scalp, promotes hair growth, and alleviates itching and Phosphoric acid is best for hair falling after exhausting diseases. Hair falls after a fever. Hair loss after grief or loss of fluids. Air thins out, gray early , falls out. Mentally the person is dull and listless. It is useful to treat hair loss that occurs as a result of grief and sorrow. Those needing it experience marked thinning and falling of hair. They may have early greying of hair as well. It is also valuable to treat hair loss occurring in the beard area. These three are mainly used while manufacturing this oil excluding others that makes my formula more effective and efficient. 
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#2d3e3f]">Key Benefits:</h4>
              <ul className="mt-2 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span><span className="font-medium">It covers mainly every hair problem such as Dandruff:</span> Characterized by flaky skin on the scalp, often itchy. Hair Loss: Can range from thinning to complete baldness. Dry Scalp: Lack of moisture leading to dryness, itchiness, and flakiness. Frizzy Hair: Hair that is dry, damaged, or lacks moisture, causing it to appear rough and tangled. Heat Damage: Damage to hair from excessive use of heat styling tools. Chemical Damage: Damage from perms, relaxers, or hair dyes. Thinning Hair: Reduction in hair volume and thickness Lack of Shine: Hair appears dull and lifeless Breakage: Hair that easily snaps or breaks. Gray Hair: Hair turning gray, often due to aging or genetics. Scalp Irritation: Redness, itching, or inflammation of the scalp. Traction hair loss: Hair loss caused by tight hairstyles that pull on the hair. Also helps maintain the hair color. </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span><span className="font-medium"><strong>Secret Formula:</strong></span> It contains a specific hair oils (secret formula) that have properties as moisturizing and hair-strengthening, promote hair growth and prevent hair loss,  adding shine and softness to hair, and potentially reducing frizz and dandruff, Thick and rich, it may help with hair growth and scalp health, hair strength and split ends and  calming, moisturizing, and anti-inflammatory properties. Its use can also lead to better sleep.</span>
                </li>
                <br></br>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span><span className="font-medium"><strong>Application Instructions:</strong><br></br><br></br>
                  </span>
                 <ol className="list-decimal list-inside space-y-4 text-slate-700">
                <li>
                 <strong>Short Treatment (30 minutes to 1 hour):</strong> Perfect for a quick detangling boost or to add shine before styling. Apply the oil to damp hair, focusing on the mid-lengths and ends. Wash thoroughly with mild/baby shampoo afterwards.
                </li>
                <li>
                 <strong>Deep Conditioning (2–3 hours):</strong> Ideal for dry, damaged, or frizzy hair. Massage the oil into your scalp and hair, then cover with a shower cap for enhanced absorption. Wash thoroughly with mild/baby shampoo afterwards.
                </li>
                <li>
                 <strong>Overnight Treatment:</strong> For maximum moisture and nourishment, apply the oil before bed and wash it out in the morning. This is great for very dry or coarse hair.
                  </li>
                  </ol>

                  </span>
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
              <h4 className="font-semibold text-[#2d3e3f]"></h4>
              <ul className="mt-2 space-y-3">
                {[
                  
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span><span className="font-medium">{k}</span> {v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#2d3e3f]"></h4>
              <ul className="mt-2 space-y-3">
                {[
                
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
