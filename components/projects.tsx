"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Lock, Globe, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "SecureAuth Platform",
    description:
      "Enterprise-grade authentication system with multi-factor authentication, role-based access control, and real-time threat detection.",
    technologies: ["C#", ".NET Core", "SQL Server", "Azure AD", "React"],
    github: "https://github.com/Karan-singh-asoliya",
    live: "#",
    icon: Lock,
    featured: true,
    size: "large",
  },
  {
    title: "Reality Hack Project",
    description:
      "Award-winning AR application developed at MIT Reality Hack for immersive spatial computing experiences.",
    technologies: ["Unity", "C#", "ARKit", "Spatial Computing"],
    github: "https://github.com/Karan-singh-asoliya",
    live: "#",
    icon: Smartphone,
    featured: true,
    size: "medium",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive visualizations and automated reporting capabilities.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/Karan-singh-asoliya",
    live: "#",
    icon: Globe,
    featured: false,
    size: "medium",
  },
  {
    title: "Inventory Management System",
    description:
      "Full-stack inventory tracking solution with barcode scanning and automated reorder alerts.",
    technologies: ["C#", "WPF", "SQL Server", "REST API"],
    github: "https://github.com/Karan-singh-asoliya",
    live: "#",
    icon: Globe,
    featured: false,
    size: "small",
  },
  {
    title: "Network Security Monitor",
    description:
      "Real-time network traffic analysis tool with threat detection and alerting system.",
    technologies: ["Python", "Wireshark API", "Machine Learning"],
    github: "https://github.com/Karan-singh-asoliya",
    live: "#",
    icon: Lock,
    featured: false,
    size: "small",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
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
              {"<Projects />"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 text-balance"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              A collection of projects showcasing my expertise in full-stack
              development and cybersecurity.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={cn(
                  "group relative p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300",
                  project.size === "large" && "md:col-span-2 lg:col-span-2",
                  project.size === "medium" && "md:col-span-1"
                )}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Icon */}
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Karan-singh-asoliya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card hover:border-primary/50 transition-all"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
