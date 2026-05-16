"use client";

import Magnetic from "./animations/Magnetic";
import Reveal from "./animations/Reveal";
import TextReveal from "./animations/TextReveal";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-800/50" id="contact">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Left Side: Info */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="text-accent-coral text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Contact me
            </div>
            <TextReveal className="text-5xl lg:text-7xl font-bold mb-8">
              Get in touch
            </TextReveal>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Magnetic strength={0.3}>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-coral transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="https://github.com/NilaRaniNath" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-coral transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="https://www.linkedin.com/in/nilaraninath" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-coral transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-coral transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Form */}
        <Reveal delay={0.3}>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-accent-coral outline-none transition-colors text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email address</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-accent-coral outline-none transition-colors text-white" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-accent-coral outline-none transition-colors text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-accent-coral outline-none transition-colors text-white" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Write your message here</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-accent-coral outline-none transition-colors text-white resize-none" />
            </div>
            <Magnetic>
              <button type="submit" className="bg-white text-black px-10 py-4 font-bold rounded-lg hover:bg-accent-coral hover:text-white transition-all duration-300">
                Send Message
              </button>
            </Magnetic>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
