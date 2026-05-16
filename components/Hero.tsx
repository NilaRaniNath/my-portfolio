"use client";

import Image from 'next/image';
import TextReveal from './animations/TextReveal';
import Magnetic from './animations/Magnetic';
import Reveal from './animations/Reveal';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]" id="hero">
      {/* Hero Text Content */}
      <div className="relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="absolute -left-12 top-24 h-[2px] bg-accent-coral hidden lg:block"
        />

        <TextReveal className="text-5xl lg:text-8xl font-bold mb-4" type="chars">
          Hello.
        </TextReveal>

        <TextReveal className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-400" delay={0.5}>
          I'm Nila Rani Nath,
        </TextReveal>

        <TextReveal className="text-4xl lg:text-7xl font-bold text-white mb-10 leading-tight" delay={0.8}>
          Web Developer
        </TextReveal>

        <Reveal delay={1.2}>
          <div className="flex flex-wrap gap-6">
            <Magnetic>
              <a className="bg-accent-coral text-white px-10 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300 inline-block" href="#contact">
                Got a project?
              </a>
            </Magnetic>

            <Magnetic>
              <a className="border border-accent-coral text-white px-10 py-4 rounded-full font-medium hover:bg-accent-coral/10 transition-all duration-300 inline-block" href="/resume.pdf">
                My resume
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>

      {/* Hero Image Area */}
      <div className="relative flex justify-center lg:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/4 left-0 text-6xl text-gray-700 select-none font-light"
        >
          &lt;
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-1/4 right-0 text-6xl text-gray-700 select-none font-light"
        >
          &gt;
        </motion.div>

        <motion.div
          initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0, y: 20 }}
          animate={{ clipPath: "circle(100% at 50% 50%)", opacity: 1, y: 60 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          className="relative group"
        >
          {/* Background Glows */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-accent-coral/40 to-blue-600/20 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />

          <div className="profile-frame w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden bg-[#1e293b] border-4 border-white/5 relative z-10 shadow-2xl">
            <Image
              src="/Nila.png"
              alt="Profile"
              fill
              className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-105 contrast-[1.1] brightness-[1.1]"
              style={{ 
                maskImage: 'radial-gradient(circle, black 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle, black 70%, transparent 100%)'
              }}
              priority
            />
            {/* Lightened Overlays */}
            <div className="absolute inset-0 bg-white/5 z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-accent-coral/5 mix-blend-soft-light z-20 pointer-events-none" />
            
            {/* Subtle vignette instead of heavy shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(15,23,42,0.4)] z-30 pointer-events-none" />
          </div>

          {/* Decorative Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: -1, ease: "linear" }}
            className="absolute -inset-4 border border-dashed border-accent-coral/20 rounded-full z-0 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: -1, ease: "linear" }}
            className="absolute -inset-8 border border-accent-coral/10 rounded-full z-0 pointer-events-none scale-95"
          />
        </motion.div>
      </div>
    </section>
  );
}
