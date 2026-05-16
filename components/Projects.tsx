"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal from "./animations/Reveal";
import TextReveal from "./animations/TextReveal";
import Magnetic from "./animations/Magnetic";

const projects = [
  {
    title: "QurbaniHat: Livestock Booking Platform 🚀",
    category: "Next.js",
    description: "QurbaniHat is a modern digital marketplace built to simplify the traditional Qurbani livestock buying experience. The platform allows users to browse, explore, and securely book livestock from anywhere with a smooth and responsive user experience.",
    live: "https://qurbani-hat-livestock-platform.vercel.app",
    github: "https://github.com/NilaRaniNath/QurbaniHat-Livestock-Platform"
  },
  {
    title: "Keen Keeper! 🚀",
    category: "React Js / Tailwind CSS",
    description: "It's a friendship management web app built with React and Tailwind CSS that helps users stay connected with their loved ones through smart tracking and analytics. This project helped me dive deeper into Context API, Dynamic Routing, and Data Visualization.",
    live: "https://keen-keeper-alpha-nine.vercel.app",
    github: "https://github.com/NilaRaniNath/keen-keeper"
  },
  {
    title: " DigiTools Platforms",
    category: "React Js / Tailwind CSS",
    description: "A comprehensive platform designed to empower creators, developers, and businesses with a suite of AI-driven tools. From content generation to smart automation DigiTools streamlines your workflow so you can focus on what truly matters.",
    live: "https://digitoolsplatformsproject.netlify.app/",
    github: "https://github.com/NilaRaniNath/DigiTools-Platforms"
  }
];

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32" id="projects">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
        <div className="max-w-2xl">
          <div className="text-accent-coral text-sm font-bold uppercase tracking-[0.4em] mb-6">
            Selected Works
          </div>
          <TextReveal className="text-5xl lg:text-8xl font-bold leading-tight">
            Digital Impact.
          </TextReveal>
        </div>
        <p className="text-gray-400 max-w-sm text-lg leading-relaxed lg:pb-4 border-l-2 border-accent-coral pl-6">
          Crafting digital solutions that focus on performance and clean architecture.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="group relative p-10 lg:p-16 rounded-[2.5rem] bg-gray-900/30 border border-gray-800 hover:border-accent-coral/30 hover:bg-gray-900/50 transition-all duration-700">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">

                <div className="flex-1 space-y-6">
                  <div className="text-accent-coral font-bold uppercase tracking-widest text-xs">
                    {project.category}
                  </div>
                  <h3 className="text-4xl lg:text-6xl font-bold text-white tracking-tight group-hover:text-accent-coral transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <Magnetic strength={0.3}>
                    <a
                      href={project.live}
                      className="group/btn flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-accent-coral hover:text-white transition-all duration-500"
                    >
                      <span>Live View</span>
                      <svg className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                      </svg>
                    </a>
                  </Magnetic>

                  <Magnetic strength={0.3}>
                    <a
                      href={project.github}
                      className="group/btn flex items-center gap-3 border border-gray-700 text-white px-8 py-4 rounded-full font-bold hover:border-white transition-all duration-500"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                      <span>Code</span>
                    </a>
                  </Magnetic>
                </div>

              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
