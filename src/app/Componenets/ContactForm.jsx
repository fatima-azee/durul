"use client";
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setStatus("Message submitted successfully.");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="contact-us"
      className="bg-[#f5ede5] py-12 px-4 sm:px-8 lg:px-16 text-black max-w-6xl mx-auto"
    >
      {/* Section Title */}
      <div className="flex flex-col items-center mb-10">
     
        <h2 className="mt-10 mb-6 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          CONTACT US
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8"
      >
        {/* Left Column */}
        <div className="flex flex-col space-y-6 px-4">
          <div>
            <label className="block mb-1 text-sm">Your Name (required)</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Your Email (required)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Mobile Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
              placeholder="05X-XXXXXXX"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
              placeholder="Interior Design Inquiry"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full justify-between space-y-4 px-4">
          <div>
            <label className="block mb-1 text-sm">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="10"
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent resize-none focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="flex justify-start mt-4">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 border border-[#a16848] text-[#a16848] hover:bg-[#a16848] hover:text-white transition"
            >
              <RiSendPlaneFill />
              SEND EMAIL
            </button>
          </div>
        </div>
      </form>

      {/* Feedback Message */}
      {status && (
        <div className="text-center mt-6 text-sm text-[#a16848]">
          {status}
        </div>
      )}
    </section>
  );
};

export default ContactForm;
