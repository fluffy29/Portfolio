"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Full-Stack",
    image: "/project1.jpg", // Placeholder
    description: "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js and Supabase.",
    tech: ["Next.js", "TypeScript", "Supabase", "Recharts"],
    demo: "#",
    github: "#"
  },
  {
    id: 2,
    title: "AI Chat Interface",
    category: "Frontend",
    image: "/project2.jpg", // Placeholder
    description: "A modern chat interface with streaming responses and markdown support. Uses OpenAI API.",
    tech: ["React", "Tailwind", "Framer Motion", "OpenAI"],
    demo: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Task Management API",
    category: "Backend",
    image: "/project3.jpg", // Placeholder
    description: "A robust REST API for task management with authentication, rate limiting, and caching.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    demo: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Portfolio v1",
    category: "Frontend",
    image: "/project4.jpg", // Placeholder
    description: "My first portfolio website built with HTML, CSS, and vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#"
  }
];

const categories = ["All", "Frontend", "Backend", "Full-Stack"];

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <SectionWrapper id="projects" className="bg-black/20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col group hover:border-cyan-500/50 transition-colors">
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gray-800">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-900">
                      <span className="text-sm">Project Preview</span>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                      <Button size="sm" variant="primary" onClick={() => window.open(project.demo, "_blank")}>
                        <ExternalLink className="w-4 h-4 mr-2" /> Demo
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => window.open(project.github, "_blank")}>
                        <Github className="w-4 h-4 mr-2" /> Code
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
