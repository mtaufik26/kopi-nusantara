"use client";

import { motion } from 'framer-motion';
import { Coffee, MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa6';
import { FOOTER_LINKS } from './Footer.constants';
import {
  footer, brandSection, socialContainer, socialIcon,
  contactContainer, contactItem, linkColumn, linkItem, bottomBar, viewport
} from './Footer.animations';

const iconMap = { FaInstagram, FaTwitter, FaTiktok, MapPin, Phone };

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-black py-12 sm:py-16 overflow-hidden"
    >
      {/* 🔥 Blur transisi dari CTA */}
      {/* <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0f0f0f] to-transparent pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        <motion.div
          variants={footer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {/* BRAND */}
          <motion.div variants={brandSection}>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-gold" />
              <span className="font-serif text-xl font-bold text-white">
                Kopi<span className="text-gold">Kita</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Tempat ngopi santai dengan pilihan kopi dingin favorit. Cocok buat nemenin hari kamu.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div variants={linkColumn}>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quick.map((item) => (
                <li key={item.name}>
                  <motion.a
                    variants={linkItem}
                    href={item.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={contactContainer}>
            <h3 className="text-white font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.contact.map((c, i) => {
                const Icon = iconMap[c.icon];
                return (
                  <motion.li
                    key={i}
                    variants={contactItem}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <Icon className="w-4 h-4 text-gold" />
                    {c.label}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* SOCIAL */}
          <motion.div>
            <h3 className="text-white font-semibold mb-4">Ikuti Kami</h3>
            <motion.div
              variants={socialContainer}
              className="flex gap-4"
            >
              {FOOTER_LINKS.social.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <motion.a
                    key={s.name}
                    variants={socialIcon}
                    href={s.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition"
                  >
                    <Icon className="text-gray-300 hover:text-black" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

        </motion.div>

        {/* BOTTOM */}
        <motion.div
          variants={bottomBar}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="border-t border-white/10 mt-10 pt-6 text-center"
        >
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Kopi Kita — Ngopi santai, kopi dingin.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}