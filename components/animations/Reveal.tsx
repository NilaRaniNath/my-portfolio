"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export default function Reveal({ children, width = "100%", delay = 0, className = "" }: RevealProps) {
  return (
    <div className={className} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
