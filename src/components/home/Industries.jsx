
"use client";

import { motion } from "framer-motion";
import {
  ShoppingBasket,
  Sprout,
  Cog,
  CarFront,
  Shirt,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "FMCG & Consumer Goods",
    description:
      "Fast and flawless supply chains that meet shelf-time demands.",
    icon: ShoppingBasket,
    color: "#526B1D",
    background: "#EDF2E5",
  },
  {
    number: "02",
    title: "Agro-Products & Food Processing",
    description:
      "Cold chain solutions and export-ready sourcing.",
    icon: Sprout,
    color: "#E66A18",
    background: "#FFF0E5",
  },
  {
    number: "03",
    title: "Industrial Machinery",
    description:
      "Custom handling, specialized documentation, and global routing.",
    icon: Cog,
    color: "#2459D3",
    background: "#EAF0FA",
  },
  {
    number: "04",
    title: "Automotive Components",
    description:
      "End-to-end logistical coordination with built-in compliance.",
    icon: CarFront,
    color: "#79508C",
    background: "#F2EAF5",
  },
  {
    number: "05",
    title: "Textile & Apparel",
    description:
      "Source, ship, and store with precision in time-sensitive markets.",
    icon: Shirt,
    color: "#A65F32",
    background: "#F8EEE5",
  },
];

function IndustryCard({ industry, index, featured = false }) {
  const Icon = industry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group relative flex flex-col overflow-hidden rounded-[22px] border border-[#E9E9E5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] ${
        featured ? "min-h-[420px] p-8 sm:p-10 lg:p-12" : "min-h-[200px] p-6 sm:p-7"
      }`}
    >
      {/* Subtle colour background */}
      <div
        className={`absolute right-0 top-0 rounded-bl-full opacity-70 transition-all duration-500 group-hover:scale-125 ${
          featured ? "h-52 w-52" : "h-36 w-36"
        }`}
        style={{ backgroundColor: industry.background }}
      />

      {/* Top row */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[13px] font-bold tracking-[2px] text-[#A0A09A]">
          {industry.number}
        </span>

        <ArrowUpRight
          size={21}
          className="text-[#888888] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>

      {/* Icon */}
      <div
        className={`relative z-10 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
          featured ? "mt-10 h-[82px] w-[82px]" : "mt-6 h-[60px] w-[60px]"
        }`}
        style={{
          backgroundColor: industry.background,
          color: industry.color,
        }}
      >
        <Icon size={featured ? 38 : 29} strokeWidth={1.7} />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto pt-7">
        <h3
          className={`max-w-[380px] font-bold leading-[1.3] text-[#292929] transition-colors group-hover:text-[#526B1D] ${
            featured ? "text-[27px] sm:text-[32px]" : "text-[20px] sm:text-[22px]"
          }`}
        >
          {industry.title}
        </h3>

        <p
          className={`mt-3 max-w-[420px] leading-[1.8] text-[#707070] ${
            featured ? "text-[16px] sm:text-[17px]" : "text-[14px] sm:text-[15px]"
          }`}
        >
          {industry.description}
        </p>

        <div
          className="mt-6 h-[3px] w-10 rounded-full transition-all duration-500 group-hover:w-20"
          style={{ backgroundColor: industry.color }}
        />
      </div>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#F8F8F6] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-main mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-7 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-[650px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-11 bg-[#FF6B00]" />
              <span className="text-sm font-semibold uppercase tracking-[2.5px] text-[#526B1D]">
                Who We Serve
              </span>
            </div>

            <h2 className="text-[38px] font-bold leading-[1.12] tracking-[-1px] text-[#292929] sm:text-[48px] lg:text-[54px]">
              Industries We{" "}
              <span className="text-[#FF6B00]">Serve.</span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[16px] leading-[1.9] text-[#707070] sm:text-[17px]">
            We support a diverse range of industries with dependable
            sourcing, transparent operations and reliable international
            trade partnerships.
          </p>
        </motion.div>

        {/* Editorial Industry Layout */}
        <div className="grid gap-5 lg:grid-cols-2">

          {/* Featured Industry */}
          <IndustryCard
            industry={industries[0]}
            index={0}
            featured
          />

          {/* Four Supporting Industries */}
          <div className="grid gap-5 sm:grid-cols-2">
            {industries.slice(1).map((industry, index) => (
              <IndustryCard
                key={industry.number}
                industry={industry}
                index={index + 1}
              />
            ))}
          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#E1E1DC] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[650px] text-[15px] leading-[1.8] text-[#707070] sm:text-[16px]">
            Every partnership is approached with a commitment to
            transparency, reliability and long-term value creation.
          </p>

          <div className="flex items-center gap-3 text-sm font-semibold text-[#526B1D]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B00]" />
            Trusted Global Partnerships
          </div>
        </div>

      </div>
    </section>
  );
}
