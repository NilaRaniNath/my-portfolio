"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal from "./animations/Reveal";
import TextReveal from "./animations/TextReveal";

const educationData = [
  {
    degree: "B.Sc Honours",
    institution: "National University, Bangladesh",
    duration: "2022 - Present",
    description: "Studying CHEMISTRY Department."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sylhet Govt. College",
    duration: "2019 - 2021",
    description: "Completed Science group with a strong foundation in Mathematics and Physics."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Jafrabad High School & College",
    duration: "2018 - 2019",
    description: "Completed with high excellence, sparking my initial interest in technology."
  }
];

export default function Education() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24" id="education">
      <div className="mb-16">
        <div className="text-accent-coral text-sm font-bold uppercase tracking-[0.3em] mb-4">
          Background
        </div>
        <TextReveal className="text-5xl lg:text-7xl font-bold">
          Academic Journey
        </TextReveal>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
        {educationData.map((item, idx) => (
          <div key={item.degree} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon/Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-bg-dark text-accent-coral shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-accent-coral" />
            </div>

            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-accent-coral/20 transition-colors duration-500">
              <Reveal delay={idx * 0.1}>
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white text-xl">{item.degree}</div>
                  <time className="font-medium text-accent-coral text-sm">{item.duration}</time>
                </div>
                <div className="text-gray-300 font-medium mb-4">{item.institution}</div>
                <div className="text-gray-500 text-sm leading-relaxed">{item.description}</div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
