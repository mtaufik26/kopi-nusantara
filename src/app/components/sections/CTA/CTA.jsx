"use client";

import { motion } from "framer-motion";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTA_CONTENT } from "./CTA.constants";
import { container, viewport } from "./CTA.animations";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-[#0f0f0f] via-[#0f0f0f]/60 overflow-hidden">
      
      {/* Divider */}

      {/* 🔥 Blur Atas (pakai #0f0f0f) */}
      <div className="absolute top-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent pointer-events-none" />

      {/* 🔥 Blur Bawah (pakai #0f0f0f) */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-black via-black to-transparent pointer-events-none" />

      {/* CONTENT */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          
          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            {CTA_CONTENT.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mb-10 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            {CTA_CONTENT.description}
          </p>

          {/* BUTTON */}
          <Button
            variant="gold"
            size="xl"
            className="
              px-10 py-5
              shadow-lg shadow-gold/10
              hover:shadow-gold/30
              transition-all duration-300
              hover:scale-105
            "
            asChild
          >
            <Link
              href={CTA_CONTENT.buttonHref}
              className="flex items-center gap-2"
            >
              {CTA_CONTENT.buttonText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

        </motion.div>
      </div>
    </section>
  );
}