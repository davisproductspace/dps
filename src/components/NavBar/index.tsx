"use client";
import Logo from "@/assets/logo/ps-logo.svg";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Apply", href: "/apply" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between py-4 pl-[7.5rem] mt-6 mb-8 bg-transparent z-50 absolute top-0 left-0">
      {/* ps logo on left */}
      <div className="flex items-center">
        <Logo className="w-8 h-8" />
      </div>

      {/* centered nav links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10 text-[18px] text-gray-800">
        {navLinks.map(({ name, href }) => {
          const isActive = pathname === href;

          return (
            <a
              key={name}
              href={href}
              className="group relative transition-all"
            >
              <span
                className={`transition-all ${
                  isActive ? "font-bold" : "group-hover:font-bold"
                }`}
              >
                {name}
              </span>
              {isActive && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-full h-[2px] bg-gray-800 transition-all duration-300"></span>
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
