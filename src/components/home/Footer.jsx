
"use client";

import { ArrowUpRight } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.22a1.55 1.55 0 1 1 .02-3.1A1.55 1.55 0 0 1 7 8.22ZM18.34 18h-2.67v-4.18c0-1-.02-2.3-1.4-2.3-1.4 0-1.62 1.1-1.62 2.23V18H9.98V9.4h2.56v1.17h.04a2.8 2.8 0 0 1 2.5-1.37c2.68 0 3.26 1.76 3.26 4.05Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FacebookIcon,
  },
];

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/company-overview" },
  { label: "Our Services", href: "/solutions" },
  { label: "Areas of Operations", href: "/areas-of-operations" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#202120] text-white">

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#526B1D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#FF6B00]/10 blur-3xl" />

      <div className="container-main relative mx-auto px-5 sm:px-8 lg:px-12">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">

          {/* Brand section */}
          <div className="lg:col-span-4">

            <a
              href="/"
              aria-label="Linkstrat Global Commerce home"
              className="inline-flex items-center"
            >
              <div className="flex h-[68px] w-[190px] items-center justify-center rounded-full bg-white p-2 shadow-lg">
                <img
                  src="/images/logo/logo.png"
                  alt="Linkstrat Global Commerce"
                  className="h-full w-full object-contain"
                />
              </div>
            </a>

            <p className="mt-5 max-w-sm text-[16px] font-semibold tracking-wide text-white/80">
              Sourced in Canada. Trusted in India.
            </p>

            <p className="mt-3 max-w-sm text-[14px] leading-7 text-white/50">
              Connecting global markets through dependable sourcing,
              transparent trade practices, and reliable supply chain
              solutions.
            </p>

            {/* Social media */}
            <div className="mt-7">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[2.5px] text-white/40">
                Follow Us
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="mb-6 text-[13px] font-bold uppercase tracking-[2px] text-white">
              Quick Links
            </h3>

            <nav className="flex flex-col items-start gap-4">
              {navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-[14px] text-white/55 transition-colors duration-300 hover:text-[#FF8533]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#FF6B00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Company information */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-[13px] font-bold uppercase tracking-[2px] text-white">
              Our Approach
            </h3>

            <div className="space-y-5">
              <div>
                <p className="text-[14px] font-semibold text-white/85">
                  Global Sourcing
                </p>
                <p className="mt-1 text-[13px] leading-6 text-white/45">
                  Direct connections with dependable Canadian suppliers.
                </p>
              </div>

              <div>
                <p className="text-[14px] font-semibold text-white/85">
                  Trusted Partnerships
                </p>
                <p className="mt-1 text-[13px] leading-6 text-white/45">
                  Transparent relationships built for long-term value.
                </p>
              </div>

              <div>
                <p className="text-[14px] font-semibold text-white/85">
                  Reliable Trade
                </p>
                <p className="mt-1 text-[13px] leading-6 text-white/45">
                  Coordinated logistics and supply chain solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[13px] font-bold uppercase tracking-[2px] text-white">
              Let's Connect
            </h3>

            <p className="mb-6 text-[14px] leading-7 text-white/50">
              Looking for a dependable global trade partner? Let's discuss
              how we can support your business.
            </p>

            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#FF6B00] px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF8533] hover:shadow-lg hover:shadow-[#FF6B00]/20"
            >
              Get in Touch

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">

          <p className="text-[12px] leading-6 text-white/40">
            © {new Date().getFullYear()} Linkstrat Global Commerce.
            All rights reserved.
          </p>

          <p className="text-[12px] tracking-wide text-white/40">
            Global Trade. Trusted Partnerships.
          </p>

          <a
            href="/privacy-policy"
            className="text-[12px] text-white/40 transition-colors duration-300 hover:text-[#FF8533]"
          >
            Privacy Policy
          </a>

        </div>
      </div>
    </footer>
  );
}
