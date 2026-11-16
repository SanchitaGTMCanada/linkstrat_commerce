
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe2 } from "lucide-react";

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-main">

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* SECTION LABEL */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-11 bg-[#FF6B00]" />

              <span className="text-sm font-semibold uppercase tracking-[2.5px] text-[#526B1D]">
                Who We Are
              </span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="max-w-[620px] text-[36px] font-bold leading-[1.15] tracking-[-1.2px] text-[#292929] sm:text-[44px] lg:text-[50px] xl:text-[54px]">
              Building Trust Across
              <span className="text-[#FF6B00]">
                {" "}Global Markets.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-8 max-w-[620px] space-y-6 text-[16px] leading-[1.9] text-[#666666] sm:text-[17px] lg:text-[18px]">
              <p>
                <strong className="font-semibold text-[#292929]">
                  Linkstrat Global Commerce
                </strong>{" "}
                is an international trading company specializing in the direct
                import of agricultural commodities and fertilizers from
                dependable and verified sources in Canada. Headquartered in
                Kolkata, India, the company serves Public Limited Companies,
                Government institutions, and large corporates with a strong
                emphasis on governance, transparency, and long-term value
                creation.
              </p>

              <p>
                Linkstrat Global Commerce operates with a trusted global
                import partner network, leveraging a strong Canada–India
                sourcing network. The company is built on integrity,
                compliance, reliability, and long-term partnerships, and
                follows a process-driven, institution-ready operating model.
              </p>
            </div>

            {/* BOTTOM HIGHLIGHT */}
            <div className="mt-10 flex items-center gap-4 border-t border-[#E7E7E4] pt-7">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EDF2E5] text-[#526B1D]">
                <Globe2 size={25} />
              </div>

              <div>
                <p className="text-base font-semibold text-[#292929] sm:text-lg">
                  Canada to India
                </p>

                <p className="mt-1 text-sm text-[#777777] sm:text-base">
                  Connecting dependable global sourcing networks
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative lg:ml-2"
          >
            {/* DECORATIVE BACKGROUND SHAPES */}
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-3xl bg-[#EDF2E5]" />

            <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-3xl border-[3px] border-[#FF6B00]/30" />

            {/* MAIN IMAGE */}
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=90"
                alt="Business professionals collaborating in an office"
                className="h-[340px] w-full object-cover sm:h-[430px] lg:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/25 via-transparent to-transparent" />
            </div>

            {/* FLOATING IMAGE CAPTION */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4 rounded-xl border border-white/60 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFF0E5] text-[#FF6B00]">
                <ArrowUpRight size={23} />
              </div>

              <div>
                <p className="text-base font-semibold text-[#292929] sm:text-lg">
                  Global Commerce
                </p>

                <p className="mt-1 text-sm text-[#777777]">
                  Built on trust and reliability
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
