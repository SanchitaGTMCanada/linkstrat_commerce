
"use client";

import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  MapPin,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const teamMembers = [
  {
    number: "01",
    name: "Julia Solorio",
    qualification: "Marketing Graduate",
    designation: "Head of Mexico Region",
    location: "Mexico",
    experience: "20+ Years Experience",
    description:
      "Marketing graduate with over 20 years of experience in sales and business development across the furniture, art, and home décor industries. Throughout my career, I have built strong skills in team leadership, strategic planning, and revenue growth.",
    image: "/images/team/julia-solorio.jpg",
  },
  {
    number: "02",
    name: "Mohamed Hachim Elazhari",
    qualification: "CCLP, Masters in Logistics",
    designation: "Head of Canada and Morocco Region",
    location: "Canada & Morocco",
    experience: "3+ Years Experience",
    description:
      "Logistics professional with over 3 years of experience in port operations and supply chain management. Skilled in coordinating complex shipping activities, optimizing workflows, and ensuring smooth communication between stakeholders.",
    image: "/images/team/mohamed-hachim-elazhari.jpg",
  },
];

export default function OurTeamPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="relative flex min-h-[340px] items-center overflow-hidden sm:min-h-[420px] lg:min-h-[490px]">

        <img
          src="/images/team/team-banner.jpg"
          alt="International trade professionals"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#101D32]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32]/95 via-[#101D32]/65 to-transparent" />

        <div className="container-main relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#FF6B00]" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#E5EBD9]">
                People Behind Linkstrat
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[76px]">
              Our People.
              <br />
              <span className="text-[#FF8533]">Our Strength.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Meet the professionals bringing international experience,
              industry knowledge and trusted relationships to global trade.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm text-white/75">
              <a href="/" className="transition hover:text-[#FF8533]">
                Home
              </a>
              <span className="text-[#FF8533]">/</span>
              <span className="font-semibold text-white">Our Team</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#526B1D] via-[#FF6B00] to-[#526B1D]" />
      </section>

      {/* INTRODUCTION */}
      <section className="relative bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="container-main mx-auto">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-10 rounded-full bg-[#FF6B00]" />
                <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#526B1D]">
                  Meet Our Team
                </span>
              </div>

              <h2 className="max-w-2xl text-[36px] font-bold leading-[1.15] text-[#101D32] sm:text-[46px] lg:text-[54px]">
                Experience That
                <br />
                <span className="text-[#FF6B00]">Connects Markets.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-[15px] leading-[2] text-[#666666] sm:text-base">
                Our team brings together professionals with experience across
                marketing, logistics and international business. With regional
                expertise and a shared commitment to reliability, we help build
                stronger connections between markets.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF1E8] text-[#526B1D]">
                  <Globe2 size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#101D32]">
                    International Perspective
                  </p>
                  <p className="mt-1 text-xs text-[#888888]">
                    Regional knowledge. Global connections.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TEAM PROFILES */}
      <section className="relative overflow-hidden bg-[#F0F2EC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#DCE5CD]/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F8DCC8]/50 blur-3xl" />

        <div className="container-main relative z-10 mx-auto">

          {/* Section Header */}
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#526B1D]">
                Leadership & Regional Expertise
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[#101D32] sm:text-4xl lg:text-5xl">
                The People Behind
                <br className="hidden sm:block" />
                <span className="text-[#FF6B00]">Our Partnerships.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-8 text-[#707070] sm:text-base">
              Dedicated professionals supporting our international network
              through knowledge, experience and collaboration.
            </p>
          </div>

          {/* Profile Cards */}
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.15,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E0E5D9] bg-[#101D32] shadow-[0_8px_35px_rgba(16,29,50,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(16,29,50,0.13)]"
              >

                {/* Profile Image */}
                <div className="relative h-[360px] shrink-0 overflow-hidden sm:h-[440px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/65 via-transparent to-transparent" />

                  {/* Number */}
                  <span className="absolute left-7 top-7 text-5xl font-light tracking-tight text-white/80">
                    {member.number}
                  </span>

                  {/* Region Label */}
                  <div className="absolute bottom-6 left-7 flex items-center gap-2 rounded-full border border-white/25 bg-[#101D32]/55 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md">
                    <MapPin size={14} className="text-[#FF8533]" />
                    {member.location}
                  </div>
                </div>

                {/* Information Panel */}
                <div className="relative flex flex-1 flex-col bg-[#101D32] p-7 text-white sm:p-9">

                  {/* Orange Accent */}
                  <div className="absolute right-8 top-0 h-[4px] w-16 bg-[#FF6B00] transition-all duration-500 group-hover:w-28" />

                  {/* Name and Designation */}
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#AFC18C]">
                        {member.qualification}
                      </span>

                      <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-[30px]">
                        {member.name}
                      </h3>

                      <p className="mt-3 text-sm font-semibold leading-6 text-[#FF8533]">
                        {member.designation}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#FF8533]">
                      <BriefcaseBusiness size={23} />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px shrink-0 bg-white/15" />

                  {/* Description */}
                  <p className="flex-1 text-sm leading-[1.9] text-white/70 sm:text-[15px]">
                    {member.description}
                  </p>

                  {/* Bottom Information */}
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white/75">
                      <Users size={16} className="text-[#AFC18C]" />
                      Regional Leadership
                    </div>

                    <span className="flex items-center gap-2 text-xs font-semibold text-[#FF8533]">
                      Linkstrat Global Commerce
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-[4px] w-0 shrink-0 bg-[#FF6B00] transition-all duration-500 group-hover:w-full" />

              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-main relative mx-auto overflow-hidden rounded-[26px] bg-[#101D32] px-7 py-12 sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-20 h-56 w-56 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#FF8533]">
                Our Shared Commitment
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Strong People.
                <br />
                <span className="text-[#AFC18C]">
                  Stronger Partnerships.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
                We believe lasting business relationships are built through
                trust, expertise and a shared commitment to delivering value.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E65F00] hover:shadow-lg hover:shadow-[#FF6B00]/20"
            >
              Connect With Us
              <ArrowUpRight size={19} />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />

    </main>
  );
}
