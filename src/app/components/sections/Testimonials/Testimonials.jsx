"use client";

import { motion, useMotionValue } from "framer-motion";
import { Card, CardContent } from "../../ui";
import { Star, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { TESTIMONIALS, LOOPED_TESTIMONIALS } from "./Testimonials.constants";
import { header, viewport } from "./Testimonials.animations";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  // 🔧 Hitung lebar card
  useEffect(() => {
    const update = () => {
      const card = containerRef.current?.querySelector("[data-card]");
      if (card instanceof HTMLElement) {
        const gap = 24;
        setCardWidth(card.offsetWidth + gap);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 🔧 Auto scroll
  useEffect(() => {
    if (!cardWidth) return;

    let frame;
    const speed = 4; // lebih smooth
    const totalWidth = cardWidth * TESTIMONIALS.length;

    const animate = () => {
      if (!isPaused) {
        let current = x.get();
        current -= speed;

        if (Math.abs(current) >= totalWidth) current = 0;

        x.set(current);
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [cardWidth, isPaused, x]);

  return (
    <section
      id="testimoni"
      className="relative py-20 sm:py-24 md:py-28 bg-[#0f0f0f] overflow-hidden"
    >
      {/* 🌫️ Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12 sm:mb-16 flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <span className="text-[10px] text-gold tracking-wider uppercase font-semibold">
              Testimoni
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Kata Mereka Tentang Kopi Kita
          </h2>
        </motion.div>

        {/* SLIDER */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* TRACK */}
          <motion.div className="flex gap-5 sm:gap-6" style={{ x }}>
            {LOOPED_TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                data-card
                className="flex-shrink-0 w-72 sm:w-80 md:w-[340px]"
              >
                <Card className="h-full rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/40 hover:border-gold/20 transition-all duration-300">
                  
                  <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                    
                    {/* Quote */}
                    <Quote className="w-7 h-7 text-gold/30 mb-3" />

                    {/* Text */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-grow min-h-[80px]">
                      {testimonial.text}
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* User */}
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role}
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>

          {/* ✨ Fade kiri */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-[#0f0f0f] to-transparent pointer-events-none" />

          {/* ✨ Fade kanan */}
          <div className="absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-[#0f0f0f] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}