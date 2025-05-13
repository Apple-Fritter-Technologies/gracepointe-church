"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/data";

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

function NavLink({ href, className = "", children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-gray-200 hover:text-red transition-colors font-semibold ${className}`}
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

function MobileNavLink({
  href,
  onClick,
  className = "",
  children,
}: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-gray-900 font-semibold hover:text-red px-4 py-3 rounded-md hover:bg-yellow/20 block ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when user presses escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full bg-black shadow-sm z-50">
      <div className="container mx-auto lg:px-6 p-4">
        <div className="flex justify-between items-center gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={130}
              className="h-12 w-full mr-2"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger button for mobile */}
          <button
            className="relative z-50 focus:outline-none lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out
                  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out my-0.5
                  ${isOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out
                  ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed top-20 inset-0 z-10 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Navigation Menu - Centered Dropdown */}
        <div
          className={`absolute top-24 left-4 right-4 bg-background backdrop-blur-xl rounded-2xl p-4 shadow-lg z-40 transition-all duration-300 ease-in-out transform lg:hidden
            ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0 pointer-events-none"
            }`}
        >
          <div className="flex flex-col gap-2 py-2">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </MobileNavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
