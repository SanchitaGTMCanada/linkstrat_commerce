
"use client";

import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  PackageCheck,
  Truck,
  Warehouse,
  ArrowDown,
} from "lucide-react";

const processes = [
  {
    number: "01",
    title: "Procurement",
    subtitle: "Strategic sourcing",
    description:
      "We procure our products from selective vendors ensuring satisfaction of customer",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Quality Control",
    subtitle: "Quality assurance",
    description:
      "Stringent quality checks. Ensure top-notch standards. Reliable quality control.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Processing & Packaging",
    subtitle: "Careful preparation",
    description:
      "We process and package the products at our warehouse with utmost safety",
    icon: PackageCheck,
    image:
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Logistics & Shipping",
    subtitle: "Global transportation",
    description:
      "We ensure that our logistics team helps in bridging the gap between product and customer",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Warehouse & Distribution",
    subtitle: "Reliable delivery",
    description:
      "Our distribution team ensures that the product reaches our customer on time and",
    icon: Warehouse,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
  },
];

export default function HowWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#F4F5F0] py-5 sm:py-7 lg:py-10">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#E2E7EC]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#E8E9E2]/60 blur-3xl" />

      {/* SUBTLE BACKGROUND PATTERN */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#101D32 0.7px, transparent 0.7px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container-main relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#FF6B00]" />
            <span className="text-sm font-semibold uppercase tracking-[2.5px] text-[#101D32]">
             How We Do
            </span>
            <span className="h-[2px] w-9 bg-[#FF6B00]" />
          </div>

          <h2 className="mt-5 text-[36px] font-bold leading-tight tracking-[-1px]  sm:text-[46px] lg:text-[54px]">
             <span className="text-[#FF6B00]">What We Do</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.85] text-[#4B5563] sm:text-[18px]">
            A structured, quality-focused approach that connects
            international sourcing with reliable delivery.
          </p>
        </motion.div>

        {/* PROCESS TIMELINE */}
        <div className="relative">

          {/* CONNECTING LINE - DESKTOP */}
          <div className="absolute left-[10%] right-[10%] top-[45px] hidden h-[2px] bg-[#CBD1D9] lg:block" />

          {/* PROCESS ITEMS */}
          <div className="grid items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">

            {processes.map((process, index) => {
              const Icon = process.icon;

              return (
                <motion.div
                  key={process.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group relative flex h-full flex-col items-center text-center"
                >

                  {/* ICON NODE */}
                  <div className="relative z-10 flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#F4F5F0] bg-[#101D32] text-white shadow-[0_0_0_1px_#CBD1D9] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF6B00]">
                    <Icon size={34} strokeWidth={1.6} />
                  </div>

                  {/* PROCESS CARD */}
                  <div className="mt-3 flex min-h-[450px] w-full flex-1 flex-col overflow-hidden rounded-2xl border border-[#E0E3DC] bg-white shadow-[0_8px_25px_rgba(16,29,50,0.07)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6B00]/40 group-hover:shadow-[0_18px_40px_rgba(16,29,50,0.13)]">

                    {/* CARD IMAGE */}
                    <div className="relative h-[170px] w-full shrink-0 overflow-hidden">
                      <img
                        src={process.image}
                        alt={process.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/75 via-transparent to-transparent" />

                      {/* IMAGE NUMBER */}
                      <span className="absolute bottom-4 left-5 text-[32px] font-light tracking-wide text-white/95">
                        {process.number}
                      </span>

                      {/* ICON BADGE */}
                      <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-[#101D32]/90 text-[#FF6B00] shadow-lg backdrop-blur-sm">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">

                      {/* TITLE */}
                      <h3 className="flex min-h-[64px] items-center justify-center text-[19px] font-bold leading-[1.35] text-[#101D32]">
                        {process.title}
                      </h3>

                      {/* SUBTITLE */}
                      {/* <p className="mt-2 min-h-[36px] text-xs font-semibold uppercase tracking-[1px] text-[#FF6B00]">
                        {process.subtitle}
                      </p> */}

                      {/* ACCENT */}
                      <div className="mx-auto my-4 h-[2px] w-12 shrink-0 rounded-full bg-[#FF6B00] transition-all duration-300 group-hover:w-20" />

                      {/* DESCRIPTION */}
                      <p className="flex-1 text-[17px] leading-[1.8] text-[#596273]">
                        {process.description}
                      </p>

                      {/* CARD BOTTOM */}
                      <div className="mt-5 border-t border-[#E9EBE6] pt-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#101D32]">
                          Process {process.number}
                        </span>
                      </div>
                    </div>

                    {/* BOTTOM ACCENT */}
                    <div className="h-[3px] w-0 bg-[#FF6B00] transition-all duration-500 group-hover:w-full" />
                  </div>

                  {/* MOBILE CONNECTOR */}
                  {index !== processes.length - 1 && (
                    <div className="mt-5 flex justify-center text-[#FF6B00] lg:hidden">
                      <ArrowDown size={22} />
                    </div>
                  )}

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* BOTTOM HIGHLIGHT */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#101D32] px-7 py-8 text-center shadow-[0_12px_30px_rgba(16,29,50,0.15)] sm:flex-row sm:px-10 sm:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Every step. Every detail. Every commitment.
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base">
              A process-driven approach built around reliability and trust.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#FF6B00]" />

            <span className="text-sm font-semibold text-white">
              Quality & Reliability
            </span>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}
