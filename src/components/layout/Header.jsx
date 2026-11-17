
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Export Strategy and Market Integration",
    href: "/solutions#export-strategy",
  },
  {
    title: "Procurement and Sourcing",
    href: "/solutions#procurement",
  },
  {
    title: "Supply Chain Optimization",
    href: "/solutions#supply-chain",
  },
  {
    title: "Logistics and Transportation",
    href: "/solutions#logistics",
  },
  {
    title: "Customs and Documentation",
    href: "/solutions#customs",
  },
  {
    title: "Overseas Logistics Consultancy",
    href: "/solutions#overseas-logistics",
  },
];

/* WEBSITE SEARCH INDEX */

const searchIndex = [
  {
    title: "Home",
    category: "Page",
    description: "Linkstrat Global Commerce homepage",
    keywords: "home global commerce Canada India business",
    href: "/",
  },
  {
    title: "Company Overview",
    category: "About Us",
    description: "Learn about Linkstrat Global Commerce",
    keywords: "company about us business profile introduction",
    href: "/company-overview",
  },
  {
    title: "Areas of Operations",
    category: "About Us",
    description: "Explore our business operations and markets",
    keywords: "operations areas markets locations international",
    href: "/areas-of-operations",
  },
  {
    title: "Our Team",
    category: "Company",
    description: "Meet our team and professionals",
    keywords: "team people professionals employees members",
    href: "/our-team",
  },
  {
    title: "Our Solutions",
    category: "Solutions",
    description: "Explore our global commerce solutions",
    keywords: "solutions services business commerce",
    href: "/solutions",
  },
  {
    title: "Export Strategy and Market Integration",
    category: "Solutions",
    description: "Export strategy and market integration services",
    keywords: "export strategy market integration international trade global markets",
    href: "/solutions#export-strategy",
  },
  {
    title: "Procurement and Sourcing",
    category: "Solutions",
    description: "Procurement and sourcing solutions",
    keywords: "procurement sourcing suppliers purchasing products",
    href: "/solutions#procurement",
  },
  {
    title: "Supply Chain Optimization",
    category: "Solutions",
    description: "Supply chain management and optimization",
    keywords: "supply chain optimization management operations distribution",
    href: "/solutions#supply-chain",
  },
  {
    title: "Logistics and Transportation",
    category: "Solutions",
    description: "Logistics and transportation services",
    keywords: "logistics transportation cargo shipping freight delivery",
    href: "/solutions#logistics",
  },
  {
    title: "Customs and Documentation",
    category: "Solutions",
    description: "Customs clearance and documentation",
    keywords: "customs documentation clearance import export paperwork",
    href: "/solutions#customs",
  },
  {
    title: "Overseas Logistics Consultancy",
    category: "Solutions",
    description: "Overseas logistics consultancy services",
    keywords: "overseas logistics consultancy international shipping",
    href: "/solutions#overseas-logistics",
  },
  {
    title: "Contact Us",
    category: "Contact",
    description: "Get in touch with our team",
    keywords: "contact consultation enquiry email phone",
    href: "/contact",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const closeMenu = () => {
    setMobileOpen(false);
    setActiveDropdown("");
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  /* LIVE SEARCH FILTER */

  const searchResults = searchQuery.trim()
    ? searchIndex
        .filter((item) => {
          const searchableText = [
            item.title,
            item.category,
            item.description,
            item.keywords,
          ]
            .join(" ")
            .toLowerCase();

          const searchWords = searchQuery
            .toLowerCase()
            .trim()
            .split(/\s+/);

          return searchWords.every((word) =>
            searchableText.includes(word)
          );
        })
        .slice(0, 10)
    : [];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E7E7E4] bg-white/95 backdrop-blur-xl">
      <div className="container-main">

        {/* HEADER MAIN ROW */}

        <div className="relative flex h-[86px] items-center justify-between gap-5">

          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-15 w-50 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_5px_20px_rgba(16,29,50,0.22)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_26px_rgba(16,29,50,0.30)]">
              <img
                src="/images/logo/logo.png"
                alt="Linkstrat Global Commerce"
                className="h-full w-full rounded-full object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-7 xl:flex">

            {/* ABOUT DROPDOWN */}

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
                className="flex items-center gap-1.5 py-4 font-sans text-sm font-medium text-[#253348] transition-colors hover:text-[#637C61]"
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
                    className="block rounded-md px-4 py-3 font-sans text-sm font-medium text-[#253348] transition-colors hover:bg-[#F5F3ED] hover:text-[#637C61]"
                  >
                    Company Overview
                  </Link>

                  <Link
                    href="/areas-of-operations"
                    onClick={closeMenu}
                    className="block rounded-md px-4 py-3 font-sans text-sm font-medium text-[#253348] transition-colors hover:bg-[#F5F3ED] hover:text-[#637C61]"
                  >
                    Areas of Operations
                  </Link>
                </div>
              )}
            </div>

            {/* SOLUTIONS DROPDOWN */}

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
                className="flex items-center gap-1.5 py-4 font-sans text-sm font-medium text-[#253348] transition-colors hover:text-[#637C61]"
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
                <div className="absolute left-0 top-full w-[340px] rounded-lg border border-[#e8e6df] bg-white p-2 shadow-xl">
                  <Link
                    href="/solutions"
                    onClick={closeMenu}
                    className="mb-2 flex items-center justify-between rounded-md bg-[#101D32] px-4 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-[#526B1D]"
                  >
                    <span>Explore All Solutions</span>
                    <ArrowUpRight size={17} />
                  </Link>

                  <div className="mb-2 border-b border-[#EEEEEA]" />

                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between gap-3 rounded-md px-4 py-3 font-sans text-sm font-medium text-[#253348] transition-colors hover:bg-[#F5F3ED] hover:text-[#FF6B00]"
                    >
                      <span>{service.title}</span>
                      <ArrowUpRight size={14} className="shrink-0" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* OTHER LINKS */}

            <Link
              href="/our-team"
              className="font-sans text-sm font-medium text-[#253348] transition-colors hover:text-[#637C61]"
            >
              Our Team
            </Link>

            <Link
              href="/contact"
              className="font-sans text-sm font-medium text-[#253348] transition-colors hover:text-[#637C61]"
            >
              Contact Us
            </Link>
          </nav>

          {/* DESKTOP ACTIONS */}

          <div className="hidden shrink-0 items-center gap-3 lg:flex">

            {/* DESKTOP SEARCH BUTTON */}

            <button
              type="button"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setActiveDropdown("");
              }}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                searchOpen
                  ? "bg-[#101D32] text-white shadow-md"
                  : "bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25 hover:-translate-y-0.5 hover:bg-[#e85f00] hover:shadow-lg"
              }`}
            >
              {searchOpen ? <X size={19} /> : <Search size={19} />}
            </button>

            {/* CANADIANA EXPORTS BUTTON */}

            <Link
              href="https://canadianaexports.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-full bg-[#C5D0B8] px-5 py-2.5 font-sans text-sm font-medium text-[#3A4A09] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B5C3A6]"
            >
              Canadiana Exports
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* MOBILE ACTIONS */}

          <div className="flex items-center gap-2 xl:hidden">

            {/* MOBILE SEARCH BUTTON */}

            <button
              type="button"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setActiveDropdown("");
              }}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                searchOpen
                  ? "bg-[#101D32] text-white shadow-md"
                  : "bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25 hover:bg-[#e85f00]"
              }`}
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={
                mobileOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#deddd5] text-[#101D32] transition-colors hover:bg-[#101D32] hover:text-white"
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* LIVE SEARCH PANEL */}

        {searchOpen && (
          <div className="border-t border-[#E7E7E4] py-4">
            <div className="mx-auto max-w-2xl">

              {/* SEARCH INPUT */}

              <div className="flex items-center gap-3 rounded-lg border border-[#deddd5] bg-[#F5F3ED] px-4 transition-colors focus-within:border-[#FF6B00]">
                <Search
                  size={19}
                  className="shrink-0 text-[#637C61]"
                />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search anything on our website..."
                  autoFocus
                  className="h-12 w-full bg-transparent font-sans text-sm text-[#101D32] outline-none placeholder:text-[#8A929B]"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="shrink-0 text-[#69747D] transition-colors hover:text-[#FF6B00]"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* SEARCH RESULTS */}

              {searchQuery.trim() && (
                <div className="mt-3 overflow-hidden rounded-lg border border-[#E7E7E4] bg-white shadow-lg">

                  <div className="flex items-center justify-between border-b border-[#EEEEEA] px-4 py-3">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#8A929B]">
                      Search References
                    </p>

                    {searchResults.length > 0 && (
                      <span className="font-sans text-xs font-medium text-[#FF6B00]">
                        {searchResults.length} results
                      </span>
                    )}
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="max-h-[350px] overflow-y-auto">
                      {searchResults.map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            closeSearch();
                            closeMenu();
                          }}
                          className={`group flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-[#F5F3ED] ${
                            index !== searchResults.length - 1
                              ? "border-b border-[#EEEEEA]"
                              : ""
                          }`}
                        >
                          <div className="min-w-0">
                            <p className="font-sans text-sm font-medium text-[#101D32] transition-colors group-hover:text-[#FF6B00]">
                              {item.title}
                            </p>

                            <p className="mt-1 font-sans text-xs font-normal text-[#69747D]">
                              {item.category} · {item.description}
                            </p>
                          </div>

                          <ArrowUpRight
                            size={17}
                            className="shrink-0 text-[#9AA1A9] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF6B00]"
                          />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <Search
                        size={25}
                        className="mx-auto mb-2 text-[#A0A7AF]"
                      />

                      <p className="font-sans text-sm font-medium text-[#101D32]">
                        No matching references found
                      </p>

                      <p className="mt-1 font-sans text-xs font-normal text-[#8A929B]">
                        Try another keyword or search phrase.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {!searchQuery.trim() && (
                <p className="mt-3 text-center font-sans text-xs font-normal text-[#8A929B]">
                  Search for services, solutions, company information, and more.
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* MOBILE NAVIGATION */}

      {mobileOpen && (
        <div className="border-t border-[#e8e6df] bg-[#F5F3ED] xl:hidden">
          <nav className="container-main flex max-h-[calc(100vh-86px)] flex-col gap-1 overflow-y-auto py-5">

            {/* ABOUT */}

            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "about" ? "" : "about"
                )
              }
              className="flex items-center justify-between py-3 text-left font-sans text-sm font-medium text-[#101D32]"
            >
              About Us

              <ChevronDown
                size={17}
                className={`transition-transform ${
                  activeDropdown === "about" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeDropdown === "about" && (
              <div className="mb-2 border-l-2 border-[#637C61] pl-4">
                <Link
                  href="/company-overview"
                  onClick={closeMenu}
                  className="block py-2 font-sans text-sm font-medium text-[#69747D] transition-colors hover:text-[#FF6B00]"
                >
                  Company Overview
                </Link>

                <Link
                  href="/areas-of-operations"
                  onClick={closeMenu}
                  className="block py-2 font-sans text-sm font-medium text-[#69747D] transition-colors hover:text-[#FF6B00]"
                >
                  Areas of Operations
                </Link>
              </div>
            )}

            {/* SOLUTIONS */}

            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "solutions" ? "" : "solutions"
                )
              }
              className="flex items-center justify-between py-3 text-left font-sans text-sm font-medium text-[#101D32]"
            >
              Solutions

              <ChevronDown
                size={17}
                className={`transition-transform ${
                  activeDropdown === "solutions" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeDropdown === "solutions" && (
              <div className="mb-2 border-l-2 border-[#FF6B00] pl-4">
                <Link
                  href="/solutions"
                  onClick={closeMenu}
                  className="mb-2 flex items-center justify-between py-3 font-sans text-sm font-medium text-[#101D32]"
                >
                  Explore All Solutions
                  <ArrowUpRight size={16} />
                </Link>

                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMenu}
                    className="block py-2.5 font-sans text-sm font-medium text-[#69747D] transition-colors hover:text-[#FF6B00]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            {/* OTHER LINKS */}

            <Link
              href="/our-team"
              onClick={closeMenu}
              className="py-3 font-sans text-sm font-medium text-[#101D32] transition-colors hover:text-[#637C61]"
            >
              Our Team
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-3 font-sans text-sm font-medium text-[#101D32] transition-colors hover:text-[#637C61]"
            >
              Contact Us
            </Link>

            {/* MOBILE CONSULTATION CTA */}

            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#C5D0B8] px-5 py-3 font-sans text-sm font-medium text-[#3A4A09] transition-all duration-300 hover:bg-[#B5C3A6]"
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
