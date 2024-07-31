import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const accent = localFont({
  src: "./bettynoir.ttf",
  display: "swap",
  variable: "--font-accent",
});
export const metadata: Metadata = {
  title: "Nadia Shchenikova | Creative Portfolio",
  description:
    "My name is Nadia Shchenikova and I am passionate about design and all things related to art. I tackle problems with a rational mindset, aiming for the simplest and most functional solutions. Additionally, I infuse a unique style tailored to your preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${accent.variable}`}>
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
