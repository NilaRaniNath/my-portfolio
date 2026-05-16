"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal from "./animations/Reveal";
import TextReveal from "./animations/TextReveal";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase Authentication", "REST API", "JSON Web Token (JWT)"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Netlify", "Vercel", "Chrome DevTools"]
  },
  {
    title: "Animations & Motion",
    skills: ["GSAP", "Framer Motion", "CSS Animations", "Lottie Files"]
  }
];

export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24" id="skills">
      <div className="mb-16">
        <div className="text-accent-coral text-sm font-bold uppercase tracking-[0.3em] mb-4">
          Expertise
        </div>
        <TextReveal className="text-5xl lg:text-7xl font-bold">
          Tools & Skills
        </TextReveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, idx) => (
          <Reveal key={category.title} delay={idx * 0.1}>
            <div className="h-full p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-accent-coral/30 transition-all duration-500 group">
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-accent-coral transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-coral/50 mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
