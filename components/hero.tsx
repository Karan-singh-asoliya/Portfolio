"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Terminal, Sparkles } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Karan-singh-asoliya",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/karan-singh-asoliya",
    icon: Linkedin,
  },
  { name: "Email", href: "mailto:contact@karansingh.dev", icon: Mail },
];

const codeSnippet = [
  { text: "const", color: "text-secondary" },
  { text: " developer", color: "text-foreground" },
  { text: " = ", color: "text-muted-foreground" },
  { text: "{", color: "text-foreground" },
  { text: "\n  name:", color: "text-primary" },
  { text: ' "Karan Singh Asoliya"', color: "text-amber-400" },
  { text: ",", color: "text-foreground" },
  { text: "\n  role:", color: "text-primary" },
  { text: ' "Full Stack Developer"', color: "text-amber-400" },
  { text: ",", color: "text-foreground" },
];

export function Hero() {
  const [showImage, setShowImage] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="text-primary">Karan</span>
              <br />
              <span className="text-foreground">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Building secure, scalable applications with a passion for
              cybersecurity. Specializing in C#, SQL, and modern web
              technologies. MIT Reality Hack participant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all glow-primary"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Code Card with Image Transition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative bg-card border border-border rounded-xl overflow-hidden glow-primary">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 ml-4 text-muted-foreground text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>developer.ts</span>
                </div>
              </div>

              {/* Content Area with Animation */}
              <div className="relative min-h-[280px]">
                <AnimatePresence mode="wait">
                  {!showImage ? (
                    <motion.div
                      key="code"
                      initial={{ opacity: 1 }}
                      exit={{ 
                        opacity: 0, 
                        rotateY: 180,
                        scale: 0.8,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="p-6 font-mono text-sm leading-relaxed"
                    >
                      <motion.pre
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        {codeSnippet.map((part, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 + index * 0.05 }}
                            className={part.color}
                          >
                            {part.text}
                          </motion.span>
                        ))}
                      </motion.pre>
                      
                      {/* Meet Me Button */}
                      <motion.button
                        onClick={() => setShowImage(true)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all group"
                      >
                        <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                        <span>Meet the Developer</span>
                      </motion.button>
                      
                      <motion.div className="mt-4">
                        <span className="text-foreground">{"}"}</span>
                        <span className="text-muted-foreground">;</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5, repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
                          className="text-primary"
                        >
                          |
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="image"
                      initial={{ 
                        opacity: 0, 
                        rotateY: -180,
                        scale: 0.8,
                      }}
                      animate={{ 
                        opacity: 1, 
                        rotateY: 0,
                        scale: 1,
                      }}
                      exit={{ 
                        opacity: 0, 
                        rotateY: 180,
                        scale: 0.8,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="relative p-6 flex flex-col items-center justify-center"
                    >
                      {/* Wind Effect Particles */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ 
                              x: -50, 
                              y: Math.random() * 280,
                              opacity: 0 
                            }}
                            animate={{ 
                              x: 500, 
                              opacity: [0, 0.6, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.1,
                              repeat: 1,
                              ease: "easeOut"
                            }}
                            className="absolute w-8 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full"
                            style={{ 
                              filter: 'blur(1px)',
                            }}
                          />
                        ))}
                      </div>

                      {/* Profile Image with 360 Rotation */}
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                      >
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
                          <Image
                            src="/images/karan-profile.jpg"
                            alt="Karan Singh Asoliya"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Glow Ring */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 rounded-full border-2 border-primary/30"
                        />
                      </motion.div>

                      {/* Name Tag */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 text-center"
                      >
                        <h3 className="text-xl font-bold text-foreground">Karan Singh Asoliya</h3>
                        <p className="text-primary text-sm mt-1">Full Stack Developer</p>
                      </motion.div>

                      {/* Back Button */}
                      <motion.button
                        onClick={() => setShowImage(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm hover:bg-muted/80 hover:text-foreground transition-all"
                      >
                        Back to Code
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
