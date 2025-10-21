"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

const CBody = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
    __hp: "", // honeypot
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
  const canSubmit = useMemo(() => {
    return (
      formData.name.trim().length >= 2 &&
      isEmail(formData.email) &&
      formData.subject.trim().length >= 2 &&
      formData.message.trim().length >= 5 &&
      !submitting
    );
  }, [formData, submitting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // quick client-side checks
    if (!canSubmit) {
      setStatus({ type: "error", message: "Please complete all required fields properly." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          subject: formData.subject.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          __hp: formData.__hp, // honeypot
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        setFormData({
          name: "",
          subject: "",
          email: "",
          phone: "",
          message: "",
          __hp: "",
        });
        setStatus({ type: "success", message: "Thank you! We will get back to you soon." });
      } else {
        setStatus({
          type: "error",
          message: data?.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
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
              <p>
                <strong>Backside DHQ near Wapda office, Sargodha, Punjab Pakistan</strong>
                &nbsp; +92 329 0137325
              </p>
              <p className="text-[#7D090F]">durulhairoil@gmail.com</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="__hp"
                value={formData.__hp}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="border border-[#7D090F] px-4 py-2 w-full"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
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
                  autoComplete="email"
                  className="border border-[#7D090F] px-4 py-2 w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="border border-[#7D090F] px-4 py-2 w-full"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us how we can help you"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="border border-[#7D090F] px-4 py-2 w-full resize-none"
                required
              />

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`px-10 py-2 text-white ${
                    submitting || !canSubmit ? "bg-[#7D090F]/70 cursor-not-allowed" : "bg-[#7D090F]"
                  }`}
                >
                  {submitting ? "SENDING..." : "SUBMIT"}
                </button>
              </div>
            </form>

            {status.message && (
              <p
                className={`mt-4 text-sm ${
                  status.type === "success" ? "text-green-600" : "text-[#7D090F]"
                }`}
              >
                {status.message}
              </p>
            )}
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
