import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kooturoots Kerala | Authentic Kerala Spices & Masala Powders",
  description:
    "Kooturoots Kerala brings authentic homemade Kerala spice blends including Chicken Curry Masala, Chickpeas Masala, and Sambar Masala crafted with traditional recipes.",

  keywords: [
    "Kooturoots Kerala",
    "Kerala spices",
    "Kerala masala powders",
    "Chicken Curry Masala",
    "Sambar Masala",
    "Chickpeas Masala",
    "Authentic Kerala spices",
    "Homemade masala Kerala",
  ],

  authors: [{ name: "Kooturoots" }],

  openGraph: {
    title: "Kooturoots Kerala | Authentic Kerala Spices",
    description:
      "Premium Kerala spice blends crafted with tradition and authentic homemade taste.",
    url: "https://yourdomain.com",
    siteName: "Kooturoots",
    images: [
      {
        url: "/images/product1.png",
        width: 1200,
        height: 630,
        alt: "Kooturoots Kerala Spices",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kooturoots Kerala",
    description:
      "Authentic Kerala spice blends made with traditional recipes.",
    images: ["/images/product1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-amber-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}