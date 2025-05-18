import { navItems } from "@/lib/data";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 pb-6 lg:px-8 mt-20">
      <div className="container mx-auto p-6 md:p-12 bg-black text-white rounded-3xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Logo and mission statement */}
          <div className="space-y-6">
            <div className="max-w-[200px]">
              <Image
                src="/logo.png"
                alt="Logo"
                width={130}
                height={130}
                className="h-12 w-full"
                priority
                quality={100}
              />
            </div>
            <p className="text-lg lg:text-2xl leading-relaxed font-title">
              We hope that during your visit, you discover a congregation that
              truly loves God, cherishes the Holy Word, and cares for one
              another.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium font-title">Links</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-red transition-colors font-semibold hover:bg-yellow/10 p-2 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media and Tagline */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium font-title">Connect with us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-red transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>

            <p className="text-lg lg:text-xl font-semibold mt-8 text-background">
              May we enjoy God in magnifying His Supremacy in all things.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="text-center text-sm text-darkGray mt-6">
        <p>
          Gracepointe a DBA Victory Baptist Church of Belleview inc ©{" "}
          {currentYear} all rights reserved
        </p>
      </div>
    </footer>
  );
}
