"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.1}>
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-accent-coral/50">
        <div className="aspect-[16/10] overflow-hidden relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <Magnetic strength={0.3}>
              <a 
                href={project.link}
                className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
              >
                View Project
              </a>
            </Magnetic>
          </div>
        </div>
        
        <div className="p-8">
          <div className="text-accent-coral text-xs font-bold uppercase tracking-[0.2em] mb-3">
            {project.category}
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-accent-coral transition-colors duration-300">
            {project.title}
          </h3>
          
          <div className="mt-6 flex justify-between items-center">
             <span className="h-[1px] flex-1 bg-gray-800 group-hover:bg-accent-coral/30 transition-colors duration-500" />
             <div className="ml-4 text-gray-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
             </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
