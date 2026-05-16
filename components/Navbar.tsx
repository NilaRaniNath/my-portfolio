"use client";

import Link from 'next/link';
import Image from 'next/image';
import Magnetic from './animations/Magnetic';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center sticky top-0 z-50 backdrop-blur-sm bg-bg-dark/50"
      id="main-header"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-14 h-14 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5 group-hover:border-accent-coral/50 transition-colors">
          <Image
            src="/nila logo.png"
            alt="Logo"
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <nav>
        <ul className="flex space-x-8 text-sm font-medium text-gray-300 items-center">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Magnetic strength={0.2}>
                <Link
                  className="hover:text-white transition-colors py-2 block relative group"
                  href={item.href}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-coral transition-all duration-300 group-hover:w-full" />
                </Link>
              </Magnetic>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
