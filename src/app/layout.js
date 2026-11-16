
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://linkstratglobal.com"),

  title: {
    default: "Linkstrat Global Commerce | Global Trade & Logistics",
    template: "%s | Linkstrat Global Commerce",
  },

  description:
    "Linkstrat Global Commerce provides procurement, sourcing, international logistics, customs documentation, export strategy and supply chain solutions.",

  keywords: [
    "Linkstrat Global Commerce",
    "International Trade",
    "Global Procurement",
    "Export and Import",
    "Logistics",
    "Supply Chain Management",
  ],

  openGraph: {
    title: "Linkstrat Global Commerce",
    description:
      "Connecting global markets through sourcing, procurement and international trade solutions.",
    url: "https://linkstratglobal.com",
    siteName: "Linkstrat Global Commerce",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
