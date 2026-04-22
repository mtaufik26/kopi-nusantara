"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui";
import { Button } from "../../ui";
import { ShoppingCart, Star, Sparkles } from "lucide-react";
import { PRODUCTS, formatPrice } from "./Products.constants";
import { header, grid, card, viewport } from "./Products.animations";

export default function Products() {
  return (
    <section id="produk" className="relative py-20 sm:py-28 md:py-36 bg-[#0f0f0f] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        {/* HEADER */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-4">
            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
            <span className="text-xs font-semibold text-gold uppercase tracking-wide">
              Menu Favorit
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
            <span className="text-white">Produk</span>
            <br />
            <span className="text-gradient-gold">Ice Coffee Kopi Kita</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Menu kopi dingin yang ada di Kopi Kita
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={card}>
              <Card className="group bg-black/30 border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden h-full shadow-2xl shadow-black/40">
                <div className="relative aspect-square overflow-hidden bg-black/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-gold text-black text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black" /> Best Seller
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 bg-red-500/90 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                      Save{" "}
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      %
                    </div>
                  )}
                  {/* Hover Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <CardContent className="p-5">
                  <div className="mb-3">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-200">
                      {product.roast}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-white mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mb-3">
                    {product.origin}
                  </p>

                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-gold text-gold" />
                      <span className="text-xs text-white">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500">
                      (120+ reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
                    <div>
                      <span className="text-lg sm:text-xl font-bold text-gold">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] text-gray-500 line-through ml-2">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <Button
                      size="icon-sm"
                      className="bg-gold hover:bg-gold-dark text-black rounded-full w-8 h-8 p-0 transition-all duration-300 hover:scale-110"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}