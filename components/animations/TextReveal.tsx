"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  type?: "lines" | "words" | "chars";
  delay?: number;
}

export default function TextReveal({ children, className, type = "lines", delay = 0 }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: type });
    const targets = type === "lines" ? split.lines : type === "words" ? split.words : split.chars;

    gsap.set(targets, { y: "100%", opacity: 0 });

    gsap.to(targets, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      delay: delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      split.revert();
    };
  }, [type, delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
