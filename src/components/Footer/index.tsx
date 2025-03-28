"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MailIcon from "@/assets/icons/mail.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Apply", href: "/apply" },
];

export default function Footer() {
    const pathname = usePathname();
    
    return (
        <footer className="w-full flex items-center justify-between py-4 pl-[7.5rem] pr-[7.5rem] mt-8 mb-8 bg-transparent text-gray-800 absolute bottom-0 left-0 z-50">
            {/* social icons on left */}
            <div className="flex items-center gap-[0.75rem] text-[18px]">
                <a href="mailto:davisproductspace@email.com" aria-label="Email">
                    <MailIcon className="w-7 h-7" />
                </a>
                <a href="https://instagram.com/davisproductspace" target="_blank" aria-label="Instagram">
                    <InstagramIcon className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                    <LinkedInIcon className="w-7 h-7 text-[#3A3A3A] relative -ml-[4px] -mt-[2px]" />
                </a>
            </div>

            {/* nav links centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10 text-[18px]">
                {navLinks.map(({ name, href }) => {
                const isActive = pathname === href;

                return (
                    <Link
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
                    </Link>
                );
                })}
            </div>
        </footer>
  );
}
