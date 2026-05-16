"use client";

import Link from "next/link";
import Magnetic from "./animations/Magnetic";
import Reveal from "./animations/Reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark pt-24 pb-12 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">

          {/* Column 1: About */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Nila Rani Nath</h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              I'm a web developer with 3+ years of experience in front-end, back-end, and UI/UX design, creating modern, functional websites to help businesses grow.
            </p>
            <Magnetic strength={0.3}>
              <a href="/resume.pdf" className="inline-block bg-white text-black px-8 py-3 font-bold rounded hover:bg-accent-coral hover:text-white transition-all">
                My Resume
              </a>
            </Magnetic>

            {/* Social Icons Repeat */}
            <div className="flex gap-4 pt-4">
              {['facebook', 'github', 'linkedin', 'globe'].map((icon) => (
                <Magnetic key={icon} strength={0.3}>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-coral transition-all text-xs">
                    {icon === 'facebook' && 'f'}
                    {icon === 'github' && 'G'}
                    {icon === 'linkedin' && 'in'}
                    {icon === 'globe' && 'w'}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Contact me</h3>
            <div className="space-y-6">
              <div>
                <div className="text-white font-bold mb-1">Email:</div>
                <a href="mailto:nilaraninath03@gmail.com" className="text-gray-400 hover:text-accent-coral transition-colors">
                  nilaraninath03@gmail.com
                </a>
              </div>
              <div>
                <div className="text-white font-bold mb-1">Phone:</div>
                <a href="tel:+8801756170957" className="text-gray-400 hover:text-accent-coral transition-colors">
                  (880) 1301733781
                </a>
              </div>
              <div>
                <div className="text-white font-bold mb-1">Address:</div>
                <div className="text-gray-400 leading-relaxed">
                  Sylhet, Bangladesh
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Menu */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Menu</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'Designs', 'About me', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-accent-coral transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
          <p>© {currentYear} Nila Rani Nath - All rights reserved || Designed By: Nila</p>
        </div>
      </div>
    </footer>
  );
}
