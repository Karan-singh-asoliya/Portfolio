"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hobbies() {
  const [hoveredHobby, setHoveredHobby] = useState<string | null>(null);

  return (
    <section id="hobbies" className="py-20 px-4 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beyond <span className="text-primary">Code</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            When I&apos;m not debugging or building systems, you&apos;ll find me pursuing these passions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Table Tennis Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
            onMouseEnter={() => setHoveredHobby("tabletennis")}
            onMouseLeave={() => setHoveredHobby(null)}
          >
            <div className="relative h-80 bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              {/* Crossed Rackets SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredHobby === "tabletennis" ? 0.8 : 1,
                    opacity: hoveredHobby === "tabletennis" ? 0.2 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative w-48 h-48"
                >
                  {/* Left Racket */}
                  <svg
                    viewBox="0 0 100 160"
                    className="absolute w-32 h-32 left-1/2 top-1/2 -translate-x-[70%] -translate-y-1/2 -rotate-45"
                  >
                    {/* Handle */}
                    <rect
                      x="42"
                      y="95"
                      width="16"
                      height="55"
                      rx="4"
                      fill="#8B4513"
                      stroke="#5D3A1A"
                      strokeWidth="2"
                    />
                    {/* Handle grip lines */}
                    <line x1="44" y1="100" x2="56" y2="100" stroke="#5D3A1A" strokeWidth="1" />
                    <line x1="44" y1="110" x2="56" y2="110" stroke="#5D3A1A" strokeWidth="1" />
                    <line x1="44" y1="120" x2="56" y2="120" stroke="#5D3A1A" strokeWidth="1" />
                    <line x1="44" y1="130" x2="56" y2="130" stroke="#5D3A1A" strokeWidth="1" />
                    <line x1="44" y1="140" x2="56" y2="140" stroke="#5D3A1A" strokeWidth="1" />
                    {/* Paddle head */}
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="40"
                      ry="48"
                      fill="#DC2626"
                      stroke="#991B1B"
                      strokeWidth="3"
                    />
                    {/* Rubber texture */}
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="35"
                      ry="43"
                      fill="none"
                      stroke="#B91C1C"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                    />
                  </svg>

                  {/* Right Racket */}
                  <svg
                    viewBox="0 0 100 160"
                    className="absolute w-32 h-32 left-1/2 top-1/2 -translate-x-[30%] -translate-y-1/2 rotate-45"
                  >
                    {/* Handle */}
                    <rect
                      x="42"
                      y="95"
                      width="16"
                      height="55"
                      rx="4"
                      fill="#8B4513"
                      stroke="#5D3A1A"
                      strokeWidth="2"
                    />
                    {/* Handle grip lines */}
                    <line x1="44" y1="100" x2="56" y2="100" stroke="#5D3A1A" strokeWidth="1" />
                    <line x1="44" y1="110" x2="56" y2="110" stroke="#5D3A1A" strokeWidth="1" />
                    <line x1="44" y1="120" x2="56" y2="120" stroke="#5D3A1A" strokeWidth="1" />
                    <line x1="44" y1="130" x2="56" y2="130" stroke="#5D3A1A" strokeWidth="1" />
                    <line x1="44" y1="140" x2="56" y2="140" stroke="#5D3A1A" strokeWidth="1" />
                    {/* Paddle head */}
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="40"
                      ry="48"
                      fill="#1E40AF"
                      stroke="#1E3A8A"
                      strokeWidth="3"
                    />
                    {/* Rubber texture */}
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="35"
                      ry="43"
                      fill="none"
                      stroke="#1D4ED8"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                    />
                  </svg>

                  {/* Ping Pong Ball */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-2 right-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-orange-400 shadow-lg border border-orange-500">
                      <div className="w-2 h-2 rounded-full bg-orange-200 absolute top-1 left-1" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Title (visible when not hovered) */}
              <motion.div
                animate={{
                  opacity: hoveredHobby === "tabletennis" ? 0 : 1,
                  y: hoveredHobby === "tabletennis" ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-0 right-0 text-center"
              >
                <h3 className="text-xl font-bold text-foreground">Table Tennis</h3>
                <p className="text-sm text-muted-foreground">Hover to see achievements</p>
              </motion.div>

              {/* Achievement Details (visible on hover) */}
              <AnimatePresence>
                {hoveredHobby === "tabletennis" && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-background/95 via-background/80 to-transparent"
                  >
                    <div className="text-center space-y-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring" }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 border-2 border-yellow-500"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-yellow-500"
                          fill="currentColor"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      </motion.div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Champion</h3>
                        <p className="text-lg font-semibold text-foreground">
                          Inter College Championship
                        </p>
                      </div>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/30"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                          <span className="text-xs font-bold text-yellow-900">1st</span>
                        </div>
                        <span className="text-yellow-500 font-semibold">Gold Medal</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Reading Books Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
            onMouseEnter={() => setHoveredHobby("reading")}
            onMouseLeave={() => setHoveredHobby(null)}
          >
            <div className="relative h-80 bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              {/* Book Stack SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredHobby === "reading" ? 0.8 : 1,
                    opacity: hoveredHobby === "reading" ? 0.2 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <svg viewBox="0 0 120 100" className="w-48 h-40">
                    {/* Bottom book */}
                    <g transform="translate(10, 60)">
                      <rect
                        x="0"
                        y="0"
                        width="70"
                        height="12"
                        rx="1"
                        fill="#1E40AF"
                        stroke="#1E3A8A"
                        strokeWidth="1"
                      />
                      <rect x="3" y="2" width="2" height="8" fill="#3B82F6" rx="0.5" />
                      <text x="35" y="9" textAnchor="middle" fill="#93C5FD" fontSize="4" fontFamily="serif">
                        KNOWLEDGE
                      </text>
                    </g>

                    {/* Middle book */}
                    <g transform="translate(15, 45)">
                      <rect
                        x="0"
                        y="0"
                        width="65"
                        height="14"
                        rx="1"
                        fill="#7C3AED"
                        stroke="#6D28D9"
                        strokeWidth="1"
                      />
                      <rect x="3" y="2" width="2" height="10" fill="#A78BFA" rx="0.5" />
                      <text x="33" y="10" textAnchor="middle" fill="#DDD6FE" fontSize="4" fontFamily="serif">
                        WISDOM
                      </text>
                    </g>

                    {/* Top book (open) */}
                    <g transform="translate(20, 10)">
                      {/* Left page */}
                      <path
                        d="M40 0 Q20 5 0 8 L0 35 Q20 32 40 28 Z"
                        fill="#F5F5DC"
                        stroke="#D4D4AA"
                        strokeWidth="1"
                      />
                      {/* Right page */}
                      <path
                        d="M40 0 Q60 5 80 8 L80 35 Q60 32 40 28 Z"
                        fill="#FFFEF0"
                        stroke="#D4D4AA"
                        strokeWidth="1"
                      />
                      {/* Spine */}
                      <line x1="40" y1="0" x2="40" y2="28" stroke="#8B4513" strokeWidth="2" />
                      {/* Text lines left */}
                      <line x1="8" y1="12" x2="35" y2="10" stroke="#CCC" strokeWidth="0.5" />
                      <line x1="8" y1="16" x2="35" y2="14" stroke="#CCC" strokeWidth="0.5" />
                      <line x1="8" y1="20" x2="35" y2="18" stroke="#CCC" strokeWidth="0.5" />
                      <line x1="8" y1="24" x2="35" y2="22" stroke="#CCC" strokeWidth="0.5" />
                      {/* Text lines right */}
                      <line x1="45" y1="10" x2="72" y2="12" stroke="#CCC" strokeWidth="0.5" />
                      <line x1="45" y1="14" x2="72" y2="16" stroke="#CCC" strokeWidth="0.5" />
                      <line x1="45" y1="18" x2="72" y2="20" stroke="#CCC" strokeWidth="0.5" />
                      <line x1="45" y1="22" x2="72" y2="24" stroke="#CCC" strokeWidth="0.5" />
                    </g>

                    {/* Reading glasses */}
                    <g transform="translate(70, 55)">
                      <circle cx="8" cy="8" r="7" fill="none" stroke="#374151" strokeWidth="1.5" />
                      <circle cx="24" cy="8" r="7" fill="none" stroke="#374151" strokeWidth="1.5" />
                      <path d="M15 8 Q16 6 17 8" fill="none" stroke="#374151" strokeWidth="1.5" />
                      <line x1="1" y1="8" x2="-5" y2="6" stroke="#374151" strokeWidth="1.5" />
                      <line x1="31" y1="8" x2="37" y2="6" stroke="#374151" strokeWidth="1.5" />
                      {/* Lens reflection */}
                      <ellipse cx="6" cy="6" rx="2" ry="1" fill="rgba(255,255,255,0.3)" />
                      <ellipse cx="22" cy="6" rx="2" ry="1" fill="rgba(255,255,255,0.3)" />
                    </g>
                  </svg>

                  {/* Floating particles */}
                  <motion.div
                    animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 right-0 text-2xl"
                  >
                    ✨
                  </motion.div>
                </motion.div>
              </div>

              {/* Title (visible when not hovered) */}
              <motion.div
                animate={{
                  opacity: hoveredHobby === "reading" ? 0 : 1,
                  y: hoveredHobby === "reading" ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-0 right-0 text-center"
              >
                <h3 className="text-xl font-bold text-foreground">Reading Books</h3>
                <p className="text-sm text-muted-foreground">Hover for inspiration</p>
              </motion.div>

              {/* Quote (visible on hover) */}
              <AnimatePresence>
                {hoveredHobby === "reading" && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-t from-background/95 via-background/80 to-transparent"
                  >
                    <div className="text-center space-y-4 max-w-xs">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1, type: "spring" }}
                        className="text-5xl text-secondary/50"
                      >
                        &ldquo;
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg font-medium text-foreground italic leading-relaxed"
                      >
                        A reader lives a thousand lives before he dies. The man who never reads lives only one.
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm text-muted-foreground"
                      >
                        — George R.R. Martin
                      </motion.p>

                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="h-0.5 w-16 mx-auto bg-gradient-to-r from-transparent via-secondary to-transparent"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
