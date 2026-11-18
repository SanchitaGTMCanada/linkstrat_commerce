
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
    title: "Global Logistics Strategy and Marketplace Integration",
    subtitle: "Turning Your Products into Global Brands.",
    description:
      "We empower businesses to expand globally through targeted import and export strategies and seamless market integration. From identifying the right overseas markets to establishing trade channels and local compliance, our approach supports sustainable international growth.",
    image:
      "images/solution/global.jpg",
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
    title: "Procurement & Sourcing Solutions",
    subtitle: "Let the Experts Manage Your Logistics’ Backbone",
    description:
      "We understand that efficient procurement and sourcing are the foundation of a successful supply chain. Our comprehensive services help you identify reliable suppliers, negotiate favourable terms, and ensure the timely acquisition of goods, whether for domestic use or international trade.",
    image:
      "images/solution/procurement.jpg",
    icon: ShoppingCart,
    imageAlt: "Agricultural fields and crop production",
    items: [
      {
        title: "Supplier Identification & Verification",
        description:
          "We identify and evaluate dependable suppliers, verifying their credentials, capabilities and reliability to support your sourcing requirements.",
      },
      {
        title: "Agricultural Commodity Sourcing",
        description:
          "We help source agricultural commodities from suitable markets and suppliers, considering product requirements, availability and quality.",
      },
      {
        title: "Product Quality & Specification Coordination",
        description:
          "We coordinate product specifications and quality expectations with suppliers to ensure goods meet your required standards.",
      },
      {
        title: "Price Negotiation & Procurement Planning",
        description:
          "We support price negotiations and procurement planning to help manage purchasing costs, timelines and sourcing priorities.",
      },
      {
        title: "Purchase Order & Vendor Coordination",
        description:
          "We coordinate purchase orders and supplier communication to support accurate processing and smooth procurement operations.",
      },
      {
        title: "Sourcing Documentation & Follow-up",
        description:
          "We assist with sourcing-related documentation and supplier follow-ups to maintain clear communication and track procurement progress.",
      },
    ],
  },
  {
    id: "supply-chain",
    number: "03",
    eyebrow: "OPERATIONAL EXCELLENCE",
    title: "Supply Chain Optimization For Seamless Logistics Operations",
    subtitle: "Streamlining Global Trade with Intelligent Supply Chain Solutions.",
    description:
      "At LinkStrat Global, we believe that a we can provide supply chain we successful of any import-export business.Our Supply Chain Optimization services are designed to help your business reduce costs, improve efficiency, and enhance responsiveness across every stage of the supply journey — from source to final destination.",
    image:
      "images/solution/supplychain.jpg",
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
    title: "Logistics Solutions Around The World",
    subtitle: "Customized Supply Chain Services Worldwide.",
    description:
      "At LinkStrat Global, we specialize in providing end-to-end logistics and transportation solutions tailored to meet the evolving demands of global trade.From streamlining supply chains to optimizing delivery routes, we ensure that your goods move smoothly, securely, and on time across cities, borders, and continents.",
    image:
      "images/solution/4067.jpg",
    icon: Truck,
    imageAlt: "Cargo containers and international freight",
    items: [
      {
        title: "Domestic & International Freight Solutions",
        description:
          "We manage local and cross-border freight movements via air, sea, rail, and road transport, ensuring flexible and cost-effective shipping strategies.",
      },
      {
        title: "Full Truckload (FTL) & Less-Than-Truckload (LTL)",
        description:
          "Our scalable options offer the proper transportation mode depending on your shipment size, urgency, and budget, without compromising reliability.",
      },
      {
        title: "Multimodal Transport Planning (FCL/ LCL & Break Bulk mode)",
        description:
          "We integrate multiple modes of transport under a single streamlined strategy to ensure efficient delivery timelines and reduced transit costs.",
      },
      {
        title: "Real-Time Shipment Tracking",
        description:
          "Stay informed with advanced tracking systems that offer real-time updates, route optimization, and proactive notifications at every milestone.",
      },
      {
        title: "Custom Route Planning & Carrier Selection",
        description:
          "Through intelligent analytics and an established carrier network, we choose the most reliable, economical routes tailored to your business objectives.",
      },
    ],
  },
  {
    id: "customs",
    number: "05",
    eyebrow: "TRADE COMPLIANCE",
    title: "Now Simplify Your Logistics Customs & Documentation",
    subtitle: "Simplifying Trade Compliance for Seamless Global Shipping",
    description:
      "Navigating international trade requires meticulous attention to customs regulations and documentation procedures.At LinkStrat Global, we specialize in handling end-to-end customs clearance and ensuring all your import-export documentation is complete, accurate, and compliant with local and international regulations.",
    image:
      "images/solution/6904.jpg",
    icon: FileCheck,
    imageAlt: "Logistics documentation and shipment handling",
    items: [
      {
        title: "Customs Clearance (Import & Export)",
        description:
          "We handle all procedures related to clearing goods at ports and airports, ensuring a smooth transition through customs for both inbound and outbound shipments.",
      },
      {
        title: "Trade Documentation Preparation",
        description:
          "We prepare and verify all required trade documents, from commercial invoices and packing lists to certificates of origin and shipping bills.",
      },
      {
        title: "Import/Export Licensing Support",
        description:
          "We assist businesses in securing necessary trade licenses, registrations, and documentation approvals required under international trade laws.",
      },
      {
        title: "Regulatory Compliance Advisory",
        description:
          "With our expert guidance, you can stay compliant with customs laws, import-export policies, and tax regimes (like GST, duties, etc.).",
      },
      {
        title: "Document Digitization & Filing",
        description:
          "We offer digitized filing, recordkeeping, and secure sharing of trade-related documents for transparency and audit readiness.",
      },
    ],
  },
  {
    id: "overseas-logistics",
    number: "06",
    eyebrow: "INTERNATIONAL ADVISORY",
    title: "Overseas Logistics Consultancy",
    subtitle:
      "Empowering Global Trade Through Strategic International Logistics Solutions.",
    description:
      "Our specialised Overseas Logistics Consultancy services are designed to guide businesses through the complexities of international supply chains.Whether you’re expanding into new markets or navigating compliance and logistics challenges, we offer customized solutions to ensure cost-effective, smooth delivery within the time limit, Cargo Tracking in operations.",
    image:
      "images/solution/overseas.jpg",
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
      className={`relative isolate scroll-mt-24 overflow-hidden px-5 py-10 sm:px-8 sm:py-10 lg:px-12 lg:py-14 ${
        dark ? "bg-[#101D32]" : "bg-[#F4F5F0]"
      }`}
    >
      {/* DECORATIVE BACKGROUND NUMBER */}
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

        {/* GRID: BOTH COLUMNS STRETCH TO THE SAME CONTENT HEIGHT */}
        <div
          className={`grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 35 : -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group relative min-w-0 w-full self-stretch"
          >
            <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-[24px] shadow-[0_22px_55px_rgba(0,0,0,0.14)] sm:min-h-[400px]">
              <img
                src={solution.image}
                alt={solution.imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/75 via-transparent to-[#101D32]/10" />

              {/* IMAGE LABEL */}
              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/25 bg-[#101D32]/45 px-4 py-3 backdrop-blur-md sm:left-7 sm:top-7">
                <Icon size={19} className="text-[#FF8533]" />

                <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-white">
                  {solution.eyebrow}
                </span>
              </div>

              {/* IMAGE BOTTOM CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/65">
                    Linkstrat Global Commerce
                  </span>

                  <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {solution.number} / 06
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]">
                  <ArrowUpRight size={23} />
                </div>
              </div>
            </div>

            {/* ORANGE DECORATIVE CORNER */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-br-[30px] border-b-[5px] border-r-[5px] border-[#FF6B00]" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -35 : 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative min-w-0 py-2"
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

            {/* WHAT WE OFFER */}
            <div
              className={`mt-8 border-t pt-7 ${
                dark ? "border-white/15" : "border-[#D9DED3]"
              }`}
            >
              <div className="mb-7 flex items-center justify-between gap-3">
                <h3
                  className={`text-base font-bold uppercase tracking-[2px] sm:text-lg ${
                    dark ? "text-white" : "text-[#101D32]"
                  }`}
                >
                  What We Offer
                </h3>

                <span className="h-[2px] w-12 bg-[#FF6B00]" />
              </div>

              <div className="grid gap-x-7 gap-y-7 sm:grid-cols-2">
                {solution.items.map((item, itemIndex) => {
                  const isDetailed = typeof item !== "string";

                  return (
                    <motion.div
                      key={isDetailed ? item.title : item}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: itemIndex * 0.07,
                      }}
                      className="group/item flex items-start gap-3"
                    >
                      {/* CHECK ICON */}
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] transition-colors group-hover/item:bg-[#FF6B00] group-hover/item:text-white">
                        <CheckCircle2 size={17} />
                      </div>

                      <div>
                        {/* SERVICE TITLE */}
                        <h4
                          className={`text-base font-bold leading-[1.5] sm:text-[17px] ${
                            dark ? "text-white" : "text-[#101D32]"
                          }`}
                        >
                          {isDetailed ? item.title : item}
                        </h4>

                        {/* SERVICE DESCRIPTION */}
                        {isDetailed && (
                          <p
                            className={`mt-2 text-[15px] leading-[1.9] sm:text-base ${
                              dark ? "text-white/75" : "text-[#626262]"
                            }`}
                          >
                            {item.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CONTACT BUTTON */}
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

      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#101D32] sm:min-h-[540px] lg:min-h-[580px]">
        <img
          src="/images/solution/hero.jpg"
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

      {/* QUICK NAVIGATION */}
      <section className="border-y border-[#E3E7DE] bg-[#F3F5EF] px-5 py-10 sm:px-8 lg:px-12">
        <div className="container-main mx-auto">
          <div className="mb-6 text-center">
            <div className="flex justify-center">
              <Eyebrow>Explore Our Expertise</Eyebrow>
            </div>

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

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
