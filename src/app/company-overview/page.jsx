
"use client";

import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe2,
  Handshake,
  Target,
  TrendingUp,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Tech-Driven Transparency",
    description:
      "We measure performance and use technology to improve timelines, cost efficiency and compliance.",
    icon: Settings,
  },
  {
    number: "02",
    title: "Compliance-First Approach",
    description:
      "We navigate customs, export paperwork and tax regimes with precision.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Customized Solutions",
    description:
      "No templates. Only strategies tailored to your sector, scale and markets.",
    icon: Target,
  },
  {
    number: "04",
    title: "End-to-End Expertise",
    description:
      "From local shipping to international compliance, we manage every layer.",
    icon: Globe2,
  },
];

const coreValuesLeft = [
  {
    title: "Worldwide Agri-trading",
    description:
      "Our values sustainability in respect of agricultural procurement from the farmer and the trading business — our connecting suppliers and buyers in full of trust, ensuring quality management with long-term partnerships.",
  },
  {
    title: "Integrity First",
    description:
      "We uphold transparency and accountability in every transaction and client interaction.",
  },
  {
    title: "Client Success",
    description:
      "We grow when our clients grow. Your goals drive our strategies.",
  },
];

const coreValuesRight = [
  {
    title: "Compliance & Accuracy",
    description:
      "We navigate customs and documentation with precision, ensuring error-free movement of goods.",
  },
  {
    title: "Global Perspective, Local Expertise",
    description:
      "Our cross-continental team brings deep regional knowledge combined with international best practices.",
  },
  {
    title: "Efficiency Matters",
    description:
      "From sourcing to delivery, we optimize every process for time and cost savings.",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-[3px] w-9 rounded-full bg-[#FF6B00]" />
      <span
        className={`text-xs font-bold uppercase tracking-[2.5px] ${
          light ? "text-[#AFC18C]" : "text-[#526B1D]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default function CompanyOverviewPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[390px] items-center justify-center overflow-hidden sm:min-h-[470px] lg:min-h-[540px]">

        <img
          src="https://images.unsplash.com/photo-1546470427-e5b89cd2e8e9?auto=format&fit=crop&w=2000&q=90"
          alt="Fresh agricultural produce"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#10150D]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center"
        >
          <span className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#D8E4C7]">
            <span className="h-[2px] w-8 bg-[#FF6B00]" />
            Who We Are
            <span className="h-[2px] w-8 bg-[#FF6B00]" />
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Connecting Global Markets.
            <span className="mt-2 block text-[#FF8533]">
              Delivering Trusted Trade.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-[2] text-white/85 sm:text-base lg:text-lg">
            Linkstrat Global Commerce operates as a trusted global import
            partner, leveraging a strong Canada–India sourcing network. The
            company is built on integrity, compliance, reliability, and
            long-term partnerships, and follows a process-driven,
            institution-ready operating model.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href="#company-intro"
              className="inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-[#FF6B00] hover:bg-[#FF6B00]"
            >
              Discover Our Company
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#526B1D] via-[#FF6B00] to-[#526B1D]" />
      </section>

      {/* COMPANY INTRODUCTION */}
      <section
        id="company-intro"
        className="bg-[#F3F4F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="container-main mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>About Linkstrat</SectionLabel>

            <h2 className="max-w-xl text-3xl font-bold leading-[1.2] text-[#101D32] sm:text-4xl lg:text-[48px]">
              Let’s Simplify Your International Trade Journey Together.
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-[2] text-[#626262] sm:text-base">
              <p>
                We bridge continents through seamless trade and logistics
                solutions. As a strategic import-export entity based in India,
                with key operations linked to Canada, we specialize in
                providing end-to-end support in international trade,
                including logistics, procurement, customs, and overseas
                supply chain optimization.
              </p>

              <p>
                Our expertise enables businesses to expand into global
                markets with confidence and clarity.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-[#E1E6DA] bg-white px-5 py-4">
                <p className="text-2xl font-bold text-[#526B1D]">Global</p>
                <p className="mt-1 text-xs text-[#777777]">
                  Trade Perspective
                </p>
              </div>

              <div className="rounded-2xl border border-[#E1E6DA] bg-white px-5 py-4">
                <p className="text-2xl font-bold text-[#FF6B00]">Trusted</p>
                <p className="mt-1 text-xs text-[#777777]">
                  Business Partnerships
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-tr-[45px] border-r-[5px] border-t-[5px] border-[#FF6B00]/60" />

            <div className="relative h-[340px] overflow-hidden rounded-[25px] shadow-[0_20px_45px_rgba(16,29,50,0.14)] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85"
                alt="Agricultural chickpeas and pulses"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#101D32] px-6 py-5 text-white shadow-xl sm:-left-8">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#AFC18C]">
                Our Approach
              </p>
              <p className="mt-2 text-lg font-bold">
                Quality. Trust. Reliability.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SPECIALITY / MISSION / VISION */}
      <section className="relative overflow-hidden bg-[#101D32] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#526B1D]/20 blur-3xl" />

        <div className="container-main relative z-10 mx-auto">

          <div className="mb-16 max-w-2xl">
            <SectionLabel light>Our Foundation</SectionLabel>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Built on Purpose.
              <span className="block text-[#AFC18C]">
                Driven by Possibility.
              </span>
            </h2>
          </div>

          {/* Speciality */}
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[280px] overflow-hidden rounded-t-[20px] lg:h-[380px] lg:rounded-l-[22px] lg:rounded-tr-none"
            >
              <img
                src="https://images.unsplash.com/photo-1592982537447-6f2a6a0b8f5b?auto=format&fit=crop&w=1200&q=85"
                alt="Agricultural quality and procurement"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex min-h-[280px] flex-col justify-center bg-[#17263E] p-7 sm:p-10 lg:min-h-[380px] lg:rounded-r-[22px] lg:p-14"
            >
              <SectionLabel light>What We Do</SectionLabel>

              <h3 className="text-3xl font-bold text-[#FF8533] sm:text-4xl">
                Our Speciality
              </h3>

              <div className="mt-5 h-[3px] w-14 rounded-full bg-[#FF6B00]" />

              <p className="mt-6 text-sm leading-[2] text-white/75 sm:text-base">
                The speciality of Linkstrat Global Commerce is our
                association with manufacturers and manufacturers across
                the globe, from whom we procure, process and sell to buyers
                in competitive prices located in different parts of the
                world. Our potential buyers are located worldwide.
              </p>

              <p className="mt-4 text-sm leading-[2] text-white/75 sm:text-base">
                Being an international company, we are aware and sensitive
                towards products to our buyers. We are committed to provide
                the best quality product and services to our buyers to
                maintain a healthy relationship with both our suppliers
                and buyers.
              </p>
            </motion.div>
          </div>

          {/* Mission */}
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 flex min-h-[280px] flex-col justify-center bg-[#17263E] p-7 sm:p-10 lg:order-1 lg:min-h-[380px] lg:rounded-l-[22px] lg:p-14"
            >
              <SectionLabel light>Why We Exist</SectionLabel>

              <h3 className="text-3xl font-bold text-[#FF8533] sm:text-4xl">
                Our Mission
              </h3>

              <div className="mt-5 h-[3px] w-14 rounded-full bg-[#FF6B00]" />

              <p className="mt-6 text-sm leading-[2] text-white/75 sm:text-base">
                Linkstrat Global Commerce becomes a diversified global
                business partner by providing world-class quality of
                agricultural product through reliable procurement, ethical
                sourcing and sustainable trading practices and unmatched
                professional services and to build up a brand name which
                will be the benchmark of the industry. We strive to empower
                farmers, support local communities, and deliver excellence
                in every transaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 h-[280px] overflow-hidden lg:order-2 lg:h-[380px] lg:rounded-r-[22px]"
            >
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
                alt="Agricultural commodities and pulses"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Vision */}
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[280px] overflow-hidden lg:h-[380px] lg:rounded-l-[22px]"
            >
              <img
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85"
                alt="Fresh agricultural produce ready for trade"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex min-h-[280px] flex-col justify-center bg-[#17263E] p-7 sm:p-10 lg:min-h-[380px] lg:rounded-r-[22px] lg:p-14"
            >
              <SectionLabel light>Where We Are Going</SectionLabel>

              <h3 className="text-3xl font-bold text-[#FF8533] sm:text-4xl">
                Our Vision
              </h3>

              <div className="mt-5 h-[3px] w-14 rounded-full bg-[#FF6B00]" />

              <p className="mt-6 text-sm leading-[2] text-white/75 sm:text-base">
                Linkstrat Global Commerce rests on the values of honesty,
                integrity, respect, fairness, professionalism, trust,
                responsibility, commitment and caring. We believe a
                globally trusted leader in the agricultural trade can be
                built by fostering innovation, transparency and
                sustainability to ensure food security for all nations,
                and value added for stakeholders across every link of
                the agricultural product supply network.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE LINKSTRAT */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85"
          alt="Agricultural fields"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#17251A]/80" />

        <div className="container-main relative z-10 mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <SectionLabel light>Why Work With Us</SectionLabel>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Why Choose Linkstrat
              <span className="text-[#FF8533]"> Global Commerce?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
              A practical, transparent and reliable approach to international
              sourcing and global trade.
            </p>
          </motion.div>

          <div className="grid overflow-hidden rounded-[22px] border border-white/25 sm:grid-cols-2">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border-b border-white/25 p-7 backdrop-blur-[2px] transition-all duration-300 hover:bg-white/10 sm:p-9 lg:p-11 [&:nth-child(odd)]:sm:border-r [&:nth-last-child(-n+2)]:sm:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-light text-white/45 transition-colors group-hover:text-[#FF8533]">
                      {item.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-[#FF8533]">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#FF8533] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-[1.9] text-white/80">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#F7F8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="container-main mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <SectionLabel>What Guides Us</SectionLabel>

            <h2 className="text-3xl font-bold text-[#101D32] sm:text-4xl lg:text-5xl">
              Our Core <span className="text-[#FF6B00]">Values</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#777777] sm:text-base">
              The principles that guide our decisions, shape our partnerships
              and define how we conduct business.
            </p>
          </motion.div>

          <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">

            <div className="space-y-10">
              {coreValuesLeft.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border-l-[3px] border-[#DCE5D0] pl-6 transition-colors duration-300 hover:border-[#FF6B00]"
                >
                  <h3 className="text-xl font-bold text-[#101D32] transition-colors group-hover:text-[#526B1D]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.9] text-[#707070] sm:text-base">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-10">
              {coreValuesRight.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border-l-[3px] border-[#DCE5D0] pl-6 transition-colors duration-300 hover:border-[#FF6B00]"
                >
                  <h3 className="text-xl font-bold text-[#101D32] transition-colors group-hover:text-[#526B1D]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.9] text-[#707070] sm:text-base">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="container-main mx-auto">
          <div className="relative overflow-hidden rounded-[26px] bg-[#101D32] px-7 py-11 sm:px-12 sm:py-14">

            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-20 h-56 w-56 rounded-full border border-white/10" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#FF8533]">
                  Let's Build Together
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Your Trusted Partner in
                  <span className="text-[#AFC18C]"> Global Trade.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
                  Let's discuss how Linkstrat Global Commerce can support
                  your international sourcing, logistics and trade
                  requirements.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00] hover:shadow-lg hover:shadow-[#FF6B00]/20"
              >
                Contact Us
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
