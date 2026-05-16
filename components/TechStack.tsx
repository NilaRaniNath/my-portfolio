"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const techs = ["HTML5", "CSS", "Javascript", "Node.js", "React", "Git", "Github", "Next.js", "Tailwind", "GSAP", "Framer Motion"];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const listWidth = list.offsetWidth;
    const clone = list.cloneNode(true) as HTMLUListElement;
    list.parentElement?.appendChild(clone);

    gsap.to([list, clone], {
      x: `-=${listWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="bg-gray-900/50 border-y border-gray-800 py-12 mt-12 overflow-hidden" id="tech-stack-ticker">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div ref={containerRef} className="flex overflow-hidden">
          <ul ref={listRef} className="flex items-center space-x-20 text-gray-500 font-medium uppercase tracking-[0.3em] text-sm whitespace-nowrap pr-20">
            {techs.map((tech) => (
              <li key={tech} className="hover:text-white cursor-default transition-colors duration-300">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
