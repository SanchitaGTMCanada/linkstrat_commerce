
"use client";

import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Corporate Office",
    subtitle: "Visit our office",
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
    subtitle: "Send us an email",
    content: "info@linkstratglobal.com",
    href: "mailto:info@linkstratglobal.com",
  },
  {
    icon: Phone,
    title: "Phone Number",
    subtitle: "Speak with our team",
    content: "033 40443489",
    href: "tel:03340443489",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden sm:min-h-[370px] lg:min-h-[430px]">

        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/videos/contact-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* DARK VIDEO OVERLAY */}
        <div className="absolute inset-0 bg-[#101D32]/55" />

        {/* LEFT TO RIGHT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32]/85 via-[#101D32]/55 to-[#101D32]/20" />

        {/* HERO CONTENT */}
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
              Contact Us.
            </h1>

            {/* <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/80 sm:text-base">
              Have a business enquiry or looking for reliable global trade
              solutions? We would love to hear from you.
            </p> */}

          </motion.div>
        </div>

        {/* BOTTOM ACCENT */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#526B1D] via-[#FF6B00] to-[#526B1D]" />
      </section>

      {/* COMMUNICATION DETAILS */}
      <section className="relative overflow-hidden bg-[#F8F9F6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        {/* BACKGROUND DECORATIONS */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#E4EBD9]/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#FBE8DA]/50 blur-3xl" />

        <div className="container-main relative z-10 mx-auto">

      

          {/* CONTACT INFORMATION CARDS */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-[24px] border border-[#E3E9DC] bg-white p-7 shadow-[0_10px_35px_rgba(16,29,50,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B00]/40 hover:shadow-[0_18px_45px_rgba(16,29,50,0.09)] sm:p-9"
                >
                  {/* CARD DECORATION */}
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#EEF1E8]/70 transition-all duration-500 group-hover:scale-125 group-hover:bg-[#FBE8DA]/70" />

                  {/* ICON */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E3E9DC] bg-[#EEF1E8] text-[#526B1D] transition-all duration-300 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  {/* CARD CONTENT */}
                  <div className="relative z-10 mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#526B1D]">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#101D32]">
                      {item.title}
                    </h3>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-3 inline-flex items-center gap-2 text-sm leading-7 text-[#666666] transition-colors hover:text-[#FF6B00]"
                      >
                        {item.content}
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <p className="mt-3 text-sm leading-7 text-[#666666]">
                        {item.content}
                      </p>
                    )}
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-[#FF6B00] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}

          </div>

          {/* COMMUNICATION HIGHLIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[24px] border border-[#E3E9DC] bg-white p-7 shadow-sm sm:flex-row sm:p-9"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF1E8] text-[#526B1D]">
                <MessageCircle size={26} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#101D32]">
                  Let's Build a Connection
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#777777]">
                  Connect directly with our team for business enquiries
                  and partnership opportunities.
                </p>
              </div>
            </div>

            <a
              href="mailto:info@linkstratglobal.com"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#FF6B00] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00]"
            >
              Email Our Team
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

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

          {/* MAP LOCATION LABEL */}
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
      {/* <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
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
      </section> */}

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
