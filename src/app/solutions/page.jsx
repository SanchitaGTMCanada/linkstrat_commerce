
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  ShoppingCart,
  Boxes,
  Truck,
  FileCheck,
  Ship,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";
import Footer from "@/components/home/Footer";

const solutions = [
  {
    id: "export-strategy",
    number: "01",
    eyebrow: "GLOBAL MARKET DEVELOPMENT",
    title: "Export Strategy and Market Integration",
    subtitle: "Turning Your Products into Global Brands.",
    description:
      "We empower businesses to expand globally through targeted import and export strategies and seamless market integration. From identifying the right overseas markets to establishing trade channels and local compliance, our approach supports sustainable international growth.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=90",
    icon: Globe2,
    imageAlt: "International business strategy meeting",
    items: [
      "Import & Export Readiness Assessment",
      "Target Market Identification & Entry Strategy",
      "Product Positioning & Branding for Overseas Markets",
      "Distribution & Channel Partner Development",
      "Trade Compliance & Local Regulations Advisory",
      "On-Ground Support in Global Markets",
    ],
  },
  {
    id: "procurement",
    number: "02",
    eyebrow: "STRATEGIC SOURCING",
    title: "Procurement and Sourcing",
    subtitle: "Reliable Sourcing. Better Business Outcomes.",
    description:
      "We connect businesses with dependable suppliers and quality agricultural commodities. Our procurement approach focuses on supplier verification, product specifications, competitive sourcing and transparent coordination throughout the purchasing process.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1500&q=90",
    icon: ShoppingCart,
    imageAlt: "Agricultural fields and crop production",
    items: [
      "Supplier Identification & Verification",
      "Agricultural Commodity Sourcing",
      "Product Quality & Specification Coordination",
      "Price Negotiation & Procurement Planning",
      "Purchase Order & Vendor Coordination",
      "Sourcing Documentation & Follow-up",
    ],
  },
  {
    id: "supply-chain",
    number: "03",
    eyebrow: "OPERATIONAL EXCELLENCE",
    title: "Supply Chain Optimization",
    subtitle: "Intelligent Planning. Seamless Operations.",
    description:
      "At Linkstrat Global, we believe that a well-planned supply chain is essential for successful import-export operations. Our supply chain optimization services help businesses reduce costs, improve efficiency and strengthen responsiveness across every stage of the journey.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=90",
    icon: Boxes,
    imageAlt: "Organized warehouse and inventory storage",
    items: [
      "End-to-End Supply Chain Analysis",
      "Inventory Planning & Control",
      "Logistics Route Optimization",
      "Technology Integration",
      "Risk Mitigation & Compliance",
      "Supply Chain Performance Monitoring",
    ],
  },
  {
    id: "logistics",
    number: "04",
    eyebrow: "WORLDWIDE TRANSPORTATION",
    title: "Logistics and Transportation",
    subtitle: "Moving Goods Across Borders with Confidence.",
    description:
      "We provide end-to-end logistics and transportation solutions tailored to international trade requirements. From freight coordination to delivery planning, we help businesses move goods efficiently, securely and reliably across borders.",
    image:
      "https://images.unsplash.com/photo-1494412574643-35d324698f9a?auto=format&fit=crop&w=1500&q=90",
    icon: Truck,
    imageAlt: "Cargo containers and international freight",
    items: [
      "Domestic & International Freight Solutions",
      "Full Truckload (FTL) & Less-Than-Truckload (LTL)",
      "Multimodal Transport Planning",
      "Real-Time Shipment Tracking Coordination",
      "Custom Route Planning & Carrier Selection",
      "Freight Scheduling & Delivery Coordination",
    ],
  },
  {
    id: "customs",
    number: "05",
    eyebrow: "TRADE COMPLIANCE",
    title: "Customs and Documentation",
    subtitle: "Simplifying Compliance. Supporting Global Trade.",
    description:
      "Navigating international trade requires careful attention to customs regulations and documentation procedures. We support importers and exporters with documentation coordination, customs processes and compliance requirements for smoother cross-border movement.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1500&q=90",
    icon: FileCheck,
    imageAlt: "Logistics documentation and shipment handling",
    items: [
      "Customs Clearance Coordination (Import & Export)",
      "Trade Documentation Preparation",
      "Import/Export Licensing Support",
      "Regulatory Compliance Advisory",
      "Shipping Document Verification",
      "Document Digitization & Filing",
    ],
  },
  {
    id: "overseas-logistics",
    number: "06",
    eyebrow: "INTERNATIONAL ADVISORY",
    title: "Overseas Logistics Consultancy",
    subtitle: "Strategic Guidance for International Logistics.",
    description:
      "Our overseas logistics consultancy helps businesses navigate the complexities of international supply chains. Whether expanding into new markets or improving existing logistics operations, we provide practical guidance for cost-effective and reliable delivery.",
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1500&q=90",
    icon: Ship,
    imageAlt: "International shipping and logistics operations",
    items: [
      "Market-Specific Logistics Planning",
      "Freight and Carrier Selection Guidance",
      "Regulatory & Compliance Consulting",
      "Global Distribution Strategy Development",
      "Cost Optimization Advisory",
      "Technology & Vendor Integration",
    ],
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[3px] w-10 rounded-full bg-[#FF6B00]" />
      <span
        className={`text-[11px] font-bold uppercase tracking-[2.8px] ${
          light ? "text-[#C5D2AE]" : "text-[#526B1D]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function SolutionSection({ solution, index }) {
  const Icon = solution.icon;
  const reverse = index % 2 !== 0;
  const dark = index % 2 === 1;

  return (
    <section
      id={solution.id}
      className={`relative isolate scroll-mt-24 overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 ${
        dark ? "bg-[#101D32]" : "bg-[#F4F5F0]"
      }`}
    >
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-12 ${
          reverse ? "left-0" : "right-0"
        } text-[180px] font-black leading-none tracking-tighter sm:text-[240px] ${
          dark ? "text-white/[0.025]" : "text-[#526B1D]/[0.035]"
        }`}
      >
        {solution.number}
      </span>

      <div className="container-main relative z-10 mx-auto">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 35 : -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            <div className="relative h-[300px] overflow-hidden rounded-[24px] shadow-[0_22px_55px_rgba(0,0,0,0.14)] sm:h-[390px] lg:h-[460px]">
              <img
                src={solution.image}
                alt={solution.imageAlt}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/75 via-transparent to-[#101D32]/10" />

              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/25 bg-[#101D32]/45 px-4 py-3 backdrop-blur-md sm:left-7 sm:top-7">
                <Icon size={19} className="text-[#FF8533]" />
                <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-white">
                  {solution.eyebrow}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/65">
                    Linkstrat Global Commerce
                  </span>
                  <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {solution.number} / 06
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00]">
                  <ArrowUpRight size={23} />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-br-[30px] border-b-[5px] border-r-[5px] border-[#FF6B00]" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -35 : 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative py-2"
          >
            <Eyebrow light={dark}>{solution.eyebrow}</Eyebrow>

            <h2
              className={`mt-6 text-[36px] font-bold leading-[1.1] tracking-[-1.2px] sm:text-[44px] lg:text-[48px] xl:text-[52px] ${
                dark ? "text-white" : "text-[#101D32]"
              }`}
            >
              {solution.title}
              <span className="mt-2 block text-[#FF6B00]">.</span>
            </h2>

            <p className="mt-5 text-lg font-semibold leading-relaxed text-[#526B1D] sm:text-xl">
              {solution.subtitle}
            </p>

            <p
              className={`mt-5 text-[16px] leading-[1.95] sm:text-[17px] ${
                dark ? "text-white/70" : "text-[#626262]"
              }`}
            >
              {solution.description}
            </p>

            <div
              className={`mt-8 border-t pt-7 ${
                dark ? "border-white/15" : "border-[#D9DED3]"
              }`}
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3
                  className={`text-sm font-bold uppercase tracking-[2px] sm:text-base ${
                    dark ? "text-white" : "text-[#101D32]"
                  }`}
                >
                  What We Offer
                </h3>
                <span className="h-[2px] w-12 bg-[#FF6B00]" />
              </div>

              <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {solution.items.map((item, itemIndex) => (
                  <div key={item} className="group/item flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] transition-colors group-hover/item:bg-[#FF6B00] group-hover/item:text-white">
                      <CheckCircle2 size={15} />
                    </div>
                    <span
                      className={`text-[14px] font-medium leading-[1.7] sm:text-[15px] ${
                        dark ? "text-white/75" : "text-[#505050]"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/contact"
              className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(255,107,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00] hover:shadow-[0_12px_30px_rgba(255,107,0,0.3)]"
            >
              Discuss Your Requirements
              <MoveUpRight size={19} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#101D32] sm:min-h-[540px] lg:min-h-[580px]">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2200&q=90"
          alt="International shipping and global trade"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#101D32]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32]/95 via-[#101D32]/65 to-[#101D32]/15" />

        <div className="container-main relative z-10 mx-auto px-5 py-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="max-w-4xl"
          >
            <Eyebrow light>What We Do</Eyebrow>

            <h1 className="mt-7 text-[44px] font-bold leading-[1.06] tracking-[-1.5px] text-white sm:text-[58px] lg:text-[72px] xl:text-[78px]">
              Integrated Solutions.
              <span className="mt-2 block text-[#FF8533]">
                Global Trade.
              </span>
              Stronger Connections.
            </h1>

            <p className="mt-7 max-w-2xl text-[16px] leading-[1.9] text-white/75 sm:text-[19px]">
              Connecting sourcing, procurement, logistics and international
              trade through coordinated solutions designed to move your
              business forward.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#export-strategy"
                className="inline-flex items-center gap-3 rounded-full bg-[#FF6B00] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#E65F00]"
              >
                Explore Our Solutions
                <ArrowRight size={19} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#101D32]"
              >
                Talk to Our Team
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-9 gap-y-4 border-t border-white/20 pt-7">
              {[
                "Strategic Sourcing",
                "Global Logistics",
                "Trade Compliance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF8533]" />
                  <span className="text-xs font-semibold text-white/80 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#526B1D] via-[#FF6B00] to-[#526B1D]" />
      </section>

      {/* INTRODUCTION */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="container-main mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <Eyebrow>A Complete Trade Support Network</Eyebrow>

            <h2 className="mt-6 text-[32px] font-bold leading-[1.2] tracking-tight text-[#101D32] sm:text-[42px] lg:text-[50px]">
              One Partner for Every Stage of
              <span className="block text-[#2459D3]">
                Global Trade.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-[16px] leading-[1.95] text-[#666666] sm:text-[18px]">
              Linkstrat Global Commerce provides coordinated solutions
              designed to simplify international business operations.
              Our services connect sourcing, procurement, supply chain
              planning, transportation and trade compliance to help
              businesses operate with greater clarity and confidence.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
            {[
              {
                icon: ShoppingCart,
                title: "Strategic Sourcing",
                text: "Dependable procurement and supplier coordination.",
              },
              {
                icon: Truck,
                title: "Global Movement",
                text: "Coordinated transportation and logistics support.",
              },
              {
                icon: FileCheck,
                title: "Trade Compliance",
                text: "Documentation and cross-border process support.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E7EAE2] bg-[#F7F8F5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D1DBC6] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8EDDF] text-[#526B1D]">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#101D32]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#777777]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="border-y border-[#E3E7DE] bg-[#F3F5EF] px-5 py-10 sm:px-8 lg:px-12">
        <div className="container-main mx-auto">
          <div className="mb-6 text-center">
            <Eyebrow>Explore Our Expertise</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-[#101D32] sm:text-3xl">
              Our Six Core Solutions
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <a
                key={solution.id}
                href={`#${solution.id}`}
                className="group flex items-center justify-between gap-4 rounded-xl border border-[#E1E6D9] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00] hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-[#FF6B00]">
                    {solution.number}
                  </span>
                  <span className="text-sm font-semibold text-[#101D32] transition-colors group-hover:text-[#FF6B00] sm:text-base">
                    {solution.title}
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#777777] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF6B00]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ALL SIX SOLUTION SECTIONS */}
      {solutions.map((solution, index) => (
        <SolutionSection
          key={solution.id}
          solution={solution}
          index={index}
        />
      ))}

      {/* FINAL CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="container-main relative mx-auto overflow-hidden rounded-[28px] bg-[#101D32] px-7 py-12 sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-2/3 bg-gradient-to-r from-[#526B1D] to-[#FF6B00]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <Eyebrow light>Let's Work Together</Eyebrow>

              <h2 className="mt-6 text-[32px] font-bold leading-tight text-white sm:text-[42px] lg:text-[48px]">
                Let's Move Your Business
                <span className="block text-[#FF8533]">
                  Forward Together.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[15px] leading-[1.9] text-white/65 sm:text-[17px]">
                Tell us about your business requirements. Our team is ready
                to discuss sourcing, logistics and international trade
                support.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-4 rounded-full bg-[#FF6B00] px-8 py-5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00] hover:shadow-xl"
            >
              Get in Touch
              <ArrowUpRight size={20} />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
