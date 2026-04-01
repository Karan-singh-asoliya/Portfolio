"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Code, Database, Award } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "3+", icon: Code },
  { label: "Projects Completed", value: "25+", icon: Database },
  { label: "Technologies", value: "15+", icon: Shield },
  { label: "Hackathons", value: "5+", icon: Award },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm"
            >
              {"<About />"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 text-balance"
            >
              Who I Am
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a passionate Full Stack Developer with a strong focus on
                cybersecurity and building secure, scalable applications. My
                journey in tech started with a curiosity about how systems work
                and evolved into a career dedicated to creating robust software
                solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in C#, SQL, and modern web technologies, I bring
                a security-first mindset to every project. I believe that great
                software isn&apos;t just about functionality—it&apos;s about building
                systems that users can trust.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a participant in MIT Reality Hack and various other
                hackathons, I thrive in collaborative environments where
                innovation meets practical problem-solving. I&apos;m always eager to
                learn new technologies and take on challenging projects.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Problem Solver", "Team Player", "Quick Learner", "Security Focused"].map(
                  (trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground"
                    >
                      {trait}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Right - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
