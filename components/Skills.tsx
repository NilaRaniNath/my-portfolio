"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Wrench, 
  Layout, 
  Database, 
  Terminal, 
  Cpu, 
  Layers, 
  GitBranch, 
  Globe, 
  ShieldCheck, 
  Zap,
  Sparkles
} from "lucide-react";
import Reveal from "./animations/Reveal";
import TextReveal from "./animations/TextReveal";

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  categoryIcon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, pixel-perfect, and highly interactive user interfaces.",
    categoryIcon: <Layout className="w-6 h-6 text-accent-coral" />,
    skills: [
      { name: "React.js & Next.js", percentage: 95, icon: <Code2 className="w-4 h-4 text-sky-400" /> },
      { name: "JavaScript (ES6+) & TypeScript", percentage: 90, icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
      { name: "Tailwind CSS & CSS3", percentage: 95, icon: <Zap className="w-4 h-4 text-cyan-400" /> },
      { name: "Framer Motion & GSAP Animations", percentage: 88, icon: <Layers className="w-4 h-4 text-pink-400" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    description: "Architecting secure server architectures, REST APIs, and efficient databases.",
    categoryIcon: <Server className="w-6 h-6 text-accent-coral" />,
    skills: [
      { name: "Node.js & Express.js", percentage: 88, icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
      { name: "MongoDB & Database Normalization", percentage: 85, icon: <Database className="w-4 h-4 text-green-500" /> },
      { name: "RESTful APIs & Integration", percentage: 92, icon: <Globe className="w-4 h-4 text-indigo-400" /> },
      { name: "Authentication (Better-Auth / JWT / Firebase)", percentage: 86, icon: <ShieldCheck className="w-4 h-4 text-rose-400" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Modern version control, cloud deployment, and developer tooling.",
    categoryIcon: <Wrench className="w-6 h-6 text-accent-coral" />,
    skills: [
      { name: "Git & GitHub Version Control", percentage: 92, icon: <GitBranch className="w-4 h-4 text-orange-400" /> },
      { name: "Vercel & Netlify Deployment", percentage: 90, icon: <Globe className="w-4 h-4 text-purple-400" /> },
      { name: "VS Code & Chrome DevTools", percentage: 95, icon: <Terminal className="w-4 h-4 text-blue-400" /> },
      { name: "Postman & API Testing", percentage: 88, icon: <Zap className="w-4 h-4 text-yellow-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28" id="skills">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <div className="text-accent-coral text-sm font-bold uppercase tracking-[0.4em] mb-4">
            Technical Expertise
          </div>
          <TextReveal className="text-5xl lg:text-7xl font-bold leading-tight">
            Skills & Abilities.
          </TextReveal>
        </div>
        <p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed lg:pb-3 border-l-2 border-accent-coral pl-6">
          A comprehensive breakdown of my core technical stack, frameworks, backend architectures, and developer tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIdx) => (
          <Reveal key={category.id} delay={catIdx * 0.15}>
            <div className="group h-full flex flex-col justify-between p-8 rounded-3xl bg-gray-900/60 border border-gray-800/80 hover:border-accent-coral/50 transition-all duration-500 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-coral/5 rounded-full blur-3xl group-hover:bg-accent-coral/10 transition-all duration-500" />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent-coral/40 group-hover:bg-accent-coral/10 transition-all duration-300">
                    {category.categoryIcon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-coral transition-colors duration-300">
                      {category.title}
                    </h3>
                    <span className="text-xs text-gray-500 font-medium">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {category.description}
                </p>

                {/* Progress Bar List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2.5 font-medium text-gray-200">
                          <span className="p-1 rounded-md bg-white/5 border border-white/10">
                            {skill.icon}
                          </span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-xs font-bold text-accent-coral bg-accent-coral/10 border border-accent-coral/20 px-2.5 py-0.5 rounded-full font-mono">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Modern Progress Bar */}
                      <div className="h-2 w-full bg-gray-800/80 rounded-full overflow-hidden p-0.5 border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: skillIdx * 0.1,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="h-full bg-gradient-to-r from-accent-coral via-orange-400 to-amber-400 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-500">
                <span>Production ready</span>
                <span className="flex items-center gap-1.5 text-accent-coral/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-coral animate-ping" />
                  Active Skillset
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
