"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Calendar, Briefcase } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "TechStart Solutions",
    date: "Jun 2024 - Present",
    description: [
      "Collaborated with a team of 5 developers to build a SaaS dashboard using Next.js and Supabase.",
      "Optimized API response times by 30% through efficient database indexing and caching strategies.",
      "Implemented responsive UI components following the company's design system."
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"]
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    date: "Jan 2023 - May 2024",
    description: [
      "Designed and developed custom websites for local businesses, improving their online presence.",
      "Managed client requirements, timelines, and deliverables independently.",
      "Integrated payment gateways and CMS solutions for e-commerce clients."
    ],
    tech: ["React", "Node.js", "WordPress", "Stripe"]
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="experience">
      <div className="space-y-16" ref={containerRef}>
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line Background */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          {/* Animated Timeline Line */}
          <motion.div 
            style={{ height }}
            className="absolute left-0 md:left-1/2 top-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 md:-translate-x-1/2 origin-top" 
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background rounded-full border-2 border-cyan-500 shadow-[0_0_10px_rgba(0,240,255,0.5)] -translate-x-[7px] md:-translate-x-1/2 mt-6 z-10">
                  <div className="w-full h-full bg-cyan-500 rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2">
                  <Card className="p-0 overflow-hidden relative group hover:border-cyan-500/30 transition-colors bg-card border-border">
                    {/* Glass Header */}
                    <div className="p-6 md:p-8 bg-muted/10 border-b border-border">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                        <span className="flex items-center text-xs font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                          <Calendar className="w-3 h-3 mr-2" />
                          {exp.date}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-muted text-sm mt-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="p-6 md:p-8 pt-4">
                      <ul className="space-y-3 text-muted">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm leading-relaxed flex items-start">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-6">
                        {exp.tech.map((t) => (
                          <span key={t} className="text-xs font-medium text-muted-foreground bg-muted/10 px-2 py-1 rounded border border-border hover:border-cyan-500/30 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
