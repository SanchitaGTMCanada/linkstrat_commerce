
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
      "We procure products from reliable vendors, ensuring quality specifications, competitive sourcing and customer requirements.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Quality Control",
    subtitle: "Quality assurance",
    description:
      "Every product undergoes quality checks to ensure compliance with specifications and expected standards.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Processing & Packaging",
    subtitle: "Careful preparation",
    description:
      "Products are processed, handled and packaged with attention to safety, quality and customer requirements.",
    icon: PackageCheck,
    image:
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Logistics & Shipping",
    subtitle: "Global transportation",
    description:
      "We coordinate transportation and shipping to support efficient movement of products from source to destination.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Warehouse & Distribution",
    subtitle: "Reliable delivery",
    description:
      "Our distribution process focuses on proper handling, storage and timely delivery to customers.",
    icon: Warehouse,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
  },
];

export default function HowWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#EEF1E8] py-20 sm:py-24 lg:py-28">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#DCE5CD]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#F8DCC8]/40 blur-3xl" />

      <div className="container-main relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[2.5px] text-[#526B1D]">
            From Source to Destination
          </span>

          <h2 className="mt-5 text-[36px] font-bold leading-tight tracking-[-1px] text-[#292929] sm:text-[46px] lg:text-[54px]">
            How We <span className="text-[#FF6B00]">Work</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.85] text-[#666666] sm:text-[18px]">
            A structured, quality-focused approach that connects
            international sourcing with reliable delivery.
          </p>
        </motion.div>

        {/* PROCESS TIMELINE */}
        <div className="relative">

          {/* CONNECTING LINE - DESKTOP */}
          <div className="absolute left-[10%] right-[10%] top-[45px] hidden h-[2px] bg-[#D5DDCA] lg:block" />

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
                  <div className="relative z-10 flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#EEF1E8] bg-[#526B1D] text-white shadow-[0_0_0_1px_#D5DDCA] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF6B00]">
                    <Icon size={34} strokeWidth={1.6} />
                  </div>

                  {/* STEP NUMBER */}
                  <span className="mt-5 text-[13px] font-bold tracking-[3px] text-[#FF6B00]">
                    STEP {process.number}
                  </span>

                  {/* PROCESS CARD */}
                  <div className="mt-3 flex min-h-[450px] w-full flex-1 flex-col overflow-hidden rounded-2xl border border-[#E1E6D9] bg-white shadow-[0_5px_20px_rgba(45,60,30,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_rgba(45,60,30,0.12)]">

                    {/* CARD IMAGE */}
                    <div className="relative h-[170px] w-full shrink-0 overflow-hidden">
                      <img
                        src={process.image}
                        alt={process.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172014]/65 via-transparent to-transparent" />

                      {/* Image Number */}
                      <span className="absolute bottom-4 left-5 text-[32px] font-light tracking-wide text-white/90">
                        {process.number}
                      </span>

                      {/* Icon Badge */}
                      <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-[#526B1D] shadow-lg backdrop-blur-sm">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">

                      {/* TITLE */}
                      <h3 className="flex min-h-[64px] items-center justify-center text-[19px] font-bold leading-[1.35] text-[#292929]">
                        {process.title}
                      </h3>

                      {/* SUBTITLE */}
                      <p className="mt-2 min-h-[36px] text-xs font-semibold uppercase tracking-[1px] text-[#526B1D]">
                        {process.subtitle}
                      </p>

                      {/* ACCENT */}
                      <div className="mx-auto my-4 h-[2px] w-12 shrink-0 rounded-full bg-[#FF6B00] transition-all duration-300 group-hover:w-20" />

                      {/* DESCRIPTION */}
                      <p className="flex-1 text-[14px] leading-[1.8] text-[#707070]">
                        {process.description}
                      </p>

                      {/* CARD BOTTOM */}
                      <div className="mt-5 border-t border-[#EEEEEC] pt-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#526B1D]">
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
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#292929] px-7 py-8 text-center sm:flex-row sm:px-10 sm:text-left">

          <div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Every step. Every detail. Every commitment.
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">
              A process-driven approach built around reliability and trust.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#FF6B00]" />

            <span className="text-sm font-semibold text-white">
              Quality & Reliability
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
