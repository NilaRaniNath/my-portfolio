"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./animations/Reveal";
import TextReveal from "./animations/TextReveal";
import Magnetic from "./animations/Magnetic";

const projects = [
  {
    id: 1,
    title: "QurbaniHat: Livestock Booking Platform 🚀",
    category: "Fullstack / Next.js",
    description: "QurbaniHat is a modern digital marketplace built to simplify the traditional Qurbani livestock buying experience. The platform allows users to browse, explore, and securely book livestock from anywhere with a smooth and responsive user experience.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1600",
    techStack: ["Next.js", "Tailwind CSS", "React"],
    live: "https://qurbani-hat-livestock-platform.vercel.app/",
    github: "https://github.com/NilaRaniNath/QurbaniHat-Livestock-Platform",
    challenges: "Managing real-time booking concurrency to prevent double-booking while ensuring smooth performance with Next.js, alongside balancing animations (AOS/Animate.css) with a fast, mobile-first responsive design, was a key hurdle.",
    futurePlans: "I plan to integrate secure payment gateways, implement advanced multi-criteria filtering, and expand the platform into a multi-vendor marketplace featuring seller dashboards and real-time chat/video options for better livestock inspection."
  },
  {
    id: 2,
    title: "SportNest: Sports Facility Booking Platform 🚀",
    category: "Fullstack / Next.js & Express",
    description: "SportNest is a modern, dynamic, and user-friendly Sports Facility Booking Platform bridging the gap between sports enthusiasts and facility owners to discover, explore, and seamlessly book sports turfs, courts, pools, and gyms.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1600",
    techStack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "Lucide React"],
    live: "https://sport-nest-flax.vercel.app",
    github: "https://github.com/NilaRaniNath/sport-nest-client",
    challenges: "Implementing real-time slot booking and seat capacity management while ensuring secure authentication with token-based verification and seamless session handling.",
    futurePlans: "Integrating automated payment gateways for instant booking confirmations, adding interactive venue map search, and introducing user review and rating systems."
  },
  {
    id: 3,
    title: "LegalEase: Lawyer Marketplace 🚀",
    category: "Fullstack / Next.js & MERN",
    description: "LegalEase is a modern, responsive full-stack platform designed to bridge the gap between clients and professional legal practitioners. Users can explore verified legal consultants, book consultation slots, view hiring histories, and manage profiles seamlessly.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600",
    techStack: ["Next.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS", "Better-Auth"],
    live: "https://legal-ease-two-silk.vercel.app",
    github: "https://github.com/NilaRaniNath/legalease-client",
    challenges: "Handling complex authentication and session management with Better-Auth, integrating Stripe checkouts for listing activation, and optimizing MongoDB connection pooling for serverless deployments on Vercel.",
    futurePlans: "Adding real-time in-app video consultation tools, AI-powered legal document drafting assistance, and multi-currency payout options for international legal experts."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-32" id="projects">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
        <div className="max-w-2xl">
          <div className="text-accent-coral text-sm font-bold uppercase tracking-[0.4em] mb-6">
            Requirement #9
          </div>
          <TextReveal className="text-5xl lg:text-8xl font-bold leading-tight">
            Best Projects.
          </TextReveal>
        </div>
        <p className="text-gray-400 max-w-sm text-lg leading-relaxed lg:pb-4 border-l-2 border-accent-coral pl-6">
          Showcasing a collection of my best works with detailed insights and technology stacks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.1} className="h-full">
            <div className="group flex flex-col h-full bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-accent-coral/50 transition-all duration-500 shadow-2xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              
              <div className="p-8 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="text-accent-coral text-[10px] font-bold uppercase tracking-[0.3em]">
                    {project.category}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-accent-coral transition-colors leading-tight min-h-[4rem] flex items-start">
                    {project.title}
                  </h3>
                </div>
                
                <Magnetic strength={0.2}>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 text-sm mt-auto"
                  >
                    View Details
                  </button>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              data-lenis-prevent
              className="relative w-full max-w-4xl bg-gray-900 rounded-2xl md:rounded-[2.5rem] border border-gray-800 overflow-hidden max-h-[95vh] md:max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>

              <div className="p-6 md:p-8 lg:p-16 space-y-8 md:space-y-12 mt-8 md:mt-0">
                <div className="space-y-3 md:space-y-4">
                  <div className="text-accent-coral font-bold uppercase tracking-widest text-xs md:text-sm">
                    {selectedProject.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-8 md:space-y-10">
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3 md:mb-4">Description</h4>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3 md:mb-4">Main Technology Stack</h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {selectedProject.techStack.map(tech => (
                          <span key={tech} className="bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                      <Magnetic strength={0.3}>
                        <a href={selectedProject.live} className="w-full sm:w-auto text-center block bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-accent-coral hover:text-white transition-all text-sm md:text-base">
                          Live Project
                        </a>
                      </Magnetic>
                      <Magnetic strength={0.3}>
                        <a href={selectedProject.github} className="w-full sm:w-auto text-center block border border-gray-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:border-white transition-all text-sm md:text-base">
                          GitHub Repo
                        </a>
                      </Magnetic>
                    </div>
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3 md:mb-4">Challenges Faced</h4>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed italic border-l-2 border-accent-coral pl-4 md:pl-6">
                        "{selectedProject.challenges}"
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3 md:mb-4">Future Plans & Improvements</h4>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        {selectedProject.futurePlans}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
