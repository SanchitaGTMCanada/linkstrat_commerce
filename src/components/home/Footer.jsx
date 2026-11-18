
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/company-overview" },
  { name: "Our Services", href: "/solutions" },

  { name: "Our Team", href: "/our-team" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/linkstrat-global-commerce-pvt-ltd/", type: "linkedin" },

  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61577906797986", type: "facebook" },
];

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9h3.6v12H3.4V9Zm5.8 0h3.45v1.65h.05A3.78 3.78 0 0 1 16.1 8.7c3.65 0 4.33 2.4 4.33 5.52V21h-3.6v-6.02c0-1.44-.03-3.3-2.02-3.3-2.03 0-2.34 1.58-2.34 3.2V21H9.2V9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.69V3.14C16.49 3.05 15.51 3 14.36 3c-2.4 0-4.05 1.46-4.05 4.15V9.6H7.6v3.2h2.71V21h3.19Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#101D32] text-white">
      <div className="container-main relative z-10">

        {/* Main compact footer */}
        <div className="flex flex-col gap-7 py-8 md:flex-row md:items-center md:justify-between">

          {/* Logo and tagline */}
      
{/* Logo and tagline */}
<div className="flex flex-col items-center text-center md:items-start md:text-left">
  <Link
    href="/"
    className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 shadow-md transition-transform duration-300 hover:scale-[1.02]"
  >
    <Image
      src="/images/logo/logo.png"
      alt="Linkstrat Global Commerce"
      width={170}
      height={55}
      className="h-auto w-[140px] object-contain"
    />
  </Link>

  <p className="mt-2 text-sm font-medium text-white/70">
    Sourced in Canada.{" "}
    <span className="text-[#FF6B00]">Trusted in India.</span>
  </p>
</div>


          {/* Navigation and CTA */}
          <div className="flex flex-col items-center gap-5 md:items-end">
             <Link
  href="/contact"
  className="group inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-5 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85f00]"
>
  Let's Talk
  <ArrowUpRight
    size={18}
    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</Link>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:justify-end">
  {navigation.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="text-base font-medium text-white/65 transition-colors hover:text-[#FF6B00]"
    >
      {item.name}
    </Link>
  ))}
</nav>

          
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-4 sm:flex-row">

          <p className="text-center text-[14px] text-white/40">
            Copyright © {new Date().getFullYear()} Linkstrat Global Commerce Pvt. Ltd. All Rights Reserved
          </p>

          <div className="flex items-center gap-4">
            {/* <Link
              href="/privacy-policy"
              className="text-[11px] text-white/45 transition-colors hover:text-[#FF6B00]"
            >
              Privacy Policy
            </Link> */}

            <span className="h-1 w-1 rounded-full bg-white/25" />

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
