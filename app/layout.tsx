import type { Metadata } from "next";
import { Arimo, Prata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const arimo = Arimo({
  weight: ["400", "700", "500", "600"],
  variable: "--font-arimo",
  subsets: ["latin"],
});

const prata = Prata({
  weight: ["400"],
  variable: "--font-prata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gracepointe - A Place of Faith and Community",
  description:
    "Welcome to Gracepointe Church - a place where faith, community, and purpose come together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.variable} ${prata.variable} antialiased relative`}
      >
        <Navbar />
        <main className="min-h-[80vh] bg-black mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
