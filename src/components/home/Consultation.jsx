
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Globe2,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Consultation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Consultation Request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`
    );

    window.location.href = `mailto:info@linkstratglobal.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "info@linkstratglobal.com",
    },
    {
      icon: MapPin,
      label: "Head Office",
      value: "Kolkata, India",
    },
    {
      icon: Globe2,
      label: "Global Reach",
      value: "Canada to India",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container-main relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#FF6B00]" />
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#526B1D]">
                Let's Connect
              </span>
            </div>

            <h2 className="max-w-xl text-[38px] font-bold leading-[1.12] text-[#292929] sm:text-[48px] lg:text-[58px]">
              Need Reliable
              <br />
              <span className="text-[#FF6B00]">Logistics Solutions?</span>
            </h2>

            <p className="mt-6 max-w-lg text-[16px] leading-[1.9] text-[#666666] sm:text-[18px]">
              Whether you're exploring sourcing opportunities or planning
              international shipments, our team is ready to help you find the
              right solution.
            </p>

            <div className="mt-9 space-y-5">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EDF2E5] text-[#526B1D]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#999999]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[15px] font-semibold text-[#292929] sm:text-[16px]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-[#EAEAE7] pt-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0E5] text-[#FF6B00]">
                <Phone size={18} />
              </div>
              <p className="text-sm leading-relaxed text-[#666666]">
                Have a project in mind? Let's discuss your requirements.
              </p>
            </div>
          </motion.div>

          {/* Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[28px] border border-[#E8E8E4] bg-[#F8F8F6] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-9 lg:p-10"
          >
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#526B1D]">
                Get Started
              </span>

              <h3 className="mt-3 text-[27px] font-bold text-[#292929] sm:text-[32px]">
                Request a Consultation
              </h3>

              <p className="mt-2 text-[14px] leading-relaxed text-[#777777] sm:text-[15px]">
                Share your requirements and our team will get in touch.
              </p>
            </div>

            {submitted ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={54} className="text-[#526B1D]" />
                <h4 className="mt-5 text-2xl font-bold text-[#292929]">
                  Your email draft is ready!
                </h4>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#777777]">
                  Please send the prepared email from your mail application to
                  complete your consultation request.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-bold text-[#FF6B00] hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#444444]">
                      Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#E2E2DE] bg-white px-4 py-3.5 text-sm text-[#292929] outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#444444]">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#E2E2DE] bg-white px-4 py-3.5 text-sm text-[#292929] outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#444444]">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-[#E2E2DE] bg-white px-4 py-3.5 text-sm text-[#292929] outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#444444]">
                      Service Required *
                    </label>
                    <select
                      required
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#E2E2DE] bg-white px-4 py-3.5 text-sm text-[#555555] outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
                    >
                      <option value="">Select a service</option>
                      <option>Procurement and Sourcing</option>
                      <option>Logistics and Transportation</option>
                      <option>Customs and Documentation</option>
                      <option>Export Strategy and Market Integration</option>
                      <option>Supply Chain Optimization</option>
                      <option>Overseas Logistics Consultancy</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#444444]">
                    Tell Us About Your Requirements *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your sourcing, logistics or trade requirements..."
                    className="w-full resize-none rounded-xl border border-[#E2E2DE] bg-white px-4 py-3.5 text-sm text-[#292929] outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#FF6B00]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00]"
                >
                  Send Consultation Request
                  <Send size={17} />
                </button>

                <p className="text-center text-xs text-[#999999]">
                  Your information will only be used to respond to your enquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
