'use client';

import { motion } from 'framer-motion';
import { Users, Coffee, Award } from 'lucide-react';
import { SECTION_LABEL, HEADLINE, STATS, IMAGES } from './About.constants';
import {
  imageColumn,
  contentColumn,
  label,
  headline,
  description,
  statsContainer,
  statItem,
  viewport,
} from './About.animations';

const iconMap = { Users, Coffee, Award };

export default function About() {
  return (
    <section id="tentang" className="relative py-20 md:py-28 lg:py-32 bg-[#0f0f0f] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE COLUMN */}
          <motion.div
            variants={imageColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative group flex justify-center lg:block"
          >
            <div className="
              inline-block 
              rounded-2xl shadow-2xl shadow-black/40 border border-white/5 p-3
              ml-0
              sm:ml-0
              md:ml-10
              lg:ml-25
            ">
              
              <img
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                className="
                  block h-auto rounded-xl object-contain 
                  transition-transform duration-700 ease-out group-hover:scale-105

                  w-full max-w-[260px]
                  sm:max-w-[300px]
                  md:max-w-[340px]
                  lg:w-[400px]
                "
              />
            </div>

          </motion.div>

          {/* CONTENT COLUMN */}
          <motion.div
            variants={contentColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            {/* LABEL */}
            <motion.div
              variants={label}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] text-gold tracking-widest uppercase font-medium">
                {SECTION_LABEL}
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={headline}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] mb-6 tracking-tight"
            >
              <span className="text-white">{HEADLINE.main}</span>
              <br />
              <span className="text-gradient-gold">{HEADLINE.sub}</span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.div
              variants={description}
              className="space-y-4 text-gray-300/90 text-sm sm:text-base leading-relaxed max-w-lg"
            >
              {HEADLINE.description.split('\n').map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={statsContainer}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {STATS.map((stat) => {
                const Icon = iconMap[stat.icon];
                return (
<motion.div
  key={stat.label}
  variants={statItem}
  className="
    group relative flex flex-col items-center text-center
    
    p-4 sm:p-5 md:p-6
    
    rounded-xl
    bg-white/[0.03]
    border border-white/10
    
    hover:border-gold/30 hover:bg-white/[0.06]
    
    backdrop-blur-sm
    transition-all duration-300
  "
>
  {/* Icon */}
  <div className="
    mb-3 
    p-2.5 sm:p-3
    
    rounded-full
    bg-gold/10 text-gold
    
    transition-all duration-300
    group-hover:scale-110 group-hover:bg-gold/15
  ">
    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={1.5} />
  </div>

  {/* Value */}
  <div className="
    text-lg sm:text-xl md:text-2xl
    
    font-serif font-bold
    text-gold
    tracking-tight
  ">
    {stat.value}
  </div>

  {/* Label */}
  <div className="
    mt-1.5
    
    text-xs sm:text-sm
    
    text-gray-400
    tracking-wide uppercase
  ">
    {stat.label}
  </div>
</motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}