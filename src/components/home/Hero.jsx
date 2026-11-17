
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-[#101D32] lg:min-h-[600px]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/hero.png')",
        }}
      />

      {/* SMOOTH FULL-WIDTH LEFT-TO-RIGHT GRADIENT */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(16,29,50,0.97) 0%, rgba(16,29,50,0.93) 25%, rgba(16,29,50,0.85) 40%, rgba(16,29,50,0.68) 55%, rgba(16,29,50,0.42) 70%, rgba(16,29,50,0.18) 85%, rgba(16,29,50,0.05) 100%)",
        }}
      />

      {/* SUBTLE BOTTOM SHADING */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(16,29,50,0.35) 0%, transparent 40%)",
        }}
      />

      {/* LEFT ORANGE ACCENT */}
      <div className="absolute left-0 top-0 h-full w-[4px] bg-[#FF6B00]" />

      {/* HERO CONTENT */}
      <div className="container-main relative z-10 flex min-h-[540px] w-full items-center py-12 lg:min-h-[600px]">

        <div className="grid w-full items-center lg:grid-cols-[1.1fr_0.9fr]">

          {/* HERO TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[690px] py-5"
          >

            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-5 inline-flex items-center gap-2.5"
            >
              <span className="h-[2px] w-8 rounded-full bg-[#FF6B00]" />

              <span className="font-sans text-[11px] font-semibold uppercase tracking-[2.5px] text-[#F5F3ED]/90 sm:text-xs">
                Global Commerce
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[36px] font-bold leading-[1.12] tracking-[-1.8px] text-[#F5F3ED] sm:text-[46px] lg:text-[54px] xl:text-[62px]"
            >
              Sourced in Canada.
              <br />
              <span className="font-semibold text-[#F5F3ED]">
                Trusted in India.
              </span>
            </motion.h1>

            {/* ORANGE UNDERLINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65px" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 h-[3px] rounded-full bg-[#FF6B00]"
            />

          </motion.div>

        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#101D32] via-[#FF6B00] to-[#101D32]" />

    </section>
  );
}
