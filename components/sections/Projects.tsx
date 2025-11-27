"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
}

export function Projects() {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [filter, setFilter] = React.useState("All");

  React.useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="projects" className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4"
          >
            <Code2 className="w-4 h-4" />
            <span>Featured Work</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">Projects</span>
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-foreground text-background"
                  : "bg-card text-muted hover:bg-card/80 hover:text-foreground"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <Card className="h-full flex flex-col group hover:border-purple-500/30 transition-colors overflow-hidden bg-card border-border">
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    {/* Placeholder for Image - In real app use next/image */}
                    <div className="w-full h-full bg-muted/20 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                        <Code2 className="w-12 h-12 text-muted" />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm mt-2 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs text-muted bg-card px-2 py-1 rounded border border-border">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button variant="outline" size="sm" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
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
