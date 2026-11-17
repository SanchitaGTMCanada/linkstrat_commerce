
"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Truck,
  FileCheck,
  Globe2,
  Boxes,
  Ship,
  ArrowUpRight,
} from "lucide-react";


const services = [
  {
    number: "01",
    title: "Procurement and Sourcing",
    description:
      "Vendor discovery, material procurement, and supplier management.",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Logistics and Transportation",
    description:
      "Multi-modal freight management with inventory transparency.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Customs and Documentation",
    description:
      "HS code validation, shipping documents, port clearances, and DGFT coordination.",
    icon: FileCheck,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    title: "Export Strategy and Market Integration",
    description:
      "Market entry research, trade compliance, and pricing strategy.",
    icon: Globe2,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "05",
    title: "Supply Chain Optimization",
    description:
      "Demand forecasting, route optimization, and stock minimization.",
    icon: Boxes,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "06",
    title: "Overseas Logistics Consultancy",
    description:
      "Guidance on global warehousing, freight contracts, and logistics digitization.",
    icon: Ship,
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function CoreServices() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#101D32] py-10 sm:py-14 lg:py-18"
    >
      {/* NAVY DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#263B59]/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#1B304D]/50 blur-3xl" />

      <div className="container-main relative z-10 mx-auto px-5 sm:px-8 lg:px-12">

        {/* HEADING */}
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#FF6B00]" />

              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#FF6B00]">
                What We Offer
              </span>
            </div>

            <h2 className="max-w-[650px] text-[38px] font-bold leading-[1.12] text-white sm:text-[48px] lg:text-[58px]">
           Our Core Services
              <br />
              <span className="text-[#FF6B00]"></span>
          
            </h2>
          </motion.div>

        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-6 md:grid-cols-2">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 2) * 0.1,
                }}
                className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white shadow-[0_5px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00]/50 hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
              >

                {/* SERVICE IMAGE */}
                <div className="relative h-[190px] w-full shrink-0 overflow-hidden sm:h-[210px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/75 via-[#101D32]/10 to-transparent" />

                  {/* SERVICE NUMBER */}
                  <span className="absolute bottom-5 left-7 text-[42px] font-light tracking-tight text-white/90">
                    {service.number}
                  </span>

                  {/* FLOATING ICON */}
                  <div className="absolute bottom-5 right-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-[#101D32]/90 text-[#FF6B00] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF6B00] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 items-center justify-between gap-5 p-6 sm:p-8">

                  <div className="max-w-[470px]">
                    <h3 className="text-[21px] font-bold leading-[1.35] text-[#101D32] transition-colors duration-300 group-hover:text-[#FF6B00] sm:text-[24px]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.8] text-[#596273] sm:text-[15px]">
                      {service.description}
                    </p>
                  </div>

                  {/* ARROW */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E2E5E9] text-[#101D32] transition-all duration-300 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white">
  <Globe2 size={20} strokeWidth={1.8} />
</div>
                </div>

                {/* BOTTOM ACCENT */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#FF6B00] transition-all duration-500 group-hover:w-full" />

              </motion.div>
            );
          })}

        </div>

        {/* BOTTOM CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-[22px] border border-white/10 bg-[#1B304D] px-7 py-9 shadow-xl sm:px-10 sm:py-11"
        >

          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-6 -top-14 h-44 w-44 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">

            <div>
             

              <h3 className="mt-3 text-[24px] font-bold leading-tight text-white sm:text-[30px]">
                Need reliable logistics solutions?
              </h3>

              <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-white/70 sm:text-[16px]">
                Reach out for a free logistics consultation today.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00] hover:shadow-lg hover:shadow-[#FF6B00]/20"
            >
              Get Quote
              <ArrowUpRight size={19} />
            </a>

          </div>
        </motion.div> */}

      </div>
    </section>
  );
}
