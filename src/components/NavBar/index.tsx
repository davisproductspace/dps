"use client";

import { useState } from "react";
import Logo from "@/assets/logo/ps-logo.svg";
import NavMenu from "@/assets/icons/nav-menu.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Apply",
    href: "/apply",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed md:absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 sm:px-[7.5rem]">
        {/* Logo (only on desktop) */}
        <div className="hidden md:block py-12">
          <Link href="/" className="flex items-center">
            <Logo className="w-8 h-8" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-[18px] text-gray-800 py-12">
          {navLinks.map(({ name, href }) => {
            const isActive = pathname === href;
            const baseClass = `group relative transition-all`;

            return href.startsWith("http") ? (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClass}
              >
                <span
                  className={`${
                    isActive ? "font-bold" : "group-hover:font-bold"
                  } transition-all`}
                >
                  {name}
                </span>
              </a>
            ) : (
              <Link key={name} href={href} className={baseClass}>
                <span
                  className={`${
                    isActive ? "font-bold" : "group-hover:font-bold"
                  } transition-all`}
                >
                  {name}
                </span>
                {isActive && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-full h-[2px] bg-gray-800 transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden ml-auto z-50 py-6"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <NavMenu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white opacity-[85%] z-40 flex flex-col items-center justify-center space-y-8 text-[22px] text-gray-800 font-medium md:hidden">
          {navLinks.map(({ name, href }) => {
            const isActive = pathname === href;
            const linkClass = `transition-all ${
              isActive ? "font-bold underline" : "hover:font-bold"
            }`;

            return href.startsWith("http") ? (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {name}
              </a>
            ) : (
              <Link
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
