
"use client";

import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Send,
  Globe2,
  Clock3,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Website Enquiry from ${formData.firstName} ${formData.lastName}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`
    );

    window.location.href = `mailto:info@linkstratglobal.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Corporate Office",
      content: (
        <>
          324A, Jodhpur Park,
          <br />
          Kolkata, West Bengal 700068, India
        </>
      ),
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@linkstratglobal.com",
      href: "mailto:info@linkstratglobal.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "033 40443489",
      href: "tel:03340443489",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden sm:min-h-[370px] lg:min-h-[430px]">

        {/* World Map Background */}
        <img
          src="/images/contact/contact-banner.jpg"
          alt="Global business connections"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#101D32]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32]/75 via-[#101D32]/35 to-transparent" />

        <div className="container-main relative z-10 mx-auto w-full px-5 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-[#FF6B00]" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-white/85">
                Let's Connect
              </span>
              <span className="h-[2px] w-9 rounded-full bg-[#FF6B00]" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact <span className="text-[#FF8533]">Us.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/80 sm:text-base">
              Have a business enquiry or looking for reliable global trade
              solutions? We would love to hear from you.
            </p>

            <div className="mt-7 flex items-center justify-center gap-3 text-sm text-white/75">
              <a href="/" className="transition hover:text-[#FF8533]">
                Home
              </a>
              <span className="text-[#FF8533]">/</span>
              <span className="font-semibold text-white">Contact Us</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#526B1D] via-[#FF6B00] to-[#526B1D]" />
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="relative overflow-hidden bg-[#F8F9F6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#E4EBD9]/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#FBE8DA]/50 blur-3xl" />

        <div className="container-main relative z-10 mx-auto">

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* LEFT: CONTACT INFORMATION */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[3px] w-10 rounded-full bg-[#FF6B00]" />
                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#526B1D]">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-[36px] font-bold leading-[1.15] text-[#101D32] sm:text-[44px] lg:text-[50px]">
                Let's work
                <br />
                <span className="text-[#FF6B00]">together!</span>
                <br />
                Please drop us a line.
              </h2>

              <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-[#707070]">
                Whether you are exploring sourcing opportunities, logistics
                support or international trade partnerships, our team is
                ready to assist.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-7">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E3E9DC] bg-white text-[#526B1D] shadow-sm transition-all duration-300 group-hover:border-[#526B1D] group-hover:bg-[#526B1D] group-hover:text-white">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <div className="pt-1">
                        <h3 className="text-sm font-bold text-[#101D32]">
                          {item.title}
                        </h3>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-2 inline-block text-sm leading-7 text-[#666666] transition hover:text-[#FF6B00]"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="mt-2 text-sm leading-7 text-[#666666]">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Office Availability */}
              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-[#E3E9DC] bg-white p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF1E8] text-[#526B1D]">
                  <Clock3 size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#101D32]">
                    Let's Start a Conversation
                  </p>
                  <p className="mt-1 text-xs leading-6 text-[#888888]">
                    Reach out to discuss your business requirements.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[26px] border border-[#E5E9E0] bg-white p-6 shadow-[0_15px_50px_rgba(16,29,50,0.07)] sm:p-9 lg:p-11"
            >

              {/* Form Decoration */}
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#EEF1E8]/80 blur-2xl" />

              <div className="relative z-10">

                <div className="mb-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF1E8] text-[#526B1D]">
                    <MessageCircle size={23} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#101D32] sm:text-3xl">
                    Send Us an Enquiry
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#777777]">
                    Fill in the details below and tell us how we can help
                    your business.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* First and Last Name */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-semibold text-[#292929]"
                      >
                        First Name <span className="text-[#FF6B00]">*</span>
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        className="w-full rounded-xl border border-[#DDE2D8] bg-[#FAFBF9] px-4 py-3.5 text-sm text-[#292929] outline-none transition-all placeholder:text-[#A0A0A0] focus:border-[#526B1D] focus:bg-white focus:ring-4 focus:ring-[#526B1D]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-semibold text-[#292929]"
                      >
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        className="w-full rounded-xl border border-[#DDE2D8] bg-[#FAFBF9] px-4 py-3.5 text-sm text-[#292929] outline-none transition-all placeholder:text-[#A0A0A0] focus:border-[#526B1D] focus:bg-white focus:ring-4 focus:ring-[#526B1D]/10"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      Email Address <span className="text-[#FF6B00]">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#DDE2D8] bg-[#FAFBF9] px-4 py-3.5 text-sm text-[#292929] outline-none transition-all placeholder:text-[#A0A0A0] focus:border-[#526B1D] focus:bg-white focus:ring-4 focus:ring-[#526B1D]/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-[#DDE2D8] bg-[#FAFBF9] px-4 py-3.5 text-sm text-[#292929] outline-none transition-all placeholder:text-[#A0A0A0] focus:border-[#526B1D] focus:bg-white focus:ring-4 focus:ring-[#526B1D]/10"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      Your Message <span className="text-[#FF6B00]">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full resize-y rounded-xl border border-[#DDE2D8] bg-[#FAFBF9] px-4 py-3.5 text-sm text-[#292929] outline-none transition-all placeholder:text-[#A0A0A0] focus:border-[#526B1D] focus:bg-white focus:ring-4 focus:ring-[#526B1D]/10"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#FF6B00]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00] hover:shadow-xl sm:w-auto sm:min-w-[190px]"
                  >
                    Send Enquiry
                    <Send size={17} />
                  </button>

                  {submitted && (
                    <p className="text-sm leading-6 text-[#526B1D]">
                      Your email application should now open with your
                      enquiry details. Please send the email to complete
                      your enquiry.
                    </p>
                  )}

                  <p className="text-xs leading-6 text-[#999999]">
                    Your information will be used to respond to your
                    business enquiry.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="relative bg-[#EEF1E8]">
        <div className="relative h-[350px] overflow-hidden sm:h-[420px] lg:h-[500px]">

          <iframe
            title="Linkstrat Global Commerce Kolkata Office Location"
            src="https://www.google.com/maps?q=324A%20Jodhpur%20Park%2C%20Kolkata%2C%20West%20Bengal%20700068%2C%20India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Map Location Label */}
          <div className="absolute bottom-6 left-5 z-10 max-w-[290px] rounded-2xl border border-[#E5E9E0] bg-white p-4 shadow-xl sm:bottom-8 sm:left-10">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF1E8] text-[#526B1D]">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#101D32]">
                  Our Corporate Office
                </p>
                <p className="mt-1 text-xs leading-5 text-[#777777]">
                  324A, Jodhpur Park, Kolkata,
                  West Bengal 700068, India
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=324A+Jodhpur+Park+Kolkata+West+Bengal+700068+India"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#526B1D] transition hover:text-[#FF6B00]"
            >
              Get Directions
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="container-main mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[26px] bg-[#101D32] px-7 py-10 sm:px-12 sm:py-14"
          >
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-5 -top-16 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#FF8533]">
                  Your Global Trade Partner
                </span>

                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Let's Build Something
                  <span className="text-[#AFC18C]"> Together.</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                  Connect with Linkstrat Global Commerce and explore
                  opportunities for reliable international trade.
                </p>
              </div>

              <a
                href="mailto:info@linkstratglobal.com"
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00]"
              >
                Email Our Team
                <ArrowUpRight size={19} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
