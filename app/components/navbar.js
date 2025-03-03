"use client"; // Next.js App Router membutuhkan ini untuk event handling di client

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Gunakan icon dari lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyWebsite
        </Link>

        {/* Menu untuk Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/skills" className="hover:text-gray-400">Skills</Link></li>
          <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Icon Menu untuk Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu untuk Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 p-4 space-y-4 text-center absolute w-full left-0 top-[60px] shadow-lg">
          <li><Link href="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/skills" className="block py-2" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link href="/services" className="block py-2" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/portfolio" className="block py-2" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
          <li><Link href="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
