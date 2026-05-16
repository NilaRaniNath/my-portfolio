"use client";

import Reveal from './animations/Reveal';
import TextReveal from './animations/TextReveal';
import { motion } from 'framer-motion';

export default function About() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Building fast, scalable, and modern web applications tailored to real-world business and user needs.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      )
    },
    {
      title: "Responsive UI/UX Design",
      description: "Creating clean, user-friendly, and visually engaging interfaces focused on smooth user experiences.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      )
    },
    {
      title: "Full-Stack Solutions",
      description: "Developing complete web solutions using modern frontend and backend technologies with secure database integration.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24" id="about">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Left Side: Services */}
        <div className="flex gap-8">
          <div className="flex flex-col items-center py-4">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="w-2 h-2 rounded-full bg-accent-coral mb-1" />
            <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} className="w-[2px] flex-1 bg-gray-800" />
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} className="w-2 h-2 rounded-full bg-accent-coral my-1" />
            <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ delay: 0.5 }} className="w-[2px] flex-1 bg-gray-800" />
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} className="w-2 h-2 rounded-full bg-accent-coral mt-1" />
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 0.2}>
                <div className="group">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="p-4 border border-gray-700 rounded-xl bg-gray-900/40 group-hover:border-accent-coral transition-colors duration-500">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-accent-coral transition-colors duration-300">{service.title}</h4>
                  </div>
                  <p className="text-gray-400 pl-20 leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Side: About Text & Stats */}
        <div className="flex flex-col justify-center">
          <div className="text-accent-coral text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Introduction
          </div>
          <TextReveal className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            I build modern digital experiences that inspire and perform.
          </TextReveal>

          <Reveal delay={0.3}>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
              Hello! I'm a passionate Full-Stack Web Developer who loves transforming ideas into interactive and meaningful web applications. I focus on creating clean, responsive, and user-friendly websites that combine modern design with powerful functionality.

              With experience in both frontend and backend development, I enjoy building complete digital solutions that are fast, scalable, and visually appealing. My goal is to craft experiences that not only look great but also provide real value to users.

              I’m constantly learning new technologies, improving my skills, and exploring creative ways to solve problems through code.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
