"use client";
import { useState } from "react";
import Image from "next/image";

const CBody = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({
          name: "",
          subject: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("Thank you! We will get back to you soon.");
      } else throw new Error();
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-white text-black">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-x-6">
        {/* Left Side: Contact Info + Form */}
        <div className="flex flex-col justify-center px-4 md:px-8 py-12">
          <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 tracking-wide">GET IN TOUCH</h2>

            <div className="space-y-2 mb-6">
              <p><strong>Backside DHQ near Wapda office, Sargodha, Punjab Pakistan</strong> &nbsp; +92 329 0137325</p>
              <p className="text-[#7D090F]">durulhairoil@gmail.com</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-[#7D090F] px-4 py-2 w-full"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Last Name"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border border-[#7D090F] px-4 py-2 w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-[#7D090F] px-4 py-2 w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-[#7D090F] px-4 py-2 w-full"
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us how can we help you"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="border border-[#7D090F] px-4 py-2 w-full resize-none"
                required
              ></textarea>
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-[#7D090F] text-white px-10 py-2"
                >
                  SUBMIT
                </button>
              </div>
            </form>

            {status && <p className="mt-4 text-sm text-[#7D090F]">{status}</p>}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:block w-full max-h-[600px] overflow-hidden flex items-center">
          <Image
            src="/images/C-1.avif"
            alt="Contact Visual"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CBody;
