"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Terminal } from "lucide-react";

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
  { text: "\n  focus:", color: "text-primary" },
  { text: ' "Cybersecurity"', color: "text-amber-400" },
  { text: ",", color: "text-foreground" },
  { text: "\n  available:", color: "text-primary" },
  { text: " true", color: "text-primary" },
  { text: "\n}", color: "text-foreground" },
  { text: ";", color: "text-muted-foreground" },
];

export function Hero() {
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

          {/* Right Content - Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden glow-primary">
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

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
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
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
                    className="text-primary"
                  >
                    |
                  </motion.span>
                </motion.pre>
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
