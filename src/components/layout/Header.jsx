
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Globe2,
} from "lucide-react";

const services = [
  {
    title: "Export Strategy and Market Integration",
    href: "/services/export-strategy-and-market-integration",
  },
  {
    title: "Procurement and Sourcing",
    href: "/services/procurement-and-sourcing",
  },
  {
    title: "Supply Chain Optimization",
    href: "/services/supply-chain-optimization",
  },
  {
    title: "Logistics and Transportation",
    href: "/services/logistics-and-transportation",
  },
  {
    title: "Customs and Documentation",
    href: "/services/customs-and-documentation",
  },
  {
    title: "Overseas Logistics Consultancy",
    href: "/services/overseas-logistics-consultancy",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const closeMenu = () => {
    setMobileOpen(false);
    setActiveDropdown("");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E7E7E4] bg-white/95 backdrop-blur-xl">

      <div className="container-main">
        <div className="flex h-[86px] items-center justify-between gap-6">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#101D32] text-[#D9B982] transition-transform duration-300 group-hover:rotate-12">
              <Globe2 size={23} strokeWidth={1.5} />
            </div>

            <div className="leading-tight">
              <span className="block text-[19px] font-bold tracking-[1.5px] text-[#101D32]">
                LINKSTRAT
              </span>

              <span className="mt-1 block text-[9px] font-semibold tracking-[2.7px] text-[#637C61]">
                GLOBAL COMMERCE
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 xl:flex">

            {/* ABOUT */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown("")}
            >
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "about" ? "" : "about"
                  )
                }
                className="flex items-center gap-1.5 py-4 text-[13px] font-medium text-[#253348] transition-colors hover:text-[#637C61]"
              >
                About Us
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute left-0 top-full w-64 rounded-lg border border-[#e8e6df] bg-white p-2 shadow-xl">
                  <Link
                    href="/company-overview"
                    onClick={closeMenu}
                    className="block rounded-md px-4 py-3 text-sm text-[#253348] hover:bg-[#F5F3ED] hover:text-[#637C61]"
                  >
                    Company Overview
                  </Link>

                  <Link
                    href="/areas-of-operations"
                    onClick={closeMenu}
                    className="block rounded-md px-4 py-3 text-sm text-[#253348] hover:bg-[#F5F3ED] hover:text-[#637C61]"
                  >
                    Areas of Operations
                  </Link>
                </div>
              )}
            </div>

            {/* SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown("")}
            >
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "solutions" ? "" : "solutions"
                  )
                }
                className="flex items-center gap-1.5 py-4 text-[13px] font-medium text-[#253348] transition-colors hover:text-[#637C61]"
              >
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    activeDropdown === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "solutions" && (
                <div className="absolute left-0 top-full w-[330px] rounded-lg border border-[#e8e6df] bg-white p-2 shadow-xl">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between gap-3 rounded-md px-4 py-3 text-sm text-[#253348] transition-colors hover:bg-[#F5F3ED] hover:text-[#637C61]"
                    >
                      <span>{service.title}</span>
                      <ArrowUpRight size={14} className="shrink-0" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/our-team"
              className="text-[13px] font-medium text-[#253348] transition-colors hover:text-[#637C61]"
            >
              Our Team
            </Link>

            <Link
              href="/news"
              className="text-[13px] font-medium text-[#253348] transition-colors hover:text-[#637C61]"
            >
              News
            </Link>

            <Link
              href="/contact-us"
              className="text-[13px] font-medium text-[#253348] transition-colors hover:text-[#637C61]"
            >
              Contact Us
            </Link>
          </nav>

          {/* DESKTOP CTA */}
          <Link
            href="/contact-us"
            className="hidden shrink-0 items-center gap-3 bg-[#101D32] px-5 py-3.5 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#637C61] lg:flex"
          >
            Get a Consultation
            <ArrowUpRight size={16} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 items-center justify-center border border-[#deddd5] text-[#101D32] transition-colors hover:bg-[#101D32] hover:text-white xl:hidden"
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div className="border-t border-[#e8e6df] bg-[#F5F3ED] xl:hidden">
          <nav className="container-main flex max-h-[calc(100vh-86px)] flex-col gap-1 overflow-y-auto py-5">

            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "about" ? "" : "about"
                )
              }
              className="flex items-center justify-between py-3 text-left text-sm font-semibold text-[#101D32]"
            >
              About Us
              <ChevronDown
                size={17}
                className={activeDropdown === "about" ? "rotate-180" : ""}
              />
            </button>

            {activeDropdown === "about" && (
              <div className="mb-2 border-l-2 border-[#637C61] pl-4">
                <Link
                  href="/company-overview"
                  onClick={closeMenu}
                  className="block py-2 text-sm text-[#69747D]"
                >
                  Company Overview
                </Link>

                <Link
                  href="/areas-of-operations"
                  onClick={closeMenu}
                  className="block py-2 text-sm text-[#69747D]"
                >
                  Areas of Operations
                </Link>
              </div>
            )}

            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "solutions" ? "" : "solutions"
                )
              }
              className="flex items-center justify-between py-3 text-left text-sm font-semibold text-[#101D32]"
            >
              Solutions
              <ChevronDown
                size={17}
                className={
                  activeDropdown === "solutions" ? "rotate-180" : ""
                }
              />
            </button>

            {activeDropdown === "solutions" && (
              <div className="mb-2 border-l-2 border-[#637C61] pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMenu}
                    className="block py-2 text-sm text-[#69747D]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/our-team"
              onClick={closeMenu}
              className="py-3 text-sm font-semibold text-[#101D32]"
            >
              Our Team
            </Link>

            <Link
              href="/news"
              onClick={closeMenu}
              className="py-3 text-sm font-semibold text-[#101D32]"
            >
              News & Announcements
            </Link>

            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="py-3 text-sm font-semibold text-[#101D32]"
            >
              Contact Us
            </Link>

            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-3 bg-[#101D32] px-5 py-4 text-sm font-semibold text-white"
            >
              Get a Consultation
              <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
