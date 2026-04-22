"use client";

import { motion } from "framer-motion";
import { Coffee, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge, Button } from "../../ui";
import {
  HERO_CONTENT,
  HERO_CTAS,
  HERO_BG,
  HERO_IMAGE,
} from "./Hero.constants";
import {
  badge,
  headline,
  description,
  quote,
  ctas,
  container,
} from "./Hero.animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-12 sm:py-16 md:py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${HERO_BG.src})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20"
        >
          {/* LEFT */}
          <div className="flex-1 w-full text-center lg:text-left order-2 lg:order-1">

            {/* Badge */}
            <motion.div variants={badge}>
              <Badge className="mb-4 sm:mb-6 bg-gold/10 border border-gold/30 text-gold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-flex">
                <span className="flex items-center gap-2 text-xs sm:text-sm">
                  <Coffee className="w-4 h-4" />
                  <span>Ice Coffee</span>
                  <span className="w-1 h-1 rounded-full bg-gold/50" />
                  <span>Fresh & Chill</span>
                </span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={headline}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-white">{HERO_CONTENT.headline}</span>
              <br />
              <span className="text-gradient-gold">
                {HERO_CONTENT.subheadline}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={description}
              className="mt-4 sm:mt-6 text-gray-300 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* Quote */}
            <motion.p
              variants={quote}
              className="mt-3 text-gold/60 text-xs sm:text-sm italic"
            >
              {HERO_CONTENT.quote}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={ctas}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
            >
              {HERO_CTAS.map((cta, index) => (
                <Button
                  key={index}
                  variant={cta.variant}
                  size="xl"
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto"
                  asChild
                >
                  <Link
                    href={cta.href}
                    className="flex items-center justify-center gap-2"
                  >
                    {cta.text}
                    {cta.icon === "ArrowRight" && (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </Link>
                </Button>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex-1 w-full flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="
              relative w-full 
              
              max-w-[320px] 
              sm:max-w-[380px] 
              md:max-w-[440px] 
              lg:max-w-xl 
              xl:max-w-2xl
            ">

              {/* Glow */}
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-2xl blur-3xl" />

              <img
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] brightness-75"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}