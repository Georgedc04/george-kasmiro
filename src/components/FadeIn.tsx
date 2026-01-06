"use client";

import { createContext, useContext, ReactNode } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";

// 1. Context to track if children should stagger
const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -100px" };

// 2. Props Interface for FadeIn
interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export function FadeIn(props: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...(isInStaggerGroup
        ? {} // If in a stagger group, the parent controls the trigger
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

// 3. Props Interface for FadeInStagger
interface FadeInStaggerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  faster?: boolean;
}

export function FadeInStagger({ faster = false, ...props }: FadeInStaggerProps) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.1 : 0.15 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}