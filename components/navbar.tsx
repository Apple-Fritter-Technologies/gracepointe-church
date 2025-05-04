"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

function NavLink({ href, className = "", children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-gray-700 hover:text-amber-500 transition-colors font-medium ${className}`}
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
      className={`block text-gray-700 hover:text-amber-500 transition-colors font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black shadow-sm z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={130}
                height={130}
                className="h-full w-full mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#beliefs">Beliefs</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#ministries">Ministries</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#location">Location</NavLink>
            <NavLink
              href="#contact"
              className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="pt-4 pb-6 space-y-4 md:hidden">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#beliefs" onClick={() => setIsOpen(false)}>
              Beliefs
            </MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#ministries" onClick={() => setIsOpen(false)}>
              Ministries
            </MobileNavLink>
            <MobileNavLink href="#events" onClick={() => setIsOpen(false)}>
              Events
            </MobileNavLink>
            <MobileNavLink href="#location" onClick={() => setIsOpen(false)}>
              Location
            </MobileNavLink>
            <MobileNavLink
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
            >
              Contact
            </MobileNavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
