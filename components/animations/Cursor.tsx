"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    const handleHoverStart = () => {
      gsap.to(follower, {
        scale: 2.5,
        backgroundColor: "rgba(243, 112, 83, 0.2)",
        duration: 0.3,
      });
    };

    const handleHoverEnd = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    
    const interactables = document.querySelectorAll('a, button, [data-cursor="hover"]');
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent-coral rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-accent-coral rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
