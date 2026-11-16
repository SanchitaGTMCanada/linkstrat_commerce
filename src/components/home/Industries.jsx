
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
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Agro-Products & Food Processing",
    description:
      "Cold chain solutions and export-ready sourcing.",
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Industrial Machinery",
    description:
      "Custom handling, specialized documentation, and global routing.",
    icon: Cog,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Automotive Components",
    description:
      "End-to-end logistical coordination with built-in compliance.",
    icon: CarFront,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Textile & Apparel",
    description:
      "Source, ship, and store with precision in time-sensitive markets.",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
  },
];

function IndustryCard({ industry, index, featured = false }) {
  const Icon = industry.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-[24px] bg-[#292929] ${
        featured
          ? "min-h-[520px] p-7 sm:p-10 lg:min-h-[625px] lg:p-12"
          : "min-h-[245px] p-6 sm:min-h-[300px] sm:p-7"
      }`}
    >
      {/* Background Image */}
      <img
        src={industry.image}
        alt={industry.title}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-black/85 transition-all duration-500 group-hover:from-black/45 group-hover:to-black/90" />

      {/* Top Row */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-sm font-bold tracking-[2px] text-white/85">
          {industry.number}
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00]">
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10">
        <div
          className={`mb-5 flex items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-md ${
            featured ? "h-[66px] w-[66px]" : "h-[52px] w-[52px]"
          }`}
        >
          <Icon size={featured ? 32 : 26} strokeWidth={1.7} />
        </div>

        <h3
          className={`max-w-[430px] font-bold leading-[1.25] text-white ${
            featured
              ? "text-[28px] sm:text-[36px] lg:text-[40px]"
              : "text-[21px] sm:text-[24px]"
          }`}
        >
          {industry.title}
        </h3>

        <p
          className={`mt-3 max-w-[430px] leading-[1.8] text-white/80 ${
            featured ? "text-[16px] sm:text-[18px]" : "text-[14px] sm:text-[15px]"
          }`}
        >
          {industry.description}
        </p>

        <div className="mt-6 h-[3px] w-10 rounded-full bg-[#FF6B00] transition-all duration-500 group-hover:w-20" />
      </div>
    </motion.article>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#F1F3ED] py-20 sm:py-24 lg:py-28"
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

          <p className="max-w-[470px] text-[16px] leading-[1.9] text-[#666666] sm:text-[17px]">
            We support a diverse range of industries with dependable
            sourcing, transparent operations and reliable international
            trade partnerships.
          </p>
        </motion.div>

        {/* Industry Photo Layout */}
        <div className="grid gap-5 lg:grid-cols-2">

          {/* Featured Industry */}
          <IndustryCard
            industry={industries[0]}
            index={0}
            featured
          />

          {/* Supporting Industries */}
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
        <div className="mt-12 flex flex-col gap-4 border-t border-[#DDE1D6] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[650px] text-[15px] leading-[1.8] text-[#666666] sm:text-[16px]">
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
