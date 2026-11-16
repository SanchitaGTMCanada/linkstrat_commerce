
"use client";

import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  MapPin,
  Ship,
  Sprout,
  Wheat,
} from "lucide-react";

const regions = [
  { name: "India", locations: "PAN-India presence", code: "01" },
  {
    name: "Southeast Asia",
    locations: "Thailand, Singapore, Indonesia",
    code: "02",
  },
  {
    name: "Europe",
    locations: "Germany, France, Netherlands, UK",
    code: "03",
  },
  {
    name: "North America",
    locations: "USA & Canada",
    code: "04",
  },
  {
    name: "Middle East",
    locations: "UAE, Saudi Arabia",
    code: "05",
  },
  {
    name: "Oceania",
    locations: "Australia & New Zealand",
    code: "06",
  },
];

const markets = [
  {
    name: "Canada",
    subtitle: "North American Trade Hub",
    label: "Our sourcing network",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    description:
      "Canada is one of our core operational territories. From managing procurement and export logistics to overseeing customs compliance and documentation, we help Canadian suppliers and exporters connect with Indian markets and beyond.",
    detail:
      "Our coordination approach focuses on accurate documentation, dependable sourcing and compliant trade execution.",
    icon: Wheat,
    number: "01",
  },
  {
    name: "India",
    subtitle: "Asia's Emerging Logistics Gateway",
    label: "Our destination network",
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=85",
    description:
      "With its growing role in global manufacturing and supply chain infrastructure, India is central to Linkstrat Global's service offerings. We assist Indian importers and manufacturers in sourcing raw materials, navigating customs and connecting with international markets.",
    detail:
      "Our local expertise supports coordination, reduced delays and improved access to international markets.",
    icon: Sprout,
    number: "02",
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[3px] w-8 rounded-full bg-[#FF6B00]" />
      <span
        className={`text-[10px] font-bold uppercase tracking-[2.5px] ${
          light ? "text-[#C5D2AE]" : "text-[#526B1D]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default function AreasOfOperationsPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="relative isolate min-h-[420px] overflow-hidden bg-[#101D32] sm:min-h-[480px]">

        <div className="absolute inset-0 grid grid-cols-3">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546470427-e5b89cd2e8e9?auto=format&fit=crop&w=900&q=85"
              alt="Agricultural produce"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden border-x border-white/20">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=85"
              alt="International cargo shipping"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85"
              alt="Agricultural commodities"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-[#101D32]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-[#101D32]/30 to-[#101D32]/25" />

        <div className="container-main relative z-10 mx-auto flex min-h-[420px] items-end px-5 pb-14 pt-24 sm:min-h-[480px] sm:px-8 sm:pb-16 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl"
          >
            <Eyebrow light>Our Global Reach</Eyebrow>

            <h1 className="mt-5 text-[38px] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Connecting Continents.
              <span className="block text-[#FF8533]">
                Powering Global Trade.
              </span>
            </h1>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-[1.85] text-white/75 sm:text-base">
                Connecting agricultural suppliers, international buyers
                and logistics networks through dependable sourcing and
                cross-border trade solutions.
              </p>

              <a
                href="#global-markets"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#FF6B00] px-6 py-3 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-[#E65F00]"
              >
                Explore Our Network
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#526B1D] via-[#FF6B00] to-[#526B1D]" />
      </section>

      {/* INTRODUCTION */}
      <section className="relative bg-[#F5F6F2] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="container-main mx-auto grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Trade & Compliance</Eyebrow>

            <h2 className="mt-5 text-[30px] font-bold leading-[1.17] tracking-tight text-[#101D32] sm:text-[38px] lg:text-[42px]">
              Simplifying Trade Compliance for
              <span className="text-[#FF6B00]">
                {" "}Seamless Global Shipping.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-[1.9] text-[#666666] sm:text-[15px]">
              Navigating international trade requires meticulous attention
              to customs regulations and documentation procedures.
            </p>

            <p className="mt-3 text-sm leading-[1.9] text-[#666666] sm:text-[15px]">
              At Linkstrat Global, we specialize in sourcing quality
              products directly from farms and suppliers. We work to ensure
              import-export documentation is complete, accurate and aligned
              with applicable local and international regulations.
            </p>

            <div className="mt-6 flex items-center gap-3 border-t border-[#DDE2D7] pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E5EBDD] text-[#526B1D]">
                <Ship size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#101D32]">
                  Trade Coordination
                </p>
                <p className="mt-1 text-xs text-[#777777]">
                  Sourcing, documentation and shipping support.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pb-7 pl-3 sm:pl-6"
          >
            <div className="absolute right-0 top-[-12px] h-20 w-20 rounded-tr-[30px] border-r-[4px] border-t-[4px] border-[#FF6B00]/70" />

            <div className="relative h-[260px] overflow-hidden rounded-[20px] shadow-[0_15px_35px_rgba(16,29,50,0.12)] sm:h-[340px]">
              <img
                src="https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&w=1200&q=85"
                alt="Assorted agricultural pulses"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-1 left-0 max-w-[260px] rounded-xl bg-[#101D32] p-4 text-white shadow-xl sm:max-w-[290px] sm:p-5">
              <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#AFC18C]">
                Our Commitment
              </span>
              <p className="mt-1 text-base font-bold sm:text-lg">
                Accuracy at every step.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CANADA AND INDIA */}
      <section
        id="global-markets"
        className="relative overflow-hidden bg-[#0C1210] px-5 py-14 sm:px-8 lg:px-12 lg:py-16"
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#526B1D]/15 blur-3xl" />

        <div className="container-main relative z-10 mx-auto">

          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Eyebrow light>Our Key Markets</Eyebrow>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
                Two Key Markets.
                <span className="block text-[#AFC18C]">
                  One Global Network.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-[1.85] text-white/60">
              Canada and India form important parts of our international
              sourcing, coordination and trade network.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {markets.map((market, index) => {
              const Icon = market.icon;

              return (
                <motion.article
                  key={market.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className="group flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#151F1A] transition-all duration-300 hover:-translate-y-1 hover:border-[#526B1D]/70 hover:shadow-xl"
                >
                  <div className="relative h-[210px] overflow-hidden sm:h-[250px]">
                    <img
                      src={market.image}
                      alt={`${market.name} operations`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1210]/75 to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[2px] text-white backdrop-blur-md">
                      {market.label}
                    </span>

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF6B00] text-white">
                        <Icon size={19} />
                      </div>
                      <span className="text-xs font-semibold text-white">
                        {market.number} / 02
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#AFC18C]">
                      {market.subtitle}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-[#FF8533] sm:text-[28px]">
                      {market.name}
                    </h3>

                    <p className="mt-4 text-sm leading-[1.85] text-white/70">
                      {market.description}
                    </p>

                    <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-6 text-white/55">
                      {market.detail}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#AFC18C]">
                      <MapPin size={14} />
                      {market.name} Operations
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="relative overflow-hidden bg-[#F7F8F5] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="container-main mx-auto">

          <div className="mb-10 max-w-3xl">
            <Eyebrow>Beyond Our Core Markets</Eyebrow>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#101D32] sm:text-4xl lg:text-[44px]">
              Global Presence.
              <span className="block text-[#FF6B00]">
                International Connections.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-[1.9] text-[#666666]">
              In addition to Canada and India, our international trade
              network extends across major regions worldwide. Through
              logistics relationships and regional connections, we support
              business activity across international markets.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

            {/* REGION CARDS */}
            <div className="grid gap-3 sm:grid-cols-2">
              {regions.map((region, index) => (
                <motion.div
                  key={region.code}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group relative overflow-hidden rounded-[15px] border border-[#E3E7DE] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5D2B6] hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-[#D3DCCB] transition-colors group-hover:text-[#FF6B00]">
                      {region.code}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF2E9] text-[#526B1D]">
                      <MapPin size={16} />
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#101D32]">
                    {region.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#777777]">
                    {region.locations}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#FF6B00] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>

            {/* GLOBAL IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative min-h-[300px] overflow-hidden rounded-[20px] bg-[#101D32] sm:min-h-[360px]"
            >
              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=85"
                alt="International shipping and logistics"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/95 via-[#101D32]/20 to-transparent" />

              <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white backdrop-blur-md">
                <Globe2 size={21} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#AFC18C]">
                  Connected Through Trade
                </span>

                <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Connecting Businesses Across Borders.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  Building relationships between suppliers, buyers and
                  international logistics networks.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
        <div className="container-main mx-auto">
          <div className="relative overflow-hidden rounded-[22px] bg-[#101D32] px-6 py-9 sm:px-10 sm:py-11">

            <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-16 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <Eyebrow light>Let's Work Together</Eyebrow>

                <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Your Business.
                  <span className="block text-[#AFC18C]">
                    Our Global Network.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                  Explore opportunities with Linkstrat Global Commerce
                  and let us support your international trade requirements.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#FF6B00] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00]"
              >
                Talk to Our Team
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
