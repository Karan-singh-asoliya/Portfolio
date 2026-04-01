"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Tech Company",
    period: "2023 - Present",
    description:
      "Building scalable web applications with a focus on security best practices. Implementing robust backend systems using C# and SQL Server.",
    technologies: ["C#", ".NET", "SQL Server", "React", "Azure"],
    icon: Briefcase,
  },
  {
    type: "hackathon",
    title: "MIT Reality Hack",
    company: "MIT Media Lab",
    period: "2024",
    description:
      "Participated in one of the world's largest XR hackathons. Developed an innovative AR application for enhanced user experiences.",
    technologies: ["Unity", "AR/VR", "C#", "Spatial Computing"],
    icon: Trophy,
  },
  {
    type: "work",
    title: "Software Developer Intern",
    company: "Software Solutions Inc.",
    period: "2022 - 2023",
    description:
      "Developed and maintained web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["JavaScript", "Node.js", "PostgreSQL", "Git"],
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University",
    period: "2020 - 2024",
    description:
      "Focused on software engineering and cybersecurity. Participated in various coding competitions and hackathons.",
    technologies: ["Algorithms", "Data Structures", "Cybersecurity", "Databases"],
    icon: GraduationCap,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-card/30">
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
              {"<Experience />"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 text-balance"
            >
              My Journey
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
