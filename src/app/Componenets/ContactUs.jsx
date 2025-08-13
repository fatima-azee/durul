"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Your message has been sent successfully!");
        setForm({
          from_name: "",
          from_email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section
      id="contact-us"
      className="bg-[#f5ede5] py-12 px-4 sm:px-8 lg:px-16 text-black"
    >
      {/* Section Title with Arrow */}
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/images/sec-dvd.webp"
          alt="Scroll down arrow"
          width={320}
          height={80}
          className="h-auto w-48 sm:w-64"
        />
        <h2 className="mt-10 mb-6 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          CONTACT US
        </h2>
      </div>
    
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
       
       
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block mb-1 text-sm">Your Name (required)</label>
            <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="John Smith"
              required
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Your Email (required)</label>
            <input
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Mobile Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="05X-XXXXXXX"
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Interior Design Inquiry"
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>
        </div>

       
       
       
        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <div>
            <label className="block mb-1 text-sm">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={9}
              required
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent resize-none focus:outline-none"
            ></textarea>
          </div>
          <div className="mt-6 text-center lg:text-left">
            <button
              type="submit"
              className="px-6 py-2 border border-[#a16848] text-[#a16848] hover:bg-[#a16848] hover:text-white transition"
            >
              SEND EMAIL
            </button>
          </div>
        </div>
      </form>

      {/* Feedback Status */}
      {status && (
        <div className="text-center mt-6 text-sm text-[#a16848]">
          {status}
        </div>
      )}
    </section>
  );
};

export default ContactUs;
