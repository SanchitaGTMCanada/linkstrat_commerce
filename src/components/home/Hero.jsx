
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#101D32] lg:min-h-[620px]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* DEEP NAVY OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101D32]/95 via-[#101D32]/85 to-[#101D32]/35" />

      {/* BOTTOM NAVY SHADOW */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101D32]/70 via-transparent to-[#101D32]/20" />

      {/* LEFT ORANGE ACCENT */}
      <div className="absolute left-0 top-0 h-full w-[4px] bg-[#FF6B00]" />

      {/* HERO CONTENT */}
      <div className="container-main relative z-10 flex min-h-[560px] w-full items-center py-16 lg:min-h-[620px] lg:py-20">

        <div className="grid w-full items-center lg:grid-cols-[1.1fr_0.9fr]">

          <div className="max-w-[760px]">

            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#101D32]/50 px-6 py-3 shadow-sm backdrop-blur-md"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B00]" />

              <span className="text-xs font-semibold uppercase tracking-[2.5px] text-white sm:text-sm">
                Global Commerce
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-[42px] font-bold leading-[1.1] tracking-[-1.8px] text-white sm:text-[54px] lg:text-[68px] xl:text-[74px]"
            >
              Sourced in Canada.
              <br />

              <span className="font-semibold text-[#FF6B00]">
                Trusted in India.
              </span>
            </motion.h1>

          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#101D32] via-[#FF6B00] to-[#101D32]" />

    </section>
  );
}
