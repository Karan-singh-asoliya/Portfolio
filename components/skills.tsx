"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  Globe,
  Shield,
  Server,
  Code,
  Boxes,
  Cloud,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "C#", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: ".NET Core", level: 95 },
      { name: "Node.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    skills: [
      { name: "Authentication", level: 90 },
      { name: "Encryption", level: 85 },
      { name: "Penetration Testing", level: 75 },
      { name: "Security Audits", level: 80 },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: [
      { name: "Azure", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Git", level: 95 },
    ],
  },
];

const tools = [
  "Visual Studio",
  "VS Code",
  "Azure DevOps",
  "GitHub Actions",
  "Postman",
  "Figma",
  "Unity",
  "Wireshark",
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/30">
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
              {"<Skills />"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 text-balance"
            >
              Technical Arsenal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              Technologies and tools I use to bring ideas to life and secure
              digital experiences.
            </motion.p>
          </div>

          {/* Skills Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + catIndex * 0.1 }}
                className="p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-primary font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 0.6 + catIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.8,
                          }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="p-6 bg-card border border-border rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Boxes className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Tools & Software
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Terminal Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-8 p-6 bg-card border border-border rounded-2xl font-mono text-sm"
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Terminal className="w-4 h-4" />
              <span>~/skills</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-secondary">$</span> echo{" "}
              <span className="text-primary">
                &quot;Always learning, always building, always securing.&quot;
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
