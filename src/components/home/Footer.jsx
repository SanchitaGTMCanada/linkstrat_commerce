
"use client";

import { ArrowUpRight, Globe2 } from "lucide-react";

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
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#202120] text-white">
      <div className="container-main mx-auto px-5 sm:px-8 lg:px-12">

        <div className="flex flex-col gap-9 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">

          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <Globe2
                size={34}
                className="text-[#FF8533]"
                strokeWidth={1.6}
              />

              <span className="text-[24px] font-bold tracking-[2px]">
                LINKSTRAT
              </span>
            </a>

            <p className="mt-3 text-[16px] font-medium text-white/60">
              Sourced in Canada. Trusted in India.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-7 gap-y-4">
            {navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-white/65 transition-colors duration-300 hover:text-[#FF8533]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Media */}
          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[2px] text-white/45">
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
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[16px] font-semibold text-white transition-colors duration-300 hover:text-[#FF8533]"
          >
            Get in Touch

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} Linkstrat Global Commerce. All rights reserved.
          </p>

          <p className="text-[13px] text-white/40">
            Global Trade. Trusted Partnerships.
          </p>
        </div>

      </div>
    </footer>
  );
}
