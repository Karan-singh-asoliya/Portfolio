"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
              {/* Realistic Table Tennis Image */}
              <motion.div
                animate={{
                  scale: hoveredHobby === "tabletennis" ? 1.1 : 1,
                  opacity: hoveredHobby === "tabletennis" ? 0.3 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/table-tennis-rackets.jpg"
                  alt="Table Tennis Rackets"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </motion.div>

              {/* Title (visible when not hovered) */}
              <motion.div
                animate={{
                  opacity: hoveredHobby === "tabletennis" ? 0 : 1,
                  y: hoveredHobby === "tabletennis" ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-0 right-0 text-center z-10"
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
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-background/95 via-background/90 to-background/70 z-20"
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
              {/* Realistic Books Image */}
              <motion.div
                animate={{
                  scale: hoveredHobby === "reading" ? 1.1 : 1,
                  opacity: hoveredHobby === "reading" ? 0.3 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/reading-books.jpg"
                  alt="Reading Books"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </motion.div>

              {/* Title (visible when not hovered) */}
              <motion.div
                animate={{
                  opacity: hoveredHobby === "reading" ? 0 : 1,
                  y: hoveredHobby === "reading" ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-0 right-0 text-center z-10"
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
                    className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-t from-background/95 via-background/90 to-background/70 z-20"
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
