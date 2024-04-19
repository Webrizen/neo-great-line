"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeInFromBottom = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 }
};

export default function AnimatedTitle({ text, delayPerChar = 0.1 }) {
  return (
    <>
      {text.split('').map((char, index) => (
        <motion.span 
          key={index}
          initial="hidden"
          animate="visible"
          variants={fadeInFromBottom}
          transition={{ delay: index * delayPerChar }}
          className="text-3xl font-bold from-cyan-600 via-green-600 to-slate-600 bg-gradient-to-r bg-clip-text text-transparent md:text-4xl xl:text-5xl leading-tight"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}