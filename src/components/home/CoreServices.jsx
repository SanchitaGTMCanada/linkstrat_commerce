
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
      "Vendor discovery, material procurement, and supplier management to build a reliable sourcing network.",
    icon: ShoppingCart,
    color: "#526B1D",
    background: "#EDF2E5",
  },
  {
    number: "02",
    title: "Logistics and Transportation",
    description:
      "Multi-modal freight management with inventory transparency for efficient movement of goods.",
    icon: Truck,
    color: "#E66A18",
    background: "#FFF0E5",
  },
  {
    number: "03",
    title: "Customs and Documentation",
    description:
      "HS code validation, shipping documents, port clearances, and DGFT coordination.",
    icon: FileCheck,
    color: "#2459D3",
    background: "#EAF0FA",
  },
  {
    number: "04",
    title: "Export Strategy and Market Integration",
    description:
      "Market entry research, trade compliance, and pricing strategy to support international expansion.",
    icon: Globe2,
    color: "#79508C",
    background: "#F2EAF5",
  },
  {
    number: "05",
    title: "Supply Chain Optimization",
    description:
      "Demand forecasting, route optimization, and stock minimization for a more efficient supply chain.",
    icon: Boxes,
    color: "#A65F32",
    background: "#F8EEE5",
  },
  {
    number: "06",
    title: "Overseas Logistics Consultancy",
    description:
      "Guidance on global warehousing, freight contracts, and logistics digitization.",
    icon: Ship,
    color: "#287A78",
    background: "#E7F2F0",
  },
];

export default function CoreServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F7F7F5] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-main relative z-10 mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#FF6B00]" />
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#526B1D]">
                What We Offer
              </span>
            </div>

            <h2 className="max-w-[650px] text-[38px] font-bold leading-[1.12] text-[#292929] sm:text-[48px] lg:text-[58px]">
              Solutions That
              <br />
              <span className="text-[#FF6B00]">Move Business</span>
              <br />
              Forward.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-xl text-[16px] leading-[1.9] text-[#666666] sm:text-[18px]">
              From sourcing and procurement to international logistics, we
              provide integrated trade solutions designed to simplify global
              commerce and strengthen supply chains.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#526B1D]" />
              <span className="text-sm font-semibold text-[#292929]">
                Integrated Global Trade Solutions
              </span>
            </div>
          </motion.div>
        </div>

        {/* Service Panels */}
        <div className="grid gap-5 md:grid-cols-2">
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
                className="group relative flex min-h-[235px] flex-col overflow-hidden rounded-[20px] border border-[#E7E7E3] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D8D8D2] hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] sm:p-8"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[38px] font-light leading-none tracking-tight text-[#D5D5D0] transition-colors duration-300 group-hover:text-[#FF6B00]"
                  >
                    {service.number}
                  </span>

                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: service.background,
                      color: service.color,
                    }}
                  >
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Service Content */}
                <div className="mt-7 flex flex-1 items-end justify-between gap-4">
                  <div className="max-w-[390px]">
                    <h3 className="text-[21px] font-bold leading-[1.35] text-[#292929] transition-colors duration-300 group-hover:text-[#526B1D] sm:text-[24px]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.8] text-[#777777] sm:text-[15px]">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8E8E5] text-[#777777] transition-all duration-300 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white"
                  >
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: service.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-[22px] bg-[#292929] px-7 py-9 sm:px-10 sm:py-11"
        >
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-6 -top-14 h-44 w-44 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#FF8533]">
                Let's Work Together
              </span>

              <h3 className="mt-3 text-[24px] font-bold leading-tight text-white sm:text-[30px]">
                One Partner. Integrated Trade Solutions.
              </h3>

              <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-white/65 sm:text-[16px]">
                Connecting sourcing, logistics, and international trade with
                reliability at every step.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00] hover:shadow-lg hover:shadow-[#FF6B00]/20"
            >
              Discuss Your Requirements
              <ArrowUpRight size={19} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
